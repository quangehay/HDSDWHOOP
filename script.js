let currentScreen = 'home';
let currentLang = 'en';
const containerLeft = document.getElementById('container-left');
const containerRight = document.getElementById('container-right');

// --- 1. HELPERS ---
function getText(obj, lang) {
    if (!obj) return '';
    return lang === 'en' ? (obj.en || obj.text) : (obj.vi || obj.en || obj.text);
}

function getAttr(obj) {
    if (!obj || !obj.to) return '';
    return `onclick="event.stopPropagation(); navigate('${obj.to}')" style="cursor:pointer"`;
}

function getInfo(obj, lang) {
    if (!obj) return '';
    const tooltipText = lang === 'en' ? obj.info : obj.diengiai;
    if (!tooltipText) return '';
    return `<span class="info-btn" onclick="event.stopPropagation()" data-tip="${tooltipText}">?</span>`;
}

// --- 2. NAVIGATION ---
function navigate(pageId) {
    if (WHOOP_DATA[pageId]) {
        currentScreen = pageId;
        render();
        containerLeft.scrollTop = 0;
        containerRight.scrollTop = 0;
    } else {
        console.warn("Page not found:", pageId);
    }
}

[containerLeft, containerRight].forEach((side, i, sides) => {
    side.onscroll = () => { sides[1 - i].scrollTop = side.scrollTop; };
});

function switchLang() {
    const pos = currentLang === 'en' ? containerLeft.scrollTop : containerRight.scrollTop;
    currentLang = currentLang === 'en' ? 'vi' : 'en';
    render();
    const active = currentLang === 'en' ? containerLeft : containerRight;
    active.scrollTop = pos;
}

function updateLangButton() {
    const btn = document.getElementById('lang-btn');
    btn.innerHTML = currentLang === 'en' ? '🇻🇳' : '🇺🇸';
}

function syncAction(action, id) {
    document.querySelectorAll(`[data-sync-id="${id}"]`).forEach(el => {
        if (action === 'click-menu') el.classList.toggle('show');
    });
}

// --- 3. RENDER ENGINE ---
function buildPage(lang) {
    const config = WHOOP_DATA[currentScreen];
    if (!config) return `<div style="padding:20px;text-align:center">Page not found: ${currentScreen}</div>`;
    
    let contentHtml = config.layout.map((comp) => {
        const wrapperAttr = comp.to ? `onclick="navigate('${comp.to}')" style="cursor:pointer"` : '';

        switch(comp.type) {
            // --- HEADER & NAV (ĐÃ CẬP NHẬT) ---
            case "HEADER_NAV":
                let leftContent = '';
                if (comp.back_to) {
                    leftContent = `<div class="back-btn" onclick="navigate('${comp.back_to}')">❮</div>`;
                } else if (comp.profile) {
                    leftContent = `
                        <div class="profile-circle" ${getAttr(comp.profile)}>${comp.profile.text}</div>
                        ${comp.streak ? `<div class="streak-badge" ${getAttr(comp.streak)}>🔥 ${comp.streak.val}</div>` : ''}
                    `;
                }
                return `
                <div class="header-nav">
                    <div class="nav-left">${leftContent}</div>
                    <div class="nav-center" ${getAttr(comp.today)}>
                        ${!comp.back_to ? '<span class="arrow">❮</span>' : ''}
                        <div class="date-pill">${getText(comp.today, lang)}</div>
                        ${!comp.back_to ? '<span class="arrow">❯</span>' : ''}
                    </div>
                    <div class="nav-right">
                        ${comp.right_action ? `<div class="info-icon-header" ${getAttr(comp.right_action)}>${comp.right_action.icon}</div>` : ''}
                        ${comp.battery ? `<span class="battery-text">${comp.battery.val}</span><div class="device-icon">🔋</div>` : ''}
                    </div>
                </div>`;
                // --- WEEKLY TREND CHART (Biểu đồ cột 7 ngày) ---
            case "WEEKLY_TREND_CHART":
                const maxVal = 21; // Thang đo Strain max là 21
                return `
                <div class="trend-box">
                    <div class="trend-header">
                        <span>${getText(comp.title, lang)}</span>
                        <span>❯</span>
                    </div>
                    <div class="trend-chart">
                        ${comp.data.map(d => {
                            const h = (parseFloat(d.val) / maxVal) * 100;
                            return `
                            <div class="trend-col ${d.isToday ? 'active' : ''}">
                                <div class="trend-val">${d.val}</div>
                                <div class="trend-bar ${d.val == 0 ? 'empty' : ''}" style="height:${d.val == 0 ? 4 : h}%"></div>
                                <div class="trend-day">${getText(d.day, lang)}</div>
                            </div>`;
                        }).join('')}
                    </div>
                </div>`;
            // --- [CẬP NHẬT] HEALTH PAGE COMPONENTS (Hỗ trợ full tooltip) ---
            
            case "WHOOP_AGE_HERO":
                return `
                <div class="health-hero-container">
                    <div class="age-circle">
                        <div class="age-content">
                            <div class="age-label">
                                WHOOP AGE ${getInfo(comp.label_info, lang)}
                            </div>
                            <div class="age-val">${comp.val}</div>
                            <div class="age-sub">
    ${getText(comp.sub, lang)} ${getInfo(comp.sub_info, lang)}
</div>
                        </div>
                    </div>
                </div>`;

            case "PACE_OF_AGING":
                const pct = ((comp.val - (-1.0)) / (3.0 - (-1.0))) * 100;
                return `
                <div class="poa-box">
                    <div class="poa-header">
                        <div class="poa-title">
                            ${getText(comp.title, lang)} ${getInfo(comp.title, lang)}
                        </div>
                        ${comp.badge ? `
                            <div class="poa-badge">
                                ▲ ${getText(comp.badge, lang)} ${getInfo(comp.badge, lang)}
                            </div>` : ''}
                    </div>
                    <div style="display:flex;justify-content:space-between;font-size:10px;color:#888;font-weight:700">
                        <span>Slow</span>
                        <span style="font-size:18px;color:#fff;font-weight:700">
                            ${comp.val}x ${getInfo(comp.val_info, lang)}
                        </span>
                        <span>Fast 💨</span>
                    </div>
                    <div class="poa-scale">
                        <div class="poa-ticks">
                            ${Array.from({length: 41}).map((_,i) => `<div class="poa-tick ${i%10===0?'big':''}"></div>`).join('')}
                        </div>
                        <div class="poa-marker" style="left: ${pct}%"><div class="poa-marker-line"></div></div>
                    </div>
                    <div class="poa-btn" ${getAttr(comp.btn)}>
    ${getText(comp.btn, lang)} ${getInfo(comp.btn, lang)}
</div>
                </div>`;

            case "ADVANCED_LABS":
                return `
                <div class="labs-box">
                    <div class="poa-header">
                        <div class="poa-title">
                            ${getText(comp.title, lang)} ${getInfo(comp.title, lang)} ❯
                        </div>
                    </div>
                    <div class="labs-content">
                        <div class="labs-list">
                            ${comp.rows.map(r => `
                                <div class="lab-row">
                                    <span class="lab-tag" style="background:${r.bg};color:${r.color}">
                                        ${getText(r.label, lang)}
                                    </span>
                                    <span style="display:flex;align-items:center">
                                        <span class="lab-val">${r.val}</span>
                                        ${getInfo(r, lang)}
                                    </span>
                                </div>
                            `).join('')}
                        </div>
                        <div class="lab-chart-wrap">
                            <div class="lab-donut"></div>
                            <div class="lab-chart-text">
                                <span class="lct-big">${comp.total}</span>
                                <span class="lct-small">BIOMARKERS</span>
                            </div>
                        </div>
                    </div>
                    <div style="font-size:9px;color:#666;margin-top:10px">${comp.footer}</div>
                </div>`;

            case "HEALTH_MONITOR_WIDGET":
                return `
                <div class="hm-box" ${getAttr(comp)}>
                    <div class="hm-header">
                        <div>${getText(comp.title, lang)} ${getInfo(comp.title, lang)}</div>
                        <span>❯</span>
                    </div>
                    <div class="hm-grid">
                        ${comp.items.map(i => `
                            <div class="hm-item">
                                <div class="hm-icon">${i.icon}</div>
                                <div class="hm-label">
                                    ${getText(i.name, lang)} 
                                </div>
                                <div class="hm-check">✓</div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="hm-footer">
                        <div style="width:14px;height:14px;background:#24ff00;border-radius:2px;display:flex;align-items:center;justify-content:center;color:#000">✓</div>
                        ${getText(comp.footer, lang)} ${getInfo(comp.footer, lang)}
                    </div>
                </div>`;
                // --- [MỚI] HEALTHSPAN DETAIL COMPONENTS ---

            case "HEALTHSPAN_HERO":
                // Tính vị trí marker cho thanh Pace of Aging nhỏ (1.1x)
                const poaPct = ((comp.poa_val - (-1.0)) / (3.0 - (-1.0))) * 100;
                return `
                <div class="hs-hero-container">
                    <div class="organic-blob">
                        <div class="hs-label">WHOOP AGE ${getInfo(comp.info, lang)}</div>
                        <div class="hs-val">${comp.val}</div>
                        <div class="hs-sub">${comp.sub}</div>
                    </div>
                    <div class="mini-poa">
                        <div style="display:flex;justify-content:space-between;font-size:10px;font-weight:700;color:#888;margin-bottom:5px">
                            <span>Pace of Aging</span>
                            <span style="color:#fff">${comp.poa_val}x</span>
                        </div>
                        <div class="mini-poa-scale">
                            ${Array.from({length: 41}).map(() => `<div class="mini-tick"></div>`).join('')}
                            <div class="mini-marker" style="left: ${poaPct}%"></div>
                        </div>
                        <div style="display:flex;justify-content:space-between;font-size:9px;color:#555">
                            <span>Slow</span><span>Fast</span>
                        </div>
                    </div>
                </div>`;

            case "HS_INSIGHT_CARD":
                return `
                <div class="hs-card">
                    <div class="hs-card-title">${getText(comp.title, lang)}</div>
                    <div class="hs-card-text">${getText(comp.text, lang)}</div>
                    <div class="hs-link">${getText(comp.link, lang)} <span>➔</span></div>
                </div>`;

            case "FACTOR_LIST":
                return `
                <div class="factor-group">
                    <div class="factor-header">
                        <span>${getText(comp.category, lang)}</span>
                        <div style="font-size:9px;color:#888">▼ 6 Month avg. ▲ 30 Day avg.</div>
                    </div>
                    ${comp.items.map(item => `
                        <div class="factor-item">
                            <div class="fi-top">
                                <div class="fi-title">${getText(item.title, lang)}</div>
                                <div class="fi-impact ${item.impact_val.includes('+') ? 'pos' : 'neg'}">
                                    ${item.impact_val} <span style="font-size:9px;font-weight:500">years</span>
                                </div>
                            </div>
                            <div class="fi-bar-container">
                                <div class="fi-bar-bg"></div>
                                <div class="fi-marker" style="left: ${item.pct}%"></div>
                                <div style="position:absolute; top:20px; left:${item.pct}%; transform:translateX(-50%); font-size:10px; font-weight:800; color:#fff">
                                    ${item.val}
                                </div>
                            </div>
                            <div class="fi-labels">
                                <span>${item.range_start}</span>
                                <div style="text-align:center">
                                    <span style="display:block;color:#aaa;font-size:8px">30 Day avg.</span>
                                </div>
                                <span>${item.range_end}</span>
                            </div>
                            ${item.desc ? `<div style="margin-top:10px;font-size:10px;color:#888;line-height:1.4">${getText(item.desc, lang)}</div>` : ''}
                        </div>
                    `).join('')}
                </div>`;

            case "TREND_CHART_SIMPLE":
                return `
                <div class="trend-graph-box">
                    <div class="tg-header">
                        <div>${getText(comp.title, lang)}</div>
                        <span>❯</span>
                    </div>
                    <div class="tg-lines">
                        ${comp.hasRefLine ? `<div class="tg-line-ref"></div>` : ''}
                        <div class="tg-line-draw" style="bottom:${comp.lineHeight || '40px'}; transform: rotate(${comp.lineRotate || '-1deg'})"></div>
                        ${comp.currentVal ? `
                            <div style="position:absolute; right:0; top:${comp.valTop || '30px'}; text-align:right">
                                <span style="font-size:14px;font-weight:700;color:#ffaa00">${comp.currentVal}</span>
                                <div style="width:6px;height:6px;border-radius:50%;background:#ffaa00;display:inline-block;border:2px solid #15171a"></div>
                            </div>
                        ` : ''}
                    </div>
                    <div class="tg-dates">
                        <span>Nov 16</span><span>Nov 23</span><span>Nov 30</span><span>Dec 7</span><span>Dec 14</span>
                    </div>
                </div>`;
            // --- HEALTH MONITOR DETAIL COMPONENTS ---

            // 1. Biểu đồ nhịp tim trực tiếp (Mô phỏng)
            case "HR_LIVE_CHART":
                return `
                <div class="hm-chart-box">
                    <div class="hm-chart-header">
                        ${comp.icon} ${getText(comp.title, lang)} ${getInfo(comp.title_info, lang)}
                    </div>
                    <div class="hm-chart-val-row">
                        <div class="hm-chart-val">${comp.val}</div>
                        <div class="hm-chart-unit">BPM</div>
                    </div>
                    <div class="hm-chart-sub">${getText(comp.sub, lang)}</div>
                    <div class="hm-visual-graph">
                        <div class="hm-graph-line"></div>
                        <div class="hm-graph-dot"></div>
                    </div>
                </div>`;

            // 2. Lưới 5 thẻ chỉ số (Resp, SPO2, RHR, HRV, Temp)
            case "HEALTH_GRID":
                return `
                <div class="hm-grid-layout">
                    ${comp.items.map(item => `
                        <div class="hm-detail-card" ${getAttr(item)}>
                            <div class="hm-card-head">
                                <span class="hm-card-icon">${item.icon}</span> 
                                ${getText(item.title, lang)} 
                                ${getInfo(item, lang)}
                            </div>
                            <div class="hm-card-val">
                                ${item.val} <span class="hm-card-unit">${item.unit}</span>
                            </div>
                            <div class="hm-card-pill" style="background:${item.status_bg}; color:${item.status_color}">
                                ✓ ${getText(item.status_text, lang)}
                            </div>
                        </div>
                    `).join('')}
                </div>`;

            // 3. Nút chia sẻ báo cáo ở dưới cùng
            case "REPORT_ACTION":
                return `
                <div class="report-btn-container">
                    <div class="report-btn">
                        <span style="font-size:16px">📤</span> 
                        ${getText(comp.btn_text, lang)} ${getInfo(comp.btn_text, lang)}
                    </div>
                    <div class="report-desc">${getText(comp.desc, lang)}</div>
                </div>`;

            case "SIMPLE_CARD":
                return `
                <div class="simple-card" ${getAttr(comp)}>
                    <div class="sc-header">
                        <div class="sc-title">
                            ${getText(comp.title, lang)} ${getInfo(comp.title, lang)} ${comp.arrow ? '❯' : ''}
                        </div>
                        ${comp.badge ? `<div class="sc-badge">${comp.badge}</div>` : ''}
                    </div>
                    ${comp.layout === 'row' ? `
                        <div class="heart-row">
                            <div>
                                <div style="font-size:11px;color:#aaa;margin-bottom:4px;display:flex;align-items:center">
                                    ${getText(comp.sub_label, lang)} ${getInfo(comp.sub_label, lang)}
                                </div>
                                <div style="font-size:14px;font-weight:700;color:#fff">${getText(comp.val, lang)}</div>
                                <div style="font-size:10px;color:#24ff00;margin-top:4px">✓ ${comp.date}</div>
                            </div>
                            <div class="heart-icon-big">♥</div>
                        </div>
                    ` : `
                        ${comp.sub_label ? `
                            <div style="font-size:9px;color:#888;font-weight:700;margin-bottom:5px;text-transform:uppercase;display:flex;align-items:center">
                                ${getText(comp.sub_label, lang)} ${getInfo(comp.sub_label, lang)}
                            </div>
                        ` : ''}
                        
                        <div class="sc-main">${comp.val} ${comp.unit || ''}</div>
                        ${comp.sub ? `<div class="sc-sub">${comp.sub}</div>` : ''}
                        
                        ${comp.visual_bars ? `
                            <div class="sc-visual-bars">
                                ${Array.from({length: 6}).map((_,i) => `<div class="sc-bar ${i<3?'active':''}"></div>`).join('')}
                            </div>
                        ` : ''}
                        ${comp.visual_graph ? `
                             <div style="height:40px;margin-top:10px;border-bottom:1px solid #333;display:flex;align-items:flex-end;gap:2px">
                                ${Array.from({length: 40}).map(() => `<div style="width:100%;background:#0091ff;opacity:0.6;height:${Math.random()*100}%"></div>`).join('')}
                             </div>
                        ` : ''}
                    `}
                </div>`;

            // --- STRAIN ACTIVITY ROW (Dòng hoạt động trong ngày) ---
            case "STRAIN_ACTIVITY_ROW":
                return `
                <div style="margin: 0 15px 5px; font-size: 12px; font-weight: 700; color:#fff;">${getText(comp.title, lang)}</div>
                <div class="strain-act-row" ${getAttr(comp)}>
                    <div class="sa-badge">
                        <span>🏃</span> ${comp.val}
                    </div>
                    <div class="sa-info">${getText(comp.name, lang)}</div>
                    <div class="sa-time">
                        ${comp.time_start}<br>${comp.time_end}
                    </div>
                </div>`;
            case "METRIC_LIST_DETAILED":
                return `
                <div class="rec-metric-container">
                    ${comp.rows.map(r => `
                        <div class="rec-row" ${getAttr(r)}>
                            <div class="rec-left">
                                <span class="rec-icon">${r.icon}</span> 
                                ${getText(r.title, lang)} 
                                ${getInfo(r, lang)}  </div>
                            <div class="rec-right">
                                <div class="rec-main-val">
                                    ${r.val} 
                                    ${r.arrow ? `<span class="rec-arrow" style="color:${r.color}">${r.arrow}</span>` : ''}
                                </div>
                                ${r.sub ? `<div class="rec-sub-val">${r.sub}</div>` : ''}
                            </div>
                        </div>
                    `).join('')}
                    ${comp.footer_status ? `
                        <div style="padding: 12px 0; border-top: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 700;">
                            <span style="color:${comp.footer_status.color}">${comp.footer_status.arrow}</span>
                            ${getText(comp.footer_status.text, lang)}
                        </div>
                    ` : ''}
                </div>`;

            
            // --- EXPLAIN BLOCK (CẬP NHẬT THÊM VISUAL RECOVERY) ---
            case "EXPLAIN_BLOCK":
                let visualHTML = '';
                
                // Visual cũ của Sleep
                if (comp.visual === 'sleep_need') {
                    visualHTML = `<div class="visual-bar-container"><div class="visual-icons-row"><span>☀</span><span>🏃</span><span>🛏</span></div><div class="visual-bar-img pattern-green"></div></div>`;
                } else if (comp.visual === 'sleep_stages') {
                    visualHTML = `<div class="visual-bar-container"><div style="font-size:20px;margin-bottom:5px">🌙</div><div class="visual-bar-img pattern-stages"></div></div>`;
                } 
                
                // [MỚI] Visual của Recovery
                else if (comp.visual === 'recovery_gauge') {
                    visualHTML = `
                    <div style="text-align:center; margin-bottom: 20px;">
                        <div class="gauge-container">
                            <div class="gauge-arc"></div>
                        </div>
                        <div style="display:flex; justify-content:space-between; width:200px; margin:0 auto; font-size:10px; color:#aaa; font-weight:700;">
                            <span style="color:#ff3b30">Low</span>
                            <span style="color:#ffcc00">Adequate</span>
                            <span style="color:#24ff00">Sufficient</span>
                        </div>
                    </div>`;
                } 
                else if (comp.visual === 'recovery_calc') {
                    visualHTML = `<div class="calc-row"><span>⚡</span> <span>❤️</span> <span>🫁</span> <span>☾</span></div>`;
                }
                else if (comp.visual === 'recovery_improve') {
                    // Grid 9 icon (Mô phỏng ảnh)
                    visualHTML = `
                    <div class="improve-grid">
                        <div class="imp-item"><div class="imp-icon">📖</div><div class="imp-badge" style="background:#24ff00">▲</div></div>
                        <div class="imp-item"><div class="imp-icon">🍷</div><div class="imp-badge" style="background:#ffaa00">▼</div></div>
                        <div class="imp-item"><div class="imp-icon">👓</div><div class="imp-badge" style="background:#24ff00">▲</div></div>
                        <div class="imp-item"><div class="imp-icon">🍔</div><div class="imp-badge" style="background:#ffaa00">▼</div></div>
                        <div class="imp-item"><div class="imp-icon">🐈</div><div class="imp-badge" style="background:#24ff00">▲</div></div>
                        <div class="imp-item"><div class="imp-icon">✈️</div><div class="imp-badge" style="background:#ffaa00">▼</div></div>
                        <div class="imp-item"><div class="imp-icon">🥛</div><div class="imp-badge" style="background:#24ff00">▲</div></div>
                        <div class="imp-item"><div class="imp-icon">📱</div><div class="imp-badge" style="background:#ffaa00">▼</div></div>
                        <div class="imp-item"><div class="imp-icon">👂</div><div class="imp-badge" style="background:#24ff00">▲</div></div>
                    </div>`;
                }
                else if (comp.visual === 'strain_scale') {
                    visualHTML = `
                    <div class="scale-container">
                        <div class="scale-icons"><span>🧘</span><span>🚶</span><span>🏃</span><span>⚡</span></div>
                        <div class="scale-bar"></div>
                        <div class="scale-markers"><span>0</span><span>10</span><span>14</span><span>18</span><span>21</span></div>
                    </div>`;
                }
                else if (comp.visual === 'strain_load') {
                    visualHTML = `
                    <div class="load-visual">
                        <div class="load-icons-row"><span>🏃</span><span>🏋️</span></div>
                        <div class="load-bar-bg"><div class="load-fill" style="left: 30%; width: 40%"></div></div>
                        <div class="load-labels"><span>Cardio</span><span>Muscular</span></div>
                    </div>`;
                }
                else if (comp.visual === 'strain_target') {
                    visualHTML = `
                    <div class="target-graph">
                        <div class="target-zone"></div>
                        <div class="target-bars">
                            <div class="t-bar" style="height: 40%"></div>
                            <div class="t-bar" style="height: 60%"></div>
                            <div class="t-bar" style="height: 80%"></div>
                        </div>
                    </div>`;
                }
                // [MỚI] Video Thumbnail (Woman)
                else if (comp.visual === 'wa_video') {
                    visualHTML = `
                    <div class="video-thumb" style="background-image: url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop')">
                        <div class="video-blob-overlay"></div>
                        <div class="video-play-btn">▶</div>
                    </div>`;
                }
                
                // [MỚI] Whoop Age Trend Graph
                else if (comp.visual === 'wa_trend_graph') {
                    visualHTML = `
                    <div class="wa-trend-box">
                        <div class="wa-legend">
                            <div class="wa-legend-item"><div class="wa-dot" style="background:linear-gradient(135deg, #d69e2e, #24ff00)"></div> Your Whoop Age</div>
                            <div class="wa-legend-item"><div class="wa-dot" style="background:#fff"></div> Chronological Age</div>
                        </div>
                        <div class="wa-graph-area">
                            <div class="line-chrono"></div>
                            <div class="line-whoop"></div>
                            <div style="position:absolute; right:0; top:20px; font-size:10px; color:#fff; font-weight:700">34.6</div>
                            <div style="position:absolute; right:0; top:50px; font-size:10px; color:#24ff00; font-weight:700">29.9</div>
                        </div>
                    </div>`;
                }

                // [MỚI] Pace of Aging Meter (Explain version)
                else if (comp.visual === 'poa_meter_explain') {
                    visualHTML = `
                    <div class="poa-box" style="margin:20px 0">
                        <div style="display:flex;justify-content:space-between;font-size:10px;color:#888;font-weight:700">
                            <span>Slow</span><span style="font-size:18px;color:#fff;font-weight:700">0.8x</span><span>Fast</span>
                        </div>
                        <div class="poa-scale">
                            <div class="poa-ticks">${Array.from({length: 41}).map((_,i) => `<div class="poa-tick ${i%10===0?'big':''}"></div>`).join('')}</div>
                            <div class="poa-marker" style="left: 45%"><div class="poa-marker-line"></div></div>
                        </div>
                    </div>`;
                }

                // [MỚI] Impact Chart (Sleep Consistency Example)
                else if (comp.visual === 'impact_chart') {
                    visualHTML = `
                    <div class="impact-visual-box">
                        <div class="iv-header"><span>SLEEP CONSISTENCY</span><span>▼ 6 Month avg.</span></div>
                        <div class="iv-bar-wrap">
                            <div class="iv-bar"></div>
                            <div class="iv-marker">
                                <div class="iv-triangle"></div>
                                <div class="iv-val">+1.3</div>
                                <div style="font-size:8px;color:#aaa">years</div>
                            </div>
                        </div>
                    </div>`;
                }

                // [MỚI] Calibration Blob
                else if (comp.visual === 'calibration_blob') {
                    visualHTML = `
                    <div class="calib-blob-container">
                        <div class="calib-blob">
                            <div class="calib-val">31.0</div>
                            <div class="calib-sub">WHOOP AGE</div>
                        </div>
                    </div>`;
                }

                return `
                <div class="explain-box">
                    ${comp.title ? `<div class="explain-title">${getText(comp.title, lang)}</div>` : ''}
                    ${visualHTML}
                    ${comp.text ? `<div class="explain-text">${getText(comp.text, lang)}</div>` : ''}
                    ${comp.items ? comp.items.map(item => `
                        <div class="def-item">
                            <div class="def-title" style="color:${item.color || '#fff'}">${getText(item.title, lang)}</div>
                            <div class="def-desc">${getText(item.desc, lang)}</div>
                        </div>
                    `).join('') : ''}
                </div>`;
                return `
                <div class="explain-box">
                    ${comp.title ? `<div class="explain-title">${getText(comp.title, lang)}</div>` : ''}
                    ${visualHTML}
                    ${comp.text ? `<div class="explain-text">${getText(comp.text, lang)}</div>` : ''}
                    ${comp.items ? comp.items.map(item => `
                        <div class="def-item">
                            <div class="def-title" style="color:${item.color || '#fff'}">${getText(item.title, lang)}</div>
                            <div class="def-desc">${getText(item.desc, lang)}</div>
                        </div>
                    `).join('') : ''}
                </div>`;
                
            
            // --- HOME PAGE COMPONENTS ---
            case "RINGS":
                return `<div class="rings-row">
                    ${comp.items.map(item => `
                        <div class="ring-box" ${getAttr(item)}>
                            <div class="circle ${item.key}">${item.val}</div>
                            <span>${getText(item, lang)} ❯ ${getInfo(item, lang)}</span>
                        </div>
                    `).join('')}
                </div>`;

            case "DUAL_MONITOR":
                return `<div class="dual-row">
                    <div class="card-half" ${getAttr(comp.health)}>
                        <div class="card-header">${getText(comp.health.title, lang)} ❯ ${getInfo(comp.health, lang)}</div>
                        <div class="status-val" style="color:#24ff00">✓ ${getText(comp.health.status, lang)}</div>
                    </div>
                    <div class="card-half" ${getAttr(comp.stress)}>
                        <div class="card-header">${getText(comp.stress.title, lang)} ❯ ${getInfo(comp.stress, lang)}</div>
                        <div class="status-val" style="color:#00e0ff">
                            <span style="background:#004455;padding:2px 6px;border-radius:4px;margin-right:5px">${comp.stress.val}</span> 
                            ${getText(comp.stress.status, lang)}
                        </div>
                    </div>
                </div>`;

            case "TITLE_ROW":
                return `
                <div class="title-row">
                    <div class="section-label">${getText(comp.label, lang)} ${getInfo(comp.label, lang)}</div>
                    <div class="action-menu" data-sync-id="menu-pop">
                        ${WHOOP_CONTENT.menu.map(m => `
                            <div class="action-item" ${getAttr(m)}>
                                <span style="font-size:16px">${m.icon}</span> ${getText(m, lang)}
                            </div>`).join('')}
                    </div>
                    <div class="action-btn" onclick="syncAction('click-menu', 'menu-pop')">+</div>
                </div>`;

            case "DAILY_OUTLOOK":
                return `<div class="outlook-bar" ${getAttr(comp) || wrapperAttr}>
                    <span>☀ ${getText(comp.label, lang)}</span> <span>❯</span> ${getInfo(comp, lang)}
                </div>`;

            case "ACTIVITIES_PANEL":
                return `
                <div class="activities-panel" ${getAttr(comp) || wrapperAttr}>
                    <div class="panel-header"><span>${getText(comp.title, lang)}</span> <span style="font-size:14px">⤢</span></div>
                    ${comp.list.map(act => `
                        <div class="activity-row" ${getAttr(act)}>
                            <div class="activity-badge" style="background:${act.color}">${act.badge}</div>
                            <div class="activity-detail"><div class="act-name">${getText(act.name, lang)}</div></div>
                            <div class="activity-time">${act.time}</div>
                        </div>
                    `).join('')}
                    <div class="panel-footer">
                        ${comp.buttons.map(btn => `<div class="footer-btn" ${getAttr(btn)}>${getText(btn, lang)}</div>`).join('')}
                    </div>
                </div>`;

            case "SECTION_LABEL":
                return `<div class="section-label" style="margin-top:10px">${getText(comp.label, lang)} ${getInfo(comp.label, lang)}</div>`;

            case "METRIC_LIST":
                return comp.items.map(item => `
                    <div class="metric-item" ${getAttr(item)}>
                        <span class="label">${getText(item, lang)} ${getInfo(item, lang)}</span>
                        <span class="val">${item.val}</span>
                    </div>
                `).join('');

            // --- SLEEP PAGE (V2) COMPONENTS ---
            case "HERO_RING_V2":
                return `
                <div class="hero-v2-box">
                    <div style="width: 200px; height: 200px; margin: 0 auto; position: relative;">
                        <svg width="200" height="200" viewBox="0 0 100 100" style="transform: rotate(135deg);">
                            <circle cx="50" cy="50" r="42" fill="none" stroke="#2a2e31" stroke-width="8" stroke-dasharray="75, 100" />
                            <circle cx="50" cy="50" r="42" fill="none" stroke="${comp.color}" stroke-width="8" stroke-dasharray="${(comp.val * 0.75)}, 100" stroke-linecap="round" />
                        </svg>
                        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: #fff;">
                             <div style="font-size: 10px; opacity: 0.7; letter-spacing: 2px;">WHOOP</div>
                             <div style="line-height: 1;"><span class="hero-v2-val">${comp.val}</span><span class="hero-v2-unit">%</span></div>
                             <div class="hero-v2-label">${getText(comp.label, lang)} ${getInfo(comp, lang)}</div>
                        </div>
                    </div>
                    <div class="hero-dots"><div class="hero-dot"></div><div class="hero-dot active"></div><div class="hero-dot"></div></div>
                </div>`;

            case "METRIC_CARD_V2":
                // [CẬP NHẬT] Lấy dữ liệu legend từ data.js, nếu không có thì dùng fallback
                const l = comp.legend || { poor: {en:"Poor"}, suff: {en:"Sufficient"}, opt: {en:"Optimal"} };

                return `
                <div class="metrics-card-v2">
                    ${comp.rows.map(r => {
                        let colorClass = r.status === 'optimal' ? 'fill-opt' : (r.status === 'poor' ? 'fill-poor' : 'fill-suff');
                        let seg1 = r.level >= 1 ? colorClass : '';
                        let seg2 = r.level >= 2 ? colorClass : '';
                        let seg3 = r.level >= 3 ? colorClass : '';
                        
                        return `
                        <div class="mc-row" ${getAttr(r)}>
                            <div class="mc-label"><span class="mc-icon">${r.icon}</span> ${getText(r.title, lang)} ${getInfo(r, lang)}</div>
                            <div class="mc-visual">
                                <div class="segment-bar"><div class="seg ${seg1}"></div><div class="seg ${seg2}"></div><div class="seg ${seg3}"></div></div>
                                <div class="mc-val">${r.val}</div>
                            </div>
                        </div>`;
                    }).join('')}
                    <div class="mc-legend">
                        <div class="leg-item"><div class="leg-dot" style="background:#ffaa00"></div> ${getText(l.poor, lang)}</div>
                        <div class="leg-item"><div class="leg-dot" style="background:#8899a6"></div> ${getText(l.suff, lang)}</div>
                        <div class="leg-item"><div class="leg-dot" style="background:#24ff00"></div> ${getText(l.opt, lang)}</div>
                    </div>
                </div>`;
                

            case "GRAPH_V2":
                return `
                <div class="graph-v2-container">
                    <div class="gv2-header">
                        <div class="gv2-title">${getText(comp.title, lang)} ${getInfo(comp, lang)}</div>
                        <div class="gv2-val-row"><span class="gv2-big">${comp.val}</span><span class="gv2-arrow">▲</span></div>
                        <div class="gv2-sub">${comp.range}</div>
                    </div>
                    <div class="fake-wave-chart"><div class="wave-path"></div></div>
                    <div style="margin-top: 20px;">
                         ${comp.stages.map(s => `
                            <div class="stage-row">
                                <div class="stage-top">
                                    <div style="display:flex;align-items:center;gap:6px">
                                        <div style="width:10px;height:10px;border-radius:50%;border:1px solid #fff;background:none"></div>
                                        ${getText(s.name, lang)} <span style="opacity:0.6">${s.percent}</span>
                                    </div>
                                    <div>${s.time}</div>
                                </div>
                                <div class="stage-bar-bg striped-bg"><div class="stage-fill ${s.colorClass}" style="width: ${s.percent}"></div></div>
                            </div>
                         `).join('')}
                    </div>

                    ${comp.restorative ? `
                        <div class="restorative-row">
                            <div class="res-left">
                                <div class="res-icon"></div>
                                ${getText(comp.restorative.label, lang)}
                            </div>
                            <div class="res-right">
                                <div class="res-main-val">
                                    ${comp.restorative.val} 
                                    <span class="res-arrow" style="color: ${comp.restorative.arrow_color}">${comp.restorative.arrow}</span>
                                </div>
                                <div class="res-sub-val">${comp.restorative.sub_val}</div>
                            </div>
                        </div>
                    ` : ''}
                </div>`;

            case "INSIGHT_BOX":
                return `
                <div class="insight-box">
                    <div class="insight-text">${getText(comp.text, lang)}</div>
                    <div class="insight-link">${getText(comp.link, lang)} <span>➔</span></div>
                </div>`;

            // --- SLEEP NEED COMPONENTS ---
            case "SLEEP_NEED_CHART": {
                const sleepWidth = "74%"; 
                return `
                <div class="need-chart-box">
                    <div class="nc-header">
                        <div class="nc-title">${getText(comp.title, lang)} ${getInfo(comp, lang)}</div>
                        <div class="nc-big-val">${comp.percent} <span class="nc-arrow">▲</span></div>
                        <div class="nc-sub-val">${comp.prev_percent}</div>
                    </div>
                    <div class="nc-bar-group">
                        <div class="nc-bar-label-row"><span>${getText(comp.labels.hours, lang)}</span><span class="nc-value-text">${comp.hours_val}</span></div>
                        <div class="nc-sleep-bar-bg"><div class="nc-sleep-fill" style="width: ${sleepWidth}"></div></div>
                        <div class="nc-bar-label-row"><span>${getText(comp.labels.needed, lang)}</span><span class="nc-value-text">${comp.need_val}</span></div>
                        <div class="nc-need-bar-bg">
                            ${comp.breakdown.map(b => `<div class="nc-need-seg" style="width:${b.width}; background:${b.color}"></div>`).join('')}
                        </div>
                    </div>
                    <div class="nc-breakdown">
                        ${comp.breakdown.map(b => `
                            <div class="nc-item">
                                <div class="nc-item-left"><div class="nc-dot" style="background:${b.color}"></div>${getText(b.label, lang)}</div>
                                <div class="nc-item-val">${b.val}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>`;}

            default: return '';
        }
    }).join('');

    return `<div class="content-scroll-wrapper">${contentHtml}</div>` + buildTaskbar(lang);
}

function buildTaskbar(lang) {
    const items = WHOOP_CONTENT.taskbar.map(t => `
        <div class="task-item ${t.id === currentScreen || (currentScreen === 'home' && t.id === 'home') ? 'active' : ''}" ${getAttr(t)}>
            <span class="task-icon">${t.icon}</span><span class="task-label">${getText(t, lang)}</span>
        </div>`).join('');
    
    return `<div class="footer-wrapper"><div class="nav-pill">${items}</div><div class="ai-btn-container"><div class="ai-btn" onclick="navigate('ai_chat')">W</div></div></div>`;
}

function render() {
    if (window.innerWidth <= 900) {
        containerLeft.style.display = currentLang === 'en' ? 'block' : 'none';
        containerRight.style.display = currentLang === 'vi' ? 'block' : 'none';
        updateLangButton();
    } else {
        containerLeft.style.display = 'block';
        containerRight.style.display = 'block';
    }
    document.getElementById('content-en').innerHTML = buildPage('en');
    document.getElementById('content-vi').innerHTML = buildPage('vi');
}

window.onload = render;
window.onresize = render;

// LOGIC KÉO THẢ NÚT
const btn = document.getElementById('lang-btn');
let isDragging = false, startX, startY, initialLeft, initialTop, hasMoved = false;

btn.addEventListener('touchstart', (e) => {
    isDragging = true; hasMoved = false;
    const touch = e.touches[0];
    startX = touch.clientX; startY = touch.clientY;
    const rect = btn.getBoundingClientRect();
    initialLeft = rect.left; initialTop = rect.top;
    btn.style.bottom = 'auto'; btn.style.right = 'auto'; btn.style.left = initialLeft + 'px'; btn.style.top = initialTop + 'px';
}, { passive: false });

btn.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const dx = touch.clientX - startX; const dy = touch.clientY - startY;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) { hasMoved = true; e.preventDefault(); }
    btn.style.left = `${initialLeft + dx}px`; btn.style.top = `${initialTop + dy}px`;
}, { passive: false });

btn.addEventListener('touchend', () => { isDragging = false; if (!hasMoved) switchLang(); });
btn.onclick = null;

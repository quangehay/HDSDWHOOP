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
            case "SLEEP_NEED_CHART":
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
                </div>`;

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

let currentScreen = 'home';
let currentLang = 'en';
const containerLeft = document.getElementById('container-left');
const containerRight = document.getElementById('container-right');

// --- 1. CORE ENGINE HELPERS ---

// Lấy text hiển thị (En/Vi)
function getText(obj, lang) {
    if (!obj) return '';
    return lang === 'en' ? (obj.en || obj.text) : (obj.vi || obj.en || obj.text);
}

// Tạo thuộc tính click và style nếu có 'to'
function getAttr(obj) {
    if (!obj || !obj.to) return '';
    return `onclick="event.stopPropagation(); navigate('${obj.to}')" style="cursor:pointer"`;
}

// [MỚI] Lấy diễn giải theo ngôn ngữ (Info vs Diengiai)
function getInfo(obj, lang) {
    if (!obj) return '';
    // Nếu lang là 'en' thì lấy .info, nếu 'vi' thì lấy .diengiai
    const tooltipText = lang === 'en' ? obj.info : obj.diengiai;
    
    // Chỉ hiện nút (?) nếu có nội dung tương ứng
    if (!tooltipText) return '';
    return `<span class="info-btn" data-tip="${tooltipText}">?</span>`;
}

// --- 2. LOGIC ĐỒNG BỘ & ĐIỀU HƯỚNG ---

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

function navigate(page) {
    if (page) console.log("Navigating to:", page);
}

function syncAction(action, id) {
    document.querySelectorAll(`[data-sync-id="${id}"]`).forEach(el => {
        if (action === 'click-menu') el.classList.toggle('show');
    });
}

// --- 3. RENDERING ENGINE (Đã cập nhật getInfo(..., lang)) ---

function buildPage(lang) {
    const config = WHOOP_DATA[currentScreen];
    
    let contentHtml = config.layout.map((comp, idx) => {
        const wrapperAttr = comp.to ? `onclick="navigate('${comp.to}')" style="cursor:pointer"` : '';

        switch(comp.type) {
            case "HEADER_NAV":
                return `
                <div class="header-nav">
                    <div class="nav-left">
                        <div class="profile-circle" ${getAttr(comp.profile)}>${comp.profile.text}</div>
                        <div class="streak-badge" ${getAttr(comp.streak)}>🔥 ${comp.streak.val} ${getInfo(comp.streak, lang)}</div>
                    </div>
                    <div class="nav-center" ${getAttr(comp.today)}>
                        <span class="arrow">❮</span>
                        <div class="date-pill">${getText(comp.today, lang)}</div>
                        <span class="arrow">❯</span>
                    </div>
                    <div class="nav-right" ${getAttr(comp.battery)}>
                        <span class="battery-text">${comp.battery.val}</span>
                        <div class="device-icon">🔋</div>
                    </div>
                </div>`;

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
                        ${comp.buttons.map(btn => `
                            <div class="footer-btn" ${getAttr(btn)}>
                                ${getText(btn, lang)}
                            </div>
                        `).join('')}
                    </div>
                </div>`;

            case "SECTION_LABEL":
                return `<div class="section-label" style="margin-top:10px">
                    ${getText(comp.label, lang)} ${getInfo(comp.label, lang)}
                </div>`;

            case "METRIC_LIST":
                return comp.items.map(item => `
                    <div class="metric-item" ${getAttr(item)}>
                        <span class="label">${getText(item, lang)} ${getInfo(item, lang)}</span>
                        <span class="val">${item.val}</span>
                    </div>
                `).join('');

            default: return '';
        }
    }).join('');

    return `<div class="content-scroll-wrapper">${contentHtml}</div>` + buildTaskbar(lang);
}

function buildTaskbar(lang) {
    const items = WHOOP_CONTENT.taskbar.map(t => `
        <div class="task-item ${t.id === 'home' ? 'active' : ''}" ${getAttr(t)}>
            <span class="task-icon">${t.icon}</span>
            <span class="task-label">${getText(t, lang)}</span>
        </div>`).join('');
    
    return `
    <div class="footer-wrapper">
        <div class="nav-pill">${items}</div>
        <div class="ai-btn-container"><div class="ai-btn" onclick="navigate('ai_chat')">W</div></div>
    </div>`;
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
let isDragging = false;
let startX, startY, initialLeft, initialTop;
let hasMoved = false;

btn.addEventListener('touchstart', (e) => {
    isDragging = true; hasMoved = false;
    const touch = e.touches[0];
    startX = touch.clientX; startY = touch.clientY;
    const rect = btn.getBoundingClientRect();
    initialLeft = rect.left; initialTop = rect.top;
    btn.style.bottom = 'auto'; btn.style.right = 'auto';
    btn.style.left = initialLeft + 'px'; btn.style.top = initialTop + 'px';
}, { passive: false });

btn.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const dx = touch.clientX - startX; const dy = touch.clientY - startY;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) { hasMoved = true; e.preventDefault(); }
    btn.style.left = `${initialLeft + dx}px`; btn.style.top = `${initialTop + dy}px`;
}, { passive: false });

btn.addEventListener('touchend', () => {
    isDragging = false;
    if (!hasMoved) switchLang();
});
btn.onclick = null;

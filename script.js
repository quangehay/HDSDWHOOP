let currentScreen = 'home';
const langToggle = document.getElementById('lang-toggle');
const contentEn = document.getElementById('content-en');
const contentVi = document.getElementById('content-vi');

const leftSide = document.getElementById('container-left');
const rightSide = document.getElementById('container-right');

function render() {
    // Vẽ màn hình EN
    contentEn.innerHTML = buildHtml('en');
    // Vẽ màn hình VI
    contentVi.innerHTML = buildHtml('vi');

    // Xử lý ẩn hiện trên Mobile dựa vào toggle
    if (window.innerWidth <= 900) {
        if (langToggle.checked) {
            leftSide.classList.add('hide-mobile');
            rightSide.classList.remove('hide-mobile');
        } else {
            leftSide.classList.remove('hide-mobile');
            rightSide.classList.add('hide-mobile');
        }
    }
}

function buildHtml(lang) {
    const data = WHOOP_CONTENT[currentScreen][lang];
    
    if (currentScreen === 'home') {
        return `
            <header>${data.title}</header>
            <div class="rings-row">
                <div class="ring-box" onclick="navigate('sleep_detail')">
                    <div class="circle sleep">84%</div>
                    <span>${data.sleep}</span>
                </div>
                <div class="ring-box">
                    <div class="circle" style="border-color:#24ff00">94%</div>
                    <span>${data.recovery}</span>
                </div>
            </div>
            <div class="metric-card">
                <span>Health Monitor</span>
                <span>→</span>
            </div>
        `;
    } else if (currentScreen === 'sleep_detail') {
        let metricsHtml = data.metrics.map(m => `
            <div class="metric-card">
                <span>${m.label} ${lang === 'vi' ? `<i class="info-icon" data-tip="${m.tip}">ⓘ</i>` : ''}</span>
                <span>${m.value}</span>
            </div>
        `).join('');

        return `
            <header>
                <span class="back-btn" onclick="navigate('home')">←</span>
                ${data.title}
            </header>
            <div style="padding-top:10px">${metricsHtml}</div>
        `;
    }
}

function navigate(screen) {
    currentScreen = screen;
    render();
    // Tự động cuộn về đầu trang khi chuyển màn hình
    leftSide.scrollTop = 0;
    rightSide.scrollTop = 0;
}

langToggle.addEventListener('change', render);
window.addEventListener('resize', render);

// Khởi chạy
render();

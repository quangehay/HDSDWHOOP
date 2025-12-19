let currentScreen = 'home';
const langToggle = document.getElementById('lang-toggle');
const contentDiv = document.getElementById('app-content');

// Hàm render chính
function render() {
    const lang = langToggle.checked ? 'vi' : 'en';
    const data = WHOOP_CONTENT[currentScreen][lang];
    
    if (currentScreen === 'home') {
        contentDiv.innerHTML = `
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
                <span>${m.label} <i class="info-icon" data-tip="${m.tip}">ⓘ</i></span>
                <span>${m.value}</span>
            </div>
        `).join('');

        contentDiv.innerHTML = `
            <header>
                <span class="back-btn" onclick="navigate('home')">←</span>
                ${data.title}
            </header>
            <div style="padding-top:20px">${metricsHtml}</div>
        `;
    }
}

// Hàm chuyển trang
function navigate(screen) {
    currentScreen = screen;
    render();
}

// Lắng nghe nút gạt ngôn ngữ
langToggle.addEventListener('change', render);

// Chạy lần đầu
render();

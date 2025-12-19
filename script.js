document.addEventListener('DOMContentLoaded', () => {
    const syncElements = document.querySelectorAll('[data-sync]');

    syncElements.forEach(el => {
        // Sự kiện khi di chuột vào
        el.addEventListener('mouseenter', () => {
            const key = el.getAttribute('data-sync');
            highlight(key, true);
        });

        // Sự kiện khi di chuột ra
        el.addEventListener('mouseleave', () => {
            const key = el.getAttribute('data-sync');
            highlight(key, false);
        });
    });

    function highlight(key, isActive) {
        const matches = document.querySelectorAll(`[data-sync="${key}"]`);
        matches.forEach(item => {
            if (isActive) {
                item.classList.add('sync-active');
            } else {
                item.classList.remove('sync-active');
            }
        });
    }
});

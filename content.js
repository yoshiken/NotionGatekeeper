const hideButtons = () => {
    const buttons = document.querySelectorAll('div[role="button"]');
    buttons.forEach(button => {
        if (button.textContent.includes('公開')) {
            button.style.display = 'none';
        }
    });
};

// 初回実行
hideButtons();

// DOMの変化を監視
const observer = new MutationObserver(hideButtons);
observer.observe(document.body, { childList: true, subtree: true });
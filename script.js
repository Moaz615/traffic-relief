function openTab(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');

    const activeBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(tabName));
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

document.getElementById('homeLink').addEventListener('click', () => {
    loadContent('Home content');
});

document.getElementById('accountsLink').addEventListener('click', () => {
    loadContent('Accounts content');
});

document.getElementById('transactionsLink').addEventListener('click', () => {
    loadContent('Transactions content');
});

document.getElementById('settingsLink').addEventListener('click', () => {
    loadContent('Settings content');
});

function loadContent(content) {
    document.getElementById('content').innerHTML = `<h2>${content}</h2>`;
}

// Initially load home content
loadContent('Home content');

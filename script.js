function openTab(tabName) {
    // Esconde todos os conteúdos de abas
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active-tab');
    }
    
    // Remove a classe 'active' de todos os botões
    const tabButtons = document.getElementsByClassName('tab-button');
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }
    
    // Mostra a aba atual e marca o botão como ativo
    document.getElementById(tabName).classList.add('active-tab');
    event.currentTarget.classList.add('active');
}

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
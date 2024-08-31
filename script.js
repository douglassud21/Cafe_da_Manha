
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.icon');
    const cardGroups = document.querySelectorAll('.card-group');

    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            const targetGroupId = this.getAttribute('data-target');
            const targetGroup = document.getElementById(targetGroupId);

            // Remove a classe ativa de todos os grupos de cards
            cardGroups.forEach(group => group.classList.remove('active'));

            // Adiciona a classe ativa ao grupo de cards clicado
            targetGroup.classList.add('active');
        });
    });

    // Inicialmente exibe o primeiro grupo de cards
    if (cardGroups.length > 0) {
        cardGroups[0].classList.add('active');
    }
});

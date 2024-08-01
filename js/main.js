document.addEventListener('DOMContentLoaded', function () {
    const itens = document.querySelectorAll('.categoria-lista-item');
    const cards = document.querySelectorAll('[data-item]');

    itens.forEach(item => {
        item.addEventListener('click', function () {
            // Remove a classe 'ativo' de todos os itens do menu
            itens.forEach(itemMenu => {
                itemMenu.classList.remove('ativo');
            });

            // Adiciona a classe 'ativo' ao item do menu clicado
            this.classList.add('ativo');

            // Obtém a categoria do item do menu clicado
            const categoria = this.id.replace('categoria-', '');
            if (categoria === 'tudo') {
                // Exibe todos os cards se a categoria for 'tudo'
                cards.forEach(card => { card.style.display = 'block' });
            } else {
                // Exibe apenas os cards correspondentes à categoria
                cards.forEach(card => {
                    if (card.dataset.item === categoria) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    };
                });
            };
        });
    });
});

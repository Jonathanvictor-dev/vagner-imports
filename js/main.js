const formsCadastro = document.querySelector('#formsCadastro');

function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf;
};

function formatTelefone(telefone) {
    telefone = telefone.replace(/\D/g, "");
    telefone = telefone.replace(/(\d{2})(\d)/, "($1) $2");
    telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2");
    return telefone;
};

if (document.getElementById('cpf')) {
    document.getElementById('cpf').addEventListener('input', function () {
        this.value = formatCPF(this.value);
    });
};

if (document.getElementById('telefone')) {
    document.getElementById('telefone').addEventListener('input', function () {
        this.value = formatTelefone(this.value);
    });
};

if (formsCadastro) {
    formsCadastro.addEventListener('submit', function(e) {
        e.preventDefault();

        let nome = document.getElementById('nome');
        let email = document.getElementById('email');
        let cpf = document.getElementById('cpf');
        let dataNascimento = document.getElementById('dataNascimento');
        let telefone = document.getElementById('telefone');

        let mensagem = `*Cadastro de Curso*\n\n` +
                    `*Nome:* ${nome.value}\n` +
                    `*Email:* ${email.value}\n` +
                    `*CPF:* ${cpf.value}\n` +
                    `*Data de Nascimento:* ${dataNascimento.value}\n` +
                    `*Telefone:* ${telefone.value}`;

        let numeroWhatsApp = '5582996043922';

        let urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        window.open(urlWhatsApp, '_blank');

        nome.value = '';
        email.value = '';
        cpf.value = '';
        dataNascimento.value = '';
        telefone.value = '';
    });
};

document.addEventListener('DOMContentLoaded', function () {
    const itens = document.querySelectorAll('.categoria-lista-item');
    const cards = document.querySelectorAll('[data-item]');

    itens.forEach(item => {
        item.addEventListener('click', function () {
            itens.forEach(itemMenu => {
                itemMenu.classList.remove('ativo');
            });

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

const botoesEspecialista = document.querySelectorAll('.btn-falar-com-especialista');

if (botoesEspecialista) {
    botoesEspecialista.forEach(botao => {
        botao.addEventListener('click', function(e) {
            e.preventDefault();
    
            const card = this.closest('.card');
    
            const titulo = card.querySelector('.card-title').textContent.trim();
            const descricao = card.querySelector('.card-text').textContent.trim();
    
            const mensagem = `*Falar com Especialista*\n\n` +
                             `*Serviço:* ${titulo}\n`;
    
            const numeroWhatsApp = '5582996043922'; 
    
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    
            window.open(urlWhatsApp, '_blank');
        });
    });
};


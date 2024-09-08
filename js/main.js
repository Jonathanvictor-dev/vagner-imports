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

window.addEventListener('onload', carregamento());

function carregamento() {
    const containerLoading = document.querySelector('#loading');

    setInterval(() => {
      if(containerLoading) {
        containerLoading.style.display = 'none';
      };
    }, 600);
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

document.querySelectorAll('.seletor-personalizado').forEach(seletorPersonalizado => {
    const seletorPlaceholder = seletorPersonalizado.querySelector('.seletor-placeholder');
    const listaOpcoes = seletorPersonalizado.querySelector('.seletor-opcoes');
    const opcoes = listaOpcoes.querySelectorAll('.opcao');
    const seletorPesquisa = seletorPersonalizado.querySelector('.seletor-pesquisa');
    const botaoWhatsApp = seletorPersonalizado.closest('.card-item-assistencia-tecnica').querySelector('.btn');
  
    seletorPersonalizado.addEventListener('click', function(event) {
      if (!event.target.classList.contains('opcao') && !event.target.classList.contains('seletor-pesquisa')) {
        seletorPersonalizado.classList.toggle('ativo');
        seletorPesquisa.value = '';  
        filtrarOpcoes('');  
        toggleSeta(seletorPersonalizado);
      }
    });
  
    opcoes.forEach(opcao => {
      opcao.addEventListener('click', function() {
        const valorSelecionado = this.dataset.valor;
        const textoSelecionado = this.textContent;
        
        seletorPlaceholder.textContent = textoSelecionado;
  
        seletorPersonalizado.classList.remove('ativo');
        
        console.log('Valor selecionado:', valorSelecionado);
        toggleSeta(seletorPersonalizado);
  
        // Atualiza o link do WhatsApp quando uma opção é selecionada
        atualizarLinkWhatsApp(seletorPersonalizado, textoSelecionado);
      });
    });
  
    seletorPesquisa.addEventListener('input', function() {
      const termoPesquisa = seletorPesquisa.value.toLowerCase();
      filtrarOpcoes(termoPesquisa);
    });
  
    function filtrarOpcoes(termo) {
      opcoes.forEach(opcao => {
        const textoOpcao = opcao.textContent.toLowerCase();
        if (textoOpcao.includes(termo)) {
          opcao.style.display = 'block';
        } else {
          opcao.style.display = 'none';
        };
      });
    };
  
    function toggleSeta(seletor) {
      const setaBaixo = seletor.querySelector('.seta-baixo');
      const setaCima = seletor.querySelector('.seta-cima');
      
      if (seletor.classList.contains('ativo')) {
        setaBaixo.style.display = 'none';
        setaCima.style.display = 'block';
      } else {
        setaBaixo.style.display = 'block';
        setaCima.style.display = 'none';
      };
    };
  
    function atualizarLinkWhatsApp(seletor, modeloSelecionado) {
        const tituloServico = seletor.closest('.card-item-assistencia-tecnica').querySelector('.card-title').textContent;
        const numeroTelefone = '5582996043922';
        const mensagem = `Olá, gostaria de informações sobre o ${modeloSelecionado}.`;
        const linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
        botaoWhatsApp.setAttribute('href', linkWhatsApp);
        botaoWhatsApp.setAttribute('target', '_blank'); 
      };
  });

document.addEventListener('click', function(event) {
document.querySelectorAll('.seletor-personalizado.ativo').forEach(seletor => {
    if (!seletor.contains(event.target)) {
    seletor.classList.remove('ativo');
    toggleSeta(seletor);
    }
});
});




  

document.addEventListener('DOMContentLoaded', function() {

    // --- Lógica do Formulário de Demonstração ---
    const form = document.getElementById('form-contato');
    if (form) {
        const mensagemFeedback = document.getElementById('mensagem-feedback');
        const nomeInput = document.getElementById('nome');
        const emailInput = document.getElementById('email');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const nome = nomeInput.value.trim();
            const email = emailInput.value.trim();

            mensagemFeedback.className = 'mensagem';
            
            if (nome === '' || email === '') {
                mensagemFeedback.innerText = 'Por favor, preencha todos os campos obrigatórios.';
                mensagemFeedback.classList.add('erro');
            } else if (!email.includes('@')) {
                mensagemFeedback.innerText = 'Formato de e-mail inválido. Verifique se contém "@".';
                mensagemFeedback.classList.add('erro');
            } else {
                mensagemFeedback.innerText = `Obrigado, ${nome}! Cadastro recebido com sucesso.`;
                mensagemFeedback.classList.add('sucesso');
                form.reset();
                nomeInput.focus();
            }
        });
    }

    // --- Lógica do Desafio "Mostrar Hora Atual" ---
    const mostrarHoraBtn = document.getElementById('mostrar-hora-btn');
    if (mostrarHoraBtn) {
        const horaAtualDisplay = document.getElementById('hora-atual-display');
        mostrarHoraBtn.addEventListener('click', function() {
            const dataAtual = new Date();
            horaAtualDisplay.innerText = `Data e Hora: ${dataAtual.toLocaleString('pt-BR')}`;
            horaAtualDisplay.className = 'mensagem sucesso';
        });
    }

    // --- Lógica para Realce Ativo da Navegação Lateral ao Rolar ---
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');

    if (sections.length > 0 && navLinks.length > 0) {
        const observerOptions = {
            root: null, // Observa em relação ao viewport
            rootMargin: '0px',
            threshold: 0.4 // Ativa quando 40% da seção estiver visível
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        // Compara o href do link (#secao) com o id da seção
                        if (link.getAttribute('href').substring(1) === entry.target.id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }
    
    // --- Inicia o Prism.js para Syntax Highlighting ---
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
});
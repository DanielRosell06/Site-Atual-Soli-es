
const botoes = document.querySelectorAll('.btn-selecao-obras');
const secoes = document.querySelectorAll('.secao-obras');

botoes.forEach(function(botao) {
    botao.addEventListener('click', function() {
        botoes.forEach(function(b) {
            b.classList.remove('active');
        });

        secoes.forEach(function(s){
            s.classList.remove('ativo');
        })

        botao.classList.add('active');

        switch (botao.id){
            case 'btn-juntas':
                document.getElementById('section-juntas').classList.add('ativo')
                break;

            case 'btn-drenagens':
                document.getElementById('section-drenagens').classList.add('ativo')
                break;

            case 'btn-edificacoes':
                document.getElementById('section-edificacoes').classList.add('ativo')
                break;

            case 'btn-recuperacoes':
                document.getElementById('section-recuperacoes').classList.add('ativo')
                break;

            case 'btn-barreiras':
                document.getElementById('section-barreiras').classList.add('ativo')
                break;

            case 'btn-outros':
                document.getElementById('section-outros').classList.add('ativo')
                break;
        }
    });
});


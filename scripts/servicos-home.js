const elementosAzul = document.querySelectorAll(".azul");
const elementosAmarelo = document.querySelectorAll(".amarelo");
const conjuntosServicos = document.querySelectorAll(".conjunto-servicos"); // Seleciona todos os conjuntos
let index = 0; // Índice do conjunto de serviços atual
let margem = 70;
let opacidade = 0

const intervalo = setInterval(() => {
    if (margem <= -40) {
        clearInterval(intervalo); // Interrompe o loop quando a margem chega a -40
        return;
    }

    // Atualiza a margem
    margem -= 0.04;
    if (opacidade < 1 && margem <= 40){
        opacidade += 0.007
    }

    // Aplica a margem aos elementos
    elementosAzul.forEach((elemento) => {
        elemento.style.marginTop = `${margem}px`;
        elemento.style.opacity = `${opacidade}`; // 20% de opacidade
    });

    elementosAmarelo.forEach((elemento) => {
        elemento.style.marginTop = `${-margem}px`;
        elemento.style.opacity = `${opacidade}`; // 20% de opacidade
    });


    if (margem > 40)
    {
        margem -= 0.6
        if (opacidade < 1){
            opacidade += 0.03
        }
   }

    if (margem <= 10) {
        margem -= 1
        opacidade -= 0.03
    }

    if (margem <= -40) {
        // Muda para o próximo conjunto de serviços
        conjuntosServicos[index].classList.remove('servicos-ativos'); // Remove a classe do conjunto atual
        index = (index + 1) % conjuntosServicos.length; // Atualiza o índice para o próximo conjunto
        conjuntosServicos[index].classList.add('servicos-ativos'); // Adiciona a classe ao novo conjunto
        
        // Reinicia a margem para 40
        margem = 70;
        opacidade = 0
    }
}, 6); // Aproximadamente 60 quadros por segundo

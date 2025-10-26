// Aguarda o conteúdo da página carregar antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURAÇÃO ---
    // Defina a data de início do namoro: Ano, Mês (começa do 0), Dia, Hora, Minuto, Segundo
    // 16 de Novembro de 2024, à meia-noite.
    const dataInicio = new Date(2024, 10, 16, 1, 30, 0); 
    // Mês 10 = Novembro (Janeiro é 0)
    // --------------------

    // Pega os elementos do HTML onde vamos mostrar os números
    const elDias = document.getElementById('dias');
    const elHoras = document.getElementById('horas');
    const elMinutos = document.getElementById('minutos');
    const elSegundos = document.getElementById('segundos');
    const elMilisegundos = document.getElementById('contador-milisegundos');

    // Função que atualiza o contador
    function atualizarContador() {
        const agora = new Date();
        const diferencaTotal = agora - dataInicio; // Já está em milissegundos

        // --- CÁLCULO PARA O CONTADOR FORMATADO ---

        // 1. Total de segundos (dividindo milissegundos por 1000)
        let totalSegundos = Math.floor(diferencaTotal / 1000);

        // 2. Dias (quantos segundos cabem em um dia)
        const dias = Math.floor(totalSegundos / (3600 * 24));
        
        // 3. Sobra de segundos após tirar os dias
        totalSegundos %= (3600 * 24);

        // 4. Horas (quantos segundos cabem em uma hora, da sobra)
        const horas = Math.floor(totalSegundos / 3600);
        
        // 5. Sobra de segundos após tirar as horas
        totalSegundos %= 3600;

        // 6. Minutos (quantos segundos cabem em um minuto, da sobra)
        const minutos = Math.floor(totalSegundos / 60);
        
        // 7. Segundos (a sobra final)
        const segundos = totalSegundos % 60;

        // --- ATUALIZAÇÃO DO HTML ---

        // Coloca os números na tela
        elDias.textContent = dias;
        // padStart(2, '0') garante que sempre terá 2 dígitos (ex: "08" em vez de "8")
        elHoras.textContent = String(horas).padStart(2, '0');
        elMinutos.textContent = String(minutos).padStart(2, '0');
        elSegundos.textContent = String(segundos).padStart(2, '0');
        
        // --- ATUALIZAÇÃO DOS MILISSEGUNDOS (O SEU PEDIDO) ---
        // 'pt-BR' formata o número com pontos (ex: 31.536.000.000)
        elMilisegundos.textContent = diferencaTotal.toLocaleString('pt-BR');
    }

    // Roda a função pela primeira vez imediatamente
    atualizarContador();

    // Roda a função 'atualizarContador' a cada 100 milissegundos
    // (Mais rápido que 1 segundo para ver os milissegundos voando)
    setInterval(atualizarContador, 100);
});
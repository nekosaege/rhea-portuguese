document.addEventListener('DOMContentLoaded', function() {
    const btnRetourner = document.getElementById('btn-retourner');
    const btnAvancer = document.getElementById('btn-avancer');
    const paginas = document.querySelectorAll('.pagina');
    let paginaAtual = 0;

    function mostrarPagina(index) {
        paginas.forEach((pagina, idx) => {
            if (idx === index) {
                pagina.classList.add('selecionada');
            } else {
                pagina.classList.remove('selecionada');
            }
        });
    }

    btnRetourner.addEventListener('click', function() {
        paginaAtual = (paginaAtual - 1 + paginas.length) % paginas.length;
        mostrarPagina(paginaAtual);
    });

    btnAvancer.addEventListener('click', function() {
        paginaAtual = (paginaAtual + 1) % paginas.length;
        mostrarPagina(paginaAtual);
    });
});


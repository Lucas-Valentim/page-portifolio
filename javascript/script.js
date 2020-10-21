$(document).ready(function () {
    $('.carousel').carousel();

    const mutantionObserver = new MutationObserver(callback)
    var carousels = document.querySelectorAll('.carousel-item');
    carousels.forEach(item => mutantionObserver.observe(item, item))
    
});

function callback(mutationsList, observer) {
    console.log('Mutations:', mutationsList)
    console.log('Observer:', observer)
    mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
            if (mutation.target.classList.contains('active')) {
                var title = document.getElementById('ProjectName');
                var desc = document.getElementById('ProjectDescription');
                switch (mutation.target.id) {
                    case 'Index1':
                        title.innerHTML = 'Projeto: Clone Login Twitter';
                        desc.innerHTML = 'Projeto feito com o apoio da Digital House com o intuito de clonar o login do twitter.\nTecnologias: HTML5 e CCS3'
                        break;
                    case 'Index2':
                        title.innerHTML = 'Projeto: Movie App';
                        desc.innerHTML = 'Projeto feito com o apoio da Digital House com o intuito buscar filmes pesquisar na API do  IMDB.\nTecnologias: HTML5, CCS3, Javascript, React'
                        break;
                    case 'Index3':
                        title.innerHTML = 'Projeto: Projeto Integrador';
                        desc.innerHTML = 'Projeto realizado para a conclusão do curso da Digital House.\nTecnologias: HTML5, CCS3, Javascript'
                        break;
                    case 'Index4':
                        title.innerHTML = 'Projeto: ToDo List';
                        desc.innerHTML = 'Projeto feito com o apoio da Digital House com o intuito de criar uma lista de afazeres.\nTecnologias: HTML5, CCS3, Javascript'
                        break;
                }
            }
        }
    })
}
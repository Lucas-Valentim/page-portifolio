$(document).ready(function () {
    $('.carousel').carousel();

    const mutantionObserver = new MutationObserver(callback)
    var carousels = document.querySelectorAll('.carousel-item');
    carousels.forEach(item => mutantionObserver.observe(item, item))
    
    var timelineContainer = document.querySelector('.timelineTitle');
    timelineContainer.addEventListener('click', e => {
        let div = document.querySelector('#timelineDiv');
        if(div.style.maxHeight == '0px')
            div.style.maxHeight = '1000px';
        else
            div.style.maxHeight = '0px';
        console.log(div);

        let arrow = document.getElementsByName('arrow-forward-outline')[0];
        if (arrow == null) {
            arrow = document.getElementsByName('arrow-down-outline')[0];
            arrow.setAttribute('name', 'arrow-forward-outline')
        }
        else
            arrow.setAttribute('name', 'arrow-down-outline')
    })

    // var pt = document.querySelector('#PTtoEN');
    // pt.addEventListener('click', e => { ChangeLanguage(e)})
    // var en = document.querySelector('#ENtoPT');
    // en.addEventListener('click', e => {ChangeLanguage(e)})
});

function callback(mutationsList, observer) {
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

// function SetLanguages() {
//     localStorage.setItem('welcomePT', 'Seja <span>bem-vindo</span> ao meu site!')
//     localStorage.setItem('welcomeEN', '<span>Welcome</span> to my website!')
//     localStorage.setItem('descPT', 'Sinta-se a vontade para olhar os projetos e me enviar feedback caso você queira.')
//     localStorage.setItem('descEN', 'Feel free to look the projects and send me feed back about them.')
//     localStorage.setItem('aboutPT', 'My name is <span>Lucas Valentim</span>, have <span>26 years old</span>. I\'m <span>.net</span> developer since 2019 and web developer freelancer.')
//     localStorage.setItem('aboutEN', 'Meu nome é <span>Lucas Valentim</span>, tenho <span>26 anos</span> trabalho com desenvolvimento em <span>.net</span> desde 2019 e também faço freelancer para criação de site. Criei essa página com o intuito de mostrar e divulgar um pouco os meus trabalhos pessoais. Conforme eu for finalizando os projetos vou acrecentando-os aqui')
// }

// function ChangeLanguage(event) {
//     var en = (event.target.alt.indexOf('Inglês') !== -1)
//     var pt = (event.target.alt.indexOf('Portuguese') !== -1)

//     if (!en && !pt) {
//         return;
//     } else if (en) {
//         var wel = document.querySelector('#wel');
//         wel.innerHTML = '<span>Welcome</span> to my website!'
//     } else if(pt) {
        
//     }
// }
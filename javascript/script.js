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


        // let timeline = document.querySelector('.timeline');
        // timeline.classList.toggle('hide');
        // console.log(timeline);

        // let arrow = document.getElementsByName('arrow-forward-outline')[0];
        // if (arrow == null) {
        //     arrow = document.getElementsByName('arrow-down-outline')[0];
        //     arrow.setAttribute('name', 'arrow-forward-outline')
        //     // arrow.classList.remove('arrow-down-outline');
        //     // arrow.classList.add('arrow-forward-outline');
        // }
        // else {
        //     arrow.setAttribute('name', 'arrow-down-outline')
        //     // arrow.classList.remove('arrow-forward-outline');
        //     // arrow.classList.add('arrow-down-outline');
        // }
    })

    // $('.navbar-nav a').click(function (e) {
    //     e.preventDefault();
    //     var anc = this.hash;
    //     $('body').animate({
    //         scrollTop: $(anc).offset().top - 160
    //     }, 300);
    //     return false;
    // });

    // function to set a given theme/color-scheme
    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }
    // function to toggle between light and dark theme
    // function toggleTheme() {
    //    if (localStorage.getItem('theme') === 'theme-dark'){
    //        setTheme('theme-light');
    //    } else {
    //        setTheme('theme-dark');
    //    }
    // }
    // // Immediately invoked function to set the theme on initial load
    // (function () {
    //    if (localStorage.getItem('theme') === 'theme-dark') {
    //        setTheme('theme-dark');
    //    } else {
    //        setTheme('theme-light');
    //    }
    // })();
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
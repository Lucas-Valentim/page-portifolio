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
});

function callback(mutationsList, observer) {
    mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
            if (mutation.target.classList.contains('active')) {
                var title = document.getElementById('ProjectName');
                var desc = document.getElementById('ProjectDescription');
                switch (mutation.target.id) {
                    case 'Index1':
                        title.innerHTML = 'Project: Clone Login Twitter';
                        desc.innerHTML = 'Project made with the support of Digital House in order to clone twitter login. \ NTechnologies: HTML5 and CCS3'
                        break;
                    case 'Index2':
                        title.innerHTML = 'Project: Movie App';
                        desc.innerHTML = 'Project made with the support of Digital House in order to search for films to search on the IMDB API. \ NTechnologies: HTML5, CCS3, Javascript, React'
                        break;
                    case 'Index3':
                        title.innerHTML = 'Project: Integrator Project';
                        desc.innerHTML = 'Project carried out for the completion of the Digital House course. \ NTechnologies: HTML5, CCS3, Javascript'
                        break;
                    case 'Index4':
                        title.innerHTML = 'Project: ToDo List';
                        desc.innerHTML = 'Project made with the support of Digital House in order to create a to-do list. \ NTechnologies: HTML5, CCS3, Javascript'
                        break;
                }
            }
        }
    })
}
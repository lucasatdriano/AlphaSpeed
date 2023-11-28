        // script para button:  voltar ao topo
        
const btnTopo = document.querySelector(".topo")

function BackTop() { 
    scrollTo(0, 0)
}
btnTopo.addEventListener("click", BackTop)

const scrollAnima = document.querySelector('[data-anima="scroll"]');
const metadeWindow = window.innerHeight * 5.2;

function AnimarScroll() {
    const topoItem = scrollAnima.getBoundingClientRect().top;
    const itemVisivel = topoItem - metadeWindow < 0;
    if (itemVisivel) {
        scrollAnima.classList.add('showBtn');
    } else {
        scrollAnima.classList.remove('showBtn');
    };
};
window.addEventListener('scroll', AnimarScroll);
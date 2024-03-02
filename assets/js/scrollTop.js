        // script para button: back to top
        
const btnTopo = document.querySelector(".topo")

function BackTop() { 
    scrollTo(0, 0)
}
btnTopo.addEventListener("click", BackTop)

const backToTop = () => {
    if (window.scrollY >= 100) {
        btnTopo.classList.add('showBtn')
    } else {
        btnTopo.classList.remove('showBtn')
    }
}
window.addEventListener('scroll', function () {
    backToTop()
})
// script para button: back to top

export function initButtonToTop() {
    const btnTopo = document.querySelector('.topo');

    window.onscroll = function () {
        animarScroll();
    };

    function animarScroll() {
        if (
            document.body.scrollTop > 200 ||
            document.documentElement.scrollTop > 50
        ) {
            btnTopo.style.display = 'block';
        } else {
            btnTopo.style.display = 'none';
        }
    }

    window.addEventListener('scroll', animarScroll);
}

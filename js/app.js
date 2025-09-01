//codigo para que cuando haga scroll se oculte el nav y cuando suba se muestre
let lastScroll = 0; 
const nav = document.getElementById("nav-bar");

window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    // siempre mostrar si estás arriba del todo
    if (currentScroll <= 0) {
        nav.style.top = "0";
        lastScroll = 0;
        return;
    }

    if (currentScroll > lastScroll) {
        // bajando → ocultar
        nav.style.top = "-5em"; // mismo alto que tu nav (5em)
    } else if (currentScroll < lastScroll) {
        // subiendo → mostrar
        nav.style.top = "0";
    }

    lastScroll = currentScroll;
});


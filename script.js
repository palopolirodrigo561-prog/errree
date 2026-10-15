const boton = document.getElementById("btnMenu");

const menu = document.getElementById("menu");


boton.addEventListener("click", function () {

    const abierto =
        menu.classList.toggle("activo");


    boton.classList.toggle(
        "abierto",
        abierto
    );


    boton.setAttribute(
        "aria-expanded",
        abierto
    );

});


/* Cerrar el menú al tocar un botón */

menu.querySelectorAll("a").forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        menu.classList.remove("activo");

        boton.classList.remove("abierto");

        boton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});

/* "Ver más" del segundo párrafo (celular) */

const btnVerMas = document.getElementById("btnVerMas");

if (btnVerMas) {

    btnVerMas.addEventListener("click", function () {

        const tarjeta = document.querySelector(".contenido");

        const abierto =
            tarjeta.classList.toggle("expandido");

        btnVerMas.textContent =
            abierto ? "Ver menos" : "Ver más";

        btnVerMas.setAttribute(
            "aria-expanded",
            abierto
        );

    });

}

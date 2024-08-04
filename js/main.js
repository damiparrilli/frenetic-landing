document.addEventListener("DOMContentLoaded", () => {
    // Pre-cargar imágenes
    const images = ["./img/close.svg", "./img/logo-form.webp"];
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

let lastScrollTop = 0;
const header = document.getElementById('nav-menu');

window.addEventListener('scroll', function () {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        header.style.top = "-75px";
    } else {
        header.style.top = "0";
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});


const formulario = document.getElementById("formulario");

function abrirFormulario() {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.id = "overlay";
    const form = document.createElement("form");
    form.id = "formul";
    form.className = "formul";
    const cerrar = document.createElement("a");
    cerrar.setAttribute("onclick", "cerrarFormulario()");
    const cerrarImg = document.createElement("img");
    cerrarImg.src = "./img/close.svg";
    cerrarImg.alt = "Close";
    cerrarImg.className = "img-close";
    cerrar.appendChild(cerrarImg);
    const imagenLogo = document.createElement("img");
    imagenLogo.src = "./img/logo-form.webp";
    imagenLogo.alt = "Frenetic Comics";
    imagenLogo.className = "img-form";
    let input = [];
    for (let i = 0; i < 3; i++) {
        input[i] = document.createElement("input");
        i < 2 ? input[i].type = "text" : input[i].type = "email";
        input[i].required = true;
    }
    input[0].name = "nombre";
    input[0].id = "nombre";
    input[0].placeholder = "Nombre";
    input[1].name = "apellido";
    input[1].id = "apellido";
    input[1].placeholder = "Apellido";
    input[2].name = "email";
    input[2].id = "email";
    input[2].placeholder = "Email";

    let label = [];
    let checkboxes = [];
    let spanCheckboxes = []
    for (let i = 0; i < 4; i++) {
        label[i] = document.createElement("label");
        label[i].className = "checkbox-container";
        checkboxes[i] = document.createElement("input");
        checkboxes[i].type = "checkbox";
        spanCheckboxes[i] = document.createElement("span");
        spanCheckboxes[i].className = "checkmark";
        label[i].append(checkboxes[i], spanCheckboxes[i]);
    }
    spanCheckboxes[0].textContent = "Deseo recibir noticias al e-mail sobre nuevos comics y descuentos en ellos.";
    spanCheckboxes[1].textContent = "Quiero recibir noticias sobre coleccionables y ediciones especiales.";
    spanCheckboxes[2].textContent = "Me gustaría recibir noticias sobre la/s serie/s de artículos que me gustan.";
    spanCheckboxes[3].textContent = "Quisiera recibir nuevas curiosidades y artículos relacionados en mi e-mail.";
    const terminosYCondiciones = document.createElement("p");
    terminosYCondiciones.innerHTML = `Al registrarte estas aceptando los <a href="#">Términos y condiciones</a> establecidos en la página.`;
    const submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.value = "SUSCRIBIRSE";
    submitBtn.id = "suscribirse";

    form.appendChild(cerrar);
    form.appendChild(imagenLogo);
    input.forEach(inp => form.appendChild(inp));
    label.forEach(lbl => form.appendChild(lbl));
    form.appendChild(terminosYCondiciones);
    form.appendChild(submitBtn);
    overlay.appendChild(form);
    formulario.append(overlay);
    document.body.style.overflow = 'hidden';
    let suscribirse = document.getElementById("suscribirse");
    let nombre = document.getElementById("nombre");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        agradecimiento(nombre.value, cerrar);

    });
    adjustScale();

}



function cerrarFormulario() {
    const overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.remove();
    }
    document.body.style.overflow = 'auto';
}

function agradecimiento(e, close) {
    const overlay = document.getElementById("overlay");
    overlay.firstChild.remove();
    const divFinal = document.createElement("div");
    divFinal.className = "formul";
    const cerrar = close;
    const bienvenida = document.createElement("span");
    bienvenida.className = "bienvenida";
    bienvenida.innerHTML = `¡Bienvenido a Frenetic Comics ${e}!
                Gracias por ingresar y querer pertenecer a esta comunidad, estaremos al tanto según tus selecciones de hacer envíos al mail.
                <br><br>
                Cualquier consulta al contacto freneticcomics@gmail.com`;
    divFinal.append(cerrar, bienvenida);
    overlay.appendChild(divFinal);
}

function adjustScale() {
    let viewportHeight = window.innerHeight;
    let viewportWidth = window.innerWidth;
    let scaleValue = 1;


    let element = document.querySelector('.formul');
    if (viewportWidth >= 600) {

        if (element) {
            if (viewportHeight < 975) {
                scaleValue = viewportHeight / 975;
            }
            element.style.transform = 'scale(' + scaleValue + ')';
        }
    } else {
        scaleValue = 1;
        if (element) {
            element.style.transform = 'scale(' + scaleValue + ')';
        }
    }
}

window.onresize = adjustScale;
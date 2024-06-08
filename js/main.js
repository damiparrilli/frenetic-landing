let formulario = document.getElementById("formulario");





function abrirFormulario(){
  
formulario.innerHTML = `
<div class="overlay">
            <form action="" class="formul" id="formul">
                <a href="javascript:cerrarFormulario()"><img src="./img/close.svg" alt="Close" class="img-close"></a>
                <img src="./img/logo-form.png" alt="Frenetic Comics" class="img-form">
                <input type="text" name="nombre" id="nombre" placeholder="Nombre" required>
                <input type="text" name="apellido" id="apellido" placeholder="Apellido" required>
                <input type="email" name="email" id="email" placeholder="Email" required>
                <label class="checkbox-container">
                    <input type="checkbox" name="">
                    <span class="checkmark">Deseo recibir noticias al e-mail sobre nuevos comics y descuentos en ellos.</span>
                </label>
                <label class="checkbox-container">
                    <input type="checkbox" name="">
                    <span class="checkmark">Quiero recibir noticias sobre coleccionables y ediciones especiales.</span>
                </label>
                <label class="checkbox-container">
                    <input type="checkbox" name="">
                    <span class="checkmark">Me gustaría recibir noticias sobre la/s serie/s de artículos que me gustan.</span>
                </label>
                <label class="checkbox-container">
                    <input type="checkbox" name="">
                    <span class="checkmark">Quisiera recibir nuevas curiosidades y artículos relacionados en mi e-mail.</span>
                </label>
                <p>Al registrarte estas aceptando los <a href="#">Términos y condiciones</a> establecidos en la página.</p>
                <input type="submit" value="SUSCRIBIRSE" id="suscribirse">
            </form>
        </div>`;
        document.body.style.overflow = 'hidden';
        let suscribirse = document.getElementById("suscribirse");
        let nombre = document.getElementById("nombre");
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
                agradecimiento(nombre.value);
            
        });
        
}



function cerrarFormulario(){
    formulario.innerHTML = ``;
    document.body.style.overflow = 'auto';
}

function agradecimiento(e){
    formulario.innerHTML = `
<div class="overlay">
            <form action="" class="formul" id="formul">
                <a href="javascript:cerrarFormulario()"><img src="./img/close.svg" alt="Close" class="img-close"></a>
                <span class="bienvenida">¡Bienvenido a Frenetic Comics ${e}!
                Gracias por ingresar y querer pertenecer a esta comunidad, estaremos al tanto según tus selecciones de hacer envíos al mail.
                <br><br>
                Cualquier consulta al contacto freneticcomics@gmail.com</span>
            </form>
        </div>`;
}
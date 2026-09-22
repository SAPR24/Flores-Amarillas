const botonEntrar = document.getElementById("botonEntrar");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");

const musica = document.getElementById("musicaFondo");
const controlMusica = document.getElementById("controlMusica");

const botonMensaje = document.getElementById("botonMensaje");
const carta = document.getElementById("carta");

let musicaSonando = false;


// ----------------------------------
// ABRIR LA PÁGINA Y REPRODUCIR MÚSICA
// ----------------------------------

botonEntrar.addEventListener("click", () => {

    inicio.classList.add("desaparecer");

    contenido.classList.remove("oculto");

    controlMusica.classList.remove("oculto");


    // Volumen de la música
    musica.volume = 0.4;


    // Reproducir música
    musica.play()
        .then(() => {

            musicaSonando = true;

            controlMusica.textContent = "❚❚";

        })
        .catch((error) => {

            console.log("No se pudo reproducir la música:", error);

        });


    // Ocultar completamente la pantalla inicial
    setTimeout(() => {

        inicio.style.display = "none";

    }, 1000);

});


// ----------------------------------
// PAUSAR / REPRODUCIR MÚSICA
// ----------------------------------

controlMusica.addEventListener("click", (evento) => {

    evento.stopPropagation();


    if (musica.paused) {

        musica.play();

        musicaSonando = true;

        controlMusica.textContent = "❚❚";

    } else {

        musica.pause();

        musicaSonando = false;

        controlMusica.textContent = "♫";

    }

});


// ----------------------------------
// MOSTRAR LA CARTA
// ----------------------------------

botonMensaje.addEventListener("click", (evento) => {

    evento.stopPropagation();

    carta.classList.add("mostrar");


    carta.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

});


// ----------------------------------
// CREAR FLORES AL TOCAR LA PANTALLA
// ----------------------------------

document.addEventListener("click", (evento) => {

    // No crear flores mientras esté la pantalla inicial
    if (inicio.style.display !== "none") {

        return;

    }


    // No crear flores si se presiona un botón
    if (evento.target.closest("button")) {

        return;

    }


    const flor = document.createElement("div");

    flor.classList.add("flor-creada");


    const flores = [

        "🌼",
        "🌻",
        "🌼",
        "🌻",
        "✨"

    ];


    const florAleatoria =
        flores[Math.floor(Math.random() * flores.length)];


    flor.textContent = florAleatoria;


    // Tamaño aleatorio
    const tamano =
        Math.floor(Math.random() * 25) + 30;


    flor.style.fontSize = `${tamano}px`;

    flor.style.left = `${evento.clientX}px`;

    flor.style.top = `${evento.clientY}px`;


    document.body.appendChild(flor);


    // Borrar flor después de 5 segundos
    setTimeout(() => {

        flor.remove();

    }, 5000);

});
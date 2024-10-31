document.addEventListener("click", function() {
    const title = document.getElementById("title");
    const menu = document.getElementById("menu");

    // Desvanece el título y muestra el menú
    title.style.opacity = 0;

    // Espera a que el título se desvanezca antes de mostrar el menú
    setTimeout(() => {
        title.style.display = "none";
        menu.style.display = "block";
    }, 2000); // tiempo de 2 segundos
});

document.addEventListener("click", function() {
    const titleBaul = document.getElementById("titleBaul");
    const photoContainer = document.getElementById("photoContainer"); // Asegúrate de tener el contenedor de fotos

    // Desvanece el título
    titleBaul.style.opacity = 0;

    // Espera a que el título se desvanezca antes de ocultarlo y mostrar el contenedor de fotos
    setTimeout(() => {
        titleBaul.style.display = "none"; // Oculta el título

        // Muestra el contenedor de fotos
        photoContainer.style.display = "grid"; // Cambia a grid para mostrar
        photoContainer.classList.add('show'); // Añade la clase 'show' para la transición
    }, 2000); // tiempo de 2 segundos para el desvanecimiento del título
});




// Lista de palabras
const palabras = [
    "Tu sonrisa", "Tu pelo", "Tus ojos", "Tus labios", "Tu risa",
    "Tus carcajadas", "Como me miras", "Tu nariz", "Tus lunares",
    "Como me haces reir", "Tus chistes", "Tus bromas", "Tu cara"
];

function showText(event) {
    // Selecciona una palabra aleatoria de la lista
    const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];

    // Crear un nuevo elemento span
    const text = document.createElement("span");
    text.classList.add("fade-text");
    text.innerText = palabraAleatoria;

    // Posicionar el texto donde se hizo clic
    text.style.left = `${event.clientX}px`;
    text.style.top = `${event.clientY}px`;

    // Agregar el texto al cuerpo de la página
    document.body.appendChild(text);

    // Desvanecer el texto después de 100 ms
    setTimeout(() => {
        text.style.opacity = 1; // Primero, aparece lentamente
    }, 100);

    // Comienza a desvanecerse después de 2 segundos
    setTimeout(() => {
        text.style.opacity = 0;
    }, 2100);

    // Eliminar el texto del DOM después de que se desvanezca
    setTimeout(() => {
        text.remove();
    }, 3100);
}

// Obtén los elementos del modal y las imágenes
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.getElementsByClassName("close")[0];

// Agrega un evento a todas las imágenes para abrir el modal
const images = document.querySelectorAll(".clickable-image");
images.forEach((image) => {
    image.onclick = function() {
        modal.style.display = "block"; // Muestra el modal
        modalImage.src = this.src; // Establece la fuente de la imagen del modal
    }
});

// Cuando el usuario hace clic en el botón de cerrar, oculta el modal
closeModal.onclick = function() {
    modal.style.display = "none"; // Oculta el modal
}




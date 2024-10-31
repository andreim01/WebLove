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



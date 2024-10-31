document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Aquí defines las credenciales correctas
    const validUsername = "andrei"; // Cambia esto
    const validPassword = "andrea"; // Cambia esto

    if (username === validUsername && password === validPassword) {
        // Si las credenciales son correctas, redirige a la página principal
        window.location.href = "mia.html"; // Cambia esto a la página deseada
    } else {
        // Si las credenciales son incorrectas, muestra un mensaje de error
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.style.display = "block";
    }
});

// Redirige a la página de login si no hay un usuario autenticado
if (!sessionStorage.getItem("authenticated")) {
    window.location.href = "index.html";
}

// Luego, agrega al login exitoso el siguiente código en login.js
if (username === validUsername && password === validPassword) {
    sessionStorage.setItem("authenticated", "true");
    window.location.href = "mia.html"; // Cambia esto a la página deseada
}

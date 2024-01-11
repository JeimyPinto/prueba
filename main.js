// Obtener el botón del formulario
const botonFormulario = document.getElementById('boton-formulario');

// Agregar un evento de clic al botón
botonFormulario.addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        alert('¡Bienvenido!');
    }
});

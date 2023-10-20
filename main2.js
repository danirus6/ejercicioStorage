const contactForm = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');
const borrarContactosButton = document.getElementById('borrarContactos');

let contactosGuardados = [];
let nombre = '';
let correo = '';
let mensaje = '';

// Función para guardar un contacto en Local Storage
const guardarContacto = () => {
    const contacto = { nombre, correo, mensaje };
    contactosGuardados = JSON.parse(localStorage.getItem('contactos')) || [];
    contactosGuardados.push(contacto);
    localStorage.setItem('contactos', JSON.stringify(contactosGuardados));
};

// Función para mostrar todos los contactos en el DOM
const mostrarContactos = () => {
    contactList.innerHTML = '';
    for (const contacto of contactosGuardados) {
        const li = document.createElement('li');
        li.textContent = `Nombre: ${contacto.nombre}, Correo: ${contacto.correo}, Mensaje: ${contacto.mensaje}`;
        contactList.appendChild(li);
    }
};

// Evento para guardar un contacto cuando se envía el formulario
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    nombre = document.getElementById('nombre').value;
    correo = document.getElementById('correo').value;
    mensaje = document.getElementById('mensaje').value;
    guardarContacto();
    mostrarContactos();
    // Limpiar el formulario
    contactForm.reset();
});

// Evento para borrar todos los contactos
borrarContactosButton.addEventListener('click', function () {
    localStorage.removeItem('contactos');
    contactosGuardados = [];
    mostrarContactos();
});

// Mostrar los contactos al cargar la página
mostrarContactos();

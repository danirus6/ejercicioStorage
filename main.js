const contactForm = document.getElementById('contactForm');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const mensaje = document.getElementById('mensaje');

const userDisplay = document.getElementById('userDisplay');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userMessage = document.getElementById('userMessage');


const storedContact = JSON.parse(localStorage.getItem('contact'));
if (storedContact) {
    userName.textContent = storedContact.nombre;
    userEmail.textContent = storedContact.correo;
    userMessage.textContent = storedContact.mensaje;
} else {
    userDisplay.style.display = 'none';
}

contactForm.addEventListener("submit", e => {
    e.preventDefault();

    localStorage['nombre'] = nombre.value;
    localStorage['mensaje'] = mensaje.value;
    localStorage['correo'] = correo.value;
    console.log(localStorage);

    const contactData = {
        nombre,
        correo,
        mensaje
    };

    localStorage.setItem('contact', JSON.stringify(contactData));

    userName.textContent = contactData.nombre;
    userEmail.textContent = contactData.correo;
    userMessage.textContent = contactData.mensaje;

    console.log(userName.textContent);

    userDisplay.style.display = 'block';

});
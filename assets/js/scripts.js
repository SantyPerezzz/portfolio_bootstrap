// Navbar collapse
const navLinks = document.querySelectorAll('.navbar-collapse .nav-link, .navbar-brand');
    const navbarCollapse = document.querySelector('.navbar-collapse');
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const collapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
        collapse.hide();
      });
    });

// Respuesta a envío de formulario
document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    const modal = new bootstrap.Modal(document.getElementById('formModal'));
    const modalBody = document.getElementById('formModalBody');
    const modalTitle = document.getElementById('formModalLabel');

    if (response.ok) {
      modalTitle.textContent = "Mensaje enviado con éxito";
      modalBody.textContent = "¡Gracias por tu mensaje!";
      form.reset();
    } else {
      modalTitle.textContent = "Error al enviar mensaje";
      modalBody.textContent = "Ocurrió un error. Por favor, intentalo más tarde.";
    }

    modal.show();

  } catch (error) {
    const modal = new bootstrap.Modal(document.getElementById('formModal'));
    document.getElementById('formModalBody').textContent = "Error de conexión. Intentalo de nuevo.";
    modal.show();
  }
});

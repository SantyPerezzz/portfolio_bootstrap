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

// Form

document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
    alert("¡Gracias por tu mensaje!");
    form.reset();
  } else {
    alert("Ocurrió un error. Por favor, intentalo más tarde.");
  }
});

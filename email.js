document.getElementById("formulario").addEventListener("submit", async function(e) {
    e.preventDefault();

    const form = e.target;
    const data = {
        nombre: form.nombre.value,
        email: form.email.value,
        mensaje: form.mensaje.value
    };

    const response = await fetch("https://formspree.io/f/xwpnyzql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        alert("Mensaje enviado con éxito 🚀");
        form.reset();
    } else {
        alert("Hubo un error ✖️");
    }
});

  const toggleBtn = document.querySelector('.toggle-navbar');
  const navbar = document.querySelector('.navbar');

  toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
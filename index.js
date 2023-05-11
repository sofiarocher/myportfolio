const scaleFactor = 1 / 20;
let isModalOpen = false;
let contrastToggle = false;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    // Added rotate after tutorial
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
      .sendForm(
        "service_80ih0if",
        "template_d9refyl",
        event.target,
        "user_K1PoFs8pB2YVWStDxrUls"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on email@email.com"
        );
      });
  }
  
  function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
  }

  window.addEventListener('scroll', function() {
    // Obtener la posición actual del usuario
    let position = window.pageYOffset || document.documentElement.scrollTop;
  
    // Obtener la posición de la sección
    let section = document.getElementById('project__scroll');
    let positionSection = section.getBoundingClientRect().top + position;
  
    // Si el usuario ha llegado a la sección, mostrar el contenedor
    if (position >= positionSection) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
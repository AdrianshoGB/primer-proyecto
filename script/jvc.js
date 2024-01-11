/*function sendComment() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const textInput = document.getElementById('text-input');
    const mobileNumber = 51944502272; // Mobile number here [currently: Joel's]

    if (name.value.trim() === '') {
      name.style.background = 'lightpink';
      name.style.border = '4px solid red';
      alert('Por favor ingresa su nombre');
      return false;
    }
    if (email.value.trim() === '') {
      email.style.background = 'lightpink';
      email.style.border = '4px solid red';
      alert('Por favor ingresa su correo electronico');
      return false;
    }
  
    const url = `${`https://wa.me/${mobileNumber}?text=` + 'Name: '}${name.value}%0a Email ID: ${email.value}%0a Message: ${textInput.value}`;
  
    window.open(url, '_blank').focus();
    return true;
  }
*/  
  function sendConsulta() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const textInput = document.getElementById('text-input');
    const mobileNumber = 51944502272; /* Mobile number here [currently: Joel's] */
  
    if (name.value.trim() === '') {
      name.style.background = 'lightpink';
      name.style.border = '4px solid red';
      alert('Por favor ingresa su nombre');
      return false;
    }
    if (email.value.trim() === '') {
      email.style.background = 'lightpink';
      email.style.border = '4px solid red';
      alert('Por favor ingresa su correo electronico');
      return false;
    }
  
    const url = `${`https://wa.me/${mobileNumber}?text=` + 'Name: '}${name.value}%0a Email ID: ${email.value}%0a Message: ${textInput.value}`;
  
    window.open(url, '_blank').focus();
    return true;
  }
  
  function sendAsesoramiento() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const textInput = document.getElementById('text-input');
    const mobileNumber = 51944502272; /* Mobile number here [currently: Joel's] */
  
    if (name.value.trim() === '') {
      name.style.background = 'lightpink';
      name.style.border = '4px solid red';
      alert('Por favor ingresa su nombre');
      return false;
    }
    if (email.value.trim() === '') {
      email.style.background = 'lightpink';
      email.style.border = '4px solid red';
      alert('Por favor ingresa su correo electronico');
      return false;
    }
  
    const url = `${`https://wa.me/${mobileNumber}?text=` + 'Name: '}${name.value}%0a Email ID: ${email.value}%0a Message: ${textInput.value}`;
  
    window.open(url, '_blank').focus();
    return true;
  }
  
  /* for the carousel */
  const items = document.querySelectorAll('.carousel .carousel-item');
  
  items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (let i = 1; i < minPerSlide; i = i+1) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0];
      }
      const cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });
  
const inputs = document.querySelectorAll('.input');

const button = document.querySelector('.login--button');

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusout = ({ target }) => {

    if (target.value == ''){
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
    }
}
/* se o username e o password tiver um numero maior ou igual a 8 quero que remova o 'desabled' se não tiver nenhum valor habilita o'desabled'*/
const handleChange = () => {
    const [username, password] = inputs;
  
    if (username.value && password.value.length >= 8) {
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled', '');
    }
  }




inputs.forEach((input) => input.addEventListener('focus', handleFocus));

inputs.forEach((input) => input.addEventListener('focusout', handleFocusout));

inputs.forEach((input) => input.addEventListener('input', handleChange));
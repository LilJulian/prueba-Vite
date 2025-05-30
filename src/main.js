import './style.css';
import { sumar, restar, restaurar } from './modulo.js';
import 'remixicon/fonts/remixicon.css';

const contador = document.querySelector('span')



document.addEventListener('click', (event) => {
  if (event.target.closest('.add')) {
    contador.textContent = sumar();
  }
  if (event.target.closest('.less')) {
    contador.textContent = restar();
  }
  if (event.target.closest('.rest')) {
    contador.textContent = restaurar();
  }

})
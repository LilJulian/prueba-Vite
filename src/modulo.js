import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Estados from './estado.js'
let contador = 0;

function sumar() {
  if (contador < 10) {
    ++contador;
  } else {
    Estados.error();
  }
  return contador;
}
function restar() {
  if (contador > 0) {
    --contador;
  } else {
    Estados.error();
  }
  return contador;
}
function restaurar() {
  contador = 0;
  Estados.satisfactorio();
  return contador;
}

export { sumar, restar, restaurar };
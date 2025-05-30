import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';

class Estados {
  static satisfactorio() {
    return Swal.fire({
      title: 'Hecho!',
      text: 'Operacion realizada con exito',
      icon: 'success',
      confirmButtonText: 'Cerrar'
    })


  }
  static fallo() {
    Swal.fire({
      title: 'Error!',
      text: 'Limite maximo alcanzado',
      icon: 'error',
      confirmButtonText: 'Cerrar'
    })
  }
}

export default Estados
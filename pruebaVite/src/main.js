// const nombreUser = document.querySelector('[name="nombre"]');

// const validar = (e) => {
//   e.preventDefault();

// }


// window.addEventListener('click', () => {
//   console.log(location.hash);
// })
import * as categoriaController from './views/categorias/categoriaController.js';
import * as productoController from './views/productos/productoController.js'
const cuerpo = document.querySelector('.cuerpo')

let listas = [
  {
    nombre: 'categorias',
    path: '/src/views/categorias/index.html',
    src: categoriaController,
  },
  {
    nombre: 'productos',
    path: '/src/views/productos/index.html',
    src: productoController,
  }
]

const llamado = async (url) => {
  const parseo = await fetch(`/src/views/${url}/index.html`);
  return await parseo.text();
}

window.addEventListener('hashchange', async () => {
  const hash = location.hash.slice(1)
  console.log(hash);
  // const categoria = "#Categoria"
  // const producto = "#Producto"
  // if (window.location.hash == categoria) {
  //   cuerpo.innerHTML = await llamado('categorias');
  // }
  // if (window.location.hash == producto) {
  //   cuerpo.innerHTML = await llamado('productos');
  // }
  const objVista = listas.find(({ nombre }) => nombre == hash);

  cuerpo.innerHTML = await llamado(objVista.nombre);
});

// nombre, path, src
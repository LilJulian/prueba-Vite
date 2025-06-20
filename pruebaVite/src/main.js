import * as categoriaController from './views/categorias/categoriaController.js';
import * as productoController from './views/productos/productoController.js'
import * as inicioController from './views/inicio/inicioController.js';

const cuerpo = document.querySelector('.cuerpo')

let listas = [
  {
    nombre: 'categorias',
    path: '/src/views/categorias/index.html',
    src: categoriaController.mostrarCategoria,
  },
  {
    nombre: 'productos',
    path: '/src/views/productos/index.html',
    src: productoController.mostrarProducto,
  },
  {
    nombre: 'inicio',
    path: '/src/views/inicio/index.html',
    src: inicioController.mostrarInicio,
  },
  {
    nombre: 'formulario',
    path: '/src/views/categorias/nuevacategoria.html',
    src: categoriaController.mostrarFormCat,
  }
]

const llamado = async (url) => {
  const parseo = await fetch(url);
  return await parseo.text();
}

window.addEventListener('hashchange', async () => {
  const hash = location.hash.slice(1);
  console.log(hash);
  const objVista = listas.find(({ nombre }) => nombre == hash);
  cuerpo.innerHTML = await llamado(objVista.path);
  await objVista.src();
});



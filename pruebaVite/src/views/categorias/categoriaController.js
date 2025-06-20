export async function mostrarFormCat() {
  // const cuerpo = document.querySelector('.container');
  // const obtener = await fetch(`http://localhost:5173/#formulario`);
  // const parseo = await obtener.json();
  console.log("Hola");

}

export async function mostrarCategoria() {
  const cuerpo = document.querySelector('section');
  const obtener = await fetch(`http://localhost:4000/api/categorias`);
  const parseo = await obtener.json();
  const contenedor = document.createElement("div");
  cuerpo.appendChild(contenedor);
  contenedor.classList.add('categoriasCont')
  parseo.data.forEach(element => {
    const contenedorCat = document.createElement("div");
    contenedor.appendChild(contenedorCat);
    contenedorCat.classList.add('categoriaCont');
    const nombreTitulo = document.createElement('div');
    nombreTitulo.classList.add('nombreCategoria');
    const nombreDescrip = document.createElement('div');
    contenedorCat.appendChild(nombreTitulo);
    contenedorCat.appendChild(nombreDescrip);
    const pNombre = document.createElement("p");
    const pDescripcion = document.createElement("p");
    nombreTitulo.appendChild(pNombre);
    nombreDescrip.appendChild(pDescripcion);
    pDescripcion.textContent = element.descripcion;
    pNombre.textContent = element.nombre;
    const btnContenedor = document.createElement('div');
    contenedorCat.appendChild(btnContenedor);
    const btnEditar = document.createElement('button');
    const btnEliminar = document.createElement('button');
    btnContenedor.append(btnEditar, btnEliminar);
    btnContenedor.classList.add('btnContenedor');
    btnEditar.textContent = "Editar";
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add('botones');
    btnEditar.classList.add('botones');
  });

}
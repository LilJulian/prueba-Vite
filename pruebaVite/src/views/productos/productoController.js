export async function mostrarProducto() {
  const cuerpo = document.querySelector('section');
  const obtener = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  console.log(cuerpo);

  // cuerpo.appendChild(await obtener.json())
}




// Contenedores
const contenedorProductos = document.querySelector("#contenedor-productos")
const contenedorOfertas = document.querySelector("#contenedor-ofertas")
const contenedorVendidos = document.querySelector("#contenedor-vendidos")
const resultadoBotones = document.querySelector("#resultado-botones")

// Botones
const btnModoOscuro = document.querySelector("#btnModoOscuro")
const btnMostrarTodos = document.querySelector("#btnMostrarTodos")
const btnMostrarOfertas = document.querySelector("#btnMostrarOfertas")
const btnMostrarCaros = document.querySelector("#btnMostrarCaros")
const btnLimpiar = document.querySelector("#btnLimpiar")
const buscador = document.querySelector("#buscador")

function crearHTMLProducto(producto) {
  return `
  <div class="producto-card">
    <h3>${producto.nombre}</h3>
    <span class="categoria">${producto.categoria}</span>
    ${
      producto.enOferta
        ? `
      <div>
        <span class="precio-original">${producto.precioOriginal}€</span>
        <div class="precio">${producto.precio}€</div>
        <span class="oferta">OFERTA</span>
      </div>
      `
        : `<div class="precio">${producto.precio}€</div>`
    }
    <p class="stock">${producto.stock} unidades</p>
  </div>
  `
}

// console.log(crearHTMLProducto(productos[1]))

const htmlProductos = productos.map(crearHTMLProducto).join("")
// productos.map((producto) => crearHTMLProducto(producto))
contenedorProductos.innerHTML = htmlProductos

const productosEnOferta = productos.filter((producto) => producto.enOferta)
const htmlOfertas = productosEnOferta.map(crearHTMLProducto).join("")
contenedorOfertas.innerHTML = htmlOfertas

function crearElementoProducto(producto) {
  const divCard = document.createElement("div")
  divCard.className = "producto-card"

  const h3 = document.createElement("h3")
  h3.textContent = producto.nombre
  divCard.appendChild(h3)

  const spanCategoria = document.createElement("span")
  spanCategoria.className = "categoria"
  spanCategoria.textContent = producto.categoria
  divCard.appendChild(spanCategoria)

  const divPrecio = document.createElement("div")
  divPrecio.className = "precio"
  divPrecio.textContent = producto.precio + "€"
  divCard.appendChild(divPrecio)

  if (producto.enOferta) {
    const spanOriginal = document.createElement("span")
    spanOriginal.className = "precio-original"
    spanOriginal.textContent = producto.precioOriginal + "€"
    divCard.insertBefore(spanOriginal, divPrecio)

    const spanOferta = document.createElement("span")
    spanOferta.className = "oferta"
    spanOferta.textContent = "OFERTA"
    divCard.appendChild(spanOferta)
  }

  const stock = document.createElement("p")
  stock.className = "stock"
  stock.textContent = `Stock: ${producto.stock} unidades`
  divCard.appendChild(stock)

  return divCard
}

const masVendidos = productos.slice(0, 4)

masVendidos.forEach((producto) => {
  const productoMasVendido = crearElementoProducto(producto)

  contenedorVendidos.appendChild(productoMasVendido)
})

btnModoOscuro.addEventListener("click", () => {
  document.body.classList.toggle("modo-oscuro")

  const modoOscuroActivo = document.body.classList.contains("modo-oscuro")

  if (modoOscuroActivo) {
    btnModoOscuro.textContent = "Modo claro"
  } else {
    btnModoOscuro.textContent = "Modo Oscuro"
  }
})

btnMostrarTodos.addEventListener("click", () => {
  const html = productos.map(crearHTMLProducto).join("")
  resultadoBotones.innerHTML = `
   <h3>Todos los productos (${productos.length})</h3>
   <div class="grid-productos">${html}</div>
  `
})

btnMostrarOfertas.addEventListener("click", () => {
  const ofertas = productos.filter((p) => p.enOferta)
  const html = ofertas.map(crearHTMLProducto).join("")

  resultadoBotones.innerHTML = `
   <h3>Productos en oferta (${ofertas.length})</h3>
   <div class="grid-productos">${html}</div>
  `
})

btnMostrarCaros.addEventListener("click", () => {
  const premium = productos.filter((p) => p.precio > 500)
  const html = premium.map(crearHTMLProducto).join("")

  resultadoBotones.innerHTML = `
   <h3>Productos premium (${premium.length})</h3>
   <div class="grid-productos">${html}</div>
  `
})

btnLimpiar.addEventListener("click", () => {
  resultadoBotones.innerHTML = ""
})

buscador.addEventListener("input", () => {
  const inputValue = buscador.value.toLowerCase().trim()

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(inputValue),
  )

  const html = productosFiltrados.map(crearHTMLProducto).join("")
  resultadoBotones.innerHTML = `
    <h3>Productos (${productosFiltrados.length})</h3>
    <div class="grid-productos">${html}</div>
  `
})

"use strict";

/* =====================================================
   1. DATOS DE LOS PRODUCTOS
   Para editar un celular, cambia sus valores aquí.
   Los datos que no están confirmados se muestran como "Por confirmar".
   ===================================================== */
const PRODUCTOS = [
  {
    id: 1,
    nombre: "ZTE nubia RedMagic 11 Pro",
    imagen: "./imagenes/redmagic-11-pro.jpg",
    marca: "REDMAGIC",
    color: "#b3001b",
    categoria: "Gaming",
    precio: 699,
    precioTexto: "Desde US$699",
    destacadas: ["Snapdragon 8 Elite Gen 5", "Pantalla 144 Hz", "Batería 7500 mAh"],
    sistema: "Android 16",
    procesador: "Snapdragon 8 Elite Gen 5",
    ram: "Hasta 24 GB",
    almacenamiento: "Hasta 1 TB",
    pantalla: '6.85" AMOLED, 2688 × 1216, 144 Hz',
    bateria: "7500 mAh",
    carga: "80 W por cable y 80 W inalámbrica",
    camaras: "50 MP + 50 MP + 2 MP",
    camaraFrontal: "16 MP",
    resistencia: "IPX8",
    peso: "230 g",
    extras: "Refrigeración líquida AquaCore"
  },
  {
    id: 2,
    nombre: "Asus ROG Phone 9 Pro",
    imagen: "./imagenes/rog-phone-9-pro.jpg",
    marca: "ASUS ROG",
    color: "#2b2f38",
    categoria: "Gaming",
    precio: 1199,
    precioTexto: "US$1,199",
    destacadas: ["Snapdragon 8 Elite", "Pantalla 185 Hz", "Carga 65 W"],
    sistema: "Android 15",
    procesador: "Snapdragon 8 Elite",
    ram: "16 GB o 24 GB",
    almacenamiento: "512 GB o 1 TB",
    pantalla: '6.78" AMOLED, 2400 × 1080, 185 Hz',
    bateria: "5800 mAh",
    carga: "65 W por cable y 15 W inalámbrica",
    camaras: "50 MP + 13 MP + 32 MP (teleobjetivo 3x)",
    camaraFrontal: "32 MP",
    resistencia: "IP68",
    peso: "227 g",
    extras: "Vidrio Gorilla Glass Victus 2"
  },
  {
    id: 3,
    nombre: "RedMagic 10S Pro",
    imagen: "./imagenes/redmagic-10s-pro.jpg",
    marca: "REDMAGIC",
    color: "#4a0e4e",
    categoria: "Gaming",
    precio: 949,
    precioTexto: "Desde US$949",
    destacadas: ["Snapdragon 8 Elite", "Batería 7050 mAh", "Pantalla 144 Hz"],
    sistema: "Android 15",
    procesador: "Snapdragon 8 Elite",
    ram: "12, 16 o 24 GB",
    almacenamiento: "256 GB a 1 TB",
    pantalla: '6.85" AMOLED, 2688 × 1216, 144 Hz',
    bateria: "7050 mAh",
    carga: "80 W",
    camaras: "50 MP + 50 MP + 2 MP",
    camaraFrontal: "16 MP",
    resistencia: "IP54",
    peso: "229 g",
    extras: "Gatillos de 520 Hz e iluminación RGB"
  },
  {
    id: 4,
    nombre: "Samsung Galaxy S26 Ultra",
    imagen: "./imagenes/galaxy-s26-ultra.jpg",
    marca: "SAMSUNG",
    color: "#5c6670",
    categoria: "Flagship",
    precio: 1299.99,
    precioTexto: "Desde US$1,299.99",
    destacadas: ["Snapdragon 8 Elite Gen 5", "Cámara de 200 MP", "S Pen incluido"],
    sistema: "Android 16",
    procesador: "Snapdragon 8 Elite Gen 5 for Galaxy",
    ram: "12 GB o 16 GB",
    almacenamiento: "256 GB a 1 TB",
    pantalla: '6.9" AMOLED 2X, 1440 × 3120, 120 Hz',
    bateria: "5000 mAh",
    carga: "60 W por cable y 25 W inalámbrica",
    camaras: "200 MP + 50 MP + 50 MP + 10 MP",
    camaraFrontal: "12 MP",
    resistencia: "Por confirmar",
    peso: "214 g",
    extras: "S Pen incluido"
  },
  {
    id: 5,
    nombre: "Apple iPhone 17 Pro Max",
    imagen: "./imagenes/iphone-17-pro-max.jpg",
    marca: "APPLE",
    color: "#d9733b",
    categoria: "Flagship",
    precio: null,
    precioTexto: "Por confirmar",
    destacadas: ["Chip A19 Pro", "Cámara triple de 48 MP", "Pantalla 120 Hz"],
    sistema: "iOS",
    procesador: "Apple A19 Pro",
    ram: "Por confirmar",
    almacenamiento: "256 GB a 1 TB",
    pantalla: '6.9" OLED Super Retina XDR, 2868 × 1320, 120 Hz',
    bateria: "La batería más grande de un iPhone (hasta 39 h de video)",
    carga: "50% en unos 20 min con cargador de 40 W",
    camaras: "48 MP + 48 MP + 48 MP",
    camaraFrontal: "18 MP",
    resistencia: "Por confirmar",
    peso: "233 g",
    extras: "Ceramic Shield 2"
  },
  {
    id: 6,
    nombre: "Google Pixel 10 Pro XL",
    imagen: "./imagenes/pixel-10-pro-xl.jpg",
    marca: "GOOGLE",
    color: "#3c4043",
    categoria: "Flagship",
    precio: 1199,
    precioTexto: "Desde US$1,199",
    destacadas: ["Google Tensor G5", "Cámara triple de 50 MP", "IP68"],
    sistema: "Android 16",
    procesador: "Google Tensor G5",
    ram: "16 GB",
    almacenamiento: "256 GB a 1 TB",
    pantalla: '6.8" OLED, 2992 × 1344, 120 Hz',
    bateria: "5200 mAh",
    carga: "45 W por cable y 25 W inalámbrica",
    camaras: "50 MP + 48 MP + 48 MP",
    camaraFrontal: "42 MP",
    resistencia: "IP68",
    peso: "232 g"
  },
  {
    id: 7,
    nombre: "Samsung Galaxy A56 5G",
    imagen: "./imagenes/galaxy-a56-5g.jpg",
    marca: "SAMSUNG",
    color: "#7b8fa1",
    categoria: "Gama media",
    precio: 445,
    precioTexto: "Desde US$445",
    destacadas: ["Exynos 1580", "Pantalla 120 Hz", "Batería 5000 mAh"],
    sistema: "Android 15",
    procesador: "Samsung Exynos 1580",
    ram: "8 GB o 12 GB",
    almacenamiento: "128 GB o 256 GB",
    pantalla: '6.7" AMOLED, 1080 × 2340, 120 Hz',
    bateria: "5000 mAh",
    carga: "45 W",
    camaras: "50 MP + 12 MP + 5 MP",
    camaraFrontal: "12 MP",
    resistencia: "IP67",
    peso: "198 g"
  },
  {
    id: 8,
    nombre: "Samsung Galaxy A16 5G",
    imagen: "./imagenes/galaxy-a16-5g.jpg",
    marca: "SAMSUNG",
    color: "#4f8ef7",
    categoria: "Entrada",
    precio: 145,
    precioTexto: "Desde US$145",
    destacadas: ["Exynos 1330 o Dimensity 6300", "Pantalla 90 Hz", "Batería 5000 mAh"],
    sistema: "Android 14",
    procesador: "Exynos 1330 o Dimensity 6300",
    ram: "4 GB a 8 GB",
    almacenamiento: "128 GB o 256 GB",
    pantalla: '6.7" AMOLED, 1080 × 2340, 90 Hz',
    bateria: "5000 mAh",
    carga: "25 W",
    camaras: "50 MP + 5 MP + 2 MP",
    camaraFrontal: "13 MP",
    resistencia: "IP54",
    peso: "192 g"
  },
  {
    id: 9,
    nombre: "Motorola Moto G35 5G",
    imagen: "./imagenes/moto-g35-5g.jpg",
    marca: "MOTOROLA",
    color: "#e0a100",
    categoria: "Entrada",
    precio: null,
    precioTexto: "Por confirmar",
    destacadas: ["Unisoc T760", "Pantalla 120 Hz", "Batería 5000 mAh"],
    sistema: "Por confirmar",
    procesador: "Unisoc T760",
    ram: "Por confirmar",
    almacenamiento: "Por confirmar",
    pantalla: '6.72" LCD HD+, 120 Hz',
    bateria: "5000 mAh",
    carga: "Por confirmar",
    camaras: "Por confirmar",
    camaraFrontal: "Por confirmar",
    resistencia: "Por confirmar",
    peso: "Por confirmar"
  }
];

// Etiquetas de la ficha técnica, en el orden en que se muestran
const ETIQUETAS_FICHA = {
  sistema: "Sistema",
  procesador: "Procesador",
  ram: "RAM",
  almacenamiento: "Almacenamiento",
  pantalla: "Pantalla",
  bateria: "Batería",
  carga: "Carga",
  camaras: "Cámara trasera",
  camaraFrontal: "Cámara frontal",
  resistencia: "Resistencia",
  peso: "Peso",
  extras: "Extras"
};

/* =====================================================
   2. ESTADO DE LA APLICACIÓN (solo en memoria)
   ===================================================== */
const estado = {
  busqueda: "",
  categoria: "todas",
  rango: "todos",
  orden: "nombre",
  carrito: [] // { id, cantidad }
};

/* =====================================================
   3. REFERENCIAS AL DOM
   ===================================================== */
const $ = (selector) => document.querySelector(selector);

const inputBuscar = $("#buscar");
const selectOrden = $("#orden");
const grilla = $("#grilla");
const mensajeVacio = $("#vacio");
const textoResultados = $("#resultados");
const panelFiltros = $("#panel-filtros");

const dialogFicha = $("#ficha");
const contenidoFicha = $("#ficha-contenido");

const panelCarrito = $("#carrito");
const botonCarrito = $("#btn-carrito");
const botonCerrarCarrito = $("#cerrar-carrito");
const contadorCarrito = $("#contador-carrito");
const listaCarrito = $("#lista-carrito");
const carritoVacio = $("#carrito-vacio");
const subtotalTexto = $("#subtotal");
const notaSubtotal = $("#nota-subtotal");
const botonVaciar = $("#vaciar");
const botonComprar = $("#comprar");
const mensajeCompra = $("#mensaje-compra");

/* =====================================================
   4. UTILIDADES
   ===================================================== */

// Busca un producto por su id
const buscarProducto = (id) => PRODUCTOS.find((p) => p.id === id);

// Formatea un número como precio en dólares
const formatearPrecio = (numero) =>
  "US$" + numero.toLocaleString("es-CO", { maximumFractionDigits: 2 });

// Evita que textos del catálogo rompan el HTML
const escapar = (texto) =>
  String(texto)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Comprueba si un precio cae en el rango elegido
function cumpleRango(precio, rango) {
  if (rango === "0-500") return precio <= 500;
  if (rango === "500-1000") return precio > 500 && precio <= 1000;
  if (rango === "1000+") return precio > 1000;
  return true;
}

/* =====================================================
   5. FILTRADO Y ORDEN
   ===================================================== */

// Comparador según el orden elegido. Los precios por confirmar van al final.
function compararProductos(a, b) {
  if (estado.orden === "precio-asc" || estado.orden === "precio-desc") {
    if (a.precio === null || b.precio === null) {
      return (a.precio === null) - (b.precio === null);
    }
    return estado.orden === "precio-asc" ? a.precio - b.precio : b.precio - a.precio;
  }
  return a.nombre.localeCompare(b.nombre, "es");
}

// Devuelve los productos que cumplen búsqueda, categoría, precio y orden
function obtenerProductosFiltrados() {
  const termino = estado.busqueda.trim().toLowerCase();

  return PRODUCTOS.filter((p) => {
    const coincideTexto =
      !termino ||
      p.nombre.toLowerCase().includes(termino) ||
      p.procesador.toLowerCase().includes(termino);

    const coincideCategoria =
      estado.categoria === "todas" || p.categoria === estado.categoria;

    const coincidePrecio =
      estado.rango === "todos" ||
      (p.precio !== null && cumpleRango(p.precio, estado.rango));

    return coincideTexto && coincideCategoria && coincidePrecio;
  }).sort(compararProductos);
}

/* =====================================================
   6. RENDER DEL CATÁLOGO
   ===================================================== */

// Genera el HTML de una tarjeta
function crearTarjeta(p) {
  return `
    <article class="tarjeta">
      <button type="button" class="tarjeta__imagen" style="--color: ${escapar(p.color)}"
              data-ver="${p.id}" aria-label="Ver ficha técnica de ${escapar(p.nombre)}">
        <img src="${escapar(p.imagen)}" alt="${escapar(p.nombre)}" loading="lazy" width="512" height="512">
      </button>
      <div class="tarjeta__cuerpo">
        <p class="tarjeta__categoria">${escapar(p.categoria)}</p>
        <h3 class="tarjeta__nombre">${escapar(p.nombre)}</h3>
        <ul class="tarjeta__specs">
          ${p.destacadas.map((s) => `<li>${escapar(s)}</li>`).join("")}
        </ul>
        <div class="tarjeta__pie">
          <span class="tarjeta__precio">${escapar(p.precioTexto)}</span>
          <button type="button" class="btn btn--primario" data-agregar="${p.id}"
                  aria-label="Agregar ${escapar(p.nombre)} al carrito">Agregar</button>
        </div>
      </div>
    </article>`;
}

// Dibuja el catálogo según el estado actual
function renderizarCatalogo() {
  const productos = obtenerProductosFiltrados();

  grilla.innerHTML = productos.map(crearTarjeta).join("");
  mensajeVacio.hidden = productos.length > 0;
  textoResultados.textContent = `${productos.length} de ${PRODUCTOS.length} celulares`;
}

/* =====================================================
   7. FICHA TÉCNICA (modal)
   ===================================================== */

function abrirFicha(id) {
  const p = buscarProducto(id);
  if (!p) return;

  const filas = Object.keys(ETIQUETAS_FICHA)
    .filter((clave) => p[clave] !== undefined)
    .map(
      (clave) => `
        <div>
          <dt>${ETIQUETAS_FICHA[clave]}</dt>
          <dd>${escapar(p[clave])}</dd>
        </div>`
    )
    .join("");

  contenidoFicha.innerHTML = `
    <img class="ficha__foto" src="${escapar(p.imagen)}" alt="${escapar(p.nombre)}" width="512" height="512">

    <header class="ficha__cabecera" style="--color: ${escapar(p.color)}">
      <h2 id="ficha-titulo">${escapar(p.nombre)}</h2>
      <p>${escapar(p.categoria)} · ${escapar(p.precioTexto)}</p>
    </header>

    <dl class="ficha__lista">${filas}</dl>

    <div class="ficha__acciones">
      <button type="button" class="btn btn--secundario" data-cerrar-ficha>Cerrar</button>
      <button type="button" class="btn btn--primario" data-agregar="${p.id}">Agregar al carrito</button>
    </div>`;

  dialogFicha.showModal();
}

// Cierra la ficha al hacer clic fuera del contenido
dialogFicha.addEventListener("click", (evento) => {
  if (evento.target === dialogFicha) {
    dialogFicha.close();
  }
});

/* =====================================================
   8. CARRITO (en memoria)
   ===================================================== */

function agregarAlCarrito(id) {
  const item = estado.carrito.find((i) => i.id === id);
  if (item) {
    item.cantidad += 1;
  } else {
    estado.carrito.push({ id, cantidad: 1 });
  }
  mensajeCompra.textContent = "";
  renderizarCarrito();
}

function cambiarCantidad(id, cambio) {
  const item = estado.carrito.find((i) => i.id === id);
  if (!item) return;

  item.cantidad += cambio;
  if (item.cantidad <= 0) {
    estado.carrito = estado.carrito.filter((i) => i.id !== id);
  }
  renderizarCarrito();
}

function vaciarCarrito() {
  estado.carrito = [];
  renderizarCarrito();
}

// Dibuja el carrito, el contador y el subtotal
function renderizarCarrito() {
  const totalUnidades = estado.carrito.reduce((suma, i) => suma + i.cantidad, 0);

  contadorCarrito.textContent = totalUnidades;
  carritoVacio.hidden = totalUnidades > 0;

  listaCarrito.innerHTML = estado.carrito
    .map((item) => {
      const p = buscarProducto(item.id);
      return `
        <li class="carrito__item">
          <div>
            <strong>${escapar(p.nombre)}</strong>
            <span>${escapar(p.precioTexto)}</span>
          </div>
          <div class="cantidad">
            <button type="button" data-restar="${p.id}" aria-label="Quitar uno de ${escapar(p.nombre)}">−</button>
            <span aria-live="polite">${item.cantidad}</span>
            <button type="button" data-sumar="${p.id}" aria-label="Agregar uno más de ${escapar(p.nombre)}">+</button>
          </div>
        </li>`;
    })
    .join("");

  // Subtotal: solo suman los productos con precio confirmado
  const subtotal = estado.carrito.reduce((suma, item) => {
    const p = buscarProducto(item.id);
    return p.precio === null ? suma : suma + p.precio * item.cantidad;
  }, 0);
  subtotalTexto.textContent = formatearPrecio(subtotal);

  const hayPorConfirmar = estado.carrito.some((i) => buscarProducto(i.id).precio === null);
  notaSubtotal.hidden = !hayPorConfirmar;
  notaSubtotal.textContent =
    "Incluye productos con precio por confirmar, que no suman al subtotal.";

  botonVaciar.disabled = totalUnidades === 0;
  botonComprar.disabled = totalUnidades === 0;
}

function abrirCarrito() {
  panelCarrito.hidden = false;
  botonCarrito.setAttribute("aria-expanded", "true");
  botonCerrarCarrito.focus();
}

function cerrarCarrito() {
  panelCarrito.hidden = true;
  botonCarrito.setAttribute("aria-expanded", "false");
  botonCarrito.focus();
}

/* =====================================================
   9. EVENTOS
   ===================================================== */

// Búsqueda en tiempo real
inputBuscar.addEventListener("input", (e) => {
  estado.busqueda = e.target.value;
  renderizarCatalogo();
});

// Orden
selectOrden.addEventListener("change", (e) => {
  estado.orden = e.target.value;
  renderizarCatalogo();
});

// Filtros de categoría y precio
document.querySelectorAll('input[name="categoria"]').forEach((radio) => {
  radio.addEventListener("change", (e) => {
    estado.categoria = e.target.value;
    renderizarCatalogo();
  });
});

document.querySelectorAll('input[name="precio"]').forEach((radio) => {
  radio.addEventListener("change", (e) => {
    estado.rango = e.target.value;
    renderizarCatalogo();
  });
});

// Delegación de eventos: botones de tarjetas, ficha y carrito
document.addEventListener("click", (e) => {
  const verFicha = e.target.closest("[data-ver]");
  if (verFicha) {
    abrirFicha(Number(verFicha.dataset.ver));
    return;
  }

  const agregar = e.target.closest("[data-agregar]");
  if (agregar) {
    agregarAlCarrito(Number(agregar.dataset.agregar));
    return;
  }

  if (e.target.closest("[data-cerrar-ficha]")) {
    dialogFicha.close();
    return;
  }

  const sumar = e.target.closest("[data-sumar]");
  if (sumar) {
    cambiarCantidad(Number(sumar.dataset.sumar), 1);
    return;
  }

  const restar = e.target.closest("[data-restar]");
  if (restar) {
    cambiarCantidad(Number(restar.dataset.restar), -1);
  }
});

// Abrir y cerrar el carrito
botonCarrito.addEventListener("click", () => {
  if (panelCarrito.hidden) {
    abrirCarrito();
  } else {
    cerrarCarrito();
  }
});

botonCerrarCarrito.addEventListener("click", cerrarCarrito);

// Escape cierra el carrito (la ficha se cierra sola con Escape al ser un dialog)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !panelCarrito.hidden && !dialogFicha.open) {
    cerrarCarrito();
  }
});

// Vaciar y comprar (demostración, sin cobro real)
botonVaciar.addEventListener("click", () => {
  vaciarCarrito();
  mensajeCompra.textContent = "Carrito vaciado.";
});

botonComprar.addEventListener("click", () => {
  vaciarCarrito();
  mensajeCompra.textContent =
    "¡Gracias! Esta es una demostración: no se realizó ningún cobro.";
});

/* =====================================================
   10. INICIO
   ===================================================== */
function iniciar() {
  // En escritorio los filtros se muestran abiertos; en móvil quedan colapsados
  panelFiltros.open = window.matchMedia("(min-width: 768px)").matches;

  renderizarCatalogo();
  renderizarCarrito();
}

iniciar();
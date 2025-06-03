//////////////////////////////////////////////////
// Inicializando carga de JavaScript del Proyecto!
console.log('Init JavaScript loading of Project...');

/*
/////////////
// IndexedDB!

// Check Browser support
if (!window.indexedDB) {
  alert("Sorry! Your browser does not support IndexedDB");
}
const dbName = "WebPageDB",
  customerData = [
    { userkey: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
    { userkey: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
  ];
// Open DataBase
//let request = window.indexedDB.open(dbName, 3);
// Error Handling
let request = window.indexedDB.open(dbName);
request.onerror = event => {
  console.error("Database error: " + event.target.errorCode);
};
//request.onsuccess = event => {
// This event is only implemented in recent browsers
request.onupgradeneeded = (event) => {
  const db = event.target.result;
  const customersObjectStore = db.createObjectStore("customers", { keyPath: "userkey" });
  customersObjectStore.createIndex("name", "name", { unique: false });
  customersObjectStore.createIndex("email", "email", { unique: true });
  customersObjectStore.transaction.oncomplete = (event) => {
    // Store values in the newly created customersObjectStore
    const customersObjectStore = db
      .transaction("customers", "readwrite")
      .objectStore("customers");
    customerData.forEach((customer) => {
      customersObjectStore.add(customer);
    });
  };
};
// Let some dead Time...
const queryObjectStore = db.transaction("customers").objectStore("customers");
queryObjectStore.openCursor().onsuccess = (event) => {
  const cursor = event.target.result;
  if (cursor) {
    console.log(`Name for userkey ${cursor.key} is ${cursor.value.name}`);
    console.log(`row: ${cursor.value}`);
    cursor.continue();
  } else {
    console.log("No more entries!");
  }
};

//////////////////////////
// Window: sessionStorage!

// Save data to sessionStorage
sessionStorage.setItem("key", "value");
// Get saved data from sessionStorage
let data = sessionStorage.getItem("key");
// Remove saved data from sessionStorage
sessionStorage.removeItem("key");
// Remove all saved data from sessionStorage
sessionStorage.clear();
*/

//////////////////////
// Lista de Productos!
let listaProductos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100.00,
        //img: './assets/placeholder.png'
    }, {
        id: 2,
        nombre: "Producto 2",
        precio: 200.00,
    }, {
        id: 3,
        nombre: "Producto 3",
        precio: 300.00,
    }, {
        id: 4,
        nombre: "Producto 4",
        precio: 400.00,
    }
];

//////////////////
// Etiquetas HTML!
let contenedorProductos = document.getElementById("contenedor-productos");
// Por si agrego un filtro-buscador...
//let inputBuscar = document.getElementById("input-buscar");
let totalCarrito = document.getElementById("total-carrito");
let itemsCarrito = document.getElementById("items-carrito");

//inputBuscar.addEventListener("keyup", filtrarProductos);

/////////////////////
// Filtrar Productos!
function filtrarProductos() {
    let valorInput = inputBuscar.value;
    let listaProductosFiltrados = listaProductos.filter(producto => producto.nombre.toLowerCase().includes(valorInput.toLowerCase())); // Guarda productos con el mismo nombre en un array nuevo.
    mostrarProductos(listaProductosFiltrados)
}

/////////////////////
// Mostrar Productos!
function mostrarProductos(array) {
    let htmlProductos = "";

    /*
    //Eleji forEach porque es mas eficiente en memoria.
    for (i = 0; i < array.length; i++) {
        htmlProductos += `
<article>
  <span>${producto.nombre}</span>
  <!--<img src="${producto.img}" alt="">-->
  <img src="./assets/placeholder.png" alt="placeholder" />
  <p>Detalles del ${producto.nombre} sugerido.</p>
  <p class="price">$ ${producto.precio}</p>
  <button type="button" onclick="agregarCarritos(${producto.id})" class="button">Agregar</button>
</article>
`
      }
    */
    array.forEach(producto => {
        htmlProductos += `
<article>
  <span>${producto.nombre}</span>
  <!--<img src="${producto.img}" alt="${producto.img}">-->
  <img src="./assets/placeholder.png" alt="placeholder" />
  <p>Detalles del ${producto.nombre} sugerido.</p>
  <p class="price">$ ${producto.precio}</p>
  <button type="button" onclick="agregarCarritos(${producto.id})" class="button">Agregar</button>
</article>
`;
    });

    contenedorProductos.innerHTML = htmlProductos
}

//////////////////////
// Agregar al Carrito!
let carrito = [];

function agregarCarritos(id) { 
    let objetoEncontrado = listaProductos.find(producto => producto.id === id); // Guardamos en una variable nueva el producto con igual id.
    carrito.push(objetoEncontrado);
    console.log(carrito);
    
    mostrarCarrito(carrito)
}
function eliminarProducto(id) {
    let objetoEliminado = carrito.findIndex(producto => producto.id === id);
    carrito.splice(objetoEliminado, 1);

    mostrarCarrito(carrito)
}
function mostrarCarrito(array) {
    let htmlCarrito = "";
    
    array.forEach(producto => {
        htmlCarrito += `
<article>
  <span>${producto.nombre}</span>
  <!--<img src="${producto.img}" alt="${producto.img}">-->
  <img src="./assets/placeholder.png" alt="placeholder" />
  <p>Detalles del ${producto.nombre} sugerido.</p>
  <p class="price">$ ${producto.precio}</p>
  <button type="button" onclick="eliminarProducto(${producto.id})" class="button">Quitar</button>
</article>
`
      });
    itemsCarrito.innerHTML = htmlCarrito;
    totalCarrito.innerHTML = array.reduce((acc, producto) => acc + producto.precio, 0)
}
/////////////////////////
// Inicializar Funciones!
function init() {
  mostrarProductos(listaProductos)
}

init();

////////////////////////////////////////////////
// Finalizando carga de JavaScript del Proyecto!
console.log('End JavaScript loading of Project...');

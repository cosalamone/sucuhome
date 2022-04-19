

// { especie: "", tipo: "", precio: , foto:"},
//{ material: "", color:"", tamaño: , precio:  ,foto: "" }


// PRODUCTOS 
let listaProductos = [
    { categoria: "suculentas", especie: "haworthia", tipo: "fasciata", precio: 200, foto: "(./fotos/rsz_suculentas-2.jpg" },
    { categoria: "suculentas", especie: "graptopetalum", tipo: "paraguayense", precio: 150, foto: "./fotos/rsz_suculentas-1.jpg" },
    { categoria: "suculentas", especie: "echeveria", tipo: "lola", precio: 250 },
    { categoria: "suculentas", especie: "gasteria", tipo: "", precio: 250 },
    { categoria: "suculentas", especie: "sedum", tipo: "burrito", precio: 250 },
    { categoria: "plantas de interior", especie: "calathea", tipo: "tiostar", precio: 350 },
    { categoria: "plantas de interior", especie: "pothus", tipo: "variegado", precio: 500 },
    { categoria: "plantas de interior", especie: "monstera deliciosa", tipo: "", precio: 1200, },
    { categoría: "macetas", material: "plastico", color: "negra", tamaño: 8, precio: 50 },
    { categoría: "macetas", material: "plastico", color: "negra", tamaño: 12, precio: 70 },
    { categoría: "macetas", material: "plastico", color: "negra", tamaño: 24, precio: 140 },
    { categoría: "macetas", material: "plastico", color: "blanco", tamaño: 8, precio: 50 },
    { categoría: "macetas", material: "plastico", color: "blanco", tamaño: 12, precio: 70 },
    { categoría: "macetas", material: "plastico", color: "blanco", tamaño: 24, precio: 140 },
    { categoría: "macetas", material: "barro", color: "terracota", tamaño: 8, precio: 90 },
    { categoría: "macetas", material: "barro", color: "terracota", tamaño: 12, precio: 120 },
    { categoría: "macetas", material: "barro", color: "terracota", tamaño: 24, precio: 200 },
]

// ${}


window.onload = mostrarProductos;


// recorrer array, x cada pd generar html + innerHTML  <div class="row row-cols-1 row-cols-md-3 g-4"> get elemen ID 

function mostrarProductos(listaProductos) {
    let producto = ""
    for (let i = 0; i < listaProductos.length; i++) {
        producto += document.getElementById("articulos").innerHTML = function generarHTML(listaProductos)
    }
    return (producto)
}




const producto = { especie: "haworthia", tipo: "fasciata", descripcion: "¡Suculenta ideal para interior! Ideal para lugares iluminados sin sol directo", precio: 200, foto: "(./fotos/rsz_suculentas-2.jpg" }
let html = "";

function generarHTML(producto) {
    html =
        `<div class="col">
        <div class="card">
             <div title= "${producto.especie} ${producto.tipo}" class="cover cover-small"
                style="background-image: url(${producto.foto})" ;>
            </div>

             <div class="card-body">
                 <h5 class="card-title">${producto.especie} ${producto.tipo}</h5>
                 <p>${producto.descripcion}</p>
                 <span class="badge bg-dark">$${producto.precio}</span>

                 </div>
            </div >
    </div > `

    return html
}




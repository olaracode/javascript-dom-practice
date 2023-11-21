const products = [
    {
        id: 1,
        name: "Teclado",
        price: 10,
        img: "https://picsum.photos/200"
    },
    {
        id: 2,
        name: "Mouse",
        price: 10,
        img: "https://picsum.photos/200"
    },
    {
        id: 3,
        name: "Camara",
        price: 10,
        img: "https://picsum.photos/200"
    },
    {
        id: 4,
        name: "Monitor",
        price: 10,
        img: "https://picsum.photos/200"
    },
    {
        id: 5,
        name: "Audifonos",
        price: 10,
        img: "https://picsum.photos/200"
    },
    {
        id: 1,
        name: "Teclado",
        price: 10,
        img: "https://picsum.photos/200"
    },
    {
        id: 2,
        name: "Mouse",
        price: 10,
        img: "https://picsum.photos/200"
    },
    {
        id: 3,
        name: "Camara",
        price: 10,
        img: "https://picsum.photos/200"
    },
    {
        id: 4,
        name: "Monitor",
        price: 10,
        img: "https://picsum.photos/200"
    },
    {
        id: 5,
        name: "Audifonos",
        price: 10,
        img: "https://picsum.photos/200"
    },
    
]


function renderProductList(productList){
    const productGrid = document.getElementById("product-grid");
    // Vacio el product grid previo
    productGrid.innerHTML = "";
    for(let product of productList){
        // crear un div por cada producto
        const productDiv = document.createElement("div");
        productDiv.className = "col-12 col-md-6 col-lg-3";
        
        // `texto ${variables}`
        const productCard = `
        <div class="card">
            <img src=${product.img} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.name} - ${product.id}</h5>
                <a href="#" class="btn btn-primary">Comprame! ${product.price}$</a>
            </div>
        </div>
        `;
        productDiv.innerHTML = productCard;

        // 
        productGrid.appendChild(productDiv);
    }
}


// es registrar el evento onChange del input
// Y por ahora hacer console.log()

let searchTerm = "";

// Agregarle un evento
const filterInput = document.getElementById('search');
filterInput.addEventListener("change", function(event){
    searchTerm = event.target.value;
})

// agarrar un evento que es cuando le de click a la busqueda
// event()
// onsubmit -> en envio
const searchForm = document.getElementById("form");

searchForm.addEventListener("submit", (event) => {
    // event.preventDefault()
    event.preventDefault(); // previene el funcionamiento de fabrica

    // tengo que filtrar mi lista de productos y ver si hay alguno con el termino de busqueda
    // filter()
    const results = products.filter((product) => product.name.toLowerCase() === searchTerm.toLowerCase());

    // Re Renderizar la lista
    renderProductList(results);
})




// A penas cargue la ventana 
window.onload = function() {
    // Renderiza la lista inicial
    renderProductList(products);
}
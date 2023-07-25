let data = {"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg","rating":{"rate":2.1,"count":430}};

function getData() {
    let promesa = fetch("https://fakestoreapi.com/products/", {
    method: "GET"
    });
    promesa
    .then((response) => {
        response
        .json()
        .then((data) => {
            createCards(data);
        })
        .catch((error) => {
            console.error("Problema en el json", error);
        });
    })
    .catch((error) => {
        console.error(error, "ocurrió un error en la solicitud");
    });
}

function createCards(data) {
    let productContainer = document.getElementById("productContainer");
    let cardsHTML = "";

    data.forEach((producto) => {
    cardsHTML += `
        <div class="card mb-6 ">
        <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
        <div class="card-body">
            <h5 class="card-title">${producto.title}</h5>
            <p class="card-text">${producto.description}</p>
            <p class="card-text">Precio: $${producto.price}</p>
            <p class="card-text">Valoración: ${producto.rating.rate} (${producto.rating.count} reseñas)</p>
        </div>
        </div>
    `;
    });

    productContainer.innerHTML = cardsHTML;
}

getData();
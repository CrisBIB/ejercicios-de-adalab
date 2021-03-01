'use strict';

// Global vars (that are arrays)
let products = [];
let cart = [];

// FIRST STEPS WHEN STARTING WEB

// 1. Get data from API and save in array products
const getDataApi = () => {
    fetch('./api/data.json')
        .then(response => response.json())
        .then(data => {
            products = data.cart.items;
            paintProducts();
        })
}

// 2. Paint products
const productsElement = document.querySelector('.js-products'); 

const getProductHtmlCode = (product) => {
    let htmlCode = '';
    htmlCode += `<article class="card">`;
    htmlCode += `<img src="${product.imageUrl}" class="card__img" alt="Producto: ${product.name}"></img >`;
    htmlCode += `<h3 class ="card__title">${product.name}</h3>`;
    htmlCode += `<p class="card__description">${product.price} €</p>`;
    htmlCode += `<button class="js-add-product card__btn" data-id="${product.id}">Añadir a la cesta</button>`;
    htmlCode += `</article>`;
    return htmlCode;
}

const paintProducts = () => {
    let productsCode = '';
    for (const product of products) {
        productsCode += getProductHtmlCode(product);
    }
    productsElement.innerHTML = productsCode;
    listenAddProductsBtns();
};

// 3. Listen products
const listenAddProductsBtns = () => {
    const productsBtns = document.querySelectorAll('.js-add-product');
    for (const productBtn of productsBtns) {
        productBtn.addEventListener('click', addProduct);
    }
};

// EVENTOS

// 1. Add to the cart
const addProduct = (ev) => {
    // Get id from clicked product
    const clickedId = ev.target.dataset.id;
    // Check if clicked product is already at the cart
    let foundItem;
    for (const item of cart) {
        if (item.id === clickedId) {
            foundItem = item;
        }
    }
    if (foundItem === undefined) { // If not, I seek it (the clicked product)
        let foundProduct;
        for (const product of products) {
            if (product.id === clickedId) {
                foundProduct = product;
            }
        }
        cart.push({
            id: foundProduct.id,
            name: foundProduct.name,
            price: foundProduct.price,
            quantity: 1
        });
    } else { // If already exists, I increment it
        foundItem.quantity += 1;
        console.log(foundItem);
    }

    paintCartItems();
};

// 2. Remove from the cart
const removeProduct = (ev) => {
    ev.target.dataset.id
};

// 3. Paint cart items
const cartElement = document.querySelector('.js-cart');

const getCartItemHtmlCode = item => {
    let htmlCode = '';
    htmlCode += `<tr>`;
    htmlCode += `  <td>${item.name}</td>`;
    htmlCode += `  <td>${item.price}</td>`;
    htmlCode += `  <td>`;
    htmlCode += `    <button class="js-dec-btn card__btn" data-id="${item.id}">-</button>`;
    htmlCode += `    ${item.quantity}`;
    htmlCode += `    <button class="js-inc-btn card__btn" data-id="${item.id}">+</button>`;
    htmlCode += `  </td>`;
    htmlCode += `  <td class="text-align-right">${item.price * item.quantity}€</td>`;
    htmlCode += `</tr>`;
    return htmlCode;
};

const getCartTotalHtmlCode = () => {
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    let htmlCode = '';
    htmlCode += `<tr class="text--bold">`;
    htmlCode += `  <td>Total</td>`;
    htmlCode += `  <td colspan="3" class="text-align-right">${total}€</td>`;
    htmlCode += `</tr>`;
    return htmlCode;
};

const getTotalPrice = () => {
    let total = 0;
    for (const item of cart) {
        total += item.price * item.quantity;
    }
    return total;
}

const paintCartItems = () => {
    cartElement.innerHTML = '';
    for (const item of cart) {
        cartElement.innerHTML += getCartItemHtmlCode(item);
    }
    cartElement.innerHTML += getCartTotalHtmlCode();
    listenCartBtns();
}

// Listen cart buttons
const listenCartBtns = () => {

    const cartIncBtns = document.querySelectorAll('.js-inc-btn');
    for (const cartIncBtn of cartIncBtns) {
    cartIncBtn.addEventListener('click', addProduct);
    }

    const cartDecBtns = document.querySelectorAll('.js-dec-btn');
    for (const cartDecBtn of cartDecBtns) {
        cartDecBtn.addEventListener('click', removeProduct);
        }
};

// STARTING WEB...
getDataApi();
paintCartItems();
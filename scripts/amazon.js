// console.log("hello");
// idea of js 1.save the data 2.generate html 3.make interactive


// array of obj
// calc in cents 1doolar=100cents
// 1.save data
// data script
// make sure all have same prop

// 2.generate html
// .. out of scripts folder
import { cart, addtoCart } from '../data/cart.js';

import { products } from '../data/products.js';

import { formatCurrency } from './utils/money.js';



let productshtml = '';
products.forEach((product) => {
  productshtml += `
     <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
    `;

});
console.log("js run");

// 3.put it on page-dom -make interactive
// class prdts grid contains all prd details

document.querySelector('.js-products-grid').innerHTML = productshtml;
// now generated the html using js no need of that in hrml file deletete thus portion
// benifit of adding html just by adding objects to array


function updatecartQuantity(){
  let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;


    });


    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

}

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    // how do we know which product to add?
    // data attribute:is just another  html attribute allow us to attach any info to an elem
    const productId = button.dataset.productId;
    // dataset property gives all dataattributes attached to elem
    addtoCart(productId);
    updatecartQuantity();
    // just to make sure
    // console.log(cartQuantity);
    // console.log(cart);

  });

});







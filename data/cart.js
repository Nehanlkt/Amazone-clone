
// 1.save data
export let cart=[{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity:2,
    // this prdid alone will help to find image n name too cld as data normalsing

},{
    productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity:1

}];


export function addtoCart(productId) {
  // steps 1.check if product already in cart
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;

    }

  });
  // 2.if it is in cart,increase the quantity
  if (matchingItem) {
    matchingItem.quantity += 1;
  }
  // 3.if not in cart,add to cart
  else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
}

export function removefromcart(productId){
    const newCart=[];
    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }

    });


    cart=newCart;

}
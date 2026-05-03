import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryoptions.js";
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary() {
    // console.log('run');
    // 3.add everything together
    let productPriceCents = 0;

    // 2.add all shipping costs together
    let shippingPriceCents = 0;



    // 1.save data(model)
    // 1.loop through cart
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        //    2.foreach product,price*quantity
        productPriceCents += product.priceCents * cartItem.quantity;
        // 1.loop through cart
        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents;







    });
    //    adding these 2 gives result
    const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
    // calculating 10per tax 10/100=0.1
    const taxCents = totalBeforeTaxCents * 0.1;
    const totalCents = totalBeforeTaxCents + taxCents;


    // 2.generate html
    const paymentSummaryHtml = `
<div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
          `;

        //   3.making interactive
        document.querySelector('.js-payment-summary').innerHTML=paymentSummaryHtml;

}
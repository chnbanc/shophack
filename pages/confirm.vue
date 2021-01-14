<template>
  <div class="order">
        <div class="page-content pt-10 pb-10">
            <div class="step-by pt-2 pb-2 pr-4 pl-4">
                <h3 class="title title-simple title-step visited"><nuxt-link to="/cart">1. Shopping Cart</nuxt-link></h3>
                <h3 class="title title-simple title-step visited"><nuxt-link to="/checkout">2. Checkout</nuxt-link></h3>
                <h3 class="title title-simple title-step active"><nuxt-link to="/confirm">3. Order Complete</nuxt-link></h3>
            </div>
            <div class="container mt-8">
                <div class="order-message">
                    <i class="fas fa-check"></i>Thank you, Your order has been received.
                </div>
                

                <div class="order-results pt-8 pb-8">
                    <div class="overview-item">
                        <span>Order number</span>
                        <strong>4935</strong>
                    </div>
                    <div class="overview-item">
                        <span>Status</span>
                        <strong>Processing</strong>
                    </div>
                    <div class="overview-item">
                        <span>Date</span>
                        <strong>November 20, 2020</strong>
                    </div>
                    <div class="overview-item">
                        <span>Total</span>
                        <strong>$198.00</strong>
                    </div>
                    <div class="overview-item">
                        <span>Payment method</span>
                        <strong>Online Payment</strong>
                    </div>
                </div>

                <h2 class="title title-simple text-left pt-3">Order Details</h2>
                <div class="order-details mb-1">
                    <table class="order-details-table">
                        <thead>
                            <tr class="summary-subtotal">
                                <td>
                                    <h3 class="summary-subtitle">Product</h3>
                                </td>	
                                <td></td>		
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="product-name">Beige knitted shoes <span> <i class="fas fa-times"></i> 1</span></td>
                                <td class="product-price">$84.00</td>
                            </tr>
                            <tr>
                                <td class="product-name">Best dark blue pedestrian <span><i class="fas fa-times"></i> 1</span></td>
                                <td class="product-price">$76.00</td>
                            </tr>
                            <tr>
                                <td class="product-name">Women's fashion handing <span><i class="fas fa-times"></i> 2</span></td>
                                <td class="product-price">$152.00</td>
                            </tr>
                            <tr class="summary-subtotal">
                                <td>
                                    <h4 class="summary-subtitle">Subtotal:</h4>
                                </td>
                                <td class="summary-subtotal-price">$312.00</td>												
                            </tr>
                            <tr class="summary-subtotal">
                                <td>
                                    <h4 class="summary-subtitle">Shipping:</h4>
                                </td>
                                <td class="summary-subtotal-price">Free shipping</td>												
                            </tr>
                            <tr class="summary-subtotal">
                                <td>
                                    <h4 class="summary-subtitle">Payment method:</h4>
                                </td>
                                <td class="summary-subtotal-price">Cash on delivery</td>												
                            </tr>
                            <tr class="summary-subtotal">
                                <td>
                                    <h4 class="summary-subtitle">Total</h4>
                                </td>
                                <td>
                                    <p class="summary-total-price">$312.00</p>
                                </td>												
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 class="title title-simple text-left pt-8 mb-2">Billing Address</h2>
                <div class="address-info pb-8 mb-6">
                    <p class="address-detail pb-2">
                        John Doe<br>
                        Donald Company<br>
                        Steven street<br>
                        El Carjon, CA 92020<br>
                        123456789
                    </p>
                    <p class="email">mail@donald.com</p>
                </div>

                <a href="shop.html" class="btn btn-icon-left btn-back btn-md mb-4"><i class="fas fa-arrow-left"></i> Back to List</a>
            </div>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
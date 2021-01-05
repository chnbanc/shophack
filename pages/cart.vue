<template>
  <div class="cart">
        <div class="page-content pt-10 pb-10">
            <div class="step-by pt-2 pb-2 pr-4 pl-4">
                <h3 class="title title-simple title-step active"><a href="cart.html">1. Shopping Cart</a></h3>
                <h3 class="title title-simple title-step"><a href="checkout.html">2. Checkout</a></h3>
                <h3 class="title title-simple title-step"><a href="order.html">3. Order Complete</a></h3>
            </div>
            <div class="container mt-8 mb-4">
                <div class="row gutter-lg">
                    <div class="col-lg-8 col-md-12">
                        <table class="shop-table cart-table mt-2">
                            <thead>
                                <tr>
                                    <th><span>Product</span></th>
                                    <th></th>
                                    <th><span>Price</span></th>
                                    <th><span>quantity</span></th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="product-thumbnail">
                                        <figure>
                                            <a href="product-simple.html">
                                                <img src="@/assets/images/products/product15.jpg" width="100" height="100"
                                                alt="product">
                                            </a>
                                            <a href="#" class="product-remove" title="Remove this product">
                                                <i class="fas fa-times"></i>
                                            </a>
                                        </figure>
                                    </td>
                                    <td class="product-name">
                                        <div class="product-name-section">
                                            <a href="product-simple.html">Solid pattern in fashion summer dress</a>
                                        </div>
                                    </td>
                                    <td class="product-subtotal">
                                        <span class="amount">$129.99</span>
                                    </td>
                                    <td class="product-quantity">
                                        <div class="input-group">
                                            <button class="quantity-minus"><i class="fas fa-minus"></i></button>
                                            <input class="quantity form-control" type="number" min="1" max="1000000">
                                            <button class="quantity-minus"><i class="fas fa-plus"></i></button>
                                        </div>
                                    </td>
                                    <td class="product-price">
                                        <span class="amount">$129.99</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="product-thumbnail">
                                        <figure>
                                            <a href="product-simple.html">
                                                <img src="@/assets/images/products/product16.jpg" width="100" height="100"
                                                alt="product">
                                            </a>
                                            <a href="#" class="product-remove" title="Remove this product">
                                                <i class="fas fa-times"></i>
                                            </a>
                                        </figure>
                                
                                    </td>
                                    <td class="product-name">
                                        <div class="product-name-section">
                                            <a href="product-simple.html">Mackintosh Poket backpack</a>
                                        </div>
                                    </td>
                                    <td class="product-subtotal">
                                        <span class="amount">$98.00</span>
                                    </td>
                                    <td class="product-quantity">
                                        <div class="input-group">
                                            <button class="quantity-minus"><i class="fas fa-minus"></i></button>
                                            <input class="quantity form-control" type="number" min="1" max="1000000">
                                            <button class="quantity-minus"><i class="fas fa-plus"></i></button>
                                        </div>
                                    </td>
                                    <td class="product-price">
                                        <span class="amount">$98.00</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="product-thumbnail">
                                        <figure>
                                            <a href="product-simple.html">
                                                <img src="@/assets/images/products/product17.jpg" width="100" height="100"
                                                alt="product">
                                            </a>
                                            <a href="#" class="product-remove" title="Remove this product">
                                                <i class="fas fa-times"></i>
                                            </a>
                                        </figure>
                                    </td>
                                    <td class="product-name">
                                        <div class="product-name-section">
                                            <a href="product-simple.html">Fashionable Overnight Bag</a>
                                        </div>
                                    </td>
                                    <td class="product-subtotal">
                                        <span class="amount">$199.00</span>
                                    </td>
                                    <td class="product-quantity">
                                        <div class="input-group">
                                            <button class="quantity-minus d-icon-minus"></button>
                                            <input class="quantity form-control" type="number" min="1"
                                                max="1000000">
                                            <button class="quantity-plus d-icon-plus"></button>
                                        </div>
                                    </td>
                                    <td class="product-price">
                                        <span class="amount">$199.00</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="cart-actions mb-6 pt-6">
                            <div class="coupon">
                                <input type="text" name="coupon_code" class="input-text form-control" id="coupon_code" value="" placeholder="Coupon code">
                                <button type="submit" class="btn btn-md">Apply Coupon</button>
                            </div>
                            <button type="submit" class="btn btn-md btn-icon-left"><i
                                    class="fas fa-spinner"></i>Update Cart</button>
                        </div>
                    </div>
                    <aside class="col-lg-4 sticky-sidebar-wrapper">
                        <div class="sticky-sidebar" data-sticky-options="{'bottom': 20}">
                            <div class="summary mb-4">
                                <h3 class="summary-title text-left">Cart Totals</h3>
                                <table class="shipping">
                                    <tr class="summary-subtotal">
                                        <td>
                                            <h4 class="summary-subtitle">Subtotal</h4>
                                        </td>
                                        <td>
                                            <p class="summary-subtotal-price">$426.99</p>
                                        </td>												
                                    </tr>
                                    <tr class="sumnary-shipping shipping-row-last">
                                        <td colspan="2">
                                            <h4 class="summary-subtitle">Shipping</h4>
                                            <ul>
                                                <li>
                                                    <div class="custom-radio">
                                                        <input type="radio" id="free-shipping" name="shipping" class="custom-control-input" checked>
                                                        <label class="custom-control-label" for="free-shipping">
                                                            Fast Delivery</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-radio">
                                                        <input type="radio" id="standard_shipping" name="shipping" class="custom-control-input">
                                                        <label class="custom-control-label" for="standard_shipping">Standard Delivery</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-radio">
                                                        <input type="radio" id="express_shipping" name="shipping" class="custom-control-input">
                                                        <label class="custom-control-label" for="express_shipping">Express Delivery</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                </table>
                                <table>
                                    <tr class="summary-subtotal">
                                        <td>
                                            <h4 class="summary-subtitle">Total</h4>
                                        </td>
                                        <td>
                                            <p class="summary-total-price">$426.99</p>
                                        </td>												
                                    </tr>
                                </table>
                                <a href="checkout.html" class="btn btn-dark btn-checkout">Proceed to checkout</a>
                            </div>
                        </div>
                    </aside>
                </div>
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
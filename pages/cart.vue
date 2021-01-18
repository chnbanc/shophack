<template>
  <div class="cart">
        <div class="page-content pt-10 pb-10">
            <div class="step-by pt-2 pb-2 pr-4 pl-4">
                <h3 class="title title-simple title-step active"><nuxt-link to="/cart">1. Shopping Cart</nuxt-link></h3>
                <h3 class="title title-simple title-step"><nuxt-link to="/checkout">2. Checkout</nuxt-link></h3>
                <h3 class="title title-simple title-step"><nuxt-link to="/confirm">3. Order Complete</nuxt-link></h3>
            </div>
            <div class="container mt-8 mb-4">
                <div class="row gutter-lg" v-if="cart.length">
                    <div class="col-lg-8 col-md-12">
                        <table class="shop-table cart-table mt-2">
                            <thead>
                                <tr>
                                    <th><span>Product Image</span></th>
                                    <th>Name of Product</th>
                                    <th><span>Price</span></th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in cart" :key="item.product.id">
                                    <td class="product-thumbnail">
                                        <figure>
                                            <nuxt-link :to="`/${item.product.id}`">
                                                <img :src="item.product.images[0].image" width="100" height="100"
                                                alt="product">
                                            </nuxt-link>
                                            <a href="#" class="product-remove" @click.prevent="removeProductFromCart(item.product)">
                                                <i class="fas fa-times"></i>
                                            </a>
                                        </figure>
                                    </td>
                                    <td class="product-name">
                                        <div class="product-name-section">
                                            <nuxt-link :to="`/${item.product.id}`">{{item.product.name}}</nuxt-link>
                                        </div>
                                    </td>
                                    <td class="product-subtotal">
                                        <span class="amount">${{item.product.price}}</span>
                                    </td>
                                    <td class="product-quantity">
                                        <span class="amount">X{{item.quantity}}</span>
                                    </td>
                                    <td class="product-price">
                                        <span class="amount">${{item.product.price}}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button class="my-10" @click.prevent="clearCartItem()">Clear Cart</button>
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
                                            <p class="summary-subtotal-price">${{cartTotalPrice}}</p>
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
                                                            Fast Delivery ($20)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-radio">
                                                        <input type="radio" id="standard_shipping" name="shipping" class="custom-control-input">
                                                        <label class="custom-control-label" for="standard_shipping">Standard Delivery(Not Available)</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="custom-radio">
                                                        <input type="radio" id="express_shipping" name="shipping" class="custom-control-input">
                                                        <label class="custom-control-label" for="express_shipping">Express Delivery(Not Available)</label>
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
                                            <p class="summary-total-price">${{checkoutTotalPrice}}</p>
                                        </td>												
                                    </tr>
                                </table>
                                <nuxt-link to="/checkout" class="btn btn-dark btn-checkout">Proceed to checkout</nuxt-link>
                            </div>
                        </div>
                    </aside>
                </div>
                <div v-else>
                    <h2 class="text-center">Your cart is empty, please keep Shopping</h2>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            quantity: 1
            // cart: {
            //     product: this.product,
            //     quantity: 1,

            // }
        }
    },
    computed: {
        ...mapGetters({
            cart: 'cart',
            cartItemCount: 'cartItemCount',
            cartTotalPrice: 'cartTotalPrice',
            checkoutTotalPrice: 'checkoutTotalPrice'
        })
    },
    methods: {
        removeProductFromCart(product) {
            this.$store.dispatch('removeProductFromCart', product);
            this.$toasted.success('Removed product from cart')
        },
        clearCartItem(){
            this.$store.dispatch('clearCart')
        },
        decrease(){
            if(this.quantity == 1){

            } else {
                this.quantity--
            }   
        },
        increase(){
            this.quantity++
        }

    }
}
</script>

<style>

</style>
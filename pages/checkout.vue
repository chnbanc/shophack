<template>
  <div class="checkout">
        <div class="page-content pt-10 pb-10">
            <div class="step-by pt-2 pb-2 pr-4 pl-4">
                <h3 class="title title-simple title-step visited"><nuxt-link to="/cart">1. Shopping Cart</nuxt-link></h3>
                <h3 class="title title-simple title-step active"><nuxt-link to="/checkout">2. Checkout</nuxt-link></h3>
                <h3 class="title title-simple title-step"><nuxt-link to="/confirm">3. Order Complete</nuxt-link></h3>
            </div>
            <div class="container mt-8">
                <form action="#" class="form">
                    <div class="row gutter-lg">
                        <div class="col-lg-7 mb-6">
                            <h3 class="title title-simple text-left">Billing Details</h3>
                            <div class="row">
                                <div class="col-xs-6">
                                    <label>First Name *</label>
                                    <input type="text" class="form-control" required=""  v-model="checkoutDetails.first_name"/>
                                </div>
                                <div class="col-xs-6">
                                    <label>Last Name *</label>
                                    <input type="text" class="form-control" required="" v-model="checkoutDetails.last_name" />
                                </div>
                            </div>
                            <label>Company Name(Optional)</label>
                            <input type="text" class="form-control" required="" v-model="checkoutDetails.company_name" />
                            <label>Country / Region *</label>
                            <input type="text" class="form-control" required="" v-model="checkoutDetails.country"/>
                            <label>Street Address *</label>
                            <input type="text" class="form-control" required=""
                                placeholder="House number and Street name" v-model="checkoutDetails.address"/>
                            <div class="row">
                                <div class="col-xs-6">
                                    <label>Town / City *</label>
                                    <input type="text" class="form-control" required="" v-model="checkoutDetails.city"/>
                                </div>
                                <div class="col-xs-6">
                                    <label>State *</label>
                                    <input type="text" class="form-control" name="state" required="" v-model="checkoutDetails.state"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-6">
                                    <label>Postcode / ZIP *</label>
                                    <input type="text" class="form-control" required="" v-model="checkoutDetails.post_code"/>
                                </div>
                                <div class="col-xs-6">
                                    <label>Phone *</label>
                                    <input type="text" class="form-control" required="" v-model="checkoutDetails.phone_number"/>
                                </div>
                            </div>
                            <label>Email address *</label>
                            <input type="text" class="form-control" name="email-address" required="" v-model="checkoutDetails.email"/>
                            <h3 class="title title-simple text-left mb-3">Additional information</h3>
                            <label>Order Notes (optional)</label>
                            <textarea class="form-control" cols="30" rows="6"
                                placeholder="Notes about your order, e.g. special notes for delivery" v-model="checkoutDetails.notes"></textarea>
                        </div>
                        <aside class="col-lg-5 sticky-sidebar-wrapper">
                            <div class="sticky-sidebar" data-sticky-options="{'bottom': 50}">
                                <h3 class="title title-simple text-left">Your Order</h3>
                                <div class="summary mb-4">
                                    <table class="order-table">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in cart" :key="item.product.id">
                                                <td class="product-name">{{item.product.name}} <strong class="product-quantity">×&nbsp;{{item.quantity}}</strong></td>
                                                <td class="product-total">${{item.product.price}}.00</td>
                                            </tr>
                                            <tr class="summary-subtotal">
                                                <td>
                                                    <h4 class="summary-subtitle">Subtotal</h4>
                                                </td>
                                                <td class="summary-subtotal-price">${{cartTotalPrice}}
                                                </td>												
                                            </tr>
                                            <tr>
                                                <td class="product-name">Delivery <strong class="product-quantity">$20.00</strong></td>
                                            </tr>
                                            <tr class="summary-subtotal">
                                                <td>
                                                    <h4 class="summary-subtitle">Total</h4>
                                                </td>
                                                <td>
                                                    <p class="summary-total-price">${{checkoutTotalPrice}}</p>
                                                </td>												
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="payment accordion radio-type">
                                        <h4 class="summary-subtitle">Payment Methods</h4>
                                        <div class="card">
                                            <div class="card-header">
                                                <a href="#collapse1" class="collapse">Online Payment
                                                </a>
                                            </div>
                                            <div id="collapse1" class="expanded" style="display: block;">
                                                <div class="card-body">
                                                    Make your payment directly using our amazing flutterwave payment platform.
                                                    Countries accepted are Ghana, Nigeria, Kenya and UK.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="checkout-info">Your personal data will used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                                    <v-btn class="btn btn-primary btn-block" type="submit" @click="placeOrder()">
                                        <i class="fas fa-spin fa-spinner" v-if="loading"></i>
                                            {{ loading ? '' : 'PLACE ORDER' }}
                                    </v-btn>
                                </div>
                            </div>
                        </aside>
                    </div>
                </form>
            </div>
        </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            error: '',
            checkoutDetails: {
                grand_total: '',
                sub_total: '',
                delivery_fee: 20,
                first_name: 'tosin',
                last_name: 'ogunfowote',
                company_name: 'tofmat',
                address: 'asasas',
                city: 'asa',
                country: 'Nigeria',
                state: 'asas',
                email: 'tofmatt@gmail.com',
                post_code: '121223',
                phone_number: '08145485678',
                notes: 'asasasas',
                items: [],
                callback_url: 'asasasas',
                item_count: ''
            }
            
        }
    },
    methods: {
        async placeOrder() {
            if (this.cart.length){
                this.checkoutDetails.callback_url = `localhost:3000/`
                this.checkoutDetails.grand_total = this.checkoutTotalPrice
                this.checkoutDetails.sub_total = this.cartTotalPrice
                this.checkoutDetails.item_count = this.cartItemCount
                this.checkoutDetails.items = this.cart.map(cart => {
                    return {
                        product_id: cart.product.id,
                        product_name: cart.product.name,
                        quantity: cart.quantity,
                        price: cart.product.price
                    }
                })
                try {
                    this.loading = true;
                    const response = await this.$axios.post('/checkout/order', this.checkoutDetails)
                    window.location = response.data.data.payment_link.link
                    this.loading = false
                    this.$toasted.success('Please hold, while we process your payment.')
                    return response
                } catch(error) {
                    this.loading = false
                    this.error = error.response.data.message
                    this.$toast.error('There was a problem sending your payment.')
                }
            } else {
                this.$toasted.error('Please add some products to your cart')
            }
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
}
</script>

<style>

</style>
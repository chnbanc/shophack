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
                        <strong>{{order_number}}</strong>
                    </div>
                    <div class="overview-item">
                        <span>Status</span>
                        <strong>Processing</strong>
                    </div>
                    <div class="overview-item">
                        <span>Payment method</span>
                        <strong>Online Payment</strong>
                    </div>
                    <div class="overview-item">
                        <span>Transaction ID</span>
                        <strong>{{transaction_id}}</strong>
                    </div>
                </div>

                <h2 class="title title-simple text-left pt-3">Please check your mail for your receipt and order details.</h2>
                


                <nuxt-link to="/" class="btn btn-icon-left btn-back btn-md mb-4"><i class="fas fa-arrow-left"></i> Back to Home</nuxt-link>
            </div>
        </div>
  </div>
</template>

<script>
export default {
data() {
    return {
        order_number: this.$route.query.order_number,
        transaction_id: this.$route.query.transaction_id
    }
}
}
</script>

<style>

</style>
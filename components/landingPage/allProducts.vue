<template>
  <div>
    <section class="product-wrapper container mt-10 pt-3 pb-8" v-if="products.length">
        <h2 class="title">Best Selling Products</h2>
        <div class="owl-theme row owl-nav-full cols-2 cols-md-3 cols-lg-4" >
            <div class="product" v-for="product in products" :key="product.public_reference_id">
                <figure class="product-media">
                    <nuxt-link :to="`/${product.id}`">
                        <img :src='product.images[0].image' class="productImage" alt="Blue Pinafore Denim Dress"
                            width="280" height="315">
                    </nuxt-link>
                    <div class="product-label-group">
                        <label class="product-label label-new">new</label>
                    </div>
                    <div class="product-action-vertical">
                        <a href="#" class="btn-product-icon btn-cart" @click.prevent="addToCart(product)"><i class="fas fa-cart-plus"></i></a>
                    </div>
                </figure>
                <div class="product-details">
                    <a href="#" class="btn-wishlist" title="Add to wishlist"><i class="fas fa-heart"></i></a>
                    <div class="product-cat">
                        categories
                    </div>
                    <h2 class="product-name">
                        <nuxt-link :to="`/${product.id}`">{{product.name}}</nuxt-link>
                    </h2>
                    <div class="product-price">
                        <ins class="new-price">$ {{product.price}}</ins>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div v-else class="my-30">
          <spinner />
      </div>

  </div>
</template>

<script>
import spinner from '../spinner'
import { mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return{
            quantity: 1
        }
    },
    components: {
        spinner
    },
    computed: {
        ...mapGetters({
            products: 'products',
        })
    },
    methods: {
        ...mapActions({
            getProducts: 'getProducts',
        }),
        addToCart(item) {
            this.$store.dispatch('addProductToCart', {
                quantity: 1,
                product: item
            })
            this.$toasted.success('Product added to cart')
        },
    },
    mounted() {
        this.getProducts();
    }
}
</script>

<style>
.productImage {
    width: 280px !important;
    height: 315px !important;
}
</style>
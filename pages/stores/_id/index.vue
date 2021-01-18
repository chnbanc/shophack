<template>
  <div>
    <div class="page-header bg-dark shopHead" style="background-color: #3C63A4;">
        <h1 class=" page-title"><strong>{{shop.name}}</strong></h1>
        <h3 class="page-subtitle font-weight-normal">{{shop.description}}</h3>
    </div>
    <!-- End PageHeader -->
    <div class="page-content mb-10">
        <div class="container">
            <nav class="breadcrumb-nav">
                <ul class="breadcrumb">
                    <li><nuxt-link to="/"><i class="fas fa-home"></i></nuxt-link></li>
                    <li><nuxt-link to="/stores">Stores</nuxt-link></li>
                    <li>{{shop.name}}</li>
                </ul>
            </nav>
            <div class="row cols-2 cols-sm-3 cols-md-4 product-wrapper my-30">
                <div class="product-wrap" v-for="product in products" :key="product.id">
                    <div class="product shadow-media">
                        <figure class="product-media">
                            <nuxt-link :to="`/${product.id}`">
                                <img :src='product.images[0].image' alt="product" width="280" height="315">
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
                            <h3 class="product-name">
                                <nuxt-link :to="`/${product.id}`">{{product.name}}</nuxt-link>
                            </h3>
                            <div class="product-price">
                                <ins class="new-price">${{product.price}}</ins>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="toolbox toolbox-pagination">
                <p class="toolbox-item show-info d-block">Showing <span>1 of ..</span> Products</p>
                <ul class="pagination">
                    <li class="page-item disabled">
                        <a class="page-link page-link-prev" href="#" aria-label="Previous" tabindex="-1"
                            aria-disabled="true">
                            <i class="d-icon-arrow-left"></i>Prev
                        </a>
                    </li>
                    <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item page-item-dots"><a class="page-link" href="#">6</a></li>
                    <li class="page-item">
                        <a class="page-link page-link-next" href="#" aria-label="Next">
                            Next<i class="d-icon-arrow-right"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    props: ['shop'],
    data() {
        return {
            products: this.shop.products
        }
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
.shopHead{
    background: url(../../../assets/images/shop/page-header-back.jpg);
}
.my-30{
    margin: 30px 0;
}
</style>
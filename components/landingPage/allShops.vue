<template>
  <div>
    <section class="grey-section pt-10 pb-10" data-animation-options="{
                    'delay': '.3s'
                }">
        <div class="container pt-3">
            <h2 class="title">Browse Our Shops Available</h2>
            <div class="row">
                <div class="col-md-3 col-6 mb-4" v-for="shop in shops" :key="shop.public_reference_id">
                    <div
                        class="category category-default category-default-1 category-absolute overlay-zoom">
                        <a href="#">
                            <figure class="category-media">
                                <img :src='shop.image' alt="category"
                                    width="280" height="280" />
                            </figure>
                        </a>
                        <div class="category-content">
                            <h4 class="category-name"><nuxt-link to="/">{{shop.name}}</nuxt-link></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            shops: 'shops',
        })
    },
    methods: {
        ...mapActions({
        getShops: 'getShops'
        })
    },
    mounted() {
        this.getShops();
    }
}
</script>

<style>

</style>
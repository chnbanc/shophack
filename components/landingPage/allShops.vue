<template>
  <div>
    <section class="grey-section pt-10 pb-10" data-animation-options="{
                    'delay': '.3s'
                }">
        <div class="container pt-3">
            <h2 class="title">Browse Our Stores Available</h2>
            <div class="row">
                <div class="col-md-3 col-6 mb-4" v-for="shop in shops" :key="shop.public_reference_id">
                    <div
                        class="category category-default category-default-1 category-absolute overlay-zoom">
                        <nuxt-link :to="`/stores/${shop.id}`">
                            <figure class="category-media">
                                <img :src='shop.image' alt="category"
                                    width="280" height="280" />
                            </figure>
                        </nuxt-link>
                        <div class="category-content">
                            <nuxt-link :to="`/stores/${shop.id}`"><h4 class="category-name">{{shop.name}}</h4></nuxt-link>
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
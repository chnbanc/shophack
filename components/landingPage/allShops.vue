<template>
  <div>
    <section class="grey-section pt-10 pb-10"  v-if="shops.length">
        <div class="container pt-3">
            <h2 class="title">Browse Our Stores Available</h2>
            <div class="row">
                <div class="col-md-3 col-6 mb-4" v-for="shop in shops" :key="shop.public_reference_id">
                    <div
                        class="category category-default category-default-1 category-absolute overlay-zoom">
                        <nuxt-link :to="`/stores/${shop.id}`">
                            <figure class="category-media">
                                <img :src='shop.image' alt="category"
                                    width="280" height="280" class="shopImage" />
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
      <div v-else class="my-30">
          <spinner />
      </div>
  </div>
</template>

<script>
import spinner from '../spinner'
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            shops: 'shops',
        })
    },
    components: {
        spinner
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
.my-30{
    margin-top: 30px;
}
.shopImage{ 
    width: 280px !important;
    height: 280px !important;

}
</style>
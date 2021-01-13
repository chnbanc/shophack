<template>
  <div>
      <nuxt-child :product="product"/>
  </div>
</template>

<script>
export default {
    scrollToTop: true,
    async asyncData({$axios, params}){
        let response = await $axios.get(`/products/${params.product}`)
        let product = response.data.data;
        return {
            product,
        }
    },
}
</script>

<style>

</style>
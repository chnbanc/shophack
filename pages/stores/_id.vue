<template>
  <div>
      <nuxt-child :shop="shop"/>
  </div>
</template>

<script>
export default {
    scrollToTop: true,
    async asyncData({$axios, params}){
        let response = await $axios.get(`/stores/${params.id}`)
        let shop = response.data.data;
        return {
            shop,
        }
    },
}
</script>

<style>

</style>
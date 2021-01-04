<template>
  <main class="main">
    <headerCarousel />
    <allShops />
    <allProducts />
  </main>
</template>

<script>
import headerCarousel from '../components/landingPage/headerCarousel'
import allShops from '../components/landingPage/allShops'
import allProducts from '../components/landingPage/allProducts'
export default {
  components: {
    headerCarousel,
    allShops,
    allProducts
  }
}
</script>

<style>


</style>

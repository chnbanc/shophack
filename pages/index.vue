<template>
  <main class="main">
    <headerCarousel />
    <allShops />
    <allProducts />
    <parallax />
  </main>
</template>

<script>
import headerCarousel from '../components/landingPage/headerCarousel'
import allShops from '../components/landingPage/allShops'
import allProducts from '../components/landingPage/allProducts'
import parallax from '../components/landingPage/parallax'
export default {
  components: {
    headerCarousel,
    allShops,
    allProducts,
    parallax,
  }
}
</script>

<style>


</style>

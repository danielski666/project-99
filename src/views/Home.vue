<template>
  <div class="home">
    <navbar />
    <carousel />
    <products />
    <appmap />
  </div>
</template>

<script>
import navbar from '@/components/Navbar.vue'
import carousel from '@/components/Carousel.vue'
import products from '@/components/Products.vue'
import appmap from '@/components/AppMap.vue'
export default {
  name: 'home',
  components: {
    navbar,
    carousel,
    products,
    appmap
  }
}
</script>

<template>
	<div class="home">
	<navbar />
	<carousel />
	<products />
	</div>
</template>

<script>
import navbar from '/Navbar.vue'
import carousel from '/Carousel.vue'
import products from '/Products.vue'
export default {
	name: 'home',
	components: {
		navbar,
		carousel,
		products
	}
}
</script>
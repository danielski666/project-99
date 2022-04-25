<template>
	<div >
	
		<b-container fluid class="bv-example-row mt-4">
		
		<b-row >
			<b-col cols="3" v-for="(fruit,index) in fruits" :key="index">
				        <b-card
					:title=fruit.name
					:img-src="require(`@/assets/img/books/book${index+1}.jpeg`)"
					img-alt="Image"
					img-top
					tag="article"
					class="mb-4"
				>
					<b-card-text>
						<h5>Price: ${{fruit.price}}.00</h5>
						<b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
						<b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
						<b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
						<b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
						<b-icon variant="warning" class="h1" icon="star-fill"></b-icon>
					</b-card-text>
				
					<b-button v-if="!fruit.cart" :disabled="fruit.cart" @click="fruit.cart=true, addtocart(JSON.parse(JSON.stringify(fruit)))" block href="#" variant="success">Dodaj do listy</b-button>
					<b-button v-if="fruit.cart" :disabled="fruit.cart" block href="#" variant="warning">Dodano do listy </b-button>
				</b-card>
			</b-col>
			
			
		</b-row>
		</b-container>
	
	</div>
</template>

<script>

export default {
	
	data() {
		return {
			fruits: [
				{
					id:1,
					quantity:1,
					name: 'Harry Potter i Kamień Filozoficzny. Tom 1',
					price:21.61,
					img: '@/assets/img/books/book1.jpeg',
					cart:false
				},
				{
					id:2,
					quantity:1,
					name: 'Harry Potter i Komnata Tajemnic. Tom 2 ',
					price:21.70,
					img: '@/assets/img/books/book2.jpeg',
					cart:false
				},
				{
					id:3,
					quantity:1,
					name: 'Harry Potter i więzień Azkabanu. Tom 3',
					price:23.93,
					img: '@/assets/img/books/book3.jpeg',
					cart:false
				},
				{
					id:4,
					quantity:1,
					name: 'Harry Potter i przeklęte dziecko. Część 1 i 2. Wydanie poszerzone',
					price:27.56,
					img: '@/assets/img/books/book4.jpeg',
					cart:false
				},
				{
					id:5,
					quantity:1,
					name: 'Quidditch przez wieki',
					price:18.19,
					img: '@/assets/img/books/book5.jpeg',
					cart:false
				},
				{
					id:6,
					quantity:1,
					name: 'Niezbędnik maga z Domu Brooklyńskiego',
					price:18.73,
					img: '@/assets/img/books/book6.jpeg',
					cart:false
				},
				{
					id:7,
					quantity:1,
					name: 'Tajne akta Obozu Jupiter. Dziennik rekrutki. Apollo i boskie próby',
					price:20.62,
					img: '@/assets/img/books/book7.jpeg',
					cart:false
				},
				{
					id:8,
					quantity:1,
					name: 'Królestwo Nikczemnych',
					price:28.94,
					img: '@/assets/img/books/book8.jpeg',
					cart:false
				},
			]
		}
	},
	methods: {
		addtocart(product){
			
			let cart = []
			if (JSON.parse(localStorage.getItem('products'))) {
				cart= JSON.parse(localStorage.getItem('products'))
			} else {
				cart = []
			}
			cart.push(product);
			localStorage.setItem('products', JSON.stringify(cart))
		}
	},
	created(){
		let cart = []
		if (JSON.parse(localStorage.getItem('products'))) {
			cart= JSON.parse(localStorage.getItem('products'))
		} else {
			cart = []
		}
		for (let index = 0; index < cart.length; index++) {
			for (let index2 = 0; index2 < this.fruits.lenght; index2++){
				if (cart[index].id == this.fruits[index2].id) {
					this.fruits[index2].cart=true
				}
				
			}
			
		}
	}
}
</script>

<style>

</style>
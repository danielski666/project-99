<template>
	<div >
	
		<b-container fluid>
		
		<b-row >
			<b-col sm="12" md="3" v-for="(book,index) in books" :key="index">
				<b-card
					:title=book.name
					:img-src="require(`@/assets/img/books/book${index+1}.jpg`)"
					img-alt="Image"
					tag="article"
					img-top
					class="mb-4"
					>
					<b-card-text>
						<h5>Price: {{book.price}} zł</h5>
					</b-card-text>
				
					<b-button v-if="!book.cart" :disabled="book.cart" @click="book.cart=true, addtocart(JSON.parse(JSON.stringify(book)))" block href="#" variant="success">Add to Cart</b-button>
					<b-button v-if="book.cart" :disabled="book.cart" block href="#" variant="warning">Already added to cart </b-button>
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
			books: [
				{
					id:1,
					quantity:1,
					name: 'Harry Potter i Kamień Filozoficzny',
					price:16.22,
					img: '@/assets/books/book1.jpg',
					cart:false
				},
				{
					id:2,
					quantity:1,
					name: 'Harry Potter i Komnata Tajemnic',
					price:17.31,
					img: '@/assets/books/book2.jpg',
					cart:false
				},
				{
					id:3,
					quantity:1,
					name: 'Harry Potter i Więzień Azkabanu',
					price:17.21,
					img: '@/assets/books/book3.jpg',
					cart:false
				},
				{
					id:4,
					quantity:1,
					name: 'Harry Potter i Czara Ognia',
					price:16.80,
					img: '@/assets/books/book4.jpg',
					cart:false
				},
				{
					id:5,
					quantity:1,
					name: 'Harry Potter i Zakon Feniksa',
					price:15.90,
					img: '@/assets/books/book5.jpg',
					cart:false
				},
				{
					id:6,
					quantity:1,
					name: 'Harry Potter i Książe Półkrwi',
					price:21.21,
					img: '@/assets/books/book6.jpg',
					cart:false
				},
				{
					id:7,
					quantity:1,
					name: 'Harry Potter i Insygnia Śmierci',
					price:18.23,
					img: '@/assets/books/book7.jpg',
					cart:false
				},
				{
					id:8,
					quantity:1,
					name: 'Harry Potter i Przeklęte Dziecko',
					price:18.92,
					img: '@/assets/books/book8.jpg',
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
			for (let index2 = 0; index2 < this.books.lenght; index2++){
				if (cart[index].id == this.books[index2].id) {
					this.books[index2].cart=true
				}
				
			}
			
		}
	}
}
</script>

<style>

</style>
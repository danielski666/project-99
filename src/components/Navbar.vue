<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="success">
			<b-navbar-brand @click="goHome" href="#">
				<!-- <b-icon-brightness-fill-high>das</b-icon-brightness-fill-high> -->
				Ecommerce</b-navbar-brand>
			
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			
			<b-collapse id="nav-collapse" is-nav>
				
				<!--Right alligned nav items-->
				<b-navbar-nav class="ml-auto">
				
					<b-nav-item @click="gotocart" active>Lista zakupów</b-nav-item>
					<b-nav-item @click="goToLogin" active>Logowanie się</b-nav-item>
					<b-nav-item @click="goToRegister" active>Zarejestruj się</b-nav-item>
					<b-nav-item @click="goTogeoLocation" active>Zobacz lokalizacje sklepu</b-nav-item>
					<b-nav-item @click="flashlightFunc" active>Latarka</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		
		
		
		<div>
		
		
			<b-modal hide-footer ref="my-modal" id="modal-1" title="Admin">
				<b-form @submit="onSubmit">
				<b-form-group
					id="input-group-1"
					label="UserK:"
					label-for="input-1"
					
				>
					<b-form-input
						id="input-1"
						v-model="form.userK"
						type="text"
						required
						placeholder="Enter UserK"
					></b-form-input>
				</b-form-group>
				
				<b-form-group id="input-group-2" label="Password:" label-for="input-2">
					<b-form-input
						id="input-2"
						v-model="form.pass"
						type="password"
						required
						placeholder="Enter Password"
						></b-form-input>
				</b-form-group>
				
				
				
				<b-button type="submit" block variant="primary">Submit</b-button>
				
				</b-form>
			
			
			</b-modal>
		</div>
	</div>
</template>

<script>
//import { mapGetters } from "vuex";
//import firebase from "firebase/compat/app";

export default {
  //computed: {
  //  ...mapGetters({
 //     user: "user"
 //   })
 //  },
	data() {
		return {
			cart:'',
			form: {
				userK:'',
				pass:''
			}
		}
	},
	created(){
		if(JSON.parse(localStorage.getItem('products'))) {
			this.cart = JSON.parse(localStorage.getItem('products'))
		} else {
				return
		}
	},
	methods:{
		gotocart(){
			this.$router.push('/cart')
		},
		goHome(){
			this.$router.push('/')
		},
		goToLogin(){
			this.$router.push('/login')
		},
		goToRegister(){
			this.$router.push('/register')
		},
		goTogeoLocation(){
			this.$router.push('/geoLocation')
		},
		flashlightFunc(){
const SUPPORTS_MEDIA_DEVICES = 'mediaDevices' in navigator;

if (SUPPORTS_MEDIA_DEVICES) {
  //Get the environment camera (usually the second one)
  navigator.mediaDevices.enumerateDevices().then(devices => {
  
    const cameras = devices.filter((device) => device.kind === 'videoinput');

    if (cameras.length === 0) {
      throw 'No camera found on this device.';
    }
    const camera = cameras[cameras.length - 1];

    // Create stream and get video track
    navigator.mediaDevices.getUserMedia({
      video: {
        deviceId: camera.deviceId,
        facingMode: ['user', 'environment'],
        height: {ideal: 1080},
        width: {ideal: 1920}
      }
    }).then(stream => {
      const track = stream.getVideoTracks()[0];

      //Create image capture object and get camera capabilities
      const imageCapture = new ImageCapture(track)
      const photoCapabilities = imageCapture.getPhotoCapabilities().then(() => {

        //todo: check if camera has a torch

        //let there be light!
        const btn = document.querySelector('.switch');
        btn.addEventListener('click', function(){
          track.applyConstraints({
            advanced: [{torch: true}]
          });
        });
      });
    });
  });
  
  //The light will be on as long the track exists
  
  
}},
		onSubmit(e){
			e.preventDefault();
			if(this.form.user=='admin' && this.form.pass=='456789'){
				this.$refs['my-modal'].hide()
				this.$router.push('/admin')
				localStorage.setItem('admin', JSON.stringify('true'))
			} else {
				return false;
			}
		}
	}
}
</script>


<style>

</style>
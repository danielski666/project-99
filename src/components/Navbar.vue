<template>
	<div>
		<b-navbar toggleable="lg" type="dark" variant="success">
			<b-navbar-brand @click="goHome" href="#">
				<!-- <b-icon-brightness-fill-high></b-icon-brightness-fill-high> -->
				Ecommerce</b-navbar-brand>
			
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			
			<b-collapse id="nav-collapse" is-nav>
				
				<!--Right alligned nav items-->
				<b-navbar-nav class="ml-auto">
					<b-nav-item v-if="isLoggedIn" id="usr"><span class="email black-text">{{currentUser}}</span></b-nav-item>
					<b-nav-item v-if="isLoggedIn" @click="gotocart" active>Shopping Cart</b-nav-item>
					<b-nav-item v-if="!isLoggedIn" @click="gotologin" active>Login</b-nav-item>
					<b-nav-item v-if="!isLoggedIn" @click="gotoregister" active>Register</b-nav-item>
					<b-nav-item v-if="isLoggedIn" @click="gotochat" active>Chat</b-nav-item>
					<b-nav-item @click="flashlightFunc" active>Flashlight</b-nav-item>
					<button v-if="isLoggedIn" v-on:click="logout" class="btn black">Logout</button>
					<b-nav-item-dropdown right>
						<!--Using 'button-content' slot-->
						<template v-slot:button-content>
							<em>Admin</em>
						</template>
						<b-dropdown-item v-b-modal.modal-1>Sign in</b-dropdown-item>
						
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
		
		 
		
		<div>
		
		
			<b-modal hide-footer ref="my-modal" id="modal-1" title="Admin">
				<b-form @submit="onSubmit">
				<b-form-group
					id="input-group-1"
					label="User:"
					label-for="input-1"
					
				>
					<b-form-input
						id="input-1"
						v-model="form.user"
						type="text"
						required
						placeholder="Enter User"
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
import firebase from 'firebase/compat/app';
//import { inject } from 'vue';
export default {
	/*
	inject: ['messaging'],
  //composition api
  setup() {
	  app.messaging().getToken({ vapidKey:  'BC9E9EweLWoSortR7kVMtqCwYb58uN-AoGBpWZaW1qUL4YlgECl8tFqItm_00FhaVv2o9OXJTR_Gtn4EwWcx2RA' })
.then((currentToken) => {
  if (currentToken) {
    console.log('client token', currentToken)
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
})

    const messaging = inject('messaging')
	messaging.getToken({ vapidKey:' BC9E9EweLWoSortR7kVMtqCwYb58uN-AoGBpWZaW1qUL4YlgECl8tFqItm_00FhaVv2o9OXJTR_Gtn4EwWcx2RA' })
    console.log('Firebase cloud messaging object', messaging)
  },
  mounted () {
    console.log('Firebase cloud messaging object', this.$messaging)
  },*/
	data() {
		return {
			isLoggedIn: false,
      		currentUser: false,
			cart:'',
			form: {
				user:'',
				pass:''
			}
		}
	},
	created(){
		if (firebase.auth().currentUser) {
      		this.isLoggedIn = true;
      		this.currentUser = firebase.auth().currentUser.email;
    	};
		if(JSON.parse(localStorage.getItem('products'))) {
			this.cart = JSON.parse(localStorage.getItem('products'))
		} else {
				return
		}
	},
	methods:{
		logout: function() {
      	firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
		},
		gotocart(){
			this.$router.push('/cart')
		},
		gotologin(){
			this.$router.push('/login')
		},
		gotoregister(){
			this.$router.push('/register')
		},
		goHome(){
			this.$router.push('/')
		},
		gotochat(){
			this.$router.push('/realtime')
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
  
  
}				
		},
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
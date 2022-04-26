<template>
<div>
<navbar/>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Zaloguj się przez email</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Hasło</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-info">Zaloguj się</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row vertical-center-row">
    <p align="center">
    <img src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png" class="img-fluid" alt="Responsive image" style="width:10%">
    <br>
    <button type="button" @click="socialLogin" class="btn btn-light">
    Zaloguj się przez konto google
  </button>
  </p>
  </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase/compat/app';
import navbar from '@/components/Navbar.vue';

export default {
    name: 'Login',
    components: {
        navbar
    },
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          alert('Użytkownik zalogowany !'+ this.email)
          this.$router.push('/')
        })
        .catch(err => {
          this.error = err.message;
        });
    },
    socialLogin(){
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then((result)  => {
          alert('Użytkownik zalogowany poprzez konto google !')
          this.$router.push('/')
      })
      .catch(err => {
          alert('Błąd logowania ..'+ err.message)
          });
    }
  }
};
</script>
(function(){var t={8379:function(t,e,a){"use strict";a(6992),a(8674),a(9601),a(7727);var r=a(8935),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],s=a(3736),n={},c=(0,s.Z)(n,o,i,!1,null,null,null),l=c.exports,u=a(2809),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("navbar"),a("carousel"),a("products")],1)},d=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"success"}},[a("b-navbar-brand",{attrs:{href:"#"},on:{click:t.goHome}},[t._v(" Ecommerce")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{active:""},on:{click:t.gotocart}},[t._v("Lista zakupów")]),a("b-nav-item",{attrs:{active:""},on:{click:t.goToLogin}},[t._v("Logowanie się")]),a("b-nav-item",{attrs:{active:""},on:{click:t.goToRegister}},[t._v("Zarejestruj się")]),a("b-nav-item",{attrs:{active:""},on:{click:t.goTogeoLocation}},[t._v("Zobacz lokalizacje sklepu")]),a("b-nav-item",{attrs:{active:""},on:{click:t.flashlightFunc}},[t._v("Latarka")])],1)],1)],1),a("div",[a("b-modal",{ref:"my-modal",attrs:{"hide-footer":"",id:"modal-1",title:"Admin"}},[a("b-form",{on:{submit:t.onSubmit}},[a("b-form-group",{attrs:{id:"input-group-1",label:"UserK:","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Enter UserK"},model:{value:t.form.userK,callback:function(e){t.$set(t.form,"userK",e)},expression:"form.userK"}})],1),a("b-form-group",{attrs:{id:"input-group-2",label:"Password:","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",type:"password",required:"",placeholder:"Enter Password"},model:{value:t.form.pass,callback:function(e){t.$set(t.form,"pass",e)},expression:"form.pass"}})],1),a("b-button",{attrs:{type:"submit",block:"",variant:"primary"}},[t._v("Submit")])],1)],1)],1)],1)},f=[],g=(a(7327),a(1539),a(8862),{data:function(){return{cart:"",form:{userK:"",pass:""}}},created:function(){JSON.parse(localStorage.getItem("products"))&&(this.cart=JSON.parse(localStorage.getItem("products")))},methods:{gotocart:function(){this.$router.push("/cart")},goHome:function(){this.$router.push("/")},goToLogin:function(){this.$router.push("/login")},goToRegister:function(){this.$router.push("/register")},goTogeoLocation:function(){this.$router.push("/geoLocation")},flashlightFunc:function(){var t="mediaDevices"in navigator;t&&navigator.mediaDevices.enumerateDevices().then((function(t){var e=t.filter((function(t){return"videoinput"===t.kind}));if(0===e.length)throw"No camera found on this device.";var a=e[e.length-1];navigator.mediaDevices.getUserMedia({video:{deviceId:a.deviceId,facingMode:["user","environment"],height:{ideal:1080},width:{ideal:1920}}}).then((function(t){var e=t.getVideoTracks()[0],a=new ImageCapture(e);a.getPhotoCapabilities().then((function(){var t=document.querySelector(".switch");t.addEventListener("click",(function(){e.applyConstraints({advanced:[{torch:!0}]})}))}))}))}))},onSubmit:function(t){if(t.preventDefault(),"admin"!=this.form.user||"456789"!=this.form.pass)return!1;this.$refs["my-modal"].hide(),this.$router.push("/admin"),localStorage.setItem("admin",JSON.stringify("true"))}}}),v=g,b=(0,s.Z)(v,p,f,!1,null,null,null),h=b.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-hight":"480"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[r("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[r("img",{staticClass:"d-block img-fluid w-100",staticStyle:{height:"80vh!important"},attrs:{src:a(3929),alt:"image slot"}})]},proxy:!0}])}),r("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[r("img",{staticClass:"d-block img-fluid w-100",staticStyle:{height:"80vh!important"},attrs:{src:a(9965),alt:"image slot"}})]},proxy:!0}])}),r("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[r("img",{staticClass:"d-block img-fluid w-100",staticStyle:{height:"80vh!important"},attrs:{src:a(3247),alt:"image slot"}})]},proxy:!0}])})],1)],1)},k=[],_={data:function(){return{slide:0,slidding:null}},methods:{}},w=_,C=(0,s.Z)(w,y,k,!1,null,null,null),S=C.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-container",{staticClass:"bv-example-row mt-4",attrs:{fluid:""}},[r("b-row",t._l(t.fruits,(function(e,o){return r("b-col",{key:o,attrs:{cols:"3"}},[r("b-card",{staticClass:"mb-4",attrs:{title:e.name,"img-src":a(3892)("./book"+(o+1)+".jpeg"),"img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",[r("h5",[t._v("Price: $"+t._s(e.price)+".00")]),r("b-icon",{staticClass:"h1",attrs:{variant:"warning",icon:"star-fill"}}),r("b-icon",{staticClass:"h1",attrs:{variant:"warning",icon:"star-fill"}}),r("b-icon",{staticClass:"h1",attrs:{variant:"warning",icon:"star-fill"}}),r("b-icon",{staticClass:"h1",attrs:{variant:"warning",icon:"star-fill"}}),r("b-icon",{staticClass:"h1",attrs:{variant:"warning",icon:"star-fill"}})],1),e.cart?t._e():r("b-button",{attrs:{disabled:e.cart,block:"",href:"#",variant:"success"},on:{click:function(a){e.cart=!0,t.addtocart(JSON.parse(JSON.stringify(e)))}}},[t._v("Dodaj do listy")]),e.cart?r("b-button",{attrs:{disabled:e.cart,block:"",href:"#",variant:"warning"}},[t._v("Dodano do listy ")]):t._e()],1)],1)})),1)],1)],1)},j=[],z={data:function(){return{fruits:[{id:1,quantity:1,name:"Harry Potter i Kamień Filozoficzny. Tom 1",price:21.61,img:"@/assets/img/books/book1.jpeg",cart:!1},{id:2,quantity:1,name:"Harry Potter i Komnata Tajemnic. Tom 2 ",price:21.7,img:"@/assets/img/books/book2.jpeg",cart:!1},{id:3,quantity:1,name:"Harry Potter i więzień Azkabanu. Tom 3",price:23.93,img:"@/assets/img/books/book3.jpeg",cart:!1},{id:4,quantity:1,name:"Harry Potter i przeklęte dziecko. Część 1 i 2. Wydanie poszerzone",price:27.56,img:"@/assets/img/books/book4.jpeg",cart:!1},{id:5,quantity:1,name:"Quidditch przez wieki",price:18.19,img:"@/assets/img/books/book5.jpeg",cart:!1},{id:6,quantity:1,name:"Niezbędnik maga z Domu Brooklyńskiego",price:18.73,img:"@/assets/img/books/book6.jpeg",cart:!1},{id:7,quantity:1,name:"Tajne akta Obozu Jupiter. Dziennik rekrutki. Apollo i boskie próby",price:20.62,img:"@/assets/img/books/book7.jpeg",cart:!1},{id:8,quantity:1,name:"Królestwo Nikczemnych",price:28.94,img:"@/assets/img/books/book8.jpeg",cart:!1}]}},methods:{addtocart:function(t){var e=[];e=JSON.parse(localStorage.getItem("products"))?JSON.parse(localStorage.getItem("products")):[],e.push(t),localStorage.setItem("products",JSON.stringify(e))}},created:function(){var t=[];t=JSON.parse(localStorage.getItem("products"))?JSON.parse(localStorage.getItem("products")):[];for(var e=0;e<t.length;e++)for(var a=0;a<this.fruits.lenght;a++)t[e].id==this.fruits[a].id&&(this.fruits[a].cart=!0)}},O=z,$=(0,s.Z)(O,x,j,!1,null,null,null),N=$.exports,E={name:"home",components:{navbar:h,carousel:S,products:N}},I=E,Z=(0,s.Z)(I,m,d,!1,null,null,null),q=Z.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("navbar"),r("b-container",{staticClass:"mt-4",attrs:{fluid:""}},[r("b-row",[r("b-col",[r("h2",[t._v(" Lista zakupów ")])])],1),r("b-row",[r("b-col",{staticClass:"text-center"},[r("b-table",{attrs:{bordered:"",hover:"",items:t.cart,fields:t.fields},scopedSlots:t._u([{key:"cell(#)",fn:function(e){return[t._v(" "+t._s(e.index+1)+" ")]}},{key:"cell(price)",fn:function(e){return[t._v(" "+t._s(e.item.price*e.item.quantity)+" ")]}},{key:"cell(remove)",fn:function(e){return[r("b-button",{staticClass:"mr-2",attrs:{variant:"danger"},on:{click:function(a){return t.remove(e.item.id)}}},[t._v(" X ")])]}},{key:"cell(quantity)",fn:function(e){return[r("b-row",[r("b-col",{staticClass:"text-center",attrs:{cols:"3"}},[r("b-button",{staticClass:"mr-2",attrs:{disabled:e.item.quantity<=1,variant:"primary"},on:{click:function(a){return t.decrement(e.item.id)}}},[t._v(" - ")])],1),r("b-col",{staticClass:"text-center",attrs:{cols:"6"}},[r("h4",[t._v(t._s(e.item.quantity))])]),r("b-col",{staticClass:"text-center",attrs:{cols:"3"}},[r("b-button",{staticClass:"mr-2",attrs:{variant:"primary"},on:{click:function(a){return t.increment(e.item.id)}}},[t._v(" + ")])],1)],1)]}},{key:"cell(image)",fn:function(t){return[r("b-col",{staticClass:"text-center"},[r("b-img",{staticStyle:{"max-width":"5rem"},attrs:{src:a(3892)("./book"+t.item.id+".jpeg"),fluid:"",alt:"Responsive image"}})],1)]}}])})],1)],1),t.cart.length>0?r("b-row",{staticClass:"text-center"},[r("b-col"),r("b-col"),r("b-col"),r("b-col"),r("b-col",[r("h3",[t._v("Łaczna suma")])]),r("b-col",[r("h3",[t._v("$ "+t._s(t.total)+" ")])])],1):t._e(),t.cart.length>0?r("b-row",{staticClass:"mt-4 text-center"},[r("b-col",[r("b-button",{staticClass:"mr-2",attrs:{variant:"info",block:""},on:{click:t.clean}},[t._v(" Wyczyść listę ")])],1),r("b-col"),r("b-col",{attrs:{cols:"4"}},[t._v(" Aplikacja ")]),r("b-col"),r("b-col",[r("b-button",{staticClass:"mr-2",attrs:{variant:"success",block:""},on:{click:t.buy}},[t._v(" Kup produkty z listy ")])],1)],1):t._e(),r("b-modal",{ref:"modal-1",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",centered:"",title:"Lista zakupów "}},[r("template",{slot:"modal-footer"},[r("b-button",{staticClass:"mt-3",attrs:{variant:"info",block:""},on:{click:t.clean}},[t._v("Potwierdź zamówienie i zamknij")])],1),r("p",{staticClass:"mb-4"},[t._v("Produkty:")]),t._l(t.ticket.products,(function(e){return r("ul",{key:e.id},[r("li",[t._v(" Nazwa: "+t._s(e.name)+" ")]),r("li",[t._v(" Ilość: "+t._s(e.quantity)+" ")]),r("li",[t._v(" Cena: "+t._s(e.price)+" ")]),r("li",[t._v(" Suma: "+t._s(e.price*e.quantity)+" ")]),r("hr")])})),r("h2",{staticClass:"my-4 text-center"},[t._v("Łaczna suma do zapłaty: $"+t._s(t.ticket.total))])],2)],1)],1)},T=[],J=(a(561),a(5546)),D=(a(2456),a(58),a(1646),a(8248),a(779));r["default"].use(D.ZP);var U={name:"store",state:{user:{loggedIn:!1,data:null}},getters:{user:function(t){return t.user}},mutations:{SET_LOGGED_IN:function(t,e){t.user.loggedIn=e},SET_USER:function(t,e){t.user.data=e}},actions:{fetchUser:function(t,e){var a=t.commit;a("SET_LOGGED_IN",null!==e),a("SET_USER",e?{displayName:e.displayName,email:e.email}:null)}}};a(5843),a(4918),a(5711),a(747);var A={apiKey:"AIzaSyCRz007_g__YWEGOSfw6ST0ixh1lzB1qfo",authDomain:"mobiledatabase-c4b0f.firebaseapp.com",projectId:"mobiledatabase-c4b0f",storageBucket:"mobiledatabase-c4b0f.appspot.com",messagingSenderId:"646149635200",appId:"1:646149635200:web:3e58562530e89c4fe17a65",measurementId:"G-95YS2BY79V"};J.Z.initializeApp(A),J.Z.auth().onAuthStateChanged((function(t){U.dispatch("fetchUser",t)}));J.Z.auth();var G=J.Z.firestore(),K=(J.Z.storage(),J.Z.functions(),{name:"Cart",components:{navbar:h},data:function(){return{ticket:{products:null,total:0},counter:0,cart:[],fields:["#","remove","image","name","quantity","price"]}},methods:{clean:function(){for(var t in this.cart=[],this.cart)this.cart[t].cart=!1,this.cart[t].quantity=1;localStorage.setItem("products",JSON.stringify(this.cart)),this.$refs["modal-1"].hide(),navigator&&navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100])},remove:function(t){for(var e=0;e<this.cart.length;e++)this.cart[e].id==t&&(this.cart.splice(e,1),localStorage.setItem("products",JSON.stringify(this.cart)))},buy:function(){this.ticket={products:this.cart,total:this.total},G.collection("vue").add(this.ticket),this.$refs["modal-1"].show()},increment:function(t){for(var e=0;e<this.cart.length;e++)this.cart[e].id==t&&(this.cart[e].quantity++,localStorage.setItem("products",JSON.stringify(this.cart)))},decrement:function(t){for(var e=0;e<this.cart.length;e++)this.cart[e].id==t&&(this.cart[e].quantity--,localStorage.setItem("products",JSON.stringify(this.cart)))}},computed:{total:function(){for(var t=0,e=0;e<this.cart.length;e++)t+=this.cart[e].price*this.cart[e].quantity;return t}},created:function(){JSON.parse(localStorage.getItem("products"))?this.cart=JSON.parse(localStorage.getItem("products")):this.cart=[]}}),H=K,R=(0,s.Z)(H,P,T,!1,null,"b05dfb76",null),B=R.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navbar"),a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("Zaloguj się przez email")]),a("div",{staticClass:"card-body"},[t.error?a("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),a("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("Email")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",value:"",required:"",autofocus:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[t._v("Hasło")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})])]),t._m(0)])])])])]),a("div",{staticClass:"row vertical-center-row"},[a("p",{attrs:{align:"center"}},[a("img",{staticClass:"img-fluid",staticStyle:{width:"10%"},attrs:{src:"https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png",alt:"Responsive image"}}),a("br"),a("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:t.socialLogin}},[t._v(" Zaloguj się przez konto google ")])])])])],1)},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group row mb-0"},[a("div",{staticClass:"col-md-8 offset-md-4"},[a("button",{staticClass:"btn btn-info",attrs:{type:"submit"}},[t._v("Zaloguj się")])])])}],F={name:"Login",components:{navbar:h},data:function(){return{form:{email:"",password:""},error:null}},methods:{submit:function(){var t=this;J.Z.auth().signInWithEmailAndPassword(this.email,this.password).then((function(e){alert("Użytkownik zalogowany !"+t.email),t.$router.push("/")})).catch((function(e){t.error=e.message}))},socialLogin:function(){var t=this,e=new J.Z.auth.GoogleAuthProvider;J.Z.auth().signInWithPopup(e).then((function(e){alert("Użytkownik zalogowany poprzez konto google !"),t.$router.push("/")})).catch((function(t){alert("Błąd logowania .."+t.message)}))}}},Y=F,V=(0,s.Z)(Y,M,W,!1,null,null,null),X=V.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navbar"),a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("Zarejestruj się")]),a("div",{staticClass:"card-body"},[t.error?a("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.error))]):t._e(),a("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"name"}},[t._v("Nazwa użytkownika")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{id:"name",type:"name",name:"name",value:"",required:"",autofocus:""},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("Email")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",value:"",required:"",autofocus:""},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[t._v("Hasło")]),a("div",{staticClass:"col-md-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",required:""},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}})])]),t._m(0)])])])])])])],1)},tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group row mb-0"},[a("div",{staticClass:"col-md-8 offset-md-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Zarejestruj się")])])])}],et=(a(8309),{name:"Register",components:{navbar:h},data:function(){return{form:{name:"",email:"",password:""},error:null}},methods:{submit:function(){var t=this;J.Z.auth().createUserWithEmailAndPassword(this.form.email,this.form.password).then((function(e){e.user.updateProfile({displayName:t.form.name}).then((function(){}))})).catch((function(e){t.error=e.message}))}}}),at=et,rt=(0,s.Z)(at,Q,tt,!1,null,null,null),ot=rt.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navbar"),t._m(0)],1)},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page-section portfolio",attrs:{id:"Geolocation"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"page-section-heading text-center text-uppercase text-secondary mb-0"},[t._v("Lokalizacja sklepu: ")]),a("div",{staticClass:"divider-custom"},[a("div",{staticClass:"divider-custom-line"}),a("div",{staticClass:"divider-custom-icon"},[a("i",{staticClass:"fas fa-globe-americas"})]),a("div",{staticClass:"divider-custom-line"})]),a("div",{attrs:{id:"map"}})])])}],nt=(a(9714),a(1249),{name:"GeoLoc",components:{navbar:h},methods:{getPosition:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){var e=L.map("map",{center:[50.06988997898041,19.955011147403724],zoom:8});L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(e);L.Control.geocoder().addTo(e),navigator.geolocation?setInterval((function(){navigator.geolocation.getCurrentPosition(getPosition)}),5e3):console.log("Your browser doesn't support geolocation feature!"),lat=t.coords.latitude,long=t.coords.longitude,accuracy=t.coords.accuracy,marker&&e.removeLayer(marker),circle&&e.removeLayer(circle),marker=L.marker([lat,long]),circle=L.circle([lat,long],{radius:accuracy});var a=L.featureGroup([marker,circle]).addTo(e);e.fitBounds(a.getBounds()),console.log("Your coordinate is: Lat: "+lat+" Long: "+long+" Accuracy: "+accuracy)}))}}),ct=nt,lt=(0,s.Z)(ct,it,st,!1,null,null,null),ut=lt.exports;r["default"].use(u.Z);var mt=[{path:"/",name:"home",component:q},{path:"/cart",name:"cart",component:B},{path:"/login",name:"login",component:X},{path:"/register",name:"register",component:ot},{path:"/geoLocation",name:"geoLocation",component:ut}],dt=new u.Z({mode:"history",base:"/",routes:mt}),pt=dt,ft=(a(44),a(8934));r["default"].use(ft.XG),r["default"].config.productionTip=!1,new r["default"]({router:pt,store:U,render:function(t){return t(l)}}).$mount("#app")},3892:function(t,e,a){var r={"./book1.jpeg":759,"./book2.jpeg":8098,"./book3.jpeg":601,"./book4.jpeg":7397,"./book5.jpeg":7647,"./book6.jpeg":9625,"./book7.jpeg":6666,"./book8.jpeg":3680};function o(t){var e=i(t);return a(e)}function i(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id=3892},759:function(t,e,a){"use strict";t.exports=a.p+"img/book1.eba6058d.jpeg"},8098:function(t,e,a){"use strict";t.exports=a.p+"img/book2.be6da0ea.jpeg"},601:function(t,e,a){"use strict";t.exports=a.p+"img/book3.d412b9f0.jpeg"},7397:function(t,e,a){"use strict";t.exports=a.p+"img/book4.35ea6ed1.jpeg"},7647:function(t,e,a){"use strict";t.exports=a.p+"img/book5.243b0b27.jpeg"},9625:function(t,e,a){"use strict";t.exports=a.p+"img/book6.29f4aea1.jpeg"},6666:function(t,e,a){"use strict";t.exports=a.p+"img/book7.ab4679c6.jpeg"},3680:function(t,e,a){"use strict";t.exports=a.p+"img/book8.d519b2ec.jpeg"},3247:function(t,e,a){"use strict";t.exports=a.p+"img/library1.788f9010.jpg"},9965:function(t,e,a){"use strict";t.exports=a.p+"img/library2.f1f01fc6.jpg"},3929:function(t,e,a){"use strict";t.exports=a.p+"img/library3.a9297e5d.jpg"}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r](i,i.exports,a),i.loaded=!0,i.exports}a.m=t,function(){var t=[];a.O=function(e,r,o,i){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],i=t[u][2];for(var n=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(a.O).every((function(t){return a.O[t](r[c])}))?r.splice(c--,1):(n=!1,i<s&&(s=i));if(n){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,o,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,s=r[0],n=r[1],c=r[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(o in n)a.o(n,o)&&(a.m[o]=n[o]);if(c)var u=c(a)}for(e&&e(r);l<s.length;l++)i=s[l],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},r=self["webpackChunkecommercevuefirestore"]=self["webpackChunkecommercevuefirestore"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(8379)}));r=a.O(r)})();
//# sourceMappingURL=app-legacy.b586f95c.js.map
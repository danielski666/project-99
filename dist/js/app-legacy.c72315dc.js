(function(){var t={6076:function(){},6281:function(t,e,a){"use strict";a(6992),a(8674),a(9601),a(7727);var r=a(1357),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],s=a(6076),i=a.n(s),c=i(),l=a(1001),u=(0,l.Z)(c,o,n,!1,null,null,null),d=u.exports,m=(a(1539),a(2809)),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("navbar"),a("carousel"),a("products"),a("appmap")],1)},g=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"success"}},[a("b-navbar-brand",{attrs:{href:"#"},on:{click:t.goHome}},[t._v(" Ecommerce")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[t.isLoggedIn?a("b-nav-item",{attrs:{id:"usr"}},[a("span",{staticClass:"email black-text"},[t._v(t._s(t.currentUser))])]):t._e(),t.isLoggedIn?a("b-nav-item",{attrs:{active:""},on:{click:t.gotocart}},[t._v("Shopping Cart")]):t._e(),t.isLoggedIn?t._e():a("b-nav-item",{attrs:{active:""},on:{click:t.gotologin}},[t._v("Login")]),t.isLoggedIn?t._e():a("b-nav-item",{attrs:{active:""},on:{click:t.gotoregister}},[t._v("Register")]),t.isLoggedIn?a("b-nav-item",{attrs:{active:""},on:{click:t.gotochat}},[t._v("Chat")]):t._e(),a("b-nav-item",{attrs:{active:""},on:{click:t.flashlightFunc}},[t._v("Flashlight")]),t.isLoggedIn?a("button",{staticClass:"btn black",on:{click:t.logout}},[t._v("Logout")]):t._e(),a("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("em",[t._v("Admin")])]},proxy:!0}])},[a("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}]},[t._v("Sign in")])],1)],1)],1)],1),a("div",[a("b-modal",{ref:"my-modal",attrs:{"hide-footer":"",id:"modal-1",title:"Admin"}},[a("b-form",{on:{submit:t.onSubmit}},[a("b-form-group",{attrs:{id:"input-group-1",label:"User:","label-for":"input-1"}},[a("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Enter User"},model:{value:t.form.user,callback:function(e){t.$set(t.form,"user",e)},expression:"form.user"}})],1),a("b-form-group",{attrs:{id:"input-group-2",label:"Password:","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",type:"password",required:"",placeholder:"Enter Password"},model:{value:t.form.pass,callback:function(e){t.$set(t.form,"pass",e)},expression:"form.pass"}})],1),a("b-button",{attrs:{type:"submit",block:"",variant:"primary"}},[t._v("Submit")])],1)],1)],1)],1)},h=[],v=(a(7327),a(8862),a(5546)),b={data:function(){return{isLoggedIn:!1,currentUser:!1,cart:"",form:{user:"",pass:""}}},created:function(){v.Z.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=v.Z.auth().currentUser.email),JSON.parse(localStorage.getItem("products"))&&(this.cart=JSON.parse(localStorage.getItem("products")))},methods:{logout:function(){var t=this;v.Z.auth().signOut().then((function(){t.$router.go({path:t.$router.path})}))},gotocart:function(){this.$router.push("/cart")},gotologin:function(){this.$router.push("/login")},gotoregister:function(){this.$router.push("/register")},goHome:function(){this.$router.push("/")},gotochat:function(){this.$router.push("/realtime")},flashlightFunc:function(){var t="mediaDevices"in navigator;t&&navigator.mediaDevices.enumerateDevices().then((function(t){var e=t.filter((function(t){return"videoinput"===t.kind}));if(0===e.length)throw"No camera found on this device.";var a=e[e.length-1];navigator.mediaDevices.getUserMedia({video:{deviceId:a.deviceId,facingMode:["user","environment"],height:{ideal:1080},width:{ideal:1920}}}).then((function(t){var e=t.getVideoTracks()[0],a=new ImageCapture(e);a.getPhotoCapabilities().then((function(){var t=document.querySelector(".switch");t.addEventListener("click",(function(){e.applyConstraints({advanced:[{torch:!0}]})}))}))}))}))},onSubmit:function(t){if(t.preventDefault(),"admin"!=this.form.user||"456789"!=this.form.pass)return!1;this.$refs["my-modal"].hide(),this.$router.push("/admin"),localStorage.setItem("admin",JSON.stringify("true"))}}},_=b,k=(0,l.Z)(_,f,h,!1,null,null,null),y=k.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-hight":"480"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[r("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[r("img",{staticClass:"d-block img-fluid w-100",staticStyle:{height:"80vh!important"},attrs:{src:a(8722),alt:"image slot"}})]},proxy:!0}])}),r("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[r("img",{staticClass:"d-block img-fluid w-100",staticStyle:{height:"80vh!important"},attrs:{src:a(599),alt:"image slot"}})]},proxy:!0}])}),r("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[r("img",{staticClass:"d-block img-fluid w-100",staticStyle:{height:"80vh!important"},attrs:{src:a(6318),alt:"image slot"}})]},proxy:!0}])})],1)],1)},C=[],x={data:function(){return{slide:0,slidding:null}},methods:{}},S=x,P=(0,l.Z)(S,w,C,!1,null,null,null),j=P.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-container",{staticClass:"bv-example-row mt-4",attrs:{fluid:""}},[r("b-row",t._l(t.books,(function(e,o){return r("b-col",{key:o,attrs:{sm:"6",md:"3"}},[r("b-card",{staticClass:"mb-4",attrs:{title:e.name,"img-src":a(9952)("./book"+(o+1)+".jpg"),"img-alt":"Image","img-top":"",tag:"article"}},[r("b-card-text",[r("h5",[t._v("Price: "+t._s(e.price)+" $")])]),e.cart?t._e():r("b-button",{attrs:{disabled:e.cart,block:"",href:"#",variant:"success"},on:{click:function(a){e.cart=!0,t.addtocart(JSON.parse(JSON.stringify(e)))}}},[t._v("Add to Cart")]),e.cart?r("b-button",{attrs:{disabled:e.cart,block:"",href:"#",variant:"warning"}},[t._v("Already added to cart ")]):t._e()],1)],1)})),1)],1)],1)},N=[],I={data:function(){return{books:[{id:1,quantity:1,name:"Harry Potter and Philosophers Stone",price:15.69,img:"@/assets/books/book1.jpg",cart:!1},{id:2,quantity:1,name:"Harry Potter and Chamber of Secrets",price:17.99,img:"@/assets/books/book1.jpg",cart:!1},{id:3,quantity:1,name:"Harry Potter and Prisoner of Azkaban",price:18.09,img:"@/assets/books/book1.jpg",cart:!1},{id:4,quantity:1,name:"Harry Potter and Goblet of Fire",price:17.59,img:"@/assets/books/book1.jpg",cart:!1},{id:5,quantity:1,name:"Harry Potter and Order of the Phoenix",price:19.99,img:"@/assets/books/book1.jpg",cart:!1},{id:6,quantity:1,name:"Harry Potter and Half-Blood Prince",price:16.79,img:"@/assets/books/book1.jpg",cart:!1},{id:7,quantity:1,name:"Harry Potter and Deathly Hallows",price:21.89,img:"@/assets/books/book1.jpg",cart:!1},{id:8,quantity:1,name:"Harry Potter and the Cursed Child",price:15.69,img:"@/assets/books/book8.jpg",cart:!1}]}},methods:{addtocart:function(t){var e=[];e=JSON.parse(localStorage.getItem("products"))?JSON.parse(localStorage.getItem("products")):[],e.push(t),localStorage.setItem("products",JSON.stringify(e))}},created:function(){var t=[];t=JSON.parse(localStorage.getItem("products"))?JSON.parse(localStorage.getItem("products")):[];for(var e=0;e<t.length;e++)for(var a=0;a<this.books.lenght;a++)t[e].id==this.books[a].id&&(this.books[a].cart=!0)}},O=I,Z=(0,l.Z)(O,$,N,!1,null,null,null),q=Z.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("h3",[t._v("Location our shop: Poland, Krakow, street Rakowicka 27 is present at below map.")]),a("div",{staticStyle:{height:"100%",width:"100%"}},[a("l-map",{staticClass:"ma-auto col-12",staticStyle:{"min-height":"700px",height:"100%"},attrs:{zoom:t.zoom,center:t.center},on:{"update:zoom":t.zoomUpdated,"update:center":t.centerUpdated,"update:bounds":t.boundsUpdated}},[a("l-tile-layer",{attrs:{url:t.url}}),t.marker?a("l-marker",{attrs:{"lat-lng":t.marker}},[a("l-popup",[t._v("You are here")])],1):t._e(),a("l-marker",{attrs:{"lat-lng":t.markerLatLng}},[a("l-popup",[t._v("Here is our bookstore!")])],1)],1)],1)])},E=[],A=a(9014),U=a(5148),M=a(6512),J=a(9118),z=a(4774),F={name:"MapComponent",data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",zoom:10,center:[50.06988997898041,19.955011147403724],bounds:null,marker:null,markerLatLng:[50.06988997898041,19.955011147403724]}},methods:{zoomUpdated:function(t){this.zoom=t},centerUpdated:function(t){this.center=t},boundsUpdated:function(t){this.bounds=t},addMarker:function(t){console.log(t),this.marker=t.latlng,this.$emit("newLocation",t.latlng)}},mounted:function(){var t=this;delete A.Icon.Default.prototype._getIconUrl,A.Icon.Default.mergeOptions({iconRetinaUrl:a(6431),iconUrl:a(7093),shadowUrl:a(8858)}),navigator.geolocation.getCurrentPosition((function(e){t.addMarker({latlng:{lat:e.coords.latitude,lng:e.coords.longitude}}),t.center=[e.coords.latitude,e.coords.longitude]}),null,{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},components:{LMap:U.Z,LTileLayer:M.Z,LMarker:J.Z,LPopup:z.Z}},D=F,T=(0,l.Z)(D,L,E,!1,null,null,null),H=T.exports,G={name:"home",components:{navbar:y,carousel:j,products:q,appmap:H}},R=G,B=(0,l.Z)(R,p,g,!1,null,null,null),W=B.exports,Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("navbar"),r("b-container",{staticClass:"mt-4",attrs:{fluid:""}},[r("b-row",[r("b-col",[r("h2",[t._v(" Shopping Cart ")])])],1),r("b-row",[r("b-col",{staticClass:"text-center",attrs:{sm:"12"}},[r("b-table",{attrs:{fixed:"",bordered:"",hover:"",items:t.cart,fields:t.fields},scopedSlots:t._u([{key:"cell(#)",fn:function(e){return[t._v(" "+t._s(e.index+1)+" ")]}},{key:"cell(price)",fn:function(e){return[t._v(" "+t._s((e.item.price*e.item.quantity).toFixed(2))+" $ ")]}},{key:"cell(remove)",fn:function(e){return[r("b-button",{staticClass:"mr-2",attrs:{variant:"danger"},on:{click:function(a){return t.remove(e.item.id)}}},[t._v(" X ")])]}},{key:"cell(quantity)",fn:function(e){return[r("b-row",[r("b-col",{staticClass:"text-center",attrs:{md:"3",sm:"12"}},[r("b-button",{staticClass:"mr-2",attrs:{disabled:e.item.quantity<=1,variant:"primary"},on:{click:function(a){return t.decrement(e.item.id)}}},[t._v(" - ")])],1),r("b-col",{staticClass:"text-center",attrs:{md:"6",sm:"12"}},[r("h4",[t._v(t._s(e.item.quantity))])]),r("b-col",{staticClass:"text-center",attrs:{md:"3",sm:"12"}},[r("b-button",{staticClass:"mr-2",attrs:{variant:"primary"},on:{click:function(a){return t.increment(e.item.id)}}},[t._v(" + ")])],1)],1)]}},{key:"cell(image)",fn:function(t){return[r("b-img",{staticStyle:{"max-width":"3rem"},attrs:{src:a(9952)("./book"+t.item.id+".jpg"),fluid:"",alt:"Responsive image"}})]}}])})],1)],1),t.cart.length>0?r("b-row",{staticClass:"text-center"},[r("b-col"),r("b-col"),r("b-col"),r("b-col"),r("b-col",[r("h3",[t._v("Total")])]),r("b-col",[r("h3",[t._v(t._s(t.total.toFixed(2))+" $ ")])])],1):t._e(),t.cart.length>0?r("b-row",{staticClass:"mt-4 text-center"},[r("b-col",[r("b-button",{staticClass:"mr-2",attrs:{variant:"info",block:""},on:{click:t.clean}},[t._v(" Clean ")])],1),r("b-col"),r("b-col"),r("b-col",[r("b-button",{staticClass:"mr-2",attrs:{variant:"success",block:""},on:{click:t.buy}},[t._v(" Buy ")])],1)],1):t._e(),r("b-modal",{ref:"modal-1",attrs:{"hide-header-close":"","no-close-on-esc":"","no-close-on-backdrop":"",centered:"",title:"Purchase Completed "}},[r("template",{slot:"modal-footer"},[r("b-button",{staticClass:"mt-3",attrs:{variant:"info",block:""},on:{click:t.clean}},[t._v("Confirm")])],1),r("p",{staticClass:"mb-4"},[t._v("Products:")]),t._l(t.ticket.products,(function(e){return r("ul",{key:e.id},[r("li",[t._v(" Product name: "+t._s(e.name)+" ")]),r("li",[t._v(" Quantity: "+t._s(e.quantity)+" ")]),r("li",[t._v(" Price: "+t._s(e.price.toFixed(2))+" $ ")]),r("li",[t._v(" Total: "+t._s((e.price*e.quantity).toFixed(2))+" $ ")]),r("hr")])})),r("h2",{staticClass:"my-4 text-center"},[t._v("Total: "+t._s(t.ticket.total.toFixed(2))+" $")])],2)],1)],1)},V=[];a(561),a(2456),a(58),a(1646),a(8248),a(7277),a(3966);a(5843),a(4918),a(5711),a(747);var K={apiKey:"AIzaSyCRz007_g__YWEGOSfw6ST0ixh1lzB1qfo",authDomain:"mobiledatabase-c4b0f.firebaseapp.com",projectId:"mobiledatabase-c4b0f",storageBucket:"mobiledatabase-c4b0f.appspot.com",messagingSenderId:"646149635200",appId:"1:646149635200:web:3e58562530e89c4fe17a65",measurementId:"G-95YS2BY79V"};v.Z.initializeApp(K);v.Z.auth();var Q=v.Z.firestore(),X=(v.Z.storage(),v.Z.functions(),v.Z.database()),tt={name:"Cart",components:{navbar:y},data:function(){return{ticket:{products:null,total:0},counter:0,cart:[],fields:["#","remove","image","name","quantity","price"]}},methods:{clean:function(){for(var t in this.cart=[],this.cart)this.cart[t].cart=!1,this.cart[t].quantity=1;localStorage.setItem("products",JSON.stringify(this.cart)),this.$refs["modal-1"].hide()},remove:function(t){for(var e=0;e<this.cart.length;e++)this.cart[e].id==t&&(this.cart.splice(e,1),localStorage.setItem("products",JSON.stringify(this.cart)))},buy:function(){this.ticket={products:this.cart,total:this.total},Q.collection("vue").add(this.ticket),this.$refs["modal-1"].show()},increment:function(t){for(var e=0;e<this.cart.length;e++)this.cart[e].id==t&&(this.cart[e].quantity++,localStorage.setItem("products",JSON.stringify(this.cart)))},decrement:function(t){for(var e=0;e<this.cart.length;e++)this.cart[e].id==t&&(this.cart[e].quantity--,localStorage.setItem("products",JSON.stringify(this.cart)))}},computed:{total:function(){for(var t=0,e=0;e<this.cart.length;e++)t+=this.cart[e].price*this.cart[e].quantity;return t}},created:function(){JSON.parse(localStorage.getItem("products"))?this.cart=JSON.parse(localStorage.getItem("products")):this.cart=[]}},et=tt,at=(0,l.Z)(et,Y,V,!1,null,"4eaf96c7",null),rt=at.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NavbarAdmin"),a("b-container",{staticClass:"mt-4",attrs:{fluid:""}},[a("b-table",{staticStyle:{"white-space":"pre-line"},attrs:{fixed:"",busy:t.busy,bordered:"",fields:t.fields,hover:"",items:t.items},scopedSlots:t._u([{key:"cell(products)",fn:function(e){return[a("h5",[t._v("Id: "+t._s(e.item.id.substring(0,9)))]),t._l(e.item.products,(function(e,r){return a("ul",{key:r},[a("li",[t._v("Name: "+t._s(e.name))]),a("li",[t._v("Price: "+t._s(e.price)+" $")]),a("li",[t._v("Quantity: "+t._s(e.quantity))]),a("hr")])}))]}},{key:"cell(total)",fn:function(e){return[a("h2",[t._v("$ "+t._s(e.item.total))])]}},{key:"cell(delete)",fn:function(e){return[a("b-button",{staticClass:"mt-4",staticStyle:{top:"50%!important"},attrs:{block:"",size:"lg",variant:"danger"},on:{click:function(a){return t.deletesale(e.item.id)}}},[t._v("Delete Sale")])]}},{key:"table-busy",fn:function(){return[a("div",{staticClass:"text-center text-success my-2"},[a("b-spinner",{staticClass:"align-middle"}),a("strong",[t._v("Loading...")])],1)]},proxy:!0}])})],1)],1)},nt=[],st=(a(4747),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"success"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v(" Admin")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{active:""},on:{click:t.gohome}},[t._v(" Exit ")])],1)],1)],1),a("div",[a("b-modal",{attrs:{id:"modal-1",title:"BootstrapVue"}},[a("p",{staticClass:"my-4"},[t._v(" Admin ")])])],1)],1)}),it=[],ct={data:function(){return{}},created:function(){},methods:{gohome:function(){this.$router.push("/")}}},lt=ct,ut=(0,l.Z)(lt,st,it,!1,null,null,null),dt=ut.exports,mt={data:function(){return{data:"",busy:!0,items:[],fields:[{key:"products",label:"Sales",tdClass:"field1"},{key:"total",label:"Total",tdClass:"field2"},{key:"delete",label:"Delete",tdClass:"field3"}]}},components:{NavbarAdmin:dt},created:function(){var t=this;Q.collection("vue").onSnapshot((function(e){t.items=[],t.buys=!0,e.forEach((function(e){var a=e.data();a.id=e.id,t.items.push(a)})),t.items.length,t.busy=!1}))},methods:{deletesale:function(t){Q.collection("vue").doc(t).delete().then((function(){}))}}},pt=mt,gt=(0,l.Z)(pt,ot,nt,!1,null,null,null),ft=gt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navbar"),a("div",{staticClass:"container"},[a("br"),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"card"},[t._m(0),a("br"),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field",attrs:{align:"center"}},[a("i",{staticClass:"material-icons prefix"},[t._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email",placeholder:"Email Address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("label",{attrs:{for:"email"}})]),a("div",{staticClass:"input-field",attrs:{align:"center"}},[a("i",{staticClass:"material-icons prefix"},[t._v("lock")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("label",{attrs:{for:"password"}})]),a("br"),a("div",{attrs:{align:"center"}},[a("b-button",{attrs:{variant:"success"},on:{click:t.login}},[t._v("Login")])],1),a("br")]),a("br"),a("b-container",[a("b-row",[a("b-col",[a("p",{attrs:{align:"center"}},[a("img",{staticClass:"img-fluid",staticStyle:{width:"20%"},attrs:{src:"https://cdn.icon-icons.com/icons2/2415/PNG/512/google_original_logo_icon_146496.png",alt:"Responsive image"}}),a("br"),a("b-button",{attrs:{type:"button",variant:"success"},on:{click:t.socialLoginGmail}},[t._v(" Login via Gmail Account ")])],1)]),a("b-col",[a("p",{attrs:{align:"center"}},[a("img",{staticClass:"img-fluid",staticStyle:{width:"20%"},attrs:{src:"http://fabrykapalet.com/wp-content/uploads/2017/02/logo-facebook.png",alt:"Responsive image"}}),a("br"),a("b-button",{attrs:{type:"button",variant:"success"},on:{click:t.socialLoginFacebook}},[t._v(" Login via Facebook ")])],1)])],1)],1)],1)])])])],1)},vt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header",attrs:{align:"center"}},[a("h4",[t._v("Login")])])}],bt={name:"login",components:{navbar:y},data:function(){return{email:"",password:""}},methods:{login:function(t){var e=this;v.Z.auth().signInWithEmailAndPassword(this.email,this.password).then((function(t){alert("You are logged in as ".concat(t.email)),e.$router.go({path:e.$router.path})}),(function(t){alert(t.message)})),t.preventDefault()},socialLoginGmail:function(){var t=this,e=new v.Z.auth.GoogleAuthProvider;v.Z.auth().signInWithPopup(e).then((function(e){alert("successfully logged in with google account !"),t.$router.push("/")})).catch((function(t){alert("Error logging .."+t.message)}))},socialLoginFacebook:function(){var t=this,e=new v.Z.auth.FacebookAuthProvider;e.setCustomParameters({display:"popup"}),v.Z.auth().signInWithPopup(e).then((function(e){e.user;var a=FacebookAuthProvider.credentialFromResult(e);a.accessToken;alert("Użytkownik zalogowany poprzez konto facebook !"),t.$router.push("/")})).catch((function(t){alert("Błąd logowania .."+t.message)}))}}},_t=bt,kt=(0,l.Z)(_t,ht,vt,!1,null,"12657dde",null),yt=kt.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navbar"),a("div",{staticClass:"container"},[a("br"),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"card"},[t._m(0),a("br"),a("form",{attrs:{action:"index.html"}},[a("div",{staticClass:"input-field",attrs:{align:"center"}},[a("i",{staticClass:"material-icons prefix"},[t._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email",placeholder:"Email Address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("label",{attrs:{for:"email"}})]),a("div",{staticClass:"input-field",attrs:{align:"center"}},[a("i",{staticClass:"material-icons prefix"},[t._v("lock")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("label",{attrs:{for:"password"}})]),a("br"),a("div",{attrs:{align:"center"}},[a("b-button",{attrs:{variant:"success"},on:{click:t.register}},[t._v("Register")])],1),a("br")])])])])])],1)},Ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header",attrs:{align:"center"}},[a("h4",[t._v("Register")])])}],xt={name:"register",components:{navbar:y},data:function(){return{email:"",password:""}},methods:{register:function(t){var e=this;v.Z.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(t){alert("Account Created for ".concat(t.email)),e.$router.go({path:e.$router.path})}),(function(t){alert(t.message)})),t.preventDefault()}}},St=xt,Pt=(0,l.Z)(St,wt,Ct,!1,null,null,null),jt=Pt.exports,$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("navbar"),a("div",{attrs:{id:"app1"}},[t.name?a("div",{staticClass:"message-body mt-3"},[a("h3",[t._v("Chat")]),a("h5",[t._v("Welcome "+t._s(t.name)+"!")]),t._v(" ........... ")]):a("div",{staticClass:"login mt-5"},[a("h3",{staticClass:"mt-5"},[t._v("Join our Chat")]),a("label",{attrs:{for:"username"}},[t._v("userName")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"mb-3",attrs:{type:"text"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}}),a("br"),a("button",{staticClass:"btn btn-primary",on:{click:t.updateUsername}},[t._v("Join Chat")])]),t.name?a("div",{staticClass:"message-body mt-3"},[a("h3",[t._v("Chat")]),a("h5",[t._v("Welcome "+t._s(t.name)+"!")]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},t._l(t.messages,(function(e){return a("div",{key:e,staticClass:"border pl-2 pt-1 ml-2 message-text mb-2"},[a("span",{staticClass:"mg-text"},[t._v(t._s(e.username))]),a("p",{staticClass:"message pt-1"},[t._v(t._s(e.text))])])})),0)]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.showMessage,expression:"showMessage"}],staticClass:"mt-3 mr-2 pl-2 pr-2",attrs:{type:"text"},domProps:{value:t.showMessage},on:{input:function(e){e.target.composing||(t.showMessage=e.target.value)}}}),a("button",{staticClass:"btn btn-primary",on:{click:t.sendMessage}},[t._v("Send")])]):a("div",{staticClass:"login mt-5"},[t._v(" .................. ")])])],1)},Nt=[],It=(a(8309),a(7941),{name:"realtime",components:{navbar:y},data:function(){return{userName:"",name:"",showMessage:"",messages:[]}},methods:{updateUsername:function(){this.name=this.userName,console.log(this.userName),this.userName=""},sendMessage:function(){var t={text:this.showMessage,username:this.name};X.ref("messages").push(t),this.showMessage=""}},mounted:function(){var t=this,e=X.ref("messages");e.on("value",(function(e){var a=e.val(),r=[];Object.keys(a).forEach((function(t){r.push({id:t,username:a[t].username,text:a[t].text})})),t.messages=r}))}}),Ot=It,Zt=(0,l.Z)(Ot,$t,Nt,!1,null,null,null),qt=Zt.exports;r["default"].use(m.Z);var Lt=[{path:"/",name:"home",component:W,meta:{requiresAuth:!0}},{path:"/cart",name:"cart",component:rt,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:yt,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:jt,meta:{requiresGuest:!0}},{path:"/admin",name:"admin",component:ft,meta:{requiresAuth:!0}},{path:"/realTime",name:"realTime",component:qt,meta:{requiresAuth:!0}}],Et=new m.Z({mode:"history",base:"/project-99/",routes:Lt});Et.beforeEach((function(t,e,a){t.matched.some((function(t){return t.meta.requiresAuth}))?v.Z.auth().currentUser?a():a({path:"/login",query:{redirect:t.fullPath}}):t.matched.some((function(t){return t.meta.requiresGuest}))&&v.Z.auth().currentUser?a({path:"/",query:{redirect:t.fullPath}}):a()}));var At,Ut=Et,Mt=(a(44),a(150)),Jt=a(27);r["default"].use(Mt.XG7),r["default"].use(Jt.hDw),r["default"].config.productionTip=!1,v.Z.auth().onAuthStateChanged((function(t){At||(At=new r["default"]({el:"#app",router:Ut,template:"<App/>",components:{App:d}}))}))},9952:function(t,e,a){var r={"./book1.jpg":4870,"./book2.jpg":4595,"./book3.jpg":3792,"./book4.jpg":9522,"./book5.jpg":8531,"./book6.jpg":2024,"./book7.jpg":3255,"./book8.jpg":7563};function o(t){var e=n(t);return a(e)}function n(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=n,t.exports=o,o.id=9952},6318:function(t,e,a){"use strict";t.exports=a.p+"img/banner.c8434f2e.jpg"},599:function(t,e,a){"use strict";t.exports=a.p+"img/banner2.75c2a326.jpg"},8722:function(t,e,a){"use strict";t.exports=a.p+"img/banner3.358f6d4f.jpg"},4870:function(t,e,a){"use strict";t.exports=a.p+"img/book1.2e17c8f9.jpg"},4595:function(t,e,a){"use strict";t.exports=a.p+"img/book2.4b73d6a8.jpg"},3792:function(t,e,a){"use strict";t.exports=a.p+"img/book3.79298d14.jpg"},9522:function(t,e,a){"use strict";t.exports=a.p+"img/book4.3cbe0e09.jpg"},8531:function(t,e,a){"use strict";t.exports=a.p+"img/book5.d34dbba2.jpg"},2024:function(t,e,a){"use strict";t.exports=a.p+"img/book6.68e22387.jpg"},3255:function(t,e,a){"use strict";t.exports=a.p+"img/book7.97d814bb.jpg"},7563:function(t,e,a){"use strict";t.exports=a.p+"img/book8.62be8fd0.jpg"}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var n=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=t,function(){var t=[];a.O=function(e,r,o,n){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],o=t[u][1],n=t[u][2];for(var i=!0,c=0;c<r.length;c++)(!1&n||s>=n)&&Object.keys(a.O).every((function(t){return a.O[t](r[c])}))?r.splice(c--,1):(i=!1,n<s&&(s=n));if(i){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[r,o,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){a.p="/project-99/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,n,s=r[0],i=r[1],c=r[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(c)var u=c(a)}for(e&&e(r);l<s.length;l++)n=s[l],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},r=self["webpackChunkecommercevuefirestore"]=self["webpackChunkecommercevuefirestore"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(6281)}));r=a.O(r)})();
//# sourceMappingURL=app-legacy.c72315dc.js.map
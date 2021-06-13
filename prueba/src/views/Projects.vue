<template>
	<template v-if="user">
		<div class="nav">			
     		<h1>MY PARADISE</h1>
			<div class="buttons">
				<form class="loginForm" @submit.prevent="logout">
					<button class="login">Cerrar sesión</button>
				</form>
			</div>
		</div>
	</template>
	<template v-else>
    	<div class="nav">
			<h1>MY PARADISE</h1>
			<div class="buttons">
				<router-link to="/login">
					<a class="login">Iniciar Sesión</a>
				</router-link>
				<router-link to="/register">
					<a class="register">Registrarse</a>
				</router-link>
			</div>
		</div>
	</template>
		<div class="destacados">
			<h1>DESTACADOS</h1>
		</div>
		<div class="CSSgal">

			<!-- Don't wrap targets in parent -->
			<s id="s1"></s>
			<s id="s2"></s>
			<s id="s3"></s>
			<s id="s4"></s>

			<div class="slider">
				<div>
					<div class="imagen"></div>
					<div class="info">
						<h1>CODING HOUSE</h1>
						<h3><i>Migue Blanca</i></h3>
						<p>
							Casa de bamboo modernista pensada para un grupo de programadores expertos, con el fin de que puedan realizar su actividad profesional con 
							las mayores calidades posibles.
						</p>
					</div>
				</div>
				<div class="gallery-cell2">
					<div class="imagen2"></div>
					<div class="info">
						<h1>CHALET VELETA</h1>
						<h3><i>Migue Blanca</i></h3>
						<p>
							Chalet veraniego con materiales de alta calidad. Un lugar en el que poder disfrutar de un retiro espiritual, de unas vacaciones con 
							amigos y/o familia o simplemente una escapada de fin de semana. Listo para cualquier época del año.
						</p>
					</div>
				</div>
				<div class="gallery-cell3">
					<div class="imagen3"></div>
					<div class="info">
						<h1>ROCA DORADA</h1>
						<h3><i>Migue Blanca</i></h3>
						<p>
							Vivienda inspirada en las tres famosas egipcias, fabricada en roca caliza polvorienta cargadas por innumerables grupos de personas, 
							esclavas en su época con numerosos laberintos en su interior.
						</p>
					</div>
				</div>
				<div class="gallery-cell4">
					<div class="imagen4"></div>
					<div class="info">
						<h1>MOLINO SUEÑO VERDE</h1>
						<h3><i>Migue Blanca</i></h3>
						<p>
							Molino inspirado en los relatos de Don Quijote ahora más en la realidad que nunca. También preparado para en la época de la aceituna poder 
							moler esta y dar a sus agricultores un aceite de la mayor calidad posible.
						</p>
					</div>
				</div>
			</div>

			<div class="prevNext">
				<div><a href="#s4"></a><a href="#s2"></a></div>
				<div><a href="#s1"></a><a href="#s3"></a></div>
				<div><a href="#s2"></a><a href="#s4"></a></div>
				<div><a href="#s3"></a><a href="#s1"></a></div>
			</div>

			<div class="bullets">
				<a href="#s1">1</a>
				<a href="#s2">2</a>
				<a href="#s3">3</a>
				<a href="#s4">4</a>
			</div>

		</div>
		<!-- <div class="gallery js-flickity" data-flickity-options='{ "wrapAround": true }'>
		  	<div class="gallery-cell">
		  		<div class="imagen"></div>
		  		<div class="info">
		  			<h1>CODING HOUSE</h1>
		  			<h3><i>Migue Blanca</i></h3>
		  			<p>
		  				Casa de bamboo modernista pensada para un grupo de programadores expertos, con el fin de que puedan realizar su actividad profesional con 
						las mayores calidades posibles.
		  			</p>
		  		</div>
		  	</div>
		  	<div class="gallery-cell2">
		  		<div class="imagen2"></div>
		  		<div class="info">
		  			<h1>CHALET VELETA</h1>
		  			<h3><i>Migue Blanca</i></h3>
		  			<p>
		  				Chalet veraniego con materiales de alta calidad. Un lugar en el que poder disfrutar de un retiro espiritual, de unas vacaciones con 
						amigos y/o familia o simplemente una escapada de fin de semana. Listo para cualquier época del año.
					</p>
		  		</div>
		  	</div>
		  	<div class="gallery-cell3">
		  		<div class="imagen3"></div>
		  		<div class="info">
		  			<h1>ROCA DORADA</h1>
		  			<h3><i>Migue Blanca</i></h3>
		  			<p>
		  				Vivienda inspirada en las tres famosas egipcias, fabricada en roca caliza polvorienta cargadas por innumerables grupos de personas, 
						esclavas en su época con numerosos laberintos en su interior.
					</p>
		  		</div>
		  	</div>
		  	<div class="gallery-cell4">
		  		<div class="imagen4"></div>
		  		<div class="info">
		  			<h1>MOLINO SUEÑO VERDE</h1>
		  			<h3><i>Migue Blanca</i></h3>
		  			<p>
		  				Molino inspirado en los relatos de Don Quijote ahora más en la realidad que nunca. También preparado para en la época de la aceituna poder 
						moler esta y dar a sus agricultores un aceite de la mayor calidad posible.
		  			</p>
		  		</div>
		  	</div>
		</div> -->
		<div class="contenido">	
			<h1>TODOS LOS PROYECTOS</h1>
			<div class="diseños">
				<div class="diseño">
					<router-link to="/design6">
						<div class="diseñoImg"></div>
					</router-link>
					<div class="texto">
						<h2>Iglesia Fuente Divina</h2>
						<h3>Migue Blanca</h3>
					</div>
				</div>
				<div class="diseño">
					<div class="texto">
						<h2>Cantina Whiskey</h2>
						<h3>Migue Blanca</h3>
					</div>
					<router-link to="/design4">
						<div class="diseñoImg2"></div>
					</router-link>
				</div>
				<div class="diseño">
					<router-link to="/design">
						<div class="diseñoImg3"></div>
					</router-link>
					<div class="texto">
						<h2>Casa Flanders</h2>
						<h3>Migue Blanca</h3>
					</div>
				</div>
				<div class="diseño">
					<div class="texto">
						<h2>Chalet Veleta</h2>
						<h3>Migue Blanca</h3>
					</div>
					<router-link to="/design5">
						<div class="diseñoImg4"></div>
					</router-link>
				</div>
				<div class="diseño">
					<div class="texto">
						<h2>Roca dorada</h2>
						<h3>Migue Blanca</h3>
					</div>
					<router-link to="/design2">
						<div class="diseñoImg5"></div>
					</router-link>
				</div>
				<div class="diseño">
					<div class="texto">
						<h2>Coding house</h2>
						<h3>Migue Blanca</h3>
					</div>
					<router-link to="/design3">
						<div class="diseñoImg6"></div>
					</router-link>
				</div>
				<div class="diseño">
					<div class="texto">
						<h2>Molino sueño verde</h2>
						<h3>Migue Blanca</h3>
					</div>
					<router-link to="/design7">
						<div class="diseñoImg7"></div>
					</router-link>
				</div>
			</div>		
		</div>
    <pie />
</template>

<script>
// @ is an alias to /src
import Pie from '@/components/Pie/Pie.vue'
import firebase from 'firebase'

export default {
	data() {
		return {
			isOpen: false,
			user: null
		}
	},
	components: {
		Pie,
	},
	methods: {
		toggleMenu () {
			const status = !this.isOpen;
			this.isOpen = status;
		},
		logout(){
			firebase.auth().signOut().then(() => {
				this.$router.push({name: 'Projects'})
			});
		}
	},
	created() {
		firebase.auth().onAuthStateChanged(user => {
			if(user){
				this.user = user;
			}else{
				this.user = null;
			}
		})
	},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500&display=swap');

html{
	width: 100%;
	height: 100%;
	margin: 0 auto;
}

body{
	width: 80%;
	margin: 0 auto;
	margin-left: 10%;
}

html, .nav{
	background-color: #75c9e3;
}

body{
	background-color: white;
}

.nav{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;
	min-height: 150px;
}

.buttons{
	display: flex;
	margin-left: auto;
	width: 50%;
	justify-content: flex-end;
}

.destacados{
    margin-top: 40px;
    margin-bottom: 40px;
}

.destacados h1{	
	font-family: 'Montserrat';
  	font-size: 2.5em;
  	font-weight: 600;
    color: #FB642B;
    text-align: center;
}


.nav h1{
	font-family: 'Montserrat';
  	font-size: 2.5em;
  	font-weight: 600;
    color: #45769e;
	text-decoration: none;
}

.search{
	width: 30%;
        padding: 12px 24px;

        background-color: transparent;
        transition: transform 250ms ease-in-out;
        font-size: 14px;
        line-height: 18px;
        
        color: #575756;
        background-color: transparent;
/*         background-image: url(http://mihaeltomic.com/codepen/input-search/ic_search_black_24px.svg); */
 
      background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: 18px 18px;
        background-position: 95% center;
        border-radius: 50px;
        border: 1px solid #575756;
        transition: all 250ms ease-in-out;
        backface-visibility: hidden;
        transform-style: preserve-3d;
}

.search:hover, .search:focus{
	padding: 12px 0;
            outline: 0;
            border: 1px solid transparent;
            border-bottom: 1px solid #575756;
            border-radius: 0;
            background-position: 100% center;
}

.login{
	font-family: 'Montserrat';
	background-color: #FB642B;
	border-radius: 20px;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 15px;
	padding-right: 15px;
	border: none;
	color: white;
	font-size: 0.9em;
	text-decoration: none;
	margin-right: 80px;
}

.register{
	font-family: 'Montserrat';
	background-color: #288990;
	border-radius: 20px;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 15px;
	padding-right: 15px;
	border: none;
	color: white;
	font-size: 0.9em;
	text-decoration: none;
}

.login:hover, .register:hover{
	cursor: pointer;
}

.login:hover{
	background-color: #d85626;
}

.register:hover{
	background-color: #206D73;	
}

.gallery {
  background: rgb(255, 255, 255);
}

.gallery-cell,.gallery-cell2,.gallery-cell3,.gallery-cell4{
  width: 66%;
  height: 500px;
  margin-right: 10px;
  counter-increment: gallery-cell;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.gallery-cell{
  background-image: url("../assets/3.jpg");
}

.gallery-cell2{
  background-image: url("../assets/5.jpg");	
}

.gallery-cell3{
  background-image: url("../assets/2.jpg");	
}

.gallery-cell4{
  background-image: url("../assets/7.jpg");	
}

.imagen,.imagen2,.imagen3,.imagen4{
  height: 200px;
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.imagen{
  background-image: url("../assets/3.jpeg");
}
.imagen2{
  background-image: url("../assets/5.jpeg");
}
.imagen3{
  background-image: url("../assets/2.jpeg");
}
.imagen4{
  background-image: url("../assets/7.jpeg");
}

/* * {
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
}
html,
body {
	height: 100%;
}
body {
	margin: 0;
	font: 16px/1.3 sans-serif;
} */

/*
PURE RESPONSIVE CSS3 SLIDESHOW GALLERY by Roko C. buljan
http://stackoverflow.com/a/34696029/383904
*/

.CSSgal {
	position: relative;
	overflow: hidden;
	height: 100%; /* Or set a fixed height */
	margin: 20px;
}

/* SLIDER */

.CSSgal .slider {
	height: 100%;
	white-space: nowrap;
	font-size: 0;
	transition: 0.8s;
}

/* SLIDES */

.CSSgal .slider > * {
	font-size: 1rem;
	display: inline-block;
	white-space: normal;
	vertical-align: top;
	height: 100%;
	width: 100%;
	background: none 50% no-repeat;
	background-size: cover;
}

/* PREV/NEXT, CONTAINERS & ANCHORS */

.CSSgal .prevNext {
	position: absolute;
	z-index: 1;
	top: 50%;
	width: 100%;
	height: 0;
}

.CSSgal .prevNext > div + div {
	visibility: hidden; /* Hide all but first P/N container */
}

.CSSgal .prevNext a {
	background: #FB642B;
	position: absolute;
	width: 60px;
	height: 60px;
	line-height: 60px; /* If you want to place numbers */
	text-align: center;
	opacity: 0.7;
	-webkit-transition: 0.3s;
	transition: 0.3s;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	left: 0;
}
.CSSgal .prevNext a:hover {
	opacity: 1;
}
.CSSgal .prevNext a + a {
	left: auto;
	right: 0;
}

/* NAVIGATION */

.CSSgal .bullets {
	position: absolute;
	z-index: 2;
	bottom: 0;
	padding: 10px 0;
	margin-top: 30px;
	width: 100%;
	text-align: center;
}
.CSSgal .bullets > a {
	display: inline-block;
	width: 30px;
	height: 30px;
	line-height: 30px;
	text-decoration: none;
	text-align: center;
	background: rgba(255, 255, 255, 1);
	-webkit-transition: 0.3s;
	transition: 0.3s;
}
.CSSgal .bullets > a + a {
	background: rgba(255, 255, 255, 0.5); /* Dim all but first */
}
.CSSgal .bullets > a:hover {
	background: rgba(255, 255, 255, 0.7) !important;
}

/* NAVIGATION BUTTONS */
/* ALL: */
.CSSgal > s:target ~ .bullets > * {
	background: rgba(255, 255, 255, 0.5);
}
/* ACTIVE */
#s1:target ~ .bullets > *:nth-child(1) {
	background: rgba(255, 255, 255, 1);
}
#s2:target ~ .bullets > *:nth-child(2) {
	background: rgba(255, 255, 255, 1);
}
#s3:target ~ .bullets > *:nth-child(3) {
	background: rgba(255, 255, 255, 1);
}
#s4:target ~ .bullets > *:nth-child(4) {
	background: rgba(255, 255, 255, 1);
}
/* More slides? Add here more rules */

/* PREV/NEXT CONTAINERS VISIBILITY */
/* ALL: */
.CSSgal > s:target ~ .prevNext > * {
	visibility: hidden;
}
/* ACTIVE: */
#s1:target ~ .prevNext > *:nth-child(1) {
	visibility: visible;
}
#s2:target ~ .prevNext > *:nth-child(2) {
	visibility: visible;
}
#s3:target ~ .prevNext > *:nth-child(3) {
	visibility: visible;
}
#s4:target ~ .prevNext > *:nth-child(4) {
	visibility: visible;
}
/* More slides? Add here more rules */

/* SLIDER ANIMATION POSITIONS */

#s1:target ~ .slider {
	transform: translateX(0%);
	-webkit-transform: translateX(0%);
}
#s2:target ~ .slider {
	transform: translateX(-100%);
	-webkit-transform: translateX(-100%);
}
#s3:target ~ .slider {
	transform: translateX(-200%);
	-webkit-transform: translateX(-200%);
}
#s4:target ~ .slider {
	transform: translateX(-300%);
	-webkit-transform: translateX(-300%);
}
/* More slides? Add here more rules */

/* YOU'RE THE DESIGNER! 
   ____________________
   All above was mainly to get it working :)
   CSSgal CUSTOM STYLES / OVERRIDES HERE: */

.CSSgal {
	color: #fff;
	text-align: center;
}
.CSSgal .slider h2 {
	margin-top: 40vh;
	font-weight: 200;
	letter-spacing: -0.06em;
	word-spacing: 0.2em;
	font-size: 3em;
}
.CSSgal a {
	border-radius: 50%;
	margin: 0 3px;
	color: rgba(0, 0, 0, 0.8);
	text-decoration: none;
}

.info{
  height: 200px;
  width: 90%;
  margin-left: 5%;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: auto;
  color: black;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.info h1{
	margin: 0;
	font-family: 'Montserrat';
  	font-size: 2.5em;
  	font-weight: 600;
}

.info h3{
	margin: 0;
	margin-left: auto;
	font-family: 'Montserrat';
  	font-size: 1.2em;
  	font-weight: 400;
}

.info p{
	margin: 0;
	text-align: justify;
	font-family: 'Montserrat';
	line-height: 1.4;
  	font-weight: 400;
}

.botones{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 80px;
}

.botones a{
	font-family: 'Montserrat';
	background-color: #45769e;
	border-radius: 20px;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 15px;
	padding-right: 15px;
	border: none;
	color: white;
	font-size: 0.9em;
	text-decoration: none;	
}

.botones a:hover{
	cursor: pointer;
	background-color: #375E7D;
}

.contenido h1{	
	font-family: 'Montserrat';
  	font-size: 2.5em;
  	font-weight: 600;
    color: #FB642B;
    text-align: center;
    margin-top: 60px;
}

.diseños{
	width: 80%;
	margin-left: 10%;
}

.diseño{
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-evenly;
	margin-top: 50px;
	margin-bottom: 50px;
}

.diseñoImg,.diseñoImg2,.diseñoImg3,.diseñoImg4,.diseñoImg5,.diseñoImg6,.diseñoImg7{
	width: 550px;
	height: 250px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
}

.diseñoImg{
	background-image: url("../assets/6.jpeg");
}

.diseñoImg2{
	background-image: url("../assets/4.jpeg");
}

.diseñoImg3{
	background-image: url("../assets/1.jpeg");
}

.diseñoImg4{
	background-image: url("../assets/5.jpeg");
}

.diseñoImg5{
	background-image: url("../assets/2.jpeg");
}

.diseñoImg6{
	background-image: url("../assets/3.jpeg");
}

.diseñoImg7{
	background-image: url("../assets/7.jpeg");
}

.texto{
	width: 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.texto h2{	
	margin: 0;
	font-family: 'Montserrat';
  	font-size: 2em;
  	font-weight: 600;
  	margin-bottom: 10px;
}

.texto h3{	
	margin: 0;
	font-family: 'Montserrat';
  	font-size: 1.2em;
  	font-weight: 400;
}

footer{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	min-height: 200px;
	background-color: #45769e;
	margin-top: 60px;
}

footer h1{
	font-family: 'Montserrat';
  	font-size: 2.5em;
  	font-weight: 600;
    color: #FB642B;
}

footer ul{
	text-decoration: none;
	padding: 0;
	list-style-type: none;
}

.footer2 h3{
	margin: 0;
	font-family: 'Montserrat';
	line-height: 1.3;
  	font-weight: 600;
	color: white;
}

.footer3 h3{
	margin: 0;
	font-family: 'Montserrat';
	line-height: 1.3;
  	font-weight: 600;
	color: white;
}

.footer2, .footer3{
	height: 150px;
}

.footer2, .footer3 li{
	font-family: 'Montserrat';
	line-height: 1.6;
  	font-weight: 400;
	color: #FB642B;
}

@media (max-width: 1525px){
  .diseñoImg,.diseñoImg2,.diseñoImg3,.diseñoImg4,.diseñoImg5,.diseñoImg6,.diseñoImg7{
	  order: 1;
  }

  .texto{
	  order: 2;
	  text-align: center;
	  margin-top: 30px;
	  margin-bottom: 50px;
  }
}

@media (max-width: 840px){
  .nav{
    flex-direction: column;
	padding-bottom: 50px;
  }

  .nav h1{
	  margin-bottom: 0;
  }

  .buttons{
	  width: 100%;
	  justify-content: space-evenly;
  }

  .diseñoImg,.diseñoImg2,.diseñoImg3,.diseñoImg4,.diseñoImg5,.diseñoImg6,.diseñoImg7{
	  width: 40vh;
  }
}
</style>
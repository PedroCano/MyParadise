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
		<div class="gallery js-flickity" data-flickity-options='{ "wrapAround": true }'>
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
		</div>
		<div class="contenido">	
			<div class="botones">		
				<a href="#">Diseña tu casa</a>		
				<a href="#">Diseños</a>
				<a href="#">Blog</a>
			</div>
			<h1>DISEÑOS RECIENTES</h1>
			<div class="diseños">
				<div class="diseño">
					<a href="/projects">
						<div class="diseñoImg"></div>
					</a>
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
					<router-link to="/design">
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
					<router-link to="/design">
						<div class="diseñoImg4"></div>
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
    color: #ffb629;
    text-align: center;
}


.nav h1{
	font-family: 'Montserrat';
  	font-size: 2.5em;
  	font-weight: 600;
    color: #ffb629;
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
	background-color: #ffb629;
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
	background-color: #DC9E24;
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

.info{
  height: 200px;
  width: 90%;
  margin-left: 5%;
  margin-top: 20px;
  overflow: auto;	
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
	text-shadow: 1px 1px 2px black;
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
    color: #ffb629;
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

.diseñoImg,.diseñoImg2,.diseñoImg3,.diseñoImg4{
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
    color: #ffb629;
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
	color: #ffb629;
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
}
</style>
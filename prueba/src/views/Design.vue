<template>
    <template v-if="user">
		<div class="nav">
			<h1>MY PARADISE</h1>
			<input type="text" class="search" name="search" placeholder="Buscar Casa">
			<form class="loginForm" @submit.prevent="logout">
				<button class="login">Cerrar sesión</button>
			</form>
		</div>
	</template>
	<template v-else>
    	<div class="nav">
			<h1>MY PARADISE</h1>
			<input type="text" class="search" name="search" placeholder="Buscar Casa">
			<router-link to="/login">
				<a class="login">Iniciar Sesión</a>
			</router-link>
			<router-link to="/register">
				<a class="register">Registrarse</a>
			</router-link>
		</div>
	</template>
		<div class="diseño">
			<div class="imagen">
				<img src="../assets/3.jpeg">
			</div>
			<div class="contenido">
				<h1>CODING HOUSE</h1>
				<img src="../assets/plans.jpg">
				<p> 
					Casa de bamboo modernista pensada para un grupo de programadores expertos, con el fin de que puedan realizar su actividad profesional con las mayores calidades posibles.
					<br><br>
					Una propiedad de lujo debe estar construida con materiales de calidad y acabados elegantes. La estética de este tipo de propiedades es un elemento importante, puesto que 
					puede influir en la decisión de compra. Además, cabe destacar que una mayor calidad de la construcción implica una mayor durabilidad de esta.
					<br><br>
					Las viviendas de lujo suelen encontrarse en áreas muy concretas, y aunque suelen estar juntas, existe distancia entre ellas para no invadir la privacidad de los vecinos. 
					Las mejores áreas son aquellas que se encuentran en las zonas tranquilas de una ciudad (por ejemplo, en las afueras) y que a su vez cuentan con toda clase de servicios cerca.<br>
					Es necesario nombrar que los inmuebles de lujo suelen encontrarse en zonas residenciales cerradas, con seguridad 24h e intimidad extra. Así mismo, acostumbran a estar ubicadas 
					en zonas cercanas a servicios acordes con los recursos económicos de quienes las habitan: escuelas internacionales, hospitales privados o centros comerciales.
				</p>
			</div>
			<div class="constructoras">
				<h1>CONSTRUCTORAS</h1>
				<div class="constructora">
					<img src="../assets/constructora1.png">
					<div class="texto">
						<p>Constructora 1</p>
						<p>Precio: 13000€</p>
					</div>
				</div>
				<div class="constructora">
					<img src="../assets/constructora2.png">
					<div class="texto">
						<p>Constructora 2</p>
						<p>Precio: 14000€</p>
					</div>
				</div>
				<div class="constructora">
					<img src="../assets/constructora3.png">
					<div class="texto">
						<p>Constructora 3</p>
						<p>Precio: 18000€</p>
					</div>
				</div>
				<div class="constructora">
					<img src="../assets/constructora4.png">
					<div class="texto">
						<p>Constructora 4</p>
						<p>Precio: 10000€</p>
					</div>
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

.imagen{
	background-image: url('../assets/1022105.jpg');
	height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 30px;
}

.imagen img{
	height: 90%;
}

.contenido{
	width: 90%;
	margin-left: 5%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin-bottom: 50px;
}

.contenido h1{
	font-family: 'Montserrat';
  	font-size: 2.5em;
  	font-weight: 600;
    color: #ffb629;
	text-align: center;
	margin-top: 80px;
	margin-bottom: 60px;
}

.contenido p{
	width: 75%;
	margin-left: 12.5%;
	font-family: 'Montserrat';
	line-height: 1.6;
  	font-weight: 300;
	text-align: center;
	margin-top: 60px;
}

.constructoras{
	display: flex;
	flex-wrap: wrap;
	width: 80%;
	margin-left: 10%;
	justify-content: space-around;
}

.constructoras h1{
	font-family: 'Montserrat';
  	font-size: 2.5em;
  	font-weight: 600;
    color: #ffb629;
	text-align: center;
	margin-bottom: 40px;
	width: 100%;
}

.constructora{
	text-align: center;
	display: flex;
	flex-direction: column;
}

.constructora img{
	max-width: 200px;
}

.texto{
	margin-top: auto;
	font-family: 'Montserrat';
	line-height: 1.3;
  	font-weight: 300;
	text-align: center;
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
</style>
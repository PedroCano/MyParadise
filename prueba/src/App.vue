<template>
  <router-view/>
</template>

<script>
import { onMounted } from "vue";
import { auth } from "./utils/firebase";

export default {
  name: 'App',
  setup(){
    onMounted(() => {
      auth.onAuthStateChanged((user) =>{
        if(user){
          console.log("usuario logueado");
        }else{
          console.log("usuario no logueado");
        }
      })
    });
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500&display=swap');

#app{  
  width: 100%;
  margin: 0 auto;
}

html, body{
  width: 100%;
  margin: 0 auto;
}

/* VISUAL INICIAL DE LA PÁGINA */
.home{
  height: 100%;
  width: 100%;
  background-image: url("assets/house-2469067_1920.jpg"); 
  background-size: cover;
  min-height: 800px;
  background-position: center 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* TÍTULO */
.title{
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
}

/*
.title h1{
  width: 50%;
  color: white;
  font-family: 'Neutra';
  font-size: 150px;
  font-weight: 200;  
  text-shadow: 1px 1px 5px black;
}
*/

.title h1 {
  color: white;
  font-family: 'Roboto Slab';
  font-size: 6vw;
  font-weight: 400;  
  transform: translateY(-600px);
  animation: 1s slideIn ease-in-out forwards 0.5s;
  z-index: 0;
  opacity: 0;
  position: relative;
}

.title button{
	background: rgba(0,0,0,0); 
	border: 2px solid white;
	color: white;
	border-radius: 40px;
	font-size: 1.5em;
	padding: 10px;
	padding-right: 40px;
	padding-left: 40px;
	font-family: 'Roboto Slab';
}

.title button a {
  font-weight: 500;
  background: linear-gradient(to right, #D57A58, #D57A58 50%, white 50%);
  text-decoration: none;
}

.title button a{
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
}

.title button a {
  transition: background-position 275ms ease;
}

.title button a:hover {
  background-position: 0 100%;
}

@keyframes skewBg {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes underline {
  100% {
    width: 100%;
  }
}

@keyframes slideIn {
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>

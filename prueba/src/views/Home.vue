<template>
  <div class="home">
			<div class="title">
				<h1>MY PARADISE</h1>
        <router-link to="/projects">
          <a class="login" style="text-decoration:none">IR AL BLOG</a>
        </router-link>
			</div>
		</div>
</template>

<script>

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap');

html, body{
  width: 100%;
  margin: 0 auto;
}

/* VISUAL INICIAL DE LA PÁGINA */
.home{
  height: 100vh;
  width: 100%;
  background-image: url("../assets/house-2469067_1920.jpg"); 
  background-size: cover;
  min-height: 800px;
  background-position: center 100%;
  display: flex;
  justify-content: center;
}

.login{
	font-family: 'Montserrat';
  font-weight: 600;
	background-color: #ffb629;
	border-radius: 25px;
	padding-top: 15px;
	padding-bottom: 15px;
	padding-left: 20px;
	padding-right: 20px;
	border: none;
	color: white;
	font-size: 0.9em;
	text-decoration: none;
}

.login:link, .login:visited, .login:active {
  text-decoration:none;
}

.login:hover{
  background-color: #d19723;
}

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

.title h1 {
  color: white;
  font-family: 'Montserrat';
  font-size: 10vw;
  font-weight: 200;  
  text-shadow: 1px 1px 5px black;
  transform: translateY(-600px);
  animation: 1.2s slideIn ease-in-out forwards 1s;
  z-index: 0;
  opacity: 0;
  position: relative;
}

.title h1::before {
  content: "";
  width: 0%;
  height: 76px;
  opacity: 50%;
  background-color: lightgrey;
  position: absolute;
  bottom: -10px;
  animation: 1s underline ease-in-out forwards 2s;
  mix-blend-mode: screen;
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
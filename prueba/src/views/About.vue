<template>    
		<div class="aboutus">
			<div class="fondo1">
                <div class="logoa">
                    <img src="../assets/icono.png">
                </div>
                <div class="iconos">
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-youtube"></i>
                </div>
			</div>
			<div class="fondo2">
                <div class="fondo2t">
                    <h1>SOBRE NOSOTROS</h1>
                    <p>
                        Somos un grupo de alumnos que han puesto en práctica todos sus conocimientos para llevar a cabo el proyecto de sus sueños, crear una aplicación para que la gente pueda diseñar
                        sus casas a medida tal y como deseen todo.<br><br>
                        Ofrecemos un amplio rango de constructoras especializadas en construcciones a medida, así como profesionales en diseño de interiores e instalaciones de todo tipo que sean necesarias
                        para llevar a la relidad el sueño de cualquier persona.
                    </p>
                </div>
                <div class="arrow">
                    <router-link to="/projects">
                        <img src="@/assets/arrow.png">
                    </router-link>
                </div>
			</div>
		</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500&display=swap');

html{
	width: 100%;
	height: 100%;
	margin: 0 auto;
}

body{
	width: 100%;
	margin: 0 auto;
}

.aboutus{
    display: flex;
    height: 100vh;
}

.fondo1{
    display: flex;
    background-color: #45769e;
    width: 40%;
    flex-direction: column;
}

.fondo2{
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.fondo2t{
    width: 80%;
    margin-left: 10%;
}

.iconos{
    margin-top: auto;
}

.fondo1 i{
    margin-top: auto;
    color: white;
    margin-left: 20px;
    margin-bottom: 20px;
}

.logoa{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fondo1 img{
    height: 400px;
    width: 400px;
}

.fondo2 h1{
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 3em;
    color: #45769e;
}

.fondo2 p{
    font-family: 'Montserrat';
    font-size: 1.2em;
    line-height: 1.6;
    text-align: justify;
}

.arrow{
  display: flex;
  width: 100%;
  align-items: flex-end;
  width: 80%;
  margin-left: 10%;
}

.arrow a{
    margin-left: auto;
}

.arrow img{
    height: 70px;
    margin-top: 20px;
    margin-left: auto;
}

@media (max-width: 1100px){
    .fondo1 img{
        height: 300px;
        width: 300px;
    }
}

@media (max-width: 860px){
    .aboutus{
        flex-direction: column;
    }

    .fondo1{
        width: 100%;
        height: auto;
    }

    .fondo2{
        width: 100%;
    }

    .arrow img{
        margin-bottom: 40px;
    }
}
</style>
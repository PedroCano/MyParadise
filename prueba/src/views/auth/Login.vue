<template>
    <form class="loginForm" @submit.prevent="login">
        <div class="logo">
          <img src="@/assets/icono.png">
        </div>
        <input type="text" placeholder="Mail" v-model="mail">
        <input type="password" placeholder="Contrase&ntilde;a" v-model="pass">
        <button>Iniciar Sesi&oacute;n</button>
        <div class="notError" v-if="error">
            {{ error }}
        </div>
    </form>
    <div class="arrow">
      <router-link to="/projects">
        <img src="@/assets/arrow.png">
      </router-link>
    </div>
</template>

<script>
import db from '@/utils/firebase'
import firebase from 'firebase'

export default{
    data() {
        return {
            mail: '',
            pass: '',
            error: ''
        }
    },
    name: "Login",
    methods: {
        login(){
            if(this.mail && this.pass){
                firebase.auth().signInWithEmailAndPassword(this.mail, this.pass)
                .then(user => {
                    this.$router.push({name: 'Projects'})
                }).catch(err => {
                    this.error = err.message
                });
            }else{
                this.error = "Todos los campos son requeridos"
            }
        }
    },
}
</script>

<style>
html, body{
	width: 100%;
	height: 100%;
	margin: 0 auto;
}

body{
	background-color: #45769e;
}

.loginForm {
  overflow: hidden;
  background-color: white;
  padding: 40px 30px 30px 30px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: -webkit-transform 300ms, box-shadow 300ms;
  -moz-transition: -moz-transform 300ms, box-shadow 300ms;
  transition: transform 300ms, box-shadow 300ms;
  box-shadow: 5px 10px 10px rgba(2, 128, 144, 0.2);
}
.loginForm::before, .loginForm::after {
  content: "";
  position: absolute;
  width: 600px;
  height: 600px;
  border-top-left-radius: 40%;
  border-top-right-radius: 45%;
  border-bottom-left-radius: 35%;
  border-bottom-right-radius: 40%;
  z-index: -1;
}
.loginForm::before {
  left: 40%;
  bottom: -62%;
  background-color: rgba(255, 173, 50, 0.7);
  -webkit-animation: wawes 6s infinite linear;
  -moz-animation: wawes 6s infinite linear;
  animation: wawes 6s infinite linear;
}
.loginForm::after {
  left: 35%;
  bottom: -69%;
  background-color: rgba(255, 173, 50, 0.5);
  -webkit-animation: wawes 7s infinite;
  -moz-animation: wawes 7s infinite;
  animation: wawes 7s infinite;
}
.loginForm > input {
  font-family: "Asap", sans-serif;
  display: block;
  border-radius: 5px;
  font-size: 16px;
  background: white;
  width: 100%;
  border: 0;
  padding: 10px 10px;
  margin: 15px -10px;
}
.loginForm > button {
  font-family: "Asap", sans-serif;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  width: 170px;
  border: 0;
  padding: 10px 0;
  margin-top: 10px;
  margin-left: -5px;
  border-radius: 5px;
  background-color: #45769e;
  -webkit-transition: background-color 300ms;
  -moz-transition: background-color 300ms;
  transition: background-color 300ms;
}
.loginForm > button:hover {
  background-color: #45769e;
}

.logo{
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo img{
  height: 200px;
}

.notError{
  width: 90%;
  background-color: rgb(212, 50, 38);
  color: white;
  text-align: center;
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
}

.arrow{
  display: flex;
}

.arrow img{
  height: 70px;
  margin: 30px;
}

@-webkit-keyframes wawes {
  from {
    -webkit-transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes wawes {
  from {
    -moz-transform: rotate(0);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@keyframes wawes {
  from {
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -ms-transform: rotate(0);
    -o-transform: rotate(0);
    transform: rotate(0);
  }
  to {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 12px;
}
</style>
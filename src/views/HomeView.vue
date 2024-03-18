
<template>
  <div class="component-container">
      <h1>Olá, primeiramente, {{ saudacao }}! ^-^</h1>
      <div class="card-container floating">
        <p>Vamos para uma breve apresentação, me chamo Victor Neves e sou desenvolvedor <span style="color: purple">Front-end</span> há 3 anos.</p>
        <p>Esta é só mais uma das minhas paradas para "estudo"! 🫢</p>
        <p>Bom, este é um sistema de cadastro de usuários com visualização em GRID, além de diversas outras funcionalidades, como:
          <ul style="padding:2px;color: navy; font-size: 18px; border: 1px solid navy; border-radius: 5px">
            <li>Solicitações assíncronas ao Backend.</li>
            <li>Autenticação e validação dos dados e token do usuário.</li>
            <li>Uma função simples de busca no banco para pesquisar usuários.</li>
          </ul>
        </p>
        <p>Lembrando, este é um projeto de estudo simples do framework.</p>
        <br>
        <p style="margin-bottom: 8px">Vamoooos testar???</p>
        <router-link class="style-input" to="/register">Registra-se</router-link>
      </div>
    </div>
</template>

<script setup>
  import {  computed } from 'vue';
  
  const saudacao = computed(() => {
    const horaAtual = new Date().getHours();
    
    if (horaAtual < 12) {
      return "Bom dia";
    } else if (horaAtual < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  });

</script>

<style scoped>

  .style-input{
    color: var(--white);
    text-decoration: none;
    border: 2px solid var(--style-color-contrast);
    width: 100%;
    height: 2rem;
    left: 20pp;
    margin: 28px;
    padding: 6px 6px 4px 6px;
    /* padding-top: 42px; */
    /* min-width: 81px; */
    font-size: 15px;
    /* line-height: 116.6%; */
    padding-top: 3px;
    border-radius: 20px;
    cursor: pointer;
    background-color: var(--bg-input);
  }
  .component-container {
    width: 80%;
    display: flex;
    margin: auto;
    height: 90vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .testebtn{
    color: var(--bg-input) !important;
    border: 3px solid #fff;
    height: 65px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  } 

  .component-container > h1{
    margin-bottom: 10px;
  }
  .card-container {
    position: relative;
    padding: 50px 36px 0px;
    /* display: flex; */
    justify-content: unset;
    align-items: center;
    text-align:justify;
    background-color: rgba(255, 255, 255, 0.1);
    max-width: 463px;
    min-width: 200px;
    height: 500px;
    border-radius: 22px;
    border: 2px solid #183852;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  }
  .floating {
  animation-name: floating;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  }
  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }

  @media (max-width: 920px) {
    .card-container {
      position: relative;
      padding: 50px 75px 0px;
      text-align: justify;
      background-color: rgba(255, 255, 255, 0.19);
      width: 70vh;
      border-radius: 22px;
      border: 2px solid #183852;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
    }
  }

@media (max-width: 520px){
  .card-container {
      position: relative;
      padding: 25px 6px 0px;
      text-align: justify;
      background-color: rgba(255, 255, 255, 0.19);
      width: 51vh;
      border-radius: 22px;
      border: 2px solid #183852;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  }
}
</style>

<!-- CODIGO PADRÃO DE CRIAÇÃO DO PROJETO -->

<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> -->

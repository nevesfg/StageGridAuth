<template>
     
    <div class="register-container">
      <div class="img-human">
        <img src="../assets/register-icon.png" />
      </div>
      <div class="card-container">
        <div class="card-info">
          <h4 class="title">Cadastre-se</h4>
          <form @submit.prevent="handleRegister">


            <div class="style-input-container">
              <label class="style-input"  for="username">
                <input type="text" id="username" v-model="user.username" required>
                <span class="style-input-label">Usuário</span>
              </label>
            </div>

            <div class="style-input-container">
              <label class="style-input" for="email">
                <input type="email" id="email" v-model="user.email" required>
                <span class="style-input-label">E-mail</span>
              </label>
            </div>


            


            <div class="style-input-container" >
              <label class="style-input" for="password">
                <input :type="showPassword ? 'text' : 'password'"
                  id="password" v-model="user.password" required>
                <span class="style-input-label">Senha</span>
                <span class="img-eye" @click="showPassword = !showPassword">
                  <img :src="showPassword ? imgeHide : imgeView" />
                </span>
              </label>
            </div>

            <div class="style-input">
              <button type="submit">Cadastrar</button>
              <p v-if="error">{{ error }}</p>
              <p @click="goToLoginPage">Ja tem uma conta?</p>
            </div>
          </form>
        </div>
      </div>
      <div class="img-human">
        <img src="../assets/human-icon.png" />
      </div>
    </div>
  </template>
  
<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import http from '../api/http.js';
  import imgeHide from "../assets/eye-hide.png";
  import imgeView from "../assets/eye-view.png";
  
  const user = ref({
    email: '',
    username: '',
    password: '',
  });
  const error = ref('');
  const router = useRouter();
  const showPassword = ref(false);

 
  function goToLoginPage(){
    router.push({ name: "loginPage" });
  }

  const handleRegister = async () => {
    error.value = '';
    try {
      await http.post('/register/', user.value);
      alert('Cadastro realizado com sucesso!');
      router.push({ name: 'loginPage' });
    } catch (e) {
      if (e.response && e.response.data) {
        error.value = Object.values(e.response.data).join(' ');
      } else {
        error.value = 'Ocorreu um erro ao tentar registrar. Tente novamente mais tarde.';
      }
    }
  };
</script>

<style scoped>

.register-container {
  width: 80%;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

@media (max-width: 520){
  .register-container{
    width: 100%;
      display: grid;
      margin: auto;
      justify-content: center;
      align-items: center;
      height: 100vh;
  }
}




.card-container {
  position: relative;
  padding: 50px 150px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(255, 255, 255, 0.4); */
  max-width: 300px;
  min-width: 200px;
  height: 355px;
  border-radius: 22px;
  border: 4px solid #183852;
  backdrop-filter: blur(10px); /* Efeito de desfoque */
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
}

.card-info > p{
  color: var(--bg-input);
  font-size: 0.9rem;
  margin-top: -18px;
  margin-bottom: 17px;
}

.style-input > p {
  color: var(--white);
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;
}

.style-input > p:hover {
  color: var(--omrs-color-ink-medium-contrast);
  cursor: pointer;
}

.title{
  color: var(--bg-input);
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 30px;
  margin-top: -50px;
}

.img-human img {
  width: 164px;
}
</style>


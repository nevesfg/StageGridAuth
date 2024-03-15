<template>
  <div class="component-container">
    <div class="img-human">
      <img src="../assets/man-icon.png" />
    </div>

    <div class="card-container">
      <div class="card-info">
        <h4 class="title">Bem-vindo!</h4>
        <p>Faça o login em sua conta</p>

        <form @submit.prevent="handleLogin">
          <div class="style-input-container">
            <label class="style-input" for="username">
              <input
                type="text"
                id="username"
                v-model="credentials.username"
                required
              />
              <span class="style-input-label">Usuário ou E-mail</span>
              <!-- <span class="omrs-input-helper">Helper Text</span> -->
            </label>
          </div>

          <div class="style-input-container">
            <label class="style-input" for="password">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                v-model="credentials.password"
                required
              />
              <span class="style-input-label">Senha</span>
              <!-- <span class="omrs-input-helper">Helper Text</span> -->
              <span class="img-eye" @click="showPassword = !showPassword">
                <img :src="showPassword ? imgeHide : imgeView" />
              </span>
            </label>
          </div>

          <div class="style-input">
            <button type="submit">Login</button>
            <p v-if="error">{{ error }}</p>
            <p @click="goToRegisterPage">Cadastre-se</p>
          </div>
        </form>
      </div>
    </div>
    <div class="img-human">
      <img src="../assets/woman-icon.png" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import imgeHide from "../assets/eye-hide.png";
import imgeView from "../assets/eye-view.png";
// import { computed } from 'vue';
// import RegisterPage from './RegisterPage.vue';

const credentials = ref({ username: "", password: "" });
const error = ref("");
const router = useRouter();
const store = useStore();
const showPassword = ref(false);

function goToRegisterPage() {
  router.push({ name: "register" });
}
// const currentComponent = computed(() => {
//   return isGirado.value ? RegisterPage : null; // Substitua null por qualquer outro componente ou template que você queira mostrar quando não estiver girado.
// });

const handleLogin = async () => {
  error.value = "";
  try {
    await store.dispatch("login", credentials.value);
    router.push({ name: "dashboard" });
  } catch (e) {
    if (e.response && e.response.data) {
      error.value = e.response.data.detail;
    } else {
      error.value =
        "Falha no login, por causa de erros na rede ou problemas na configuração";
    }
  }
  return {
    credentials,
    error,
    handleLogin,
  };
};
</script>

<style scoped>
.component-container {
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
  width: 125px;
}
</style>

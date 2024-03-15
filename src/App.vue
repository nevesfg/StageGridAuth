<template>
  <nav>
    <div id="kyu-logo">
      <h1>Desafio</h1>
    </div>

    <div class="nav-menu" :class="{ 'active': showingMenu }">
      <ul>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Registra-se</router-link></li>
        <li><router-link @click="VerifyGridUsersClick" to="/dashboard">Grid de Usuários</router-link></li>
        <li v-if="isUserAuthenticated"><a @click="logout">logout</a></li>
      </ul>
    </div>

    <div id="mobile-menu-btn" @click="toggleMobileMenu">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>
  <router-view/>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from "vue-router";

const router = useRouter();
const showingMenu = ref(false);
const store = useStore();
const isUserAuthenticated = computed(() => store.state.isAuthenticated);

function toggleMobileMenu() {
  showingMenu.value = !showingMenu.value;
}

function VerifyGridUsersClick() {
  if (!isUserAuthenticated.value) {
    alert("Você precisa estar logado para acessar o Grid de Usuários.");
  } else {
    router.push({name: "dashboard"});
  }
}

const logout = () => {
    store.dispatch('logout'); 
    router.push('/login');
    return {
      logout
    };
  };
</script>

<style>

nav {
  width: 100%;
  height: 50px;
  padding: 10px 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-input);
}

#kyu-logo {
  height: 35px;
  cursor: pointer;
  margin-right: 22px;
  color: var(--white);
}

.nav-menu {
  flex-grow: 1;
}

.nav-menu > ul {
  display: flex;
  flex-flow: row nowrap;
}

.nav-menu > ul > li {
  display: block;
  line-height: 100px;
}

.nav-menu > ul > li > a  {
  color: var(--white);
  text-decoration: none;

  font-family: "Lato";
  font-size: 0.8rem;
  font-weight: 800;

  text-transform: uppercase;

  display: block;

  padding: 0 15px;

  transition: color 100ms;
  cursor: pointer;
}

.nav-menu > ul > li > a:hover {
  color: #ccc;
}

nav a.router-link-exact-active {
  color: var(--bg-input) !important;
  border: 3px solid #fff;
  height: 65px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

} 


/* Mobile menu button */
#mobile-menu-btn {
  width: 1.5rem;
  height: 1.5rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  cursor: pointer;
  z-index: 1000;
}

#mobile-menu-btn > div {
  background-color: var(--white);
  height: 0.2rem;
  width: 1.5rem;
  transition: transform 250ms ease-in 0s, opacity 250ms, width 250ms;
  transform-origin: left center;
}

#mobile-menu-btn > div:nth-child(2) {
  width: 1.3rem;
}

#mobile-menu-btn > div:nth-child(3) {
  width: 1.1rem;
}

#mobile-menu-btn.active > div:nth-child(1) {
  transform: rotate(45deg);
}

#mobile-menu-btn.active > div:nth-child(2) {
  opacity: 0;
}

#mobile-menu-btn.active > div:nth-child(3) {
  transform: rotate(-45deg);
  width: 1.5rem;
}

/* Media screens selectors */
@media (max-width: 920px) {
  .nav-menu {
    /* display: none; */
    position: fixed;
    top: 0;
    left: -100%;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 100vh;
    min-height: 100%;

    padding-top: 100px;

    background-color: rgba(0, 0, 10, 0.9);
    z-index: 999;

    transition: left 250ms ease;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-menu > ul {
    flex-direction: column;
  }

  .nav-menu > ul > li {
    line-height: 70px;
    text-align: center;
    border-top: 1px solid var(--darkgrey);
  }

  .nav-menu > ul > li:last-child {
    border-bottom: 1px solid var(--darkgrey);
  }

  .nav-menu > ul > li > a:hover {
    background-color: var(--darkgrey);
  }

  #mobile-menu-btn {
    display: flex;
  }
}


/* ESTILIZAÇÃO PADRAO DO VUE */
 /* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

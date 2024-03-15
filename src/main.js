import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/index.css'
import './assets/css/inputs.css'
import store from './store'
import http from './api/http.js'

const app = createApp(App); 
app.config.globalProperties.$http = http;

app.use(store).use(router).mount('#app')

router.beforeEach((to, from, next) => {
    // Verifica se a rota requer autenticação
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.state.isAuthenticated) {
        next({ name: 'loginPage' });
      } else {
        next(); 
      }
    } else {
      next();
    }
  });

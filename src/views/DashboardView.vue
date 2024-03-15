<template>
  <div class="component-container">
    <div class="style-input-container">
      <div class="style-input">
        <input type="text" v-model="state.searchQuery" placeholder="Pesquisar usuários..." />
        <span class="img-eye">
          <img src="../assets/search-users.png" />
        </span>
      </div>
    </div>
    <h4>Usuários cadastrados</h4>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>  

<script setup>
  import { onMounted, reactive, computed} from 'vue';
  import http from '../api/http';
  // import { useStore } from 'vuex';
  // import { useRouter } from 'vue-router';

  const state = reactive({
    users: [],
    searchQuery: '',
  });
  // const store = useStore();
  // const router = useRouter();

  const filteredUsers = computed(() => {
    if (!state.searchQuery) {
      return state.users;
    }
    return state.users.filter(user =>
      user.username.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(state.searchQuery.toLowerCase())
    );
  });

  onMounted(async () => {
    try {
      const response = await http.get('/users/');
      state.users = response.data;
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  });

  // const logout = () => {
  //   store.dispatch('logout'); 
  //   router.push('/login');
  //   return {
  //     logout
  //   };
  // };
</script>

<style scoped>
  .component-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 1rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.48);
    backdrop-filter: blur(10px); /* Efeito de desfoque */
    border-radius: 8px;
  }

  .style-input-container {
    margin-bottom: 1.5rem;
    position: relative;
    max-width: 100%;
  }

  .style-input input {
    width: 100%;
    padding: 0.5rem;
    border: 2px solid var(--bg-input);
    border-radius: 4px;
  }

  .style-input img {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  h4 {
    text-align: center;
    margin: 1rem 0;
  }

  .table-container {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }

  table, th, td {
    border: 1px solid var(--bg-input);
  }

  th, td {
    text-align: left;
    padding: 8px;
  }

  @media (max-width: 768px) {
    .style-input-container, .style-input input {
      width: 100%;
    }

    .component-container {
      margin: 1rem;
    }

    h4 {
      font-size: 1.2rem;
    }
  }
</style>
# Desafio - Sistema de Gerenciamento de Usuários

### Este projeto é uma aplicação web desenvolvida como parte de um desafio de estágio e estudo. Ela permite o cadastro, a listagem em grid e a autenticação de usuários. O objetivo é demonstrar habilidades com Vue.js, incluindo o uso de componentes, roteamento com Vue Router e gerenciamento de estado com Vuex.

# Começando

Siga estas instruções para obter uma cópia do projeto operacional em sua máquina local para fins de desenvolvimento e teste.

# Pré-requisitos
Você precisa ter o Node.js e o npm (ou yarn) instalados em sua máquina. Visite Node.js para instruções de instalação.

# Instalação
Clone o repositório e instale as dependências.
```
git clone https://github.com/nevesfg/StageGridAuth.git
cd seuprojeto
npm install
```

# Configurando a API
Após a instalação das dependências, é necessário configurar o endereço da API para que a aplicação possa se comunicar corretamente com o backend. Para isso:

### Navegue até a pasta API dentro do projeto:
```
cd src/api
```
Abra o arquivo http.js em um editor de texto ou IDE de sua preferência.

Altere a linha que define o baseURL para apontar para o endereço da sua API. 
Por exemplo:
```
const http = axios.create({
  baseURL: 'http://89.117.75.69:8882/api/',
});
```

Salve o arquivo após realizar a alteração.

Depois de configurar o endereço da API, você pode continuar com o desenvolvimento ou o deployment da sua aplicação.

# Iniciando o Servidor de Desenvolvimento
### Para iniciar o servidor de desenvolvimento e acessar a aplicação no navegador:
```
npm run serve
```
A aplicação estará disponível em http://localhost:8080.

# Deployment
### Para construir a aplicação para produção:
```
npm run build
```
Siga as instruções específicas do seu serviço de hospedagem para deployment.

# Construído com
 Vue.js - O framework web usado.
 
 Vuex - Gerenciamento de estado.

 Vue Router - Roteamento de aplicativos SPA.
 
 Django-rest-framework - Framework backend utilizado.

 Estilização e responsividade feita manualmente, não utilizei framework.

# Sistema de Gerenciamento de Usuários

Este projeto é um backend desenvolvido com Django e Django Rest Framework, projetado para gerenciar usuários. Ele fornece funcionalidades para autenticação de usuários, registro, e listagem de usuários cadastrados.

## Tecnologias Utilizadas

- Django
- Django Rest Framework
- SQLite (para desenvolvimento) / PostgreSQL (recomendado para produção)
- JWT para autenticação

## Configuração Inicial

### Pré-requisitos

- Python 3.6+
- pip (Gerenciador de pacotes Python)

### Instalação

1. **Clonar o Repositório**

    ```bash
    git clone https://github.com/nevesfg/StageGridAuth.git
    cd StageGridAuth
    ```

2. **Criar e Ativar o Ambiente Virtual**

    No Windows:

    ```bash
    python -m venv venv
    .\venv\Scripts\activate
    ```

    No Unix ou MacOS:

    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

3. **Instalar Dependências**

    ```bash
    pip install -r requirements.txt
    ```

4. **Configurar Variáveis de Ambiente**

    Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias, como `SECRET_KEY`, `DEBUG`, configurações de banco de dados, etc.

5. **Executar Migrações**

    ```bash
    python manage.py migrate
    ```

6. **Criar um Superusuário (Opcional)**

    Para acessar o painel de administração do Django:

    ```bash
    python manage.py createsuperuser
    ```

### Executando o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
python manage.py runserver
```
O servidor estará disponível em http://localhost:8000.

# Endpoints da API
```
POST /api/register: Registra um novo usuário.
POST /api/login: Realiza login.
GET /api/users: Lista todos os usuários (requer autenticação).
```

# Documentação da API
Para mais detalhes sobre os endpoints e os dados esperados/enviados, visite a documentação da API em [Link para a documentação da API](http://89.117.75.69:8882/api/doc/).

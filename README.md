# 📘 **Vue Fullstack App**  
### Vue 3 + Vite + TailwindCSS 4 + Node/Express + MongoDB (Atlas)

Um projeto fullstack moderno usando:

- ⚡ **Vue 3 + Vite**
- 🎨 **TailwindCSS v4**
- 🧭 **Vue Router**
- 🗄️ **Node/Express**
- 🍃 **MongoDB Atlas**
- 🚀 **PNPM** (como gerenciador preferencial)

Inclui:

- Site público (Home, Sobre, Contato)
- Área administrativa organizada
- Dashboard de mensagens com:
  - Criar (formulário de contato)
  - Listar (painel)
  - Excluir (delete via API)
- Integração real com o MongoDB Atlas

Pronto para ser expandido em qualquer direção: SaaS, dashboards, autenticação, etc.

## 📁 **Estrutura do Projeto**

```
vue-my-app/
├── server/
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── src/
│   ├── assets/
│   │   └── css/
│   │        ├── tailwind.css
│   │        └── style.css
│   │
│   ├── components/
│   │   └── Navbar.vue
│   │
│   ├── layouts/
│   │   └── MainLayout.vue
│   │
│   ├── pages/
│   │   ├── dashboard/
│   │   │    ├── Dashboard.vue
│   │   │    └── Mensagens.vue
│   │   ├── Contato.vue
│   │   ├── Home.vue
│   │   ├── NotFound.vue
│   │   └── Sobre.vue
│   │
│   ├── router/
│   │   └── index.js
│   ├── services/
│   │   ├── apiClient.js
│   │   └── messagesService.js
│   ├── App.vue
│   └── main.js
│
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 Como Rodar

### Backend

```
cd server
pnpm install
pnpm dev
```

### Frontend

```
cd vue-my-app
pnpm install
pnpm dev
```

Aplicação: http://localhost:5173  
API: http://localhost:3000

Pronto! Este README te guia no futuro se esquecer qualquer parte. 🚀

<!-- src/pages/Sobre.vue -->
<template>
  <section class="space-y-10">
    <!-- Bloco principal -->
    <div class="bg-white rounded-xl shadow-sm border p-8 md:p-10 space-y-4">
      <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">
        Sobre este projeto
      </h2>

      <p class="text-gray-600 text-lg leading-relaxed">
        Este projeto nasceu como um laboratório para explorar Vue 3 com Vite e TailwindCSS,
        seguindo uma arquitetura semelhante à usada em aplicações reais de mercado.
        A ideia é ter um esqueleto limpo, organizado e escalável, pronto para receber
        novas funcionalidades com segurança.
      </p>

      <p class="text-gray-600 leading-relaxed">
        Aqui você pode experimentar desde conceitos de front-end moderno, componentização,
        roteamento e layouts reutilizáveis, até integrações com APIs, bancos de dados como
        o MongoDB e fluxos mais complexos, como autenticação e dashboards.
      </p>
    </div>

    <!-- Destaques em colunas -->
    <div class="grid gap-6 md:grid-cols-2">
      <div class="bg-white rounded-xl shadow-sm border p-6 space-y-3">
        <h3 class="text-xl font-semibold text-gray-900">
          Foco em boas práticas
        </h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          Estrutura pensada para ser fácil de entender e manter:
          divisão clara entre <strong>layouts</strong>, <strong>páginas</strong>,
          <strong>componentes</strong> e <strong>serviços</strong>. Isso ajuda a
          evitar o famoso “bolo de código” que cresce sem controle.
        </p>
      </div>

      <div class="bg-white rounded-xl shadow-sm border p-6 space-y-3">
        <h3 class="text-xl font-semibold text-gray-900">
          Pensado para evoluir
        </h3>
        <p class="text-gray-600 text-sm leading-relaxed">
          A base atual já permite adicionar camadas como consumo de APIs REST,
          integração com um back-end Node/Express ou serverless, e persistência com
          MongoDB. É um ponto de partida sólido para transformar em um produto real.
        </p>
      </div>
    </div>

    <!-- Chamada final -->
    <div class="bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h3 class="text-xl font-semibold text-gray-900">
          Próximos passos
        </h3>
        <p class="text-gray-700 text-sm leading-relaxed mt-1">
          A partir desta base, dá para conectar com APIs, montar telas de listagem
          e cadastro, simular fluxo de autenticação e evoluir para um pequeno painel
          administrativo ou site institucional completo.
        </p>
      </div>
      <RouterLink
        to="/contato"
        class="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition self-start"
      >
        Ir para a página de contato
      </RouterLink>
    </div>
  </section>
</template>

<!-- src/pages/Dashboard.vue -->
<template>
  <section class="space-y-8">
    <!-- 🔹 Cabeçalho da área administrativa -->
    <div class="space-y-3">
      <div class="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
        <!-- Pequeto “badge” dizendo que é área restrita -->
        <span>Área administrativa</span>
      </div>

      <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">
        Painel de administração
      </h2>

      <p class="text-gray-600 leading-relaxed">
        Centralize aqui as principais opções de gerenciamento da aplicação:
        mensagens, conteúdos, usuários, configurações e o que mais fizer sentido
        para o projeto. Por enquanto temos apenas a gestão de mensagens de contato,
        mas a estrutura já está pronta para crescer.
      </p>
    </div>

    <!-- 🔹 Grid de cards de administração -->
    <div class="grid gap-6 md:grid-cols-3">
      <!-- Card: Gerenciar mensagens -->
      <article
        class="bg-white border rounded-xl shadow-sm p-5 flex flex-col gap-3 hover:shadow-md transition cursor-pointer"
      >
        <header class="space-y-1">
          <h3 class="text-lg font-semibold text-gray-900">
            Mensagens de contato
          </h3>
          <p class="text-xs uppercase tracking-wide text-gray-400">
            Comunicação
          </p>
        </header>

        <p class="text-sm text-gray-600 leading-relaxed">
          Visualize e gerencie as mensagens enviadas pelo formulário de contato.
          Ótimo para acompanhar dúvidas, solicitações e feedbacks dos usuários.
        </p>

        <div class="mt-auto flex justify-between items-center pt-2">
          <!-- Você pode apontar esse RouterLink para a rota que quiser (ex.: /mensagens) -->
          <RouterLink
            to="/dashboard/mensagens"
            class="text-sm font-medium text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
          >
            Abrir painel
            <span>→</span>
          </RouterLink>

          <span class="text-[11px] text-gray-400">
            Ativo
          </span>
        </div>
      </article>

      <!-- Card: Usuários (placeholder / em breve) -->
      <article
        class="bg-white border rounded-xl shadow-sm p-5 flex flex-col gap-3 opacity-60 cursor-not-allowed"
      >
        <header class="space-y-1">
          <h3 class="text-lg font-semibold text-gray-900">
            Usuários e acessos
          </h3>
          <p class="text-xs uppercase tracking-wide text-gray-400">
            Em breve
          </p>
        </header>

        <p class="text-sm text-gray-600 leading-relaxed">
          Futuramente, aqui você poderá gerenciar permissões, níveis de acesso
          e dados de usuários autenticados no sistema.
        </p>

        <div class="mt-auto flex justify-between items-center pt-2">
          <span class="text-sm text-gray-400">
            Funcionalidade ainda não disponível.
          </span>

          <span class="text-[11px] text-gray-400">
            Planejado
          </span>
        </div>
      </article>

      <!-- Card: Configurações do sistema (placeholder / em breve) -->
      <article
        class="bg-white border rounded-xl shadow-sm p-5 flex flex-col gap-3 opacity-60 cursor-not-allowed"
      >
        <header class="space-y-1">
          <h3 class="text-lg font-semibold text-gray-900">
            Configurações gerais
          </h3>
          <p class="text-xs uppercase tracking-wide text-gray-400">
            Em breve
          </p>
        </header>

        <p class="text-sm text-gray-600 leading-relaxed">
          Área reservada para ajustes globais da aplicação: temas, preferências,
          integrações externas e outros parâmetros avançados.
        </p>

        <div class="mt-auto flex justify-between items-center pt-2">
          <span class="text-sm text-gray-400">
            Funcionalidade ainda não disponível.
          </span>

          <span class="text-[11px] text-gray-400">
            Planejado
          </span>
        </div>
      </article>
    </div>
  </section>

  
</template>

<script setup>
/*
  🔹 Este componente funciona como um “hub” administrativo.
     Neste momento, ele só tem links visuais, mas:
       - Você pode conectar o RouterLink do primeiro card à rota /mensagens (ou outra que criar).
       - Os demais cards estão como “Em breve”, mas a estrutura está pronta
         para virar páginas reais (Usuários, Configurações, etc.)
*/
</script>

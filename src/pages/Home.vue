<!-- src/pages/Home.vue -->
<template>
  <section class="space-y-10">
    <!-- HERO -->
    <div class="bg-white rounded-xl shadow-sm border p-8 md:p-10 flex flex-col gap-6 md:flex-row md:items-center">
      <div class="flex-1 space-y-4">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          Meu primeiro projeto Vue 3 + Tailwind,
          <span class="text-blue-600">organizado e pronto pra crescer.</span>
        </h2>

        <p class="text-gray-600 text-lg leading-relaxed">
          Esta é a base de um site clássico e responsivo, com layout limpo, navegação clara
          e estrutura profissional. A partir daqui dá para encaixar páginas reais, integração
          com APIs e MongoDB, autenticação e tudo mais que um projeto moderno precisa.
        </p>

        <div class="flex flex-wrap gap-3">
          <RouterLink
            to="/sobre"
            class="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Conhecer o projeto
          </RouterLink>

          <RouterLink
            to="/contato"
            class="inline-flex items-center px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Fale comigo
          </RouterLink>
        </div>
      </div>

      <div class="flex-1">
        <div
          class="h-40 md:h-48 rounded-xl bg-gradient-to-br from-blue-600 via-sky-500 to-teal-400 flex items-center justify-center text-white font-semibold text-lg shadow-md"
        >
          <span class="text-center px-4">
            Vue 3 • Vite • Tailwind<br />
            Arquitetura limpa e escalável
          </span>
        </div>
      </div>
    </div>

    <!-- SEÇÃO DE DESTAQUES -->
    <div class="space-y-4">
      <h3 class="text-2xl font-bold text-gray-900">
        O que este projeto já entrega
      </h3>
      <p class="text-gray-600">
        A ideia aqui é ter uma base sólida, como se fosse o esqueleto de um site institucional
        ou de um painel simples, pronto para receber funcionalidades reais.
      </p>

      <div class="grid gap-6 md:grid-cols-3">
        <!-- Card 1 -->
        <div class="bg-white border rounded-xl p-6 shadow-sm flex flex-col gap-3">
          <h4 class="text-lg font-semibold text-gray-900">Arquitetura organizada</h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            Separação clara entre <strong>layouts</strong>, <strong>páginas</strong>,
            <strong>componentes</strong> e <strong>serviços</strong>, facilitando manutenção
            e evolução do código.
          </p>
        </div>

        <!-- Card 2 -->
        <div class="bg-white border rounded-xl p-6 shadow-sm flex flex-col gap-3">
          <h4 class="text-lg font-semibold text-gray-900">UI responsiva com Tailwind</h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            Layout fluido, classes utilitárias modernas e pronto para receber um tema visual
            mais autoral (cores, espaçamentos, componentes UI).
          </p>
        </div>

        <!-- Card 3 -->
        <div class="bg-white border rounded-xl p-6 shadow-sm flex flex-col gap-3">
          <h4 class="text-lg font-semibold text-gray-900">Pronto para fullstack</h4>
          <p class="text-gray-600 text-sm leading-relaxed">
            Estrutura pensada para integrar com APIs e banco de dados, como MongoDB, sem
            bagunçar o front. Back e front conversando de forma limpa.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

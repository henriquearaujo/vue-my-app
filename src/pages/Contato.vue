<!-- src/pages/Contato.vue -->
<template>
  <section class="space-y-8 max-w-2xl">
    <!-- Texto introdutório -->
    <div class="space-y-3">
      <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">
        Contato
      </h2>

      <p class="text-gray-600 text-lg leading-relaxed">
        Esta página ainda é apenas um exemplo, mas o formulário abaixo já pode servir
        de base para integrar com uma API real no futuro — enviando dados para um
        back-end, salvando no MongoDB ou disparando e-mails.
      </p>

      <p class="text-gray-600 leading-relaxed text-sm">
        No momento, o envio não está conectado a nenhum serviço, mas a estrutura
        está pronta para conectar com um endpoint (REST ou serverless) quando você
        quiser dar esse próximo passo.
      </p>
    </div>

    <!-- Formulário -->
    <form class="space-y-5 bg-white border rounded-xl shadow-sm p-6 md:p-8">
      <div class="space-y-1">
        <label class="block text-gray-800 font-medium text-sm">
          Nome
        </label>
        <input
          type="text"
          class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          placeholder="Seu nome completo"
        />
      </div>

      <div class="space-y-1">
        <label class="block text-gray-800 font-medium text-sm">
          E-mail
        </label>
        <input
          type="email"
          class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          placeholder="voce@exemplo.com"
        />
      </div>

      <div class="space-y-1">
        <label class="block text-gray-800 font-medium text-sm">
          Assunto
        </label>
        <input
          type="text"
          class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          placeholder="Sobre o que você gostaria de falar?"
        />
      </div>

      <div class="space-y-1">
        <label class="block text-gray-800 font-medium text-sm">
          Mensagem
        </label>
        <textarea
          class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm min-h-[140px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          placeholder="Descreva sua mensagem com detalhes."
        ></textarea>
      </div>

      <div class="flex items-center justify-between gap-4 flex-wrap">
        <button
          type="button"
          class="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
        >
          Enviar mensagem
        </button>

        <p class="text-xs text-gray-500">
          Este é apenas um formulário de exemplo — nenhum dado será enviado.
        </p>
      </div>
    </form>
  </section>
</template>

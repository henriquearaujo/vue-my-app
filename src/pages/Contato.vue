<!-- src/pages/Contato.vue -->
<template>
  <section class="space-y-6 max-w-xl">
    <h2 class="text-3xl font-bold text-gray-800">Contato</h2>

    <p class="text-gray-600 leading-relaxed">
      Esta página é apenas demonstrativa. Mais tarde podemos inserir um formulário
      real utilizando APIs e persistência de dados no MongoDB.
    </p>

    <form class="space-y-4 p-6 bg-white shadow rounded-lg border">
      <div>
        <label class="block text-gray-700 font-medium">Nome</label>
        <input
          type="text"
          class="mt-1 w-full border rounded px-3 py-2 focus:ring focus:ring-blue-200"
          placeholder="Seu nome"
        />
      </div>

      <div>
        <label class="block text-gray-700 font-medium">Mensagem</label>
        <textarea
          class="mt-1 w-full border rounded px-3 py-2 min-h-[120px] focus:ring focus:ring-blue-200"
          placeholder="Sua mensagem"
        ></textarea>
      </div>

      <button
        type="button"
        class="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
      >
        Enviar
      </button>
    </form>
  </section>
</template>

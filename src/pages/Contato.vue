<!-- src/pages/Contato.vue -->
<template>
  <section class="space-y-8 max-w-2xl">
    <!-- 🔹 Cabeçalho e explicação -->
    <div class="space-y-3">
      <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">
        Contato
      </h2>

      <p class="text-gray-600 text-lg leading-relaxed">
        Este formulário está estruturado como se conversasse com uma API real,
        mas por enquanto estamos apenas salvando os dados no
        <strong>localStorage</strong>, simulando uma integração.
      </p>

      <p class="text-gray-600 leading-relaxed text-sm">
        No futuro, podemos apontar essa mesma lógica para um endpoint real
        (por exemplo <code>/api/contact</code>) que grave os dados em um
        banco MongoDB — sem precisar reescrever a página.
      </p>
    </div>

    <!-- 🔹 Mensagens de feedback visual (sucesso/erro) -->
    <div
      v-if="successMessage"
      class="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
    >
      {{ successMessage }}
    </div>

    <div
      v-if="errorMessage"
      class="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
    >
      {{ errorMessage }}
    </div>

    <!-- 🔹 Formulário de contato -->
    <form
      class="space-y-5 bg-white border rounded-xl shadow-sm p-6 md:p-8"
      @submit.prevent="handleSubmit"
    >
      <!-- Campo: Nome -->
      <div class="space-y-1">
        <label class="block text-gray-800 font-medium text-sm">
          Nome
        </label>
        <input
          v-model="form.name"
          type="text"
          class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          placeholder="Seu nome completo"
          required
        />
      </div>

      <!-- Campo: E-mail -->
      <div class="space-y-1">
        <label class="block text-gray-800 font-medium text-sm">
          E-mail
        </label>
        <input
          v-model="form.email"
          type="email"
          class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          placeholder="voce@exemplo.com"
          required
        />
      </div>

      <!-- Campo: Assunto -->
      <div class="space-y-1">
        <label class="block text-gray-800 font-medium text-sm">
          Assunto
        </label>
        <input
          v-model="form.subject"
          type="text"
          class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          placeholder="Sobre o que você gostaria de falar?"
          required
        />
      </div>

      <!-- Campo: Mensagem -->
      <div class="space-y-1">
        <label class="block text-gray-800 font-medium text-sm">
          Mensagem
        </label>
        <textarea
          v-model="form.message"
          class="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm min-h-[140px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
          placeholder="Descreva sua mensagem com detalhes."
          required
        ></textarea>
      </div>

      <!-- 🔹 Botão + texto auxiliar -->
      <div class="flex items-center justify-between gap-4 flex-wrap">
        <button
          type="submit"
          :disabled="isSubmitting"
          class="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
        >
          <span v-if="!isSubmitting">Enviar mensagem</span>
          <span v-else>Enviando...</span>
        </button>

        <p class="text-xs text-gray-500">
          No momento, os dados são salvos apenas no seu navegador (localStorage).
        </p>
      </div>
    </form>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
// 🔹 Importamos o serviço que abstrai o “meio de transporte” (localStorage agora, API no futuro)
import { sendContactMessage } from '../services/messagesService'

// Estado reativo do formulário
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

// Estados de controle de envio e feedback
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// 🔹 Função chamada no submit do formulário
async function handleSubmit() {
  // Limpa mensagens anteriores
  successMessage.value = ''
  errorMessage.value = ''
  isSubmitting.value = true

  try {
    // Envia para o serviço (atualmente: grava no localStorage)
    const response = await sendContactMessage({ ...form })

    // Exibe mensagem de sucesso amigável
    successMessage.value =
      response?.message || 'Mensagem enviada e salva localmente com sucesso!'

    // Limpa campos do formulário
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (error) {
    console.error(error)
    // Caso algum erro interno ocorra, mostramos uma mensagem genérica
    errorMessage.value =
      error?.message || 'Não foi possível enviar a mensagem. Tente novamente.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

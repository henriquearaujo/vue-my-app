<!-- src/pages/Mensagens.vue -->
<template>
  <section class="space-y-8">
    <!-- 🔹 Cabeçalho da página -->
    <div class="space-y-3">
      <div class="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
        <!-- Pequeto “badge” dizendo que é área restrita -->
        <span>Área administrativa</span>
      </div>

      <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">
        Mensagens recebidas
      </h2>

      <p class="text-gray-600 leading-relaxed">
        Este painel lista as mensagens enviadas pelo formulário de contato,
        atualmente armazenadas no <strong>localStorage</strong>. Em um cenário
        real, esses dados viriam de uma API conectada a um banco como o MongoDB.
      </p>

      <p class="text-gray-500 text-sm">
        Use esta tela como base para um painel administrativo simples, com
        filtros, paginação ou detalhes de cada mensagem no futuro.
      </p>
    </div>

    <!-- 🔹 Estado de carregamento -->
    <div
      v-if="isLoading"
      class="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600"
    >
      Carregando mensagens...
    </div>

    <!-- 🔹 Estado de lista vazia -->
    <div
      v-else-if="messages.length === 0"
      class="rounded-lg border border-yellow-100 bg-yellow-50 px-4 py-3 text-sm text-yellow-800"
    >
      Nenhuma mensagem encontrada. Envie algo pela página de contato para testar.
    </div>

    <!-- 🔹 Lista de mensagens -->
    <div v-else class="space-y-4">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold text-gray-900">
          Total de mensagens: {{ messages.length }}
        </h3>
        <button
          type="button"
          class="text-sm text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline cursor-pointer"
          @click="reload"
        >
          Recarregar
        </button>
      </div>

      <!-- 🔹 Grid de cards (um por mensagem) -->
      <div class="grid gap-4 md:grid-cols-2">
        <article
          v-for="msg in messages"
          :key="msg.id"
          class="bg-white border rounded-xl shadow-sm p-4 flex flex-col gap-3"
        >
          <!-- Cabeçalho do card: nome + email -->
          <header class="flex flex-col gap-1">
            <h4 class="text-base font-semibold text-gray-900">
              {{ msg.name || 'Nome não informado' }}
            </h4>
            <p class="text-xs text-gray-500">
              {{ msg.email || 'E-mail não informado' }}
            </p>
          </header>

          <!-- Assunto -->
          <p class="text-sm font-medium text-gray-800">
            Assunto: <span class="font-normal">{{ msg.subject }}</span>
          </p>

          <!-- Mensagem -->
          <p class="text-sm text-gray-700 leading-relaxed">
            {{ msg.message }}
          </p>

          <!-- Rodapé do card: data -->
          <footer class="mt-2 text-xs text-gray-500 flex items-center justify-between">
            <span>
              Enviado em:
              <strong>{{ formatDate(msg.createdAt) }}</strong>
            </span>
            <span class="text-[10px] uppercase tracking-wide text-gray-400">
              ID: {{ msg.id }}
            </span>
          </footer>
        </article>
      </div>
    </div>
  </section>

    <RouterLink
    to="/dashboard/index"
    class="inline-flex items-center gap-2 px-4 py-2 mt-5 rounded-lg bg-blue-600 border border-gray-300 text-white text-sm font-medium hover:bg-blue-800 hover:border-gray-400 transition shadow-sm"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M7.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L4.414 8H18a1 1 0 110 2H4.414l3.293 3.293a1 1 0 010 1.414z"
        clip-rule="evenodd"
      />
    </svg>
    <span>Voltar para o painel</span>
  </RouterLink>


</template>

<script setup>
import { onMounted, ref } from 'vue'
// 🔹 Importamos o serviço que lê as mensagens do localStorage
import { listContactMessages } from '../../services/messagesService'

// Estado reativo para lista de mensagens
const messages = ref([])

// Estado de carregamento
const isLoading = ref(false)

/**
 * 🔹 Função responsável por buscar as mensagens
 *    usando o serviço de front (que hoje fala com localStorage).
 */
async function fetchMessages() {
  isLoading.value = true
  try {
    const response = await listContactMessages()
    // Esperamos que o serviço devolva { ok: true, data: [...] }
    messages.value = response?.data || []
  } catch (error) {
    console.error('Erro ao carregar mensagens:', error)
    messages.value = []
  } finally {
    isLoading.value = false
  }
}

/**
 * 🔹 Função exposta para o botão "Recarregar",
 *    apenas chama novamente o fetch.
 */
async function reload() {
  await fetchMessages()
}

/**
 * 🔹 Formatador simples de data, deixando legível
 *    a string ISO que salvamos ao criar a mensagem.
 */
function formatDate(isoString) {
  if (!isoString) return 'Data não informada'
  const date = new Date(isoString)
  // Ex.: 17/11/2025 10:32
  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

// 🔹 Quando o componente monta, carregamos as mensagens
onMounted(() => {
  fetchMessages()
})
</script>

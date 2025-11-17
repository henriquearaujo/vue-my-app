<!-- src/pages/Mensagens.vue -->
<template>
  <section class="space-y-8">
    <!-- 🔹 Cabeçalho da página -->
    <div class="space-y-3">
      <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">
        Mensagens recebidas
      </h2>

      <p class="text-gray-600 leading-relaxed">
        Este painel lista as mensagens enviadas pelo formulário de contato,
        agora armazenadas no <strong>MongoDB</strong>. Aqui você pode visualizar
        e gerenciar (inclusive excluir) os registros.
      </p>

      <p class="text-gray-500 text-sm">
        Esta tela pode evoluir para um painel administrativo completo com filtros,
        paginação, visualização detalhada e muito mais.
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
      <div class="flex items-center justify-between gap-4">
        <h3 class="text-lg font-semibold text-gray-900">
          Total de mensagens: {{ messages.length }}
        </h3>
        <button
          type="button"
          class="text-sm text-blue-600 hover:text-blue-700 underline-offset-2 hover:underline"
          @click="reload"
        >
          Recarregar
        </button>
      </div>

      <!-- 🔹 Área de feedback global de erro/sucesso -->
      <div v-if="feedbackMessage" class="space-y-2">
        <div
          :class="[
            'rounded-lg px-4 py-3 text-sm',
            feedbackType === 'error'
              ? 'bg-red-50 border border-red-200 text-red-800'
              : 'bg-green-50 border border-green-200 text-green-800',
          ]"
        >
          {{ feedbackMessage }}
        </div>
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

          <!-- Rodapé do card: data + ações -->
          <footer
            class="mt-2 text-xs text-gray-500 flex items-center justify-between gap-3"
          >
            <span>
              Enviado em:
              <strong>{{ formatDate(msg.createdAt) }}</strong>
            </span>

            <div class="flex items-center gap-2">
              <!-- ID em formato pequeno -->
              <span class="hidden md:inline text-[10px] uppercase tracking-wide text-gray-400">
                ID: {{ msg.id }}
              </span>

              <!-- 🔹 Botão de excluir -->
              <button
                type="button"
                class="text-[11px] font-semibold text-red-600 hover:text-red-700 border border-red-200 rounded px-2 py-1 hover:bg-red-50 transition disabled:opacity-60 disabled:cursor-not-allowed"
                :disabled="isDeletingId === msg.id"
                @click="handleDelete(msg.id)"
              >
                <span v-if="isDeletingId === msg.id">Excluindo...</span>
                <span v-else>Excluir</span>
              </button>
            </div>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
// 🔹 Importamos os serviços que falam com a API (Node + MongoDB)
import {
  listContactMessages,
  deleteContactMessage,
} from '../../services/messagesService'

// Lista de mensagens carregadas da API
const messages = ref([])

// Estado de carregamento inicial
const isLoading = ref(false)

// ID da mensagem que está sendo excluída (para mostrar "Excluindo...")
const isDeletingId = ref(null)

// Feedback global (sucesso/erro)
const feedbackMessage = ref('')
const feedbackType = ref('success') // 'success' | 'error'

/**
 * 🔹 Busca mensagens no backend (GET /api/contact)
 */
async function fetchMessages() {
  isLoading.value = true
  feedbackMessage.value = ''

  try {
    const response = await listContactMessages()
    // Esperamos { ok: true, data: [...] }
    messages.value = response?.data || []
  } catch (error) {
    console.error('Erro ao carregar mensagens:', error)
    messages.value = []
    feedbackType.value = 'error'
    feedbackMessage.value =
      error?.message || 'Erro ao carregar mensagens. Tente novamente.'
  } finally {
    isLoading.value = false
  }
}

/**
 * 🔹 Função pública (ligada ao botão "Recarregar").
 */
async function reload() {
  await fetchMessages()
}

/**
 * 🔹 Formata a data para exibição legível (dd/mm/aaaa hh:mm).
 */
function formatDate(value) {
  if (!value) return 'Data não informada'
  const date = new Date(value)
  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

/**
 * 🔹 Exclui uma mensagem específica:
 *   - Pede confirmação ao usuário
 *   - Chama DELETE /api/contact/:id
 *   - Atualiza o array local removendo o item
 */
async function handleDelete(id) {
  feedbackMessage.value = ''

  const confirmed = window.confirm(
    'Tem certeza que deseja excluir esta mensagem?',
  )
  if (!confirmed) return

  isDeletingId.value = id

  try {
    const response = await deleteContactMessage(id)
    // Esperamos { ok: true, message: '...' }
    feedbackType.value = 'success'
    feedbackMessage.value =
      response?.message || 'Mensagem excluída com sucesso.'

    // 🔹 Remove a mensagem do array sem precisar recarregar tudo
    messages.value = messages.value.filter((msg) => msg.id !== id)
  } catch (error) {
    console.error('Erro ao excluir mensagem:', error)
    feedbackType.value = 'error'
    feedbackMessage.value =
      error?.message || 'Erro ao excluir mensagem. Tente novamente.'
  } finally {
    isDeletingId.value = null
  }
}

// 🔹 Quando o componente monta, carregamos as mensagens
onMounted(() => {
  fetchMessages()
})
</script>

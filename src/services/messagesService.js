// src/services/messagesService.js

// 🔹 Chave usada no localStorage para guardar as mensagens
const STORAGE_KEY = 'contactMessages'

/**
 * Lê as mensagens salvas no localStorage.
 * Retorna sempre um array (mesmo se estiver vazio).
 */
function getStoredMessages() {
  const raw = localStorage.getItem(STORAGE_KEY)

  // Se não houver nada salvo, devolve um array vazio
  if (!raw) return []

  try {
    return JSON.parse(raw)
  } catch (error) {
    console.error('Erro ao fazer parse do localStorage:', error)
    return []
  }
}

/**
 * Salva o array de mensagens no localStorage.
 */
function setStoredMessages(messages) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
}

/**
 * Envia (simula) uma mensagem de contato.
 * No momento, apenas grava no localStorage,
 * mas a assinatura já está pensada para
 * no futuro falar com uma API real/MongoDB.
 */
export async function sendContactMessage(payload) {
  // Pequena simulação de atraso de rede (opcional, só para “feeling” de requisição)
  await new Promise((resolve) => setTimeout(resolve, 600))

  const messages = getStoredMessages()

  // 🔹 Criamos um objeto mensagem mais completo
  const newMessage = {
    id: Date.now(), // identificador simples baseado no timestamp
    name: payload.name,
    email: payload.email,
    subject: payload.subject,
    message: payload.message,
    createdAt: new Date().toISOString(), // data de criação no padrão ISO
  }

  // Adiciona a nova mensagem ao array
  messages.push(newMessage)

  // Salva de volta
  setStoredMessages(messages)

  // 🔹 Devolvemos algo no formato que uma API real poderia retornar
  return {
    ok: true,
    message: 'Mensagem salva localmente com sucesso',
    data: newMessage,
  }
}

/**
 * (Opcional) Lista todas as mensagens salvas no localStorage.
 * Útil para uma futura página de “admin” ou painel de visualização.
 */
export async function listContactMessages() {
  await new Promise((resolve) => setTimeout(resolve, 200))
  const messages = getStoredMessages()
  return {
    ok: true,
    data: messages,
  }
}

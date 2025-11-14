// src/services/messagesService.js

import { apiClient } from './apiClient'

/**
 * Envia uma mensagem de contato para a API.
 * No back-end, isso poderia:
 *  - salvar no MongoDB
 *  - enviar e-mail
 *  - disparar notificação, etc.
 */
export async function sendContactMessage(payload) {
  // Exemplo de payload:
  // { name, email, subject, message }
  return apiClient.post('/contact', payload)
}

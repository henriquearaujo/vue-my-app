// src/services/messagesService.js
//
// Serviço responsável por enviar, listar e excluir
// mensagens de contato via API (Node + MongoDB).
//

import { apiClient } from './apiClient'

/**
 * Envia uma nova mensagem de contato.
 * Backend:
 *   POST /api/contact
 */
export async function sendContactMessage(payload) {
  return apiClient.post('/api/contact', payload)
}

/**
 * Lista todas as mensagens de contato.
 * Backend:
 *   GET /api/contact
 */
export async function listContactMessages() {
  return apiClient.get('/api/contact')
}

/**
 * Exclui uma mensagem específica pelo ID.
 * Backend:
 *   DELETE /api/contact/:id
 */
export async function deleteContactMessage(id) {
  return apiClient.delete(`/api/contact/${id}`)
}

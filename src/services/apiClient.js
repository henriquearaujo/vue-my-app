// src/services/apiClient.js

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000'

// Função interna genérica para requisições
async function request(path, options = {}) {
  const url = `${API_BASE_URL}${path}`

  const defaultHeaders = {
    'Content-Type': 'application/json',
  }

  const config = {
    headers: {
      ...defaultHeaders,
      ...(options.headers || {}),
    },
    method: options.method || 'GET',
    body: options.body ? JSON.stringify(options.body) : undefined,
  }

  const response = await fetch(url, config)

  let data
  const text = await response.text()
  try {
    data = text ? JSON.parse(text) : null
  } catch {
    data = text
  }

  if (!response.ok) {
    const error = new Error(data?.message || 'Erro na requisição')
    error.status = response.status
    error.data = data
    throw error
  }

  return data
}

export const apiClient = {
  get(path) {
    return request(path, { method: 'GET' })
  },
  post(path, body) {
    return request(path, { method: 'POST', body })
  },
  put(path, body) {
    return request(path, { method: 'PUT', body })
  },
  patch(path, body) {
    return request(path, { method: 'PATCH', body })
  },
  delete(path) {
    return request(path, { method: 'DELETE' })
  },
}

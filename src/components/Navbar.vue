<!-- src/components/Navbar.vue -->
<template>
  <header class="w-full bg-white shadow-sm">
    <nav class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      
      <!-- Logo -->
      <RouterLink to="/" class="text-xl font-bold text-blue-600">
        My Vue App
      </RouterLink>

      <!-- Menu Desktop -->
      <ul class="hidden md:flex gap-6 font-medium text-gray-700">
        <li><RouterLink to="/" class="hover:text-blue-600 transition">Home</RouterLink></li>
        <li><RouterLink to="/sobre" class="hover:text-blue-600 transition">Sobre</RouterLink></li>
        <li><RouterLink to="/contato" class="hover:text-blue-600 transition">Contato</RouterLink></li>
      </ul>

      <!-- Botão mobile -->
      <button
        @click="$emit('toggle-menu')"
        class="md:hidden p-2 rounded hover:bg-gray-100"
      >
        ☰
      </button>
    </nav>
  </header>
</template>

<script setup>
</script>

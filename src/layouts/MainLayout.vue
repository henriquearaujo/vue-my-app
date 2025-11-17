<!-- src/layouts/MainLayout.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-800">

    <!-- Navbar -->
    <Navbar @toggle-menu="isMenuOpen = !isMenuOpen" />

    <!-- Menu Mobile -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-white border-t px-4 py-3 flex flex-col gap-3"
    >
      <RouterLink
        @click="closeMenu"
        to="/"
        class="py-2 border-b hover:text-blue-600 transition"
      >
        Início
      </RouterLink>

      <RouterLink
        @click="closeMenu"
        to="/sobre"
        class="py-2 border-b hover:text-blue-600 transition"
      >
        Sobre
      </RouterLink>

      <RouterLink
        @click="closeMenu"
        to="/contato"
        class="py-2 border-b hover:text-blue-600 transition"
      >
        Contato
      </RouterLink>

      <RouterLink
        @click="closeMenu"
        to="/dashboard/index"
        class="py-2 hover:text-blue-600 transition"
      >
        Painel Admin
      </RouterLink>
    </div>

    <!-- Conteúdo -->
    <main class="flex-1 max-w-6xl mx-auto w-full px-4 py-10">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <the-header></the-header>
  <main class="h-max flex flex-col">
    <the-chat></the-chat>
  </main>
  <send-area></send-area>
</template>

<script setup>
import TheHeader from "./components/layouts/TheHeader.vue";
import TheChat from "./components/chat/TheChat.vue";
import SendArea from "./components/chat/SendArea.vue";
</script>

<style>
#app {
  @apply h-screen bg-gray-700;
}
</style>

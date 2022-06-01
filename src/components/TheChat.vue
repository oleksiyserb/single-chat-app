<template>
  <section>
    <div class="max-w-7xl mx-auto px-8">
      <div class="w-full">
        <div class="relative w-full py-4 overflow-y-auto">
          <ul class="space-y-2">
            <message-item></message-item>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MessageItem from "./MessageItem.vue";
</script>

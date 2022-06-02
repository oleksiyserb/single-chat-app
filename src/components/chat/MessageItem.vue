<template>
  <li class="flex justify-end" v-if="sender">
    <div>
      <span class="flex justify-end text-gray-400 text-sm pb-1">
        {{ userName }}
      </span>
      <div
        class="relative max-w-xl px-4 py-2 text-gray-700 bg-blue-300 rounded shadow"
      >
        <span class="block">{{ text }}</span>
      </div>
    </div>
    <img class="inline-block w-9 h-9 rounded-full ml-2 mt-2" :src="photoUrl" />
  </li>
  <li class="flex justify-start items-center shrink" v-else>
    <img class="inline-block w-9 h-9 rounded-full mr-2" :src="photoUrl" />
    <div>
      <span class="flex justify-start text-gray-400 text-sm pb-1">
        {{ userName }}
      </span>
      <div
        class="relative max-w-xl px-4 py-2 text-gray-700 bg-white rounded shadow"
      >
        <span class="block">{{ text }}</span>
      </div>
    </div>
  </li>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  userId: String,
  photoUrl: String,
  userName: String,
  text: String,
  sender: Boolean,
});
</script>

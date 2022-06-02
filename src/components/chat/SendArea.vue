<template>
  <footer class="fixed bottom-0 left-0 right-0 bg-gray-900">
    <div class="max-w-7xl mx-auto px-8">
      <div class="w-full">
        <form
          class="flex items-center justify-between w-full p-3"
          @submit.prevent="send"
        >
          <input
            v-model.trim="text"
            type="text"
            placeholder="Message"
            class="block w-full py-2 pl-4 mr-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
            name="message"
            required
          />
          <button type="submit">
            <svg
              class="w-5 h-5 text-gray-500 origin-center transform rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { useChat } from "../../firebase";

const text = ref("");

const { sendMessage } = useChat();

const send = () => {
  sendMessage(text.value);
  text.value = "";
};
</script>

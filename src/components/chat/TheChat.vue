<template>
  <section>
    <div class="max-w-7xl mx-auto px-8">
      <div class="w-full">
        <div class="relative w-full py-4 overflow-y-auto">
          <ul class="space-y-2">
            <message-item
              v-for="message in messages"
              :key="message.id"
              :sender="message.userId === user?.uid"
              :user-id="message.userId"
              :photo-url="message.photoUrl"
              :user-name="message.userName"
              :text="message.text"
            ></message-item>
          </ul>
          <div class="mt-20"></div>
        </div>
      </div>
    </div>
  </section>
  <div ref="bottom">
    <send-area v-if="isLogin"></send-area>
  </div>
</template>

<script setup>
import MessageItem from "./MessageItem.vue";
import SendArea from "./SendArea.vue";
import { useChat } from "../../firebase";
import { useAuth } from "../../firebase";
import { nextTick, ref, watch } from "vue";

const { user, isLogin } = useAuth();
const { messages } = useChat();
const bottom = ref(null);

watch(
  messages,
  () => {
    nextTick(() => {
      bottom.value?.scrollIntoView({ behavior: "smooth" });
    });
  },
  { deep: true }
);
</script>

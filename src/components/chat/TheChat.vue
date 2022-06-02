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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MessageItem from "./MessageItem.vue";
import { useChat } from "../../firebase";
import { useAuth } from "../../firebase";

const { user } = useAuth();
const { messages } = useChat();
</script>

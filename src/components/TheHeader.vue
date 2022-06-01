<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex-1 flex items-center justify-start">
          <div class="flex-shrink-0 flex items-center">
            <h1 class="text-white font-extrabold text-3xl">
              <span class="text-indigo-500">Serb</span>Chat
            </h1>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            v-if="isLogin"
            @click="logout"
            class="py-2 px-4 bg-indigo-500 font-bold text-white rounded hover:bg-indigo-600"
          >
            Sign Out
          </button>
          <button
            v-else
            @click="signIn"
            class="py-2 px-4 bg-indigo-500 font-bold text-white rounded hover:bg-indigo-600"
          >
            Sign In
          </button>
          <div class="ml-3 relative">
            <div>
              <img
                class="h-8 w-8 rounded-full"
                v-if="user"
                :src="user.photoUrl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuth } from "@/firebase";

const { user, isLogin, signIn, logout } = useAuth();
</script>

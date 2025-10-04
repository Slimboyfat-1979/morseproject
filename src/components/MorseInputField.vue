<template>
  <section>
    <slot></slot>
    <p
      class="text-green-400 text-lg font-mono bg-gray-900 px-4 py-2 rounded-md border border-green-600 shadow h-15 flex items-end"
    >
      {{ morseString}}
    </p>


  </section>
</template>

<script setup>
import socket from '@/main';
import { computed, onMounted, ref } from 'vue';
const receivedMorse = ref([]);
const props = defineProps({
  clear: {
    type: Boolean
  },
  morse: {
    type: Array
  },
});

const morseString = computed(() => props.morse?.join(' ')  ?? '');

onMounted(() => {
    socket.on('morse-reply', (data) => {
        receivedMorse.value = data.morse;
    })
})
</script>

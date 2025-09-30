<template>
  <section>
    <h1>Generated Morse Code</h1>
    <p
      class="text-green-400 text-lg font-mono bg-gray-900 px-4 py-2 rounded-md border border-green-600 shadow h-10"
    >
      {{ morseString}}
    </p>
  </section>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  morse: {
    type: Array
  },
});

const morseString = computed(() => props.morse?.join(' ')  ?? '')
</script>

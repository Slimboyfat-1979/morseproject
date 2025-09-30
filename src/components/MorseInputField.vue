<template>
  <section>
    <h1>Generated Morse Code</h1>
    <p
      class="text-green-400 text-lg font-mono bg-gray-900 px-4 py-2 rounded-md border border-green-600 shadow h-10"
    >
      {{ morse }}
    </p>
  </section>
</template>

<script setup>
defineProps({
  morse: {
    type: String,
  },
});
</script>

<script setup>
import Basecard from "./components/Basecard.vue";
import MorseButton from "./components/MorseButton.vue";
</script>

<template>
  <div class="w-2/3 m-auto mt-10">
    <h1 class="text-4xl text-center py-4">Morse Code Simulator</h1>
    <basecard>
        <MorseButton></MorseButton>
    </basecard>
  </div>
</template>

<style scoped></style>

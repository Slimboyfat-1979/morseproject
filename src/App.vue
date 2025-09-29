<template>
  <div class="w-2/3 m-auto mt-10">
    <h1 class="text-4xl text-center py-4">Morse Code Simulator</h1>
    <basecard>
      <MorseButton @play="playSound"></MorseButton>
    </basecard>
  </div>
</template>

<style scoped></style>

<script setup>
import { onMounted } from "vue";
import Basecard from "./components/Basecard.vue";
import MorseButton from "./components/MorseButton.vue";

const ctx = new window.AudioContext();
function playTone(duration = 0.1, frequency = 750) {
  const oscillator = ctx.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.value = frequency;

  const gain = ctx.createGain();
  oscillator.connect(gain);
  gain.connect(ctx.destination);

  oscillator.start();
  gain.gain.setValueAtTime(0.3, ctx.currentTime + duration);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  oscillator.stop(ctx.currentTime + duration);
}

function playSound(morse) {
  const morseArray = morse.split("");
  console.log(morseArray);
  morseArray.forEach((m, i) => {
    const duration = m === '-' ? 300 : 100;
    setTimeout(() => {
        playTone(duration / 1000)
    }, i * 400)
  })

}

onMounted(() => {});
</script>

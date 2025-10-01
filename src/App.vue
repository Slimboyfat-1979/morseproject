<template>
  <div class="w-2/3 m-auto mt-10 space-y-5">
    <h1 class="text-4xl text-center py-4">Morse Code Simulator</h1>
    <basecard>
      <MorseButton @play="handleMorse"></MorseButton>
    </basecard>
    <Basecard>
      <MorseInputField :morse="morseArray"></MorseInputField>
    </Basecard>
    <button class="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 py-2 rounded shadow cursor-pointer" @click="playMorseCode(morseArray)">
      Play Morse
    </button>
  </div>
</template>

<style scoped></style>

<script setup>
import { onMounted, ref } from "vue";
import Basecard from "@/components/Basecard.vue";
import MorseButton from "@/components/MorseButton.vue";
import MorseInputField from "@/components/MorseInputField.vue";

const morseArray = ref([]);

function handleMorse(morse) {
   morseArray.value.push(morse);
   console.log(morseArray.value);
}


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

function playMorseCode(morsecode) {
  let delay = 0;

  morsecode.forEach((letter) => {
    const symbols = letter.split(''); // e.g. ".-" → [".", "-"]
    symbols.forEach((symbol) => {
      const duration = symbol === "-" ? 0.3 : 0.1; // seconds
      setTimeout(() => {
        playTone(duration);
      }, delay * 1000);
      delay += duration + 0.1; // short gap between symbols
    });

    delay += 0.3; // extra gap between letters
  });
}

onMounted(() => {});
</script>

<!-- // function playSound(morse) {
//   const morseArray = morse.split("");
//   console.log(morseArray);
//   morseArray.forEach((m, i) => {
//     const duration = m === "-" ? 300 : 100;
//     setTimeout(() => {
//       playTone(duration / 1000);
//     }, i * 400);
//   });
// } -->

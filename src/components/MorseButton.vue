<template>
    <div class="grid grid-cols-6 text-center gap-5 justify-items-center items-center md:grid-cols-6 sm:grid-cols-4 lg:grid-cols-6">
    <div @click="$emit('play', morse)"
        v-for="(morse, letter) in morseMap"
        :key="letter"
        class="flex flex-col p-3 rounded-full w-20 h-20 bg-gradient-to-br from-green-300 to-green-400 shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer "
    >
        <span class="text-xl font-bold text-gray-800 uppercase mb-1">{{ letter }}</span>
        <span class="text-lg font-mono text-gray-700 tracking-widest">{{ morse }}</span>
    </div>
    </div>
</template>

<script setup>
defineEmits(['play'])
const morseMap = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j:  '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..'
}
</script>

<style scoped>
.dot,
.dash {
  display: inline-block;
  height: 12px;
  margin: 6px;
  background-color: #333;
  border-radius: 6px;
  transition: background 0.3s ease;
}

.dot {
  width: 12px;
}

.dash {
  width: 36px;
}
</style>

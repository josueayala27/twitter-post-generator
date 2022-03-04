<template>
  <button
    :class="[background]"
    class="rounded-lg text-sm px-3 py-2 transition-all duration-200 font-medium flex gap-3"
    @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    color: { type: String, default: 'blue' },
  },
  data() {
    return {
      colors: {
        blue: 'bg-[#2DEBC9] hover:bg-[#29D5B6] text-black',
        gray: 'hover:bg-gray-100 hover:text-[#06f] text-black',
        red: 'bg-[#ff6363] text-red-500',
      },
    };
  },
  computed: {
    background() {
      return this.colors[this.color];
    },
  },
};
</script>

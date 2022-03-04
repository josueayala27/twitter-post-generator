<!-- eslint-disable vue/no-v-html -->

<template>
  <client-only>
    <div
      class="w-[1.2rem] aspect-square fill-current"
      @click="$emit('click')"
      v-html="icon"
    ></div>
  </client-only>
</template>

<script>
export default {
  name: 'IconComponent',
  props: {
    name: { type: String, required: true },
  },
  computed: {
    icon() {
      return require(`@/assets/icons/${this.name}.svg?raw`)
    },
  },
}
</script>

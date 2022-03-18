<template>
  <label :for="getId" class="flex flex-col gap-y-2">
    <span class="text-sm">{{ label }}</span>
    <input
      :id="getId"
      v-model="data"
      :type="type"
      class="w-full outline-none px-4 bg-gray-100 py-3 transition-all duration-300 focus:bg-gray-200" />
  </label>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'InputComponent',
  props: {
    value: { type: [String, Number], default: '' },
    label: { type: String, default: '' },
    type: { type: String, default: 'text' },
  },
  data() {
    return {
      data: this.value,
    };
  },
  computed: {
    ...mapGetters('theme', ['background']),
    getId() {
      return this.label.split(' ').join('-').toLowerCase();
    },
  },
  watch: {
    data() {
      this.$emit('input', this.data);
    },
  },
};
</script>

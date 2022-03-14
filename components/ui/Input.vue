<template>
  <label :for="getId">
    <span class="text-sm">{{ label }}</span>
    <input
      :id="getId"
      type="text"
      class="w-full outline-none px-4 py-3 focus:bg-orange-50 transition-all bg-gray-100 duration-300 rounded-lg ring-2 ring-transparent focus:ring-orange-500" />
  </label>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    label: { type: String, default: '' },
  },
  computed: {
    getId() {
      return this.label.split(' ').join('-').toLowerCase();
    },
  },
};
</script>

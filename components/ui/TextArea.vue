<template>
  <label :for="getId" class="flex flex-col gap-y-2">
    <span class="text-sm">{{ label }}</span>
    <textarea
      :id="getId"
      class="w-full outline-none px-4 py-3 focus:bg-orange-50 transition-all bg-gray-100 duration-300 rounded-lg ring-2 ring-transparent focus:ring-orange-500"></textarea>
  </label>
</template>

<script>
export default {
  name: 'TextAreaComponent',
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

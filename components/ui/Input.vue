<template>
  <label :for="getId" class="flex flex-col gap-y-2">
    <span class="text-sm">{{ label }}</span>
    <input
      :id="getId"
      v-model="data"
      type="text"
      class="w-full outline-none px-4 py-3 focus:bg-orange-50 transition-all bg-gray-100 duration-300 rounded-lg ring-2 ring-transparent focus:ring-orange-500" />
  </label>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    value: { type: String, default: '' },
    label: { type: String, default: '' },
  },
  data() {
    return {
      data: this.value,
    };
  },
  computed: {
    getId() {
      return this.label.split(' ').join('-').toLowerCase();
    },
  },
  watch: {
    data() {
      console.log(this.value);
      this.$emit('input', this.data);
    },
  },
};
</script>

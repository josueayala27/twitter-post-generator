<template>
  <label :for="getId" class="flex flex-col gap-y-2">
    <span class="text-sm">{{ label }}</span>
    <textarea
      :id="getId"
      v-model="data"
      class="w-full outline-none px-4 py-3 focus:bg-orange-50 transition-all bg-gray-100 duration-300 rounded-lg ring-2 ring-transparent focus:ring-orange-500"></textarea>
  </label>
</template>

<script>
export default {
  name: 'TextAreaComponent',
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
      let data = this.data;
      data = data.replace(/\n/g, '<br>');
      this.$emit('input', data);
    },
  },
};
</script>

<template>
  <label :for="getId" class="flex flex-col gap-y-2">
    <span class="text-sm">{{ label }}</span>
    <textarea
      :id="getId"
      v-model="data"
      rows="4"
      class="w-full outline-none px-4 bg-gray-100 py-3 transition-all duration-300 focus:bg-gray-200 resize-none" />
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
      data = data.replace(
        /@([áéíóúa.-zA-Z0-9_]+)/g,
        '<span class="active-text"> @$1 </span>'
      );
      data = data.replace(
        /#([áéíóúa-zA-Z0-9_]+)/g,
        '<span class="active-text"> #$1 </span>'
      );
      this.$emit('input', '<p>' + data + '</p>');
    },
  },
};
</script>

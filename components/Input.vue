<template>
  <div class="input flex flex-col" :class="[{ 'w-full': block }]">
    <small>{{ label }}</small>
    <input
      :class="[{ 'w-full': block }]"
      class="
        bg-gray-50
        border-2
        w-auto
        hover:border-blue-400
        active:border-blue-400
        outline-none
        focus:outline-none
        p-2
        text-sm
        transition-all
        duration-300
        focus:border-blue-400
      "
      type="text"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    block: { type: Boolean, default: false },
    label: { type: String, default: null },
    value: { type: String, default: null },
  },
}
</script>

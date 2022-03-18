<template>
  <div
    v-close-popover
    :class="[
      {
        'bg-gray-100': selected,
      },
    ]"
    class="hover:bg-gray-50 py-2 p-4 cursor-pointer rounded-lg flex gap-2 items-center text-sm"
    @click="$emit('click')">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ItemDropdownComponent',
  props: {
    selected: { type: Boolean, default: false },
  },
};
</script>

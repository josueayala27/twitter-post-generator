<template>
  <div
    class="hover:bg-gray-50 py-2 p-4 cursor-pointer rounded-lg flex gap-2 items-center"
    @click="$emit('click')"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ItemDropdownComponent',
}
</script>

<template>
  <v-popover>
    <slot />
    <template #popover>
      <div class="flex flex-col">
        <slot name="items"></slot>
      </div>
    </template>
  </v-popover>
</template>

<script>
export default {
  name: 'DropdownComponent',
}
</script>

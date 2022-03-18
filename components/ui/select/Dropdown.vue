<template>
  <client-only>
    <v-popover>
      <slot />
      <template #popover>
        <div class="flex flex-col bg-white">
          <slot name="items"></slot>
        </div>
      </template>
    </v-popover>
  </client-only>
</template>

<script>
export default {
  name: 'DropdownComponent',
};
</script>

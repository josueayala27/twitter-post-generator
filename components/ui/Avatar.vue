<template>
  <div
    class="h-12 aspect-square bg-gray-200 rounded-full relative overflow-hidden z-0 group">
    <div
      v-if="editable"
      class="w-full z-[1] cursor-pointer absolute h-full group-hover:bg-black/50 group-hover:opacity-100 opacity-0 text-white flex items-center justify-center inset-0"
      @click="$emit('edit')">
      <Icon name="pencil" />
    </div>
    <img class="w-full h-full object-cover" :src="src" alt="Twitter Photo" />
  </div>
</template>

<script>
export default {
  name: 'AvatarComponent',
  props: {
    editable: { type: Boolean, default: false },
    src: { type: String, default: '' },
  },
};
</script>

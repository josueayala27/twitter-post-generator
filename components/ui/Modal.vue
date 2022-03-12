<template>
  <div class="modal-component">
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-class="transform opacity-0"
      enter-to-class="transform opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-class="transform opacity-100"
      leave-to-class="transform opacity-0">
      <div
        v-if="visible"
        class="fixed top-0 left-0 h-screen w-full flex items-center justify-center bg-gray-500/30"></div>
    </transition>
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-200"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95">
      <div
        v-if="visible"
        class="fixed top-0 left-0 h-screen w-full flex items-center justify-center">
        <div class="bg-white shadow-lg rounded-xl min-w-[23.75rem]">
          <header class="header relative p-6 text-lg font-semibold text-black">
            <div
              class="flex items-center justify-center left-0 inset-y-0 absolute p-6 z-10">
              <Icon
                name="close"
                class="cursor-pointer text-gray-600 transition-all duration-300 hover:text-black"
                @click="$emit('close')" />
            </div>
            <div
              class="text-center absolute flex items-center justify-center inset-0 select-none">
              {{ title }}
            </div>
          </header>
          <div class="p-6 border-t">
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ModalComponent',
  props: {
    title: { type: String, default: '' },
    visible: { type: Boolean, default: false },
  },
};
</script>

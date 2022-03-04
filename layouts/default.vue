<template>
  <div class="bg-[#131313]">
    <div
      class="fixed top-[100px] mx-auto bg-[#191919] p-6 left-[50%] text-white translate-x-[-50%] rounded-lg border-white border">
      <Dropdown>
        <button>Hola como estas</button>
        <template #items>
          <ItemDropdown
            v-for="{ id, name, gradient: { to, from } } in colors"
            :key="id"
            class="text-sm"
            ><div
              :style="`background-image: linear-gradient(180deg, ${from} , ${to});`"
              class="w-[16px] aspect-square rounded-full"></div>
            {{ name }}</ItemDropdown
          >
        </template>
      </Dropdown>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DefaultLayout',
  computed: {
    ...mapState('theme', ['colors']),
  },
};
</script>

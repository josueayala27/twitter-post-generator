<template>
  <div class="bg-[#131313]">
    <div
      class="fixed top-[100px] gap-x-3 flex mx-auto bg-[#191919] p-6 left-[50%] text-white translate-x-[-50%] rounded-lg border-[#3D3D3D] border">
      <Dropdown>
        <Button>Colors</Button>
        <template #items>
          <ItemDropdown
            v-for="({ id, name, gradient: { to, from } }, i) in gradients"
            :key="id"
            class="text-sm"
            @click="setGradient(i)"
            ><div
              :style="`background-image: linear-gradient(180deg, ${from} , ${to});`"
              class="w-[16px] aspect-square rounded-full"></div>
            {{ name }}</ItemDropdown
          >
        </template>
      </Dropdown>
      <Button color="red">Export <Icon name="download" /></Button>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'DefaultLayout',
  computed: {
    ...mapState('theme', ['gradients', 'selectedGradient']),
  },
  methods: {
    ...mapMutations('theme', ['setGradient']),
  },
};
</script>

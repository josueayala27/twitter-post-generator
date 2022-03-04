<template>
  <div class="bg-[#131313]">
    <div
      class="fixed top-[100px] gap-x-3 flex mx-auto bg-white p-6 left-[50%] text-white translate-x-[-50%] rounded-lg">
      <Dropdown>
        <Button color="gray"
          ><div
            :style="`background-image: linear-gradient(180deg, ${background.from} , ${background.to});`"
            class="w-[16px] aspect-square rounded-full"></div>
          Colors</Button
        >
        <template #items>
          <ItemDropdown
            v-for="({ id, name, gradient: { to, from } }, i) in gradients"
            :key="id"
            class="text-sm"
            @click="setGradient(i)">
            <div
              :style="`background-image: linear-gradient(180deg, ${from} , ${to});`"
              class="w-[16px] aspect-square rounded-full"></div>
            {{ name }}
          </ItemDropdown>
        </template>
      </Dropdown>
      <Button color="red" @click="render('twitter-post')"
        >Export <Icon name="download"
      /></Button>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import html2canvas from 'html2canvas';

export default {
  name: 'DefaultLayout',
  computed: {
    ...mapState('theme', ['gradients', 'selectedGradient']),
    ...mapGetters('theme', ['background']),
  },
  methods: {
    ...mapMutations('theme', ['setGradient']),
    async render(element) {
      const image = await html2canvas(document.getElementById(element));
      const extra = document.createElement('canvas');
      extra.setAttribute('width', 520 * 2);
      extra.setAttribute('height', 386 * 2);
      const ctx = extra.getContext('2d');
      ctx.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        0,
        0,
        520 * 2,
        386 * 2
      );
      const dataURL = extra.toDataURL();
      console.log(dataURL);
    },
  },
};
</script>

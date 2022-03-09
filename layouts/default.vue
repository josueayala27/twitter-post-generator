<template>
  <div class="bg-[#131313] flex flex-col h-screen overflow-auto">
    <header class="py-[100px]"></header>
    <nav
      class="fixed z-50 top-[100px] gap-x-3 flex mx-auto shadow-xl bg-white p-6 left-[50%] text-white translate-x-[-50%] rounded-lg">
      <Dropdown>
        <Button color="gray"
          ><div
            :style="`background-image: linear-gradient(180deg, ${background.from} , ${background.to});`"
            class="w-[16px] aspect-square rounded-full"></div>
          Gradients</Button
        >
        <template #items>
          <ItemDropdown
            v-for="({ id, name, gradient: { to, from } }, i) in gradients"
            :key="id"
            @click="setGradient(i)">
            <div
              :style="`background-image: linear-gradient(180deg, ${from} , ${to});`"
              class="w-[16px] aspect-square rounded-full"></div>
            {{ name }}
          </ItemDropdown>
        </template>
      </Dropdown>
      <Button color="gray" @click="setTheme(theme)">
        <div class="w-[16px] aspect-square rounded-full">
          {{ theme === 'light' ? '🌚' : '☀️' }}
        </div>
        {{ theme === 'light' ? 'Dark' : 'Light' }} mode</Button
      >
      <Dropdown>
        <Button color="gray">Twitter Web App</Button>
        <template #items>
          <ItemDropdown>Twitter Web App</ItemDropdown>
          <ItemDropdown>Twitter for iPhone</ItemDropdown>
          <ItemDropdown>Twitter for Android</ItemDropdown>
        </template>
      </Dropdown>
      <Button color="red" @click="render('twitter-post')"
        >Export <Icon name="download"
      /></Button>
    </nav>
    <main class="flex-1">
      <Nuxt />
    </main>
    <footer class="py-7"></footer>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import { toSvg } from '@/utils/downloader';

export default {
  name: 'DefaultLayout',
  computed: {
    ...mapState('theme', ['gradients', 'selectedGradient', 'theme']),
    ...mapGetters('theme', ['background']),
  },
  methods: {
    ...mapMutations('theme', ['setGradient', 'setTheme']),
    async render(element) {
      const el = document.getElementById(element);
      const svg = this.$domToSvg.elementToSVG(el);
      await this.$domToSvg.inlineResources(svg.documentElement);
      console.log(new XMLSerializer().serializeToString(svg));
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = el.offsetWidth * 3.5;
        canvas.height = el.offsetHeight * 3.5;

        const context = canvas.getContext('2d');
        context.drawImage(
          image,
          0,
          0,
          el.offsetWidth * 3.5,
          el.offsetHeight * 3.5
        );

        const url = canvas.toDataURL('image/png');
        console.log(url);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Twitter Image.png';
        a.click();
      };
      image.src = toSvg(svg);
    },
  },
};
</script>

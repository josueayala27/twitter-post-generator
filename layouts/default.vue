<template>
  <div class="bg-[#111315] flex">
    <aside class="w-[25rem] bg-[#202427] h-screen p-4">
      <input
        type="text"
        placeholder="Full Name"
        class="w-full bg-[#111315] outline-none px-4 py-2 transition-all duration-300 ring-transparent text-white rounded-2xl ring-2 focus:ring-blue-500" />
    </aside>
    <main class="flex-1">
      <Nuxt />
    </main>
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
    ...mapMutations('theme', ['setGradient', 'setTheme', 'setPreview']),
    async render(element) {
      try {
        const el = document.getElementById(element);
        const svg = this.$domToSvg.elementToSVG(el);
        await this.$domToSvg.inlineResources(svg.documentElement);
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
          const a = document.createElement('a');
          a.href = url;
          a.download = 'Twitter Image.png';
          a.click();
        };
        image.src = toSvg(svg);
      } catch (error) {
        console.error('Sucedio un error!');
      }
    },
  },
};
</script>

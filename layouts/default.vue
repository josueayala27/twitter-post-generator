<template>
  <div class="flex">
    <aside class="w-[25rem] h-screen p-4 border-r gap-y-2 flex flex-col">
      <Input label="Name" />
      <Input v-model="username" label="Username" />
      <TextArea label="Tweet" />
      <div class="flex justify-end">
        <Button>Download</Button>
      </div>
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
    ...mapGetters('generator', ['info']),

    /* Setting values for store generator */
    username: {
      get() {
        return this.info.username;
      },
      set(value) {
        this.setStore(['username', value]);
      },
    },
  },
  methods: {
    ...mapMutations('generator', ['setStore']),
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

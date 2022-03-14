<template>
  <div class="flex">
    <aside class="w-[25rem] h-screen p-4 border-r gap-y-2 flex flex-col">
      <Input v-model="full_name" label="Name" />
      <Input v-model="username" label="Username" />
      <TextArea v-model="tweet" label="Tweet" />
      <div class="flex justify-end">
        <Button @click="render('twitter-post')">Download</Button>
      </div>
    </aside>
    <main class="flex-1">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import { toPng } from '@/utils/downloader';

export default {
  name: 'DefaultLayout',
  computed: {
    ...mapState('theme', ['gradients', 'selectedGradient', 'theme']),
    ...mapGetters('theme', ['background']),
    ...mapGetters('generator', ['info']),

    /* Setting values for store generator */
    full_name: {
      get() {
        return this.info.full_name;
      },
      set(value) {
        this.setStore(['fullName', value]);
      },
    },

    username: {
      get() {
        return this.info.username;
      },
      set(value) {
        this.setStore(['username', value]);
      },
    },

    tweet: {
      get() {
        return this.info.tweet;
      },
      set(value) {
        this.setStore(['tweet', value]);
      },
    },
  },
  methods: {
    ...mapMutations('generator', ['setStore']),
    ...mapMutations('theme', ['setGradient', 'setTheme', 'setPreview']),
    render(element) {
      const el = document.getElementById(element);
      const svg = this.$domToSvg.elementToSVG(el);
      toPng(el, svg);
    },
  },
};
</script>

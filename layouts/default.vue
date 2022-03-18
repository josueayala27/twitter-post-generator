<template>
  <div class="flex bg-gradient-to-r">
    <aside class="w-[25rem] h-screen p-4">
      <div class="gap-y-4 flex flex-col shadow-lg p-6">
        <Input v-model="full_name" label="Name" />
        <Input v-model="username" label="Username" />
        <TextArea v-model="tweet" label="Tweet" />

        <div class="flex flex-col gap-y-2">
          <span class="text-sm">Theme</span>
          <div class="flex gap-x-2">
            <Dropdown>
              <Button color="gray">
                <span
                  class="h-[1rem] aspect-square rounded-full"
                  :style="`background-image: linear-gradient(${background.from}, ${background.to});`"></span>
                Gradients</Button
              >
              <template #items>
                <ItemDropdown
                  v-for="({ id, gradient, name }, index) in gradients"
                  :key="id"
                  @click="setGradient(index)">
                  <span
                    class="h-[1rem] aspect-square rounded-full"
                    :style="`background-image: linear-gradient(${gradient.from}, ${gradient.to});`"></span>
                  {{ name }}
                </ItemDropdown>
              </template>
            </Dropdown>
            <Button color="gray" @click="setTheme(theme)">
              {{ theme === 'light' ? '🌚 Dark' : '☀️ Light' }} mode
            </Button>
          </div>
        </div>

        <div class="flex justify-end">
          <Button @click="render('twitter-post')">Download</Button>
        </div>
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

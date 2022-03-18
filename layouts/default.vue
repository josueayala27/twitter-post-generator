<template>
  <div class="flex container mx-auto">
    <aside class="h-screen p-4 grid place-items-center">
      <div class="gap-y-4 flex flex-col shadow-lg p-6 w-[25rem]">
        <!-- Header section -->
        <input
          ref="profile-image"
          type="file"
          class="hidden"
          @change="uploadImage" />
        <div class="flex justify-center">
          <div
            class="rounded-full overflow-hidden grid place-items-center group h-[7rem] cursor-pointer aspect-square relative bg-gray-200">
            <div
              class="w-full z-[1] cursor-pointer absolute h-full group-hover:bg-black/50 group-hover:opacity-100 opacity-0 text-white flex items-center justify-center inset-0"
              @click="$refs['profile-image'].click()">
              <Icon name="pencil" />
            </div>
            <img
              v-if="info.image"
              class="w-full h-full object-cover"
              :src="info.image"
              alt="Twitter Image" />
            <Icon v-else name="upload" class="group-hover:hidden" />
          </div>
        </div>

        <!-- Body section -->
        <Input v-model="full_name" label="Name" />
        <Input v-model="username" label="Username" />
        <TextArea v-model="tweet" label="Tweet" />
        <Input v-model="likes" type="number" label="Likes" />

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
                  :selected="index === selectedGradient"
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

        <div class="flex flex-col gap-y-2">
          <!-- <span class="text-sm">Background</span> -->
        </div>

        <!-- Footer section -->
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
import { cropper } from '@/utils/image';

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

    likes: {
      get() {
        return this.info.likes;
      },
      set(value) {
        this.setStore(['likes', value]);
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

    /**
     * Upload image
     */
    uploadImage(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async ({ target }) => {
        const src = await cropper(
          document.getElementById('content'),
          target.result,
          144
        );
        this.setStore(['image', src]);
      };
    },
  },
};
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <div
      id="twitter-post"
      :class="[theme]"
      :style="`background-image: linear-gradient(130deg, ${background.from} , ${background.to});`"
      class="transition-all duration-300 flex items-center justify-center p-[64px]">
      <TwitterPost />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'IndexPage',
  computed: {
    ...mapState('theme', ['theme']),
    ...mapGetters('theme', ['background']),
  },
};
</script>

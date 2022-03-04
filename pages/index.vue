<template>
  <div class="h-screen flex items-center justify-center">
    <div
      id="twitter-post"
      :style="`background-image: linear-gradient(120deg, ${background.from} , ${background.to});`"
      class="w-[520px] h-[386px] transition-all duration-300 flex items-center justify-center p-[64px]">
      <TwitterPost />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters('theme', ['background']),
  },
};
</script>

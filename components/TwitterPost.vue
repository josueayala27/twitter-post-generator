<template>
  <section id="tweet-container" class="tweet-container border py-3 px-4">
    <div class="header flex justify-between">
      <div class="flex items-center">
        <Avatar />
        <div class="ml-2">
          <p class="text-gray-700 font-bold">{{ data.name }}</p>
          <p class="text-gray-500 font-normal">@{{ data.username }}</p>
        </div>
      </div>
      <div></div>
    </div>
    <div class="body mt-2">
      <h1 class="text-xl">{{ data.tweet }}</h1>
      <div class="time mt-3">
        <p class="text-gray-500 font-normal">{{ data.date }}</p>
      </div>
    </div>
    <div class="footer border-t mt-3 pt-3 flex justify-around">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
</template>

<script>
import Avatar from '@/components/Avatar'

export default {
  name: 'TwitterPost',
  components: {
    Avatar,
  },
  props: {
    title: { type: String, default: null },
    data: { type: [Object, Array], default: null },
  },
}
</script>

<style>
.tweet-container {
  width: 480px;
}
</style>

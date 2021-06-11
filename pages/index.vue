<template>
  <div class="grid grid-cols-2">
    <div class="h-screen overflow-auto p-10 flex items-center">
      <section class="w-full space-y-4">
        <Input v-model.trim="data.name" label="Name" block />
        <Input
          v-model.trim="data.username"
          label="Username (Twitter handle)"
          block
        />
        <Input v-model.trim="data.tweet" label="Tweet content" block />
      </section>
    </div>
    <div class="h-screen w-full flex items-center justify-center">
      <TwitterPost :data="data" title="Twitter component" />
    </div>
  </div>
</template>

<script>
import TwitterPost from '@/components/TwitterPost'
import Input from '@/components/Input'

export default {
  name: 'Index',
  components: {
    TwitterPost,
    Input,
  },
  data() {
    return {
      data: {
        name: '',
        username: '',
        tweet: '',
        time: '',
      },
    }
  },
}
</script>

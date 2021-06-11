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
      <button @click="downloadFile()">Download</button>
    </div>
  </div>
</template>

<script>
import TwitterPost from '@/components/TwitterPost'
import Input from '@/components/Input'
import dayjs from 'dayjs'
import html2canvas from 'html2canvas'
import { base64Downloader } from '@/utils/index'

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
        date: '',
      },
      img: '',
    }
  },
  mounted() {
    this.getDate()
  },
  methods: {
    /**
     * Get the current date and time using the required librarian dayjs 😋
     */
    getDate() {
      /**
       * The current time is obtained with an AM/PM format, example: 11:30 pm 🎈
       * Current date assignment, with a format similar to: Jan 1, 2021 📅
       * For more information on format visit the documentation of dayjs: https://day.js.org/docs/en/display/format#docsNav
       */
      this.data.date = dayjs().format('h:m A · MMM DD, YYYY')
      setInterval(() => {
        this.data.date = dayjs().format('h:m A · MMM DD, YYYY')
      }, 60 * 1000)
    },

    async downloadFile() {
      const image = await html2canvas(
        document.querySelector('#tweet-container')
      )
      base64Downloader(image.toDataURL(), 'Test filename')
    },
  },
}
</script>

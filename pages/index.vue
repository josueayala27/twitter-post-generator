<template>
  <div class="h-screen flex items-center justify-center">
    <div
      class="w-[520px] h-[386px] flex items-center justify-center bg-gradient-to-b from-[#A68FFB] to-[#E6BDF7] p-[64px]"
    >
      <TwitterPost :data="data" title="Twitter component" />
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'IndexPage',
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
  },
}
</script>

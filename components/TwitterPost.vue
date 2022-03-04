<template>
  <section
    class="p-5 bg-white shadow-xl rounded-2xl transition-all duration-300 w-full gap-y-4 flex flex-col">
    <div class="header flex justify-between">
      <div class="flex items-center">
        <Avatar />
        <div class="ml-4">
          <p class="text-gray-700 font-bold flex gap-x-2 group">
            Josué Ayala
            <Icon
              class="cursor-pointer invisible group-hover:visible"
              name="pencil" />
          </p>
          <p class="text-gray-500 font-normal">@joscode</p>
        </div>
      </div>
      <div><Icon class="text-[#49b6f5]" name="twitter" /></div>
    </div>
    <div class="gap-y-4 flex flex-col">
      <h1 class="text-xl">Cada día sabemos más y entendemos menos 🤔</h1>
      <div class="flex text-sm gap-x-2">
        <p class="text-gray-500 font-normal">
          {{ data.date }} ·
          <span class="underline text-[#49b6f5]">Twitter Web App</span>
        </p>
      </div>
    </div>
    <div class="border-t flex pt-[1rem]">
      <div class="flex gap-2 items-center"><Icon name="heart" /> 11</div>
    </div>
  </section>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'TwitterPost',
  data() {
    return {
      data: {
        date: null,
      },
    };
  },
  mounted() {
    this.getDate();
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
      this.data.date = dayjs().format('hh:mm A · MMM DD, YYYY');
    },
  },
};
</script>

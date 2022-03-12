<template>
  <section
    class="p-5 max-w-[450px] bg-white shadow-xl dark:bg-[#000000] rounded-2xl transition-all duration-300 w-full gap-y-4 flex flex-col">
    <div class="header flex justify-between">
      <div class="flex items-center">
        <input
          ref="input-photo"
          class="hidden"
          type="file"
          @change="uploadPhoto" />
        <div>
          <Avatar
            :editable="true"
            :src="post.user.image"
            @edit="$refs['input-photo'].click()" />
        </div>
        <div class="ml-4 leading-5">
          <p
            v-tooltip="{ content: 'Edit name' }"
            class="text-gray-700 inline-flex font-bold gap-x-2 group dark:text-white cursor-pointer transition-all duration-300">
            {{ post.user.full_name }}
          </p>
          <div
            v-tooltip="{ content: 'Edit username' }"
            class="text-gray-500 font-normal dark:text-[#8B8D91] flex">
            @
            <div
              class="outline-none inline-flex cursor-pointer transition-all duration-300">
              {{ post.user.username }}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Icon class="text-[#49b6f5] dark:text-[#64BFF1]" name="twitter" />
      </div>
    </div>
    <div class="gap-y-4 flex flex-col">
      <div
        v-tooltip="{ content: 'Edit tweet' }"
        class="text-xl dark:text-white focus:border transition-all duration-300 cursor-pointer inline-flex">
        {{ post.tweet }}
      </div>
      <div class="flex text-sm gap-x-2">
        <p class="text-gray-500 font-normal dark:text-[#8B8D91]">
          {{ post.date }} ·
          <span class="underline text-[#49b6f5] dark:text-[#64BFF1]"
            >Twitter Web App</span
          >
        </p>
      </div>
    </div>
    <canvas id="content" class="hidden" width="144" height="144"></canvas>
    <div
      class="border-t flex pt-[1rem] dark:border-[#3a3a3a] transition-all duration-300">
      <div
        v-tooltip="{ content: 'Edit likes' }"
        class="flex dark:text-[#8B8D91] gap-2 items-center cursor-pointer">
        <Icon name="heart" />
        <span>11</span>
      </div>
    </div>
  </section>
</template>

<script>
import dayjs from 'dayjs';
import { mapState } from 'vuex';
import { cropper } from '@/utils/image';

export default {
  name: 'TwitterPost',
  data() {
    return {
      post: {
        user: {
          full_name: 'Name',
          username: 'username',
          image:
            'https://images.unsplash.com/photo-1646417783534-a769e3e30baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
        },
        date: '',
        tweet: 'Your tweet here!',
        twitter: 'Twitter Web App',
        likes: 11,
      },
    };
  },
  computed: {
    ...mapState('theme', ['editMode']),
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
      this.post.date = dayjs().format('hh:mm A · MMM DD, YYYY');
    },
    uploadPhoto(evt) {
      const file = evt.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async ({ target }) => {
        const src = await cropper(
          document.getElementById('content'),
          target.result,
          144
        );
        this.post.user.image = src;
      };
    },
  },
};
</script>

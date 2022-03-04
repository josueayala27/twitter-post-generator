<template>
  <div class="bg-[#131313]">
    <div
      class="fixed top-[100px] mx-auto bg-[#191919] p-6 left-[50%] text-white translate-x-[-50%] rounded-lg border-white border"
    >
      Este es mi container
      <Dropdown></Dropdown>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

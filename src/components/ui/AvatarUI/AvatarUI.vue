<template>
  <div class="avatar-post" v-if="post">
    <p>R</p>
    <div class="avatar-post-online" v-if="online"></div>
  </div>

  <div class="avatar" v-else>
    <p>JD</p>
  </div>
</template>

<script>
export default {
  name: "AvatarUI",

  props: {
    post: {
      type: Boolean,
      default: false,
    },
    online: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style src="./AvatarUI.css" scoped>
</style>
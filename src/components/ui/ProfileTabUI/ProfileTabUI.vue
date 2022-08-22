<template>
  <div :class="['profile-tab', {
    'profile-tab--white': whiteTheme
  }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ProfileTabUI",

  props: {
    img: {
      type: String,
    },
    whiteTheme: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style lang="scss">
@import "./ProfileTabUI.scss";
</style>
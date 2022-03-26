<template>
  <button class="notification-button" :class="{wrapperWhite: white, mobileWrapper: mobile}">
      <div class="notification-button-circle" v-if="active"></div>
      <img src="@/assets/img/notification.svg" alt="notification" v-if="!white">
      <img src="@/assets/img/notificationWhite.svg" alt="notification" v-if="white">
  </button>
</template>

<script>
export default {
    name: "NotificationUI",

    props: {
        active: {
            type: Boolean,
            default: false
        },
        white: {
            type: Boolean,
            default: false
        },
        mobile: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style src="./NotificationUI.css" scoped>

</style>
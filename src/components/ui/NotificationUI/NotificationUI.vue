<template>
  <button class="notification-button">
      <div class="notification-button-circle" v-if="active"></div>
      <img src="@/assets/img/notification.svg" alt="notification">
      <!-- <img src="@/assets/img/notificationWhite.svg" alt="notification"> -->
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
    }
}
</script>

<style src="./NotificationUI.css" scoped>

</style>
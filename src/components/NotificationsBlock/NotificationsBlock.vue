<template>
  <div class="notification">
    <p class="notification-name">Уведомления</p>
    <NotificationUI />
    <input 
        type="text" 
        class="notification-tag"
        value="<NotificationUI></NotificationUI>"
        disabled
    />
  </div>

  <div class="notification">
    <p class="notification-name">Уведомления есть</p>
    <NotificationUI active/>
    <input 
        type="text" 
        class="notification-tag"
        value="<NotificationUI active></NotificationUI>"
        disabled
    />
  </div>
</template>

<script>
export default {

}
</script>

<style src="./NotificationsBlock.css" scoped>

</style>
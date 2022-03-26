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

  <div class="notification">
    <p class="notification-name">Уведомления white</p>
    <NotificationUI white/>
    <input 
        type="text" 
        class="notification-tag"
        value="<NotificationUI white></NotificationUI>"
        disabled
    />
  </div>

  <div class="notification">
    <p class="notification-name">Уведомления mobile</p>
    <NotificationUI mobile/>
    <input 
        type="text" 
        class="notification-tag"
        value="<NotificationUI mobile></NotificationUI>"
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
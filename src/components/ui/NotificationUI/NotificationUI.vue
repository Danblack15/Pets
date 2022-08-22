<template>
	<button :class="['notification-button', {
		'notification-button--white': whiteTheme
	}]">
		<div class="notification-button-circle" v-if="active"></div>
		<img src="@/assets/img/notification.svg" alt="notification" v-if="!whiteTheme">
		<img src="@/assets/img/notificationWhite.svg" alt="notification" v-else>
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

		whiteTheme: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style src="./NotificationUI.css" scoped>
</style>
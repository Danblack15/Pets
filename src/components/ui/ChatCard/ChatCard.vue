<template>
	<div 
		v-if="chatItem"
		:class="['chat-card', {
			'chat-card--active': chatItem.id == activeChat,
			'chat-card--white': whiteTheme
		}]"
	>
		<div class="chat-card__preview">
			<AvatarUI post :img="chatItem.preview"/>
		</div>

		<div class="chat-card__general">
			<div class="chat-card__info">
				<h4 class="chat-card__name">{{ chatItem.name }}</h4>
				<p class="chat-card__time">{{ chatItem.chat[chatItem.chat.length - 1].time }}</p>
			</div>
			<div class="chat-card__text">
				<p>{{ chatItem.chat[chatItem.chat.length - 1].text }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	props: {
		chatItem: {
			type: Object,
			default: null
		},
		
		activeChat: {
			type: String,
		}
	},

	computed: {
		...mapGetters({
			whiteTheme: "data/getWhiteTheme"
		})
	},

	name: "ChatCard"
}
</script>

<style lang="scss">
@import "./ChatCard.scss";
</style>
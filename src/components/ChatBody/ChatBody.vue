<template>
	<section :class="['chat-body', {
		'chat-body--white': whiteTheme
	}]">
		<div 
			v-for="message in chat"
			:key="message.text"
			:class="['chat-body__item', {
				'chat-body__item--opponent': message.type == 'opponent'
			}]"
		>
			<p class="chat-body__text">{{ message.text }}</p>
			<span class="chat-body__time">{{ message.time }}</span>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		chat: {
			type: Array,
			default: []
		},
		whiteTheme: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss">
@import "./ChatBody.scss";
</style>
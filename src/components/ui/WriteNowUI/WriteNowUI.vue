<template>
	<section :class="['write-now', {
		'write-now--white': whiteTheme
	}]">
		<div class="write-now__friends">
			<AvatarUI post class="write-now__avatar" />
			<AvatarUI post class="write-now__avatar" />
			<AvatarUI post class="write-now__avatar" />
			<AvatarUI post class="write-now__avatar" />
			<AvatarUI post class="write-now__avatar" />
			<AvatarUI post class="write-now__avatar" />
			<div class="write-now__add">+</div>
		</div>
		<ButtonUI wide class="write-now-button">Напиши сейчас</ButtonUI>
	</section>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: "WriteNowUI",

	computed: {
		...mapGetters({
			whiteTheme: "data/getWhiteTheme"
		}),

		windowWidth() {
			return document.documentElement.clientWidth
		}
	}
}
</script>

<style src="./WriteNowUI.css" scoped>
</style>
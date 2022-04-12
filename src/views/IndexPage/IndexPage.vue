<template>
	<LaunchScreen v-if="!startScreenVisib"/>
  <StartScreen v-if="startScreenVisib"/>
</template>

<script>
import StartScreen from "@/components/StartScreen/StartScreen";
import LaunchScreen from "@/components/LaunchScreen/LaunchScreen";

export default {
  components: {
    StartScreen,
    LaunchScreen,
  },

	data(){
		return {
			startScreenVisible: false
		}
	},

	mounted() {
		setTimeout(function() {
				this.launchScreen()
		}.bind(this), 2000)
	},

	methods: {
		launchScreen() {
			this.startScreenVisible = true
		}
	},

	computed: {
		startScreenVisib() {
			return this.startScreenVisible
		}
	}
};
</script>

<style src="./IndexPage.css" scoped>
</style>
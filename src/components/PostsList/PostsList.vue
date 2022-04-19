<template>
  <section class="home__posts" v-show="!loading">
		<div class="home__posts__back" v-show="slideInc > 0">
			<ArrowUI left class="home__posts__arrow" @click="backSlideList"/>
		</div>

		<div class="home__posts__line" id="line" :style="`transform: translateX(-${slide}px)`">
			<CardPostUI
				v-for="post in postsData"
				:key="post.id"
				:post="post"
				class="home__posts__post" 
			/>
		</div>

		<div class="home__posts__next" v-show="slideInc < postsData.length - 3">
			<ArrowUI class="home__posts__arrow" @click="slideList"/>
		</div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
	data() {
		return {
			slide: 0,
			slideInc: 0
		}
	},

	mounted() {
		this.postsDataAc()
	},

	methods: {
		...mapActions({
			postsDataAc: "data/postsData"
		}),

		slideList() {
			if (this.slideInc < this.postsData.length - 3){
				this.slide += 450
				this.slideInc++
			}
		},

		backSlideList() {
			if (this.slideInc > 0){
				this.slide -= 450
				this.slideInc--
			}
		}
	},

	computed: {
		...mapGetters({
			postsData: "data/getPostsData",
			loading: "data/getLoadingHome"
		})
	}
};
</script>

<style src="./PostsList.css" scoped>
</style>
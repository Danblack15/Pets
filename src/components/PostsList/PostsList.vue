<template>
	<section class="wrapper">
		<section class="wrapper__posts" v-show="!loading">
			<div class="wrapper__posts__back" v-show="slideInc > 0">
				<ArrowUI left class="wrapper__posts__arrow" @click="backSlideList"/>
			</div>

			<div class="wrapper__posts__line" id="line" :style="`transform: translateX(-${slide}px)`">
				<CardPostUI
					v-for="post in postsData"
					:key="post.id"
					:post="post"
					class="wrapper__posts__post" 
				/>
			</div>

			<div class="wrapper__posts__next" v-show="slideInc < postsData.length - 1">
				<ArrowUI class="wrapper__posts__arrow" @click="slideList"/>
			</div>
		</section>

		<section class="wrapper__media-posts" v-show="!loading">
			<swiper class="wrapper__media-posts__line">
				<swiper-slide 
					v-for="post in postsData"
					:key="post.id" 
					class="wrapper__media-posts__item"
				>
					<CardPostUI
						:post="post"
					/>
				</swiper-slide>
			</swiper>
		</section>
	</section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import SwiperCore, {Navigation, Parallax} from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"

import 'swiper/css';

export default {
	components: {
		Swiper,
		SwiperSlide
	},
	
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
			if (this.slideInc < this.postsData.length - 1){
				let el = document.querySelector('.wrapper__posts__post'),
					cardWidth = Number(el.clientWidth),
					mr = getComputedStyle(el).marginRight
					mr = Number(mr.substring(0, mr.length - 2))

				this.slide += cardWidth + mr
				this.slideInc++
			}
		},

		backSlideList() {
			if (this.slideInc > 0){
				let el = document.querySelector('.wrapper__posts__post'),
					cardWidth = Number(el.clientWidth),
					mr = getComputedStyle(el).marginRight
					mr = Number(mr.substring(0, mr.length - 2))

				this.slide -= cardWidth + mr
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
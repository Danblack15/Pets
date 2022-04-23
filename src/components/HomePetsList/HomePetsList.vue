<template>
<section class="wrapper">
  <section class="pets">
      <div class="pets__back" v-show="slideInc > 0">
				<ArrowUI left @click="backSlideList"/>
      </div>

			<section class="pets__line" :style="`transform: translateX(-${slide}px)`">
				<CardPetsUI 
					v-for="pet in pets"
					:key="pet.previewImg"
					:pet="pet"
					class="pets__item"
				/>
			</section>

    	<div class="pets__next" v-show="slideInc < Object.keys(this.pets).length - 1">
				<ArrowUI @click="slideList"/>
      </div>
  </section>

	<section class="wrapper__media-pets">
			<swiper class="wrapper__media-pets__line">
				<swiper-slide 
					v-for="pet in pets"
					:key="pet.previewImg" 
					class="wrapper__media-pets__item"
				>
					<CardPetsUI
						:pet="pet"
						class="pets__item"
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

	async mounted() {
		await this.groupPets(),
		this.allPets()

	},

	methods: {
		...mapActions({
			groupPets: "data/groupPets",
			allPets: "data/allPets",
		}),
		
		slideList() {
			if (this.slideInc < Object.keys(this.pets).length - 1){
				let el = document.querySelector('.pets__item'),
					cardWidth = Number(el.clientWidth),
					mr = getComputedStyle(el).marginRight
					mr = Number(mr.substring(0, mr.length - 2))

				this.slide += cardWidth + mr				
				this.slideInc++
			}
		},

		backSlideList() {
			if (this.slideInc > 0){
				let el = document.querySelector('.pets__item'),
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
			pets: "data/getAllPets"
		})
	}
}
</script>

<style src="./HomePetsList.css" scoped>

</style>
<template>
	<section class="slider">	
		<swiper class="slider__line">
			<swiper-slide class="slider__item">
				<ProgressDayUI />
			</swiper-slide>

			<swiper-slide class="slider__item">
				<DataUI class="slider__data" />
			</swiper-slide>
		</swiper>
	</section>
</template>

<script>
import SwiperCore, {Navigation, Parallax} from "swiper"
import { Swiper, SwiperSlide } from "swiper/vue"

import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Parallax])

export default {
	components: {
		Swiper,
		SwiperSlide
	},

	data() {
		return {
			parallaxSwiperWidth: 0,

		}
	},

};
</script>

<style src="./MediaSlider.css" scoped>
</style>
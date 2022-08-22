<template>
  <div class="pet-slider">
    <swiper 
      class="pet-slider__slider__line"
      :slides-per-view="1"
      :space-between="-300"
      :pagination="{ clickable: true, dynamicBullets: true }"
      navigation
    >
      <swiper-slide 
        v-for="image in images"
        :key="image"
        class="pet-slider__item"
      >
        <img :src="image" alt="pet">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Pagination, Navigation]);

export default {
  components: {
		Swiper,
		SwiperSlide
	},

  props: {
    images: {
      type: Array,
      required: true,
    },
  }
};
</script>

<style src="./PetSlider.css" scoped>

</style>
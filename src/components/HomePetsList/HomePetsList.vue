<template>
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

    	<div class="pets__next" v-show="slideInc < Object.keys(this.pets).length - 2">
				<ArrowUI @click="slideList"/>
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
		
	},

	methods: {
		...mapActions({
			
		}),

		slideList() {
			if (this.slideInc < Object.keys(this.pets).length - 2){
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
			pets: "data/getAllPets"
		})
	}
}
</script>

<style src="./HomePetsList.css" scoped>

</style>
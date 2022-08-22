<template>
  <section :class="['not-found', {
		'not-found--white': whiteTheme
	}]">
    <img
      :src="require(`@/assets/img/${data[getRandom].img}.svg`)"
      alt="not-found"
      class="not-found__img"
    />
    <h2 class="not-found__title">{{ data[getRandom].title }}</h2>
    <p class="not-found__text">{{ data[getRandom].text }}</p>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			data: [
				{
					img: 'notfound',
					title: 'Is That A Dragon ?',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra integer vel quam amet eget. Massa nec nam molestie urna, iaculis sed. Dui tincidunt pharetra sagittis, massa lectus nullam viverra. Commodo sapien ornare cursus vitae aliquam ut diam, facilisis.'
				},
				{
					img: 'notfound1',
					title: 'Ugh I Just Break It !',
					text: 'Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow, Meow '
				},
				{
					img: 'notfound2',
					title: 'This Thing Is Broken',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra integer vel quam amet eget. Massa nec nam molestie urna, iaculis sed. Dui tincidunt pharetra sagittis, massa lectus nullam viverra. Commodo sapien ornare cursus vitae aliquam ut diam, facilisis.'
				},
				{
					img: 'notfound3',
					title: 'Looking Sad Bae ?',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra integer vel quam amet eget. Massa nec nam molestie urna, iaculis sed. Dui tincidunt pharetra sagittis, massa lectus nullam viverra. Commodo sapien ornare cursus vitae aliquam ut diam, facilisis.'
				},
			]
		}
	},

  computed: {
		...mapGetters({
			whiteTheme: "data/getWhiteTheme"
		}),

    getRandom() {
      return Math.floor(Math.random() * 4)
    },
  },
};
</script>

<style src="./NotFound.css" scoped>
</style>
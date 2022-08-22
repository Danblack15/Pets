<template>
	<div :class="['pets-third', {
		'pets-third--white': whiteTheme
	}]">
		<h3 class="pets-third__title">Давайте узнаем больше о вашем питомце</h3>
		<p class="pets-third__subtitle">Ваш питомец...</p>

		<form class="pets-third__form" method="post" @submit.prevent="submitForm">
			<div class="pets-third__categories">
				<div 
					v-for="category in categories"
					:key="category.id"
				>
					<input 
						type="radio" 
						:id="category.name" 
						name="pet"
						class="pets-third__pet-input"
						checked
						@change="seletCategory"
					>
					<label :for="category.name" class="pets-third__pet-label">
						<img 
							:src="require(`@/assets/img/${imgCategory[category.id - 1].img}.svg`)" 
							alt="pet"
							class="pets-third__pet-img"
          	/>
						<div class="pets-third__tranformer"></div>
						<p class="pets-third__pet-name">{{ category.name }}</p>
					</label>
				</div>
			</div>
			<div class="pets-third__general">
				<fieldset class="pets-third__breed">
					<div 
						:class="['pets-third__breed-title', {
							'pets-third__list--error': form.breed == 'Порода',
							'pets-third__list--success': form.breed !== 'Порода',
          	}]"
						@click="openBreedModal"
					>
						<p>{{ form.breed }}</p>
						<img src="@/assets/img/small-arrow.svg" alt="arrow">
						<ul class="pets-third__breed-modal" v-show="breedModal">
							<li @click="breedChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.breed == 'Макрочел'
							}]">Макрочел</li>
							<li @click="breedChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.breed == 'Гигачел'
							}]">Гигачел</li>
							<li @click="breedChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.breed == 'Суперчел'
							}]">Суперчел</li>
							<li @click="breedChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.breed == 'Мегачел'
							}]">Мегачел</li>
							<li @click="breedChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.breed == 'Микрочел'
							}]">Микрочел</li>
							<li @click="breedChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.breed == 'Пепсичел'
							}]">Пепсичел</li>
						</ul>
					</div>

					<div 
						:class="['pets-third__price', {
							'pets-third--error': form.price <= 0,
							'pets-third--success': !form.price <= 0,
          	}]"
						v-if="purpose == 'sell'" 
					>
						<input 
							type="number"
							id="sell"
							name="sell"
							class="pets-third__price-input pets-third__input"
							v-model="form.price"
						/>
						<label 
							for="sell" 
							class="pets-third__price-label pets-third__label" 
							:class="validator(form.price)"
						>Цена</label>
					</div>

				</fieldset>

				<fieldset class="pets-third__second">
					<div 
						:class="['pets-third__date', {
							'pets-third--error': v$.form.date.$invalid && v$.$dirty,
							'pets-third--success': !v$.form.date.$invalid && v$.$dirty,
          	}]"
					>
						<input 
							type="date"
							id="dateBorn"
							name="dateBorn"
							class="pets-third__input"
							v-model="form.date"
						/>
						<label 
							for="dateBorn" 
							class="pets-third__label pets-third__label--valid" 
						>Дата рождения</label>
					</div>
					<div 
						:class="['pets-third__weight', {
							'pets-third--error': v$.form.weight.$invalid && v$.$dirty,
							'pets-third--success': !v$.form.weight.$invalid && v$.$dirty,
          	}]"
					>
						<input 
							type="number"
							id="weight"
							name="weight"
							class="pets-third__input"
							v-model="form.weight"
						/>
						<label 
							for="weight" 
							class="pets-third__label" 
							:class="validator(form.weight)"
						>Вес</label>
					</div>
				</fieldset>

				<fieldset class="pets-third__third">
					<div 
						:class="['pets-third__breed-title', 'pets-third__country', {
							'pets-third__list--error': form.country == 'Страна',
							'pets-third__list--success': form.country !== 'Страна',
          	}]"
						@click="openCountryModal"
					>
						<p>{{ form.country }}</p>
						<img src="@/assets/img/small-arrow.svg" alt="arrow">
						<ul class="pets-third__breed-modal" v-show="countryModal">
							<li @click="countryChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.country == 'Россия'
							}]">Россия</li>
							<li @click="countryChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.country == 'Польша'
							}]">Польша</li>
							<li @click="countryChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.country == 'Беларусь'
							}]">Беларусь</li>
							<li @click="countryChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.country == 'Украина'
							}]">Украина</li>
							<li @click="countryChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.country == 'Узбекистан'
							}]">Узбекистан</li>
							<li @click="countryChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.country == 'Казахстан'
							}]">Казахстан</li>
						</ul>
					</div>

					<div 
						:class="['pets-third__breed-title', 'pets-third__city', {
							'pets-third__list--error': form.city == 'Город',
							'pets-third__list--success': form.city !== 'Город',
          	}]"
						@click="openCityModal"
					>
						<p>{{ form.city }}</p>
						<img src="@/assets/img/small-arrow.svg" alt="arrow">
						<ul class="pets-third__breed-modal" v-show="cityModal">
							<li @click="cityChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.city == 'Москва'
							}]">Москва</li>
							<li @click="cityChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.city == 'Екатеринбург'
							}]">Екатеринбург</li>
							<li @click="cityChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.city == 'Киев'
							}]">Киев</li>
							<li @click="cityChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.country == 'Минск'
							}]">Минск</li>
							<li @click="cityChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.city == 'Ташкент'
							}]">Ташкент</li>
							<li @click="cityChange" :class="['pets-third__breed-label', 
								{'pets-third__breed-label--active': form.city == 'Нур-Султан'
							}]">Нур-Султан</li>
						</ul>
					</div>
				</fieldset>
			</div>
			<ButtonUI 
        class="pets-frist__submit"
        :disabled="v$.$errors.length > 0" 
      >Дальше</ButtonUI>
		</form>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import useVuelidate from "@vuelidate/core"
import { required } from "@vuelidate/validators"

export default {
	setup() {
		return { v$: useVuelidate() }
	},

	props: {
		purpose: {
			type: String,
			default: null
		},
		whiteTheme: {
      type: Boolean,
      default: false
    }
	},

	data() {
		return {
			form: {
				category: 'other',
				breed: 'Порода',
				price: '',
				date: null,
				weight: '',
				country: 'Страна',
				city: 'Город'
			},
			imgCategory: [
          {
            id: 1,
            img: 'dogs'
          },
          {
            id: 2,
            img: 'cats'
          },
          { 
            id: 3,
            img: 'birds'
          },
          { 
            id: 4,
            img: 'rabbits'
          },
          {
            id: 5,
            img: 'mice'
          },
          {
            id: 6,
            img: 'other'
          }
        ],
				breedModal: false,
				countryModal: false,
				cityModal: false
		}
	},

	mounted() {
		this.getCategories()
	},

	validations() {
		return {
			form: {
				category: { required, $lazy: true },
				breed: { required, $lazy: true },
				price: { $lazy: true },
				date: { required, $lazy: true },
				weight: { required, $lazy: true },
				country: { required, $lazy: true },
				city: { required, $lazy: true },
			},
		}
	},

	methods: {
		...mapActions({
			getCategories: "data/groupPets"
		}),

		async submitForm() {
			const isFormCorrect = await this.v$.$validate()

			if (isFormCorrect && this.validLists()) {
				this.$emit('third', this.form)
			} else {
				this.disabled = true
			}
		},

		validLists() {
			if (this.form.breed !== 'Порода' &&
					this.form.country !== 'Страна' &&
					this.form.city !== 'Город') {
				if (this.purpose == 'sell') {
					if (this.form.price > 0)
						return true
					else
						return false
				} else
					return true
			} else
				return false
		},

		seletCategory(e) {
			this.form.category = e.target.id
		},

		breedChange(e) {
			this.form.breed = e.target.textContent
		},

		countryChange(e) {
			this.form.country = e.target.textContent
		},

		cityChange(e) {
			this.form.city = e.target.textContent
		},

		openBreedModal() {
			this.breedModal = !this.breedModal
		},

		openCountryModal() {
			this.countryModal = !this.countryModal
		},

		openCityModal() {
			this.cityModal = !this.cityModal
		},

		validator(e) {
			if (e.length > 0 || e > 0) {
				return "pets-third__label--valid"
			} else {
				return ""
			}
		},
	},

	computed: {
		...mapGetters({
			categories: "data/getGroupPets"
		}),
	}
}
</script>

<style lang="scss">
@import "./YourPetsThird.scss";
</style>
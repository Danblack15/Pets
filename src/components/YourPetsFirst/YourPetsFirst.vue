<template>
	<div :class="['pets-frist', {
		'pets-frist--white': whiteTheme
	}]">
		<h3 class="pets-frist__title">Давайте узнаем немного о вашем питомце?</h3>

		<form action="first-pets" class="pets-frist__form" method="post" @submit.prevent="submitForm">
			<div class="pets-frist__general">
				<fieldset 
					:class="['pets-frist__general-wrapper', {
            'pets-frist__general-wrapper--error': v$.form.namePet.$invalid && v$.$dirty,
            'pets-frist__general-wrapper--success': !v$.form.namePet.$invalid && v$.$dirty,
          }]"
				>
					<input 
						type="text" 
						id="namePet" 
						name="namePet" 
						class="pets-frist__input" 
						v-model.trim="form.namePet"
					>
					<label 
						for="namePet" 
						class="pets-frist__label" 
						:class="validator(form.namePet)"
					>Имя питомца</label>
					<span class="form-hint" v-if="v$.form.namePet.$error">Заполните имя питомца</span>
				</fieldset>

				<fieldset>
					<div class="pets-frist__sex">
						<input 
							type="radio" 
							id="man" 
							name="sex" 
							class="pets-frist__sex-input" 
							value="man"
							checked
							v-model="form.sex"
						>
						<label for="man" class="pets-frist__sex-label">
							<img src="@/assets/img/man.svg" alt="man">
						</label>
						<input 
							type="radio" 
							id="woman" 
							name="sex" 
							value="woman"
							class="pets-frist__sex-input pets-frist__sex-input--woman"
							v-model="form.sex"
						>
						<label for="woman" class="pets-frist__sex-label">
							<img src="@/assets/img/woman.svg" alt="woman">
						</label>
						<span class="pets-frist__sex-circle"></span>
					</div>
				</fieldset>
			</div>

			<fieldset class="pets-frist__desk"
				:class="['pets-frist__general-wrapper', {
            'pets-frist__general-wrapper--error': v$.form.desk.$invalid && v$.$dirty,
            'pets-frist__general-wrapper--success': !v$.form.desk.$invalid && v$.$dirty,
        }]"
			>
				<textarea 
					type="text" 
					id="desk" 
					name="desk" 
					class="pets-frist__input pets-frist__input-textarea" 
					v-model.trim="form.desk"
				></textarea>
				<label 
					for="desk" 
					class="pets-frist__label pets-frist__label-textarea" 
					:class="validator(form.desk)"
				>Опишите вашего питомца</label>
				<span class="form-hint" v-if="v$.form.desk.$error">Заполните описание питомца</span>
			</fieldset>

			<fieldset class="pets-frist__purpose">
				<h4 class="pets-frist__purpose-title">С какой целью выкладываете питомца?</h4>
				<div class="pets-frist__purpose-btns">
					<input 
						type="radio" 
						id="show" 
						name="purpose" 
						class="pets-frist__purpose-input" 
						checked
						value="show"
						v-model="form.purpose"
					>
					<label for="show" class="pets-frist__purpose-label">
						<span class="pets-frist__purpose-circle">
							<span></span>
						</span>
						<p>Просто показываю</p>
					</label>

					<input 
						type="radio" 
						id="give" 
						name="purpose" 
						class="pets-frist__purpose-input"
						value="give"
						v-model="form.purpose"
					>
					<label for="give" class="pets-frist__purpose-label">
						<span class="pets-frist__purpose-circle">
							<span></span>
						</span>
						<p>Отдаю в добрые руки</p>
					</label>

					<input 
						type="radio" 
						id="sell" 
						name="purpose" 
						class="pets-frist__purpose-input"
						value="sell"
						v-model="form.purpose"
					>
					<label for="sell" class="pets-frist__purpose-label">
						<span class="pets-frist__purpose-circle">
							<span></span>
						</span>
						<p>Торгую микрочелами</p>
					</label>
				</div>
			</fieldset>

			<ButtonUI 
        class="pets-frist__submit"
        :disabled="v$.$errors.length > 0" 
        :to="'/home'"
      >Дальше</ButtonUI>
		</form>
	</div>
</template>

<script>
import useVuelidate from "@vuelidate/core"
import { required } from "@vuelidate/validators"

export default {
	setup() {
		return { v$: useVuelidate() }
	},

	props: {
    whiteTheme: {
      type: Boolean,
      default: false
    }
  },

	data() {
		return {
			form: {
				namePet: "",
				sex: "man",
				desk: "",
				purpose: "show"
			},
			disabled: false,
		}
	},

	validations() {
		return {
			form: {
				namePet: { required, $lazy: true },
				sex: { required, $lazy: true },
				desk: { required, $lazy: true },
				purpose: { required, $lazy: true },
			},
		}
	},

	methods: {
		async submitForm() {
			const isFormCorrect = await this.v$.$validate()

			if (isFormCorrect) {
				this.$emit('first', this.form)
			} else {
				this.disabled = true
			}
		},

		validator(e) {
			if (e.length > 0) {
				return "pets-frist__label--valid"
			} else {
				return ""
			}
		},
	}
}
</script>

<style lang="scss">
@import "./YourPetsFirst.scss";
</style>
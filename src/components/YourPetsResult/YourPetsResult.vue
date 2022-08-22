<template>
	<div :class="['pets-result', {
		'pets-result--white': whiteTheme
	}]">
		<div class="pets-result__general">
			<img 
				src="@/assets/img/success-pets.svg" 
				alt="success"
				class="pets-result__img"
				v-if="form.first && form.images && form.third"
			>
			<img 
				src="@/assets/img/error-pets.svg" 
				alt="success"
				class="pets-result__img"
				v-else
			>

			<h3 
				class="pets-result__text" 
				v-if="form.first && form.images && form.third"
			>Вы успешно добавили питомца</h3>
			<h3 class="pets-result__text" v-else>Что-то пошло не по плану</h3>

			<ButtonUI 
				class="pets-result__btn"
				:link="true"
				:to="'/home'"
    	>Завершить</ButtonUI>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		form: {
			type: Object,
			default: {
				first: null,
				images: null,
				third: null
			}
		},
		whiteTheme: {
      type: Boolean,
      default: false
    }
	}
}
</script>

<style lang="scss">
@import "./YourPetsResult.scss";
</style>
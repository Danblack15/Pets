<template>
  <section class="register">
    <img 
			src="@/assets/img/backRegister.png" 
			alt="back" 
			class="register__img" 
		/>
    <div class="register__block">
      <LogoUI medium />
      <h3 class="register__block__name">Регистрация</h3>
      <h4 class="register__block__dop-info">
        Зарегистрируйтесь сейчас бесплатно и добавьте своего питомца
      </h4>

      <FormUI register class="register__block__form" />

			<div class="register__block__bottom">
				<p class="register__block__quest">Уже есть аккаунт?</p>
				<router-link 
					to="/login" 
					class="register__block__link"
				>Войти</router-link>
			</div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style src="./RegisterPage.css" scoped>
</style>
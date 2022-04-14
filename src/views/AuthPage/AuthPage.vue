<template>
  <section class="auth">
    <img 
			src="@/assets/img/backRegister.png" 
			alt="back" 
			class="auth__img" 
		/>
    <div class="auth__block">
      <LogoUI medium />

      <h3 class="auth__block__name">Вход</h3>
      <h4 class="auth__block__dop-info">
        Войдите в систему сейчас, чтобы получить доступ к вашим питомцам
      </h4>

      <FormUI class="auth__block__form" />

		<div class="auth__block__bottom">
			<p class="auth__block__quest">У вас ещё нет аккаунта?</p>
			<router-link 
				to="/register" 
				class="auth__block__link"
			>Зарегистрироваться</router-link>
		</div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style src="./AuthPage.css" scoped>

</style>
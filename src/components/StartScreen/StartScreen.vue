<template>
  <section class="start-screen">
      <div class="start-screen__info">
        <LogoUI large />
        <h3 class="start-screen__info__name">Pets</h3>
        <p class="start-screen__info__dop-info">Лапки. Ушки. Хвостик и доза любви</p>
      </div>
      <div class="start-screen__navigate">
        <ButtonUI 
          link
          :href="'/login'"
        >
          Войти
        </ButtonUI>

        <p class="start-screen__navigate__quest">У вас ещё нет аккаунта?</p>
        <router-link 
          to="/register"
          class="start-screen__navigate__link"
        >
          Зарегистрироваться
        </router-link>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style src="./StartScreen.css" scoped>

</style>
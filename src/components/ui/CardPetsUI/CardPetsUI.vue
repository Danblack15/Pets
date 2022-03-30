<template>
  <section class="card-pets">
      <div class="card-pets__img">
          <img src="@/assets/img/cardPets.png" alt="pet">
      </div>
      <div class="card-pets__info">
          <div class="card-pets__info__name">
              <h3 class="card-pets__info-name">Bob</h3>
              <p class="card-pets__info-category">Котенок</p>
          </div>
          <div class="card-pets__info__likes">
            <p class="card-pets__likes">326 лайка</p>
            <img src="@/assets/img/heart.svg" alt="heart">
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name: "CardPetsUI"
}
</script>

<style src="./CardPetsUI.css" scoped>

</style>
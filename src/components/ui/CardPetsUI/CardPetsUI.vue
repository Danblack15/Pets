<template>
  <section class="card-pets" v-if="groupPets.length">
      <div class="card-pets__img">
          <img :src="pet.previewImg" alt="pet">
      </div>
      <div class="card-pets__info">
          <div class="card-pets__info__name">
              <h3 class="card-pets__info-name">{{ pet.name }}</h3>
              <p class="card-pets__info-category">{{ selectGroup }}</p>
          </div>
          <div class="card-pets__info__likes">
            <p class="card-pets__likes">{{ pet.likes }} лайка</p>
            <img src="@/assets/img/heart.svg" alt="heart">
          </div>
      </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "CardPetsUI",

    props: {
        pet: {
            type: Object,
            required: true
        }
    },

    computed: {
        ...mapGetters({
            groupPets: "data/getGroupPets"
        }),

        selectGroup() {
            let obj = this.groupPets.filter((p) => p.id == this.pet.groupID)

            return obj[0].name
        }
    }
}
</script>

<style src="./CardPetsUI.css" scoped>

</style>
<template>
  <section class="detail-pet">
    <div v-if="Object.keys(filterPets).length" class="detail-pet__wrapper">
      <PetSlider class="detail-pet__slider" :images="filterPets[0][1].images"/>

      <PetDetailInfo class="detail-pet__info" :pet="filterPets[0][1]"/>
    </div>

    <div v-else>
      <p>Такого питомца нет!</p>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PetSlider from "@/components/PetSlider/PetSlider"
import PetDetailInfo from "@/components/PetDetailInfo/PetDetailInfo"

export default {
  components: {
    PetSlider,
    PetDetailInfo
  },

  data() {
    return {
      keyPet: this.$route.params.category
    }
  },

  computed: {
    ...mapGetters({
      allPets: "data/getAllPets"
    }),
    filterPets() {
      return Object.entries(this.allPets).filter((e) => e[1].name == this.keyPet)
    }
  }
}
</script>

<style src="./DetailPage.css" scoped>

</style>
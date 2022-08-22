<template>
  <section class="pets">
    <CategoryList class="pets__category" @categoryArr="pushCategoryArr" />
    <PetsList class="pets__list" :allPets="sortedPets" />
    <router-view></router-view>
  </section>

  <section class="loading" v-if="loading">
    <div class="loading__animate-wrapper">
      <img
        src="@/assets/img/leganimate.svg"
        alt="leg"
        class="loading__img loading__img-left"
      />
      <img
        src="@/assets/img/leganimate.svg"
        alt="leg"
        class="loading__img loading__img-right"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import CategoryList from "@/components/CategoryList/CategoryList";
import PetsList from "@/components/PetsList/PetsList";

export default {
  components: {
    CategoryList,
    PetsList,
  },

  data() {
    return {
      categoryArr: [],
    };
  },

  methods: {
    pushCategoryArr(e) {
      if (this.categoryArr.includes(e)) {
        this.categoryArr = this.categoryArr.filter((c) => c !== e);
      } else {
        this.categoryArr.push(e);
      }
    },
  },

  computed: {
    ...mapGetters({
      loading: "data/getLoadingHome",
      allPets: "data/getAllPets",
    }),

    sortedPets() {
      if (this.categoryArr.length == 0) {
        return Object.entries(this.allPets);
      } else {
        return Object.entries(this.allPets).filter((pet) =>
          this.categoryArr.includes(pet[1].groupID)
        );
      }
    },
  },
};
</script>

<style src="./PetsPage.css" scoped>
</style>
<template>
  <section class="pets-list" v-if="allPets.length">
    <div
      v-masonry
      transition-duration="0.2s"
      item-selector=".pets-list__item"
      :cols="{ default: 3, 1920: 3, 1220: 2, 710: 1 }"
      gutter=".gutter-sizer"
      stagger="0.05s"
    >
      <CardPetsUI
        v-masonry-tile
        class="pets-list__item"
        v-for="pet in allPets"
        :key="pet.previewImg"
        :pet="pet[1]"
        masonry
      />
      <div class="gutter-sizer"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    allPets: {
      type: Array,
      required: true,
    },
  },

  watch: {
    allPets() {
      this.$nextTick(() => this.$redrawVueMasonry());
    },
  },
};
</script>

<style src="./PetsList.css" scoped>
</style>
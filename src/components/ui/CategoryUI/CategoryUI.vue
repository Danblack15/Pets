<template>
  <div class="pet-category" :class="{whiteCategory: white}" @click="activated">
      <div class="pet-category__wrapper">
          <img src="@/assets/img/categoryCat.svg" alt="pet">
          <div class="pet-category__tranformer" :class="{isActive: activeCategory}"></div>
      </div>
      <h3 
        :class="['pet-category-name', {activeName: activeCategory}]"
      >Коты</h3>
  </div>
</template>

<script>
export default {
    name: "CategoryUI",

    props: {
      active: {
        type: Boolean,
        default: false
      },
      white: {
        type: Boolean,
        default: false
      },
    },

    data() {
      return {
        activeCategory: this.active
      }
    },

    methods: {
      activated() {
        this.activeCategory = !this.activeCategory
      } 
    }
}
</script>

<style src="./CategoryUI.css" scoped>

</style>
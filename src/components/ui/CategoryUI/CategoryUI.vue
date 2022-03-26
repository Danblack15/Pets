<template>
  <div 
    class="pet-category" 
    :class="{
      whiteWrapper: white, 
      laptopWrapper: laptop, 
      tabletWrapper: tablet,
      mobileWrapper: mobile
    }"
  >
      <div class="pet-category__wrapper">
          <img src="@/assets/img/categoryCat.svg" alt="pet">
          <div class="pet-category__tranformer" :class="{isActive: active}"></div>
      </div>
      <h3 
        class="pet-category-name" 
        :class="{whiteName: white, activeName: active, laptopName: laptop}"
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
      laptop: {
        type: Boolean,
        default: false
      },
      tablet: {
        type: Boolean,
        default: false
      },
      mobile: {
        type: Boolean,
        default: false
      }
    }
}
</script>

<style src="./CategoryUI.css" scoped>

</style>
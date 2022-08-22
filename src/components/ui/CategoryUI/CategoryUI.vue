<template>
  <button 
    type="checkbox" 
    :class="['pet-category', {
      'pet-category--white': whiteTheme
    }]" 
    @click="activated"
  >
      <div class="pet-category__wrapper">
          <img 
            :src="require(`@/assets/img/${imgCategory[category.id - 1].img}.svg`)" 
            alt="pet"
          />
          <div 
            class="pet-category__tranformer" 
            :class="{isActive: activeCategory}"
          ></div>
      </div>
      <h3 :class="['pet-category-name', {activeName: activeCategory}]">
        {{category.name}}
      </h3>
  </button>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "CategoryUI",

    props: {
      active: {
        type: Boolean,
        default: false
      },
      category: {
        type: Object,
        required: true
      },
    },

    data() {
      return {
        activeCategory: this.active,
        imgCategory: [
          {
            id: 1,
            img: 'dogs'
          },
          {
            id: 2,
            img: 'cats'
          },
          { 
            id: 3,
            img: 'birds'
          },
          { 
            id: 4,
            img: 'rabbits'
          },
          {
            id: 5,
            img: 'mice'
          },
          {
            id: 6,
            img: 'other'
          }
        ]
      }
    },

    methods: {
      activated() {
        this.activeCategory = !this.activeCategory
      } 
    },

    computed: {
      ...mapGetters({
        whiteTheme: "data/getWhiteTheme"
      })
    }
}
</script>

<style src="./CategoryUI.css" scoped>

</style>
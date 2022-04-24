<template>
  <section class="categories">
      <div class="categories__wrapper">
        <CategoryUI 
            v-for="category in categories"
            :key="category.id"
            :category="category"
            class="categories__item"
						@click="$emit('categoryArr', category.id)"
        />
      </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    mounted() {
        this.getCategories()
    },

    methods: {
        ...mapActions({
            getCategories: "data/groupPets"
        })
    },
    
    computed: {
        ...mapGetters({
            categories: "data/getGroupPets"
        })
    }
}
</script>

<style src="./CategoryList.css" scoped>

</style>
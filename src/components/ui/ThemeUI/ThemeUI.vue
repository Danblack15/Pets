<template>
  <div :class="['theme', {
    'theme--white': whiteTheme
  }]">
    <input type="checkbox" id="theme" class="theme__input"/>
    <label for="theme" class="theme__label theme__white" @click="changeTheme">
      <img src="@/assets/img/moonWhite.svg" alt="blackTheme" />
      <img src="@/assets/img/sunWhite.svg" alt="whiteTheme" />
    </label>
    <div class="theme__circle"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ThemeUI",

  methods: {
    ...mapActions({
      changeWhiteTheme: "data/changeWhiteTheme"
    }),

    changeTheme() {
      let theme = localStorage.getItem('theme-black')
      localStorage.setItem('theme-black', theme !== 'true')

      this.changeWhiteTheme()
    }
  },
  

  computed: {
    ...mapGetters({
      whiteTheme: "data/getWhiteTheme"
    })
  }
};
</script>

<style src="./ThemeUI.css" scoped>
</style>
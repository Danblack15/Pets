<template>
  <header :class="['header', {
    'header--white': whiteTheme
  }]">
      <h2 class="header__title">
        <img 
          v-if="$route.matched[1]"
          src="@/assets/img/arrowBig.svg" 
          alt="back" 
          class="header__general__back"
          @click="$router.push('/pets')"
        />
        {{ pageName }}
      </h2>
      <MenuHome class="header__media-open" @click="openMediaMenu">
        <img src="@/assets/img/openmenu.svg" alt="openMenu">
      </MenuHome>
      <div class="header__actions">
        <ThemeUI class="header__theme"/>
        <NotificationUI class="header__notification" active :whiteTheme="whiteTheme"/>
        <AvatarUI 
          class="header__avatar"
          @click="$router.push('/profile')"
        />
      </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions({
      openMediaMenu: "data/showMediaMenu"
    })
  },

  computed: {
    ...mapGetters({
      whiteTheme: "data/getWhiteTheme"
    }),

    pageName() {
      if (this.$route.matched[1])
        return `Питомцы\\${this.$route.params.category}`
      
      return this.$route.meta.title || ''
    }
  }
}
</script>

<style src="./HeaderBlock.css" scoped>

</style>
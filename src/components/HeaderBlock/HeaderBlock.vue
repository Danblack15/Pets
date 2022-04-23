<template>
  <header class="header">
      <h2 class="header__title">{{ pageName }}</h2>
      <MenuHome class="header__media-open" @click="openMediaMenu">
        <img src="@/assets/img/openmenu.svg" alt="openMenu">
      </MenuHome>
      <div class="header__actions">
        <ThemeUI class="header__theme"/>
        <NotificationUI class="header__notification"/>
        <AvatarUI class="header__avatar"/>
      </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      openMediaMenu: "data/showMediaMenu"
    })
  },

  computed: {
    pageName() {
      let title = this.$route.meta.title || ''
      
      return title
    }
  }
}
</script>

<style src="./HeaderBlock.css" scoped>

</style>
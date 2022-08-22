<template>
  <aside :class="['side-bar', {
    'side-bar--white': whiteTheme
  }]">
      <div class="side-bar__up">
        <LogoUI class="side-bar__logo" :whiteTheme="whiteTheme"/>

        <MenuList :whiteTheme="whiteTheme"/>
      </div>

      <MenuHome
        link
        :href="'/'"
        menuItem
        :whiteTheme="whiteTheme"
      >
          <img src="@/assets/img/logout.svg" alt="exit" v-if="!whiteTheme">
          <img src="@/assets/img/logoutWhite.svg" alt="exit" v-else>
      </MenuHome>
  </aside>
</template>

<script>
import MenuList from '@/components/MenuList/MenuList'
import { mapGetters } from 'vuex'

export default {
    components: {
        MenuList
    },

    computed: {
      ...mapGetters({
        whiteTheme: "data/getWhiteTheme"
      })
    }
}
</script>

<style src="./SideBar.css" scoped>

</style>
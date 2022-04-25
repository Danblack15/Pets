<template>
  <aside class="side-bar">
      <div class="side-bar__up">
        <LogoUI class="side-bar__logo"/>

        <MenuList />
      </div>

      <MenuHome
        link
        :href="'/'"
        menuItem
      >
          <img src="@/assets/img/logout.svg" alt="exit">
      </MenuHome>
  </aside>
</template>

<script>
import MenuList from '@/components/MenuList/MenuList'
export default {
    components: {
        MenuList
    }
}
</script>

<style src="./SideBar.css" scoped>

</style>
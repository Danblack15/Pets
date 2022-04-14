<template>
  <section class="side-bar">
      <div class="side-bar__up">
        <LogoUI class="side-bar__logo"/>

        <MenuList />
      </div>

      <MenuHome menuItem>
          <img src="@/assets/img/logout.svg" alt="exit">
      </MenuHome>
  </section>
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
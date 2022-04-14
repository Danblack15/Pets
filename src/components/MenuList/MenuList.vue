<template>
  <section class="menu-list">
      <MenuHome 
        link
        :href="'/home'"
        menuItem  
        class="menu-list__item"
      >
          <img src="@/assets/img/homeicon.svg" alt="home">
      </MenuHome>

      <MenuHome 
        link
        :href="'/pets'"
        menuItem 
        class="menu-list__item"
      >
          <img src="@/assets/img/petsicon.svg" alt="pets">
      </MenuHome>

      <MenuHome 
        link 
        :href="'/blog'"
        menuItem 
        class="menu-list__item"
      >
          <img src="@/assets/img/blogicon.svg" alt="blog">
      </MenuHome>

      <MenuHome 
        link 
        :href="'/chat'"
        menuItem 
        class="menu-list__item"
      >
          <img src="@/assets/img/chaticon.svg" alt="chat">
      </MenuHome>

      <MenuHome 
        link 
        :href="'/person'"
        menuItem 
        class="menu-list__item"
      >
          <img src="@/assets/img/personicon.svg" alt="person">
      </MenuHome>
  </section>
</template>

<script>
export default {

}
</script>

<style src="./MenuList.css" scoped>

</style>
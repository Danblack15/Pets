<template>
  <nav class="menu-list">
    <ul class="menu-list__list">
      <li>
        <MenuHome 
          link
          :href="'/home'"
          menuItem  
          class="menu-list__item"
        >
            <img src="@/assets/img/homeicon.svg" alt="home">
        </MenuHome>
      </li>

      <li>
        <MenuHome 
          link
          :href="'/pets'"
          menuItem 
          class="menu-list__item"
        >
            <img src="@/assets/img/petsicon.svg" alt="pets">
        </MenuHome>
      </li>

      <li>
        <MenuHome 
          link 
          :href="'/blog'"
          menuItem 
          class="menu-list__item"
        >
            <img src="@/assets/img/blogicon.svg" alt="blog">
        </MenuHome>
      </li>

      <li>
        <MenuHome 
          link 
          :href="'/chat'"
          menuItem 
          class="menu-list__item"
        >
            <img src="@/assets/img/chaticon.svg" alt="chat">
        </MenuHome>
      </li>

      <li>
        <MenuHome 
          link 
          :href="'/person'"
          menuItem 
          class="menu-list__item"
        >
            <img src="@/assets/img/personicon.svg" alt="person">
        </MenuHome>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style src="./MenuList.css" scoped>

</style>
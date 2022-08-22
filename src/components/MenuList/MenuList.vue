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
            <img src="@/assets/img/homeicon.svg" alt="home" v-if="!whiteTheme">
            <img src="@/assets/img/homeiconblack.svg" alt="home" v-else>
        </MenuHome>
      </li>

      <li>
        <MenuHome 
          link
          :href="'/pets'"
          menuItem 
          class="menu-list__item"
        >
            <img src="@/assets/img/petsicon.svg" alt="pets" v-if="!whiteTheme">
            <img src="@/assets/img/petsiconblack.svg" alt="pets" v-else>
        </MenuHome>
      </li>

      <li>
        <MenuHome 
          link 
          :href="'/blog'"
          menuItem 
          class="menu-list__item"
        >
            <img src="@/assets/img/blogicon.svg" alt="blog" v-if="!whiteTheme">
            <img src="@/assets/img/blogiconblack.svg" alt="blog" v-else>
        </MenuHome>
      </li>

      <li>
        <MenuHome 
          link 
          :href="'/chat'"
          menuItem 
          class="menu-list__item"
        >
            <img src="@/assets/img/chaticon.svg" alt="chat" v-if="!whiteTheme">
            <img src="@/assets/img/chaticonblack.svg" alt="chat" v-else>
        </MenuHome>
      </li>

      <li>
        <MenuHome 
          link 
          :href="'/profile'"
          menuItem 
          class="menu-list__item"
        >
            <img src="@/assets/img/personicon.svg" alt="person" v-if="!whiteTheme">
            <img src="@/assets/img/personiconblack.svg" alt="person" v-else>
        </MenuHome>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    whiteTheme: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style src="./MenuList.css" scoped>

</style>
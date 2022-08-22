<template>
  <nav :class="['menu-list', {
    'menu-list--white': whiteTheme
  }]">
    <ul class="menu-list__list">
      <li>
        <router-link to="/home">
          <MenuHome menuItem class="menu-list__item menu-list__item--home">
            <img src="@/assets/img/homeicon.svg" alt="home" />
          </MenuHome>
          <p>Home</p>
        </router-link>
      </li>

      <li>
        <router-link to="/pets">
          <MenuHome menuItem class="menu-list__item menu-list__item--pets">
            <img src="@/assets/img/petsicon.svg" alt="pets" />
          </MenuHome>
          <p>Pets</p>
        </router-link>
      </li>

      <li>
        <router-link to="/blog">
          <MenuHome menuItem class="menu-list__item menu-list__item--blog">
            <img src="@/assets/img/blogicon.svg" alt="blog" />
          </MenuHome>
          <p>Blog</p>
        </router-link>
      </li>

      <li>
        <router-link to="/chat">
          <MenuHome menuItem class="menu-list__item menu-list__item--chat">
            <img src="@/assets/img/chaticon.svg" alt="chat" />
          </MenuHome>
          <p>Chat</p>
        </router-link>
      </li>

      <li>
        <router-link to="/profile">
          <MenuHome menuItem class="menu-list__item menu-list__item--profile">
            <img src="@/assets/img/personicon.svg" alt="person" />
          </MenuHome>
          <p>Profile</p>
        </router-link>
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
};
</script>

<style src="./MediaMenuList.css" scoped>
</style>
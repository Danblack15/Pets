<template>
  <section :class="['menu', {
    'menu--white': whiteTheme
  }]">
    <MenuHome class="menu__close" menuItem active @click="closeMediaMenu">
      <img src="@/assets/img/cross.svg" alt="close"/>
    </MenuHome>

    <MediaMenuList 
      @click="closeMediaMenu"
      :whiteTheme="whiteTheme"
    />

    <MenuHome link :href="'/'" menuItem class="menu__exit" @click="closeMediaMenu">
      <img src="@/assets/img/logout.svg" alt="exit" />
    </MenuHome>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MediaMenuList from "@/components/MediaMenuList/MediaMenuList";

export default {
  components: {
    MediaMenuList,
  },

  methods: {
    ...mapActions({
      closeMediaMenu: "data/showMediaMenu"
    })
  },

  computed: {
    ...mapGetters({
      whiteTheme: "data/getWhiteTheme"
    })
  }
};
</script>

<style src="./MediaMenu.css" scoped>
</style>
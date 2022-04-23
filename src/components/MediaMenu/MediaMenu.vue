<template>
  <section class="menu">
    <MenuHome class="menu__close" menuItem active @click="closeMediaMenu">
      <img src="@/assets/img/cross.svg" alt="close"/>
    </MenuHome>

    <MediaMenuList @click="closeMediaMenu"/>

    <MenuHome link :href="'/'" menuItem class="menu__exit" @click="closeMediaMenu">
      <img src="@/assets/img/logout.svg" alt="exit" />
    </MenuHome>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import MediaMenuList from "@/components/MediaMenuList/MediaMenuList";

export default {
  components: {
    MediaMenuList,
  },

  methods: {
    ...mapActions({
      closeMediaMenu: "data/showMediaMenu"
    })
  }
};
</script>

<style src="./MediaMenu.css" scoped>
</style>
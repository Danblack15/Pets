<template>
  <MediaMenu v-if="mediaMenu"/>

  <SideBar class="side-bar"/>
  <section class="general-wrapper">
    <HeaderBlock />
    <slot />
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import SideBar from '@/components/SideBar/SideBar'
import HeaderBlock from '@/components/HeaderBlock/HeaderBlock'
import MediaMenu from "@/components/MediaMenu/MediaMenu"

export default {
    name: "HomeLayout",
    
    components: {
      SideBar,
      HeaderBlock,
      MediaMenu
    },

    computed: {
    ...mapGetters({
      mediaMenu: "data/getMediaMenu"
    }),
  },
}
</script>

<style src="./HomeLayout.css" scoped>

</style>
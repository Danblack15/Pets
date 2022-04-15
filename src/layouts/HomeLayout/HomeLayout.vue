<template>
  <SideBar />
  <section class="general-wrapper">
    <HeaderBlock />
    <slot />
  </section>
</template>

<script>
import SideBar from '@/components/SideBar/SideBar'
import HeaderBlock from '@/components/HeaderBlock/HeaderBlock'

export default {
    name: "HomeLayout",
    
    components: {
      SideBar,
      HeaderBlock
    }
}
</script>

<style src="./HomeLayout.css" scoped>

</style>
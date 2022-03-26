<template>
  <div class="wrapper-menu-icon wrapper-menu-icon-active" v-if="active">
      <slot></slot>
  </div>

  <div class="wrapper-menu-icon" v-else>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'MenuHome',

    props: {
      active: {
        type: Boolean,
        default: false
      }
    }
}
</script>

<style src="./MenuHome.css" scoped>

</style>
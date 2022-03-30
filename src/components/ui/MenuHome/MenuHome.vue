<template>
  <div
    :class="['wrapper-menu-icon', { activeIcon: active, menuItem: menuItem }]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MenuHome",

  props: {
    active: {
      type: Boolean,
      default: false,
    },
    menuItem: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style src="./MenuHome.css" scoped>
</style>
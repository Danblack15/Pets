<template>
  <router-link
    v-if="link"
    :to="href"
    :class="['wrapper-menu-icon', { activeIcon: active, menuItem: menuItem }]"
  >
    <slot></slot>
  </router-link>

  <div
    v-else
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
    link: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String
    }
  },
};
</script>

<style src="./MenuHome.css" scoped>
</style>
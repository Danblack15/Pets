<template>
  <button class="button button-laptop" v-if="laptop">
      <slot></slot>
  </button>

  <button class="button button-tablet" v-else-if="tablet">
      <slot></slot>
  </button>

  <button class="button button-mobile" v-else-if="mobile">
      <slot></slot>
  </button>

  <button class="button button-card-desktop" v-else-if="cardDesktop">
      <slot></slot>
  </button>

  <button class="button button-card-laptop" v-else-if="cardLaptop">
      <slot></slot>
  </button>

  <button class="button button-card-wide" v-else-if="wide">
      <slot></slot>
  </button>

  <button class="button button-card-mobile" v-else-if="cardMobile">
      <slot></slot>
  </button>

  <button class="button button-auth-desktop" v-else-if="auth">
      <slot></slot>
  </button>

  <button class="button button-auth-mobile" v-else-if="wideAuthMobile">
      <slot></slot>
  </button>

  <button class="button" v-else>
      <slot></slot>
  </button>
  
  
</template>

<script>
export default {
    name: 'ButtonUI',

    props: {
      laptop: {
        type: Boolean,
        default: false
      },
      tablet: {
        type: Boolean,
        default: false
      },
      mobile: {
        type: Boolean,
        default: false
      },
      cardDesktop: {
        type: Boolean,
        default: false
      },
      cardLaptop: {
        type: Boolean,
        default: false
      },
      wide: {
        type: Boolean,
        default: false
      },
      cardMobile: {
        type: Boolean,
        default: false
      },
      auth: {
        type: Boolean,
        default: false
      },
      wideAuthMobile: {
        type: Boolean,
        default: false
      }
    }
}
</script>

<style src="./ButtonUI.css" scoped>

</style>
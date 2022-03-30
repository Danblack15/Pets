<template>
  <button 
    class="button" :class="classObject">
      <slot></slot>
  </button>
  
  
</template>

<script>
export default {
    name: 'ButtonUI',

    props: {
      large: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      wide: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    computed: {
      classObject() {
        return {
          'button--small': this.small,
          'button--large': this.large,
          'button--wide': this.wide,
          'button--disabled': this.disabled
        }
      }
    }
}
</script>

<style src="./ButtonUI.css" scoped>

</style>
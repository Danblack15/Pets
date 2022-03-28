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
          smallButton: this.small,
          largeButton: this.large,
          wideButton: this.wide,
          disabledButton: this.disabled
        }
      }
    }
}
</script>

<style src="./ButtonUI.css" scoped>

</style>
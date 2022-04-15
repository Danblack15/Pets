<template>
  <input 
    class="input"
    v-model.trim="value"
  >
</template>

<script>
export default {
    name: 'InputUI',

    data() {
      return {
        value: ""
      }
    }
}
</script>

<style src="./InputUI.css" scoped>

</style>
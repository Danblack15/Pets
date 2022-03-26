<template>
    <img 
        src="@/assets/img/logoMediumWhite.svg" 
        alt="logo" 
        v-if="medium && white"
    />

    <img 
        src="@/assets/img/logoMediumDark.svg" 
        alt="logo" 
        v-else-if="medium"
    />

    <img 
        src="@/assets/img/logoBigWhite.svg" 
        alt="logo" 
        v-else-if="big && white"
    />

    <img 
        src="@/assets/img/logoMediumDark.svg" 
        alt="logo" 
        class="big-logo"
        v-else-if="big"
    />

    <img 
        src="@/assets/img/logoWhite.svg" 
        alt="logo" 
        v-else-if="white"
    />

  <img 
    src="@/assets/img/logo.svg" 
    alt="logo" 
    v-else
  />
</template>

<script>
export default {
    name: "LogoUI",

    props: {
        big: {
            type: Boolean,
            default: false
        },
        medium: {
            type: Boolean,
            default: false
        },
        little: {
            type: Boolean,
            default: true
        },
        white: {
            type: Boolean,
            default: false
        },
    }
}
</script>

<style src="./LogoUI.css" scoped>

</style>
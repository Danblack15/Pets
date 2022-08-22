<template>
    <img 
			src="@/assets/img/logoMediumDark.svg" 
			alt="logo" 
			v-if="medium"
    />

    <img 
			src="@/assets/img/logoMediumDark.svg" 
			alt="logo" 
			class="big-logo"
			v-else-if="large"
    />

		<img 
			src="@/assets/img/logoBlack.svg" 
			alt="logo" 
			class="big-logo"
			v-else-if="whiteTheme"
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
        large: {
            type: Boolean,
            default: false
        },
        medium: {
            type: Boolean,
            default: false
        },
				whiteTheme: {
					type: Boolean,
					default: false
				}
    }
}
</script>

<style src="./LogoUI.css" scoped>

</style>
<template>
    <div
        class="arrow" 
        :class="{left: left}"
    >
        <img src="@/assets/img/arrow.svg" alt="arrow">
    </div>

</template>

<script>
export default {
    name: "ArrowUI",

    props: {
        left: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style src="./ArrowUI.css" scoped>

</style>
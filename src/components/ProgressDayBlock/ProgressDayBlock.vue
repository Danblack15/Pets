<template>
  <div class="progress-item">
    <p class="progress-item-name">Карточка Ежедневного прогресса</p>
    <ProgressDayUI />
    <input 
        type="text" 
        class="progress-item-tag"
        value="<ProgressDayUI></ProgressDayUI>"
        disabled
    />
  </div>
</template>

<script>
export default {

}
</script>

<style src="./ProgressDayBlock.css" scoped>

</style>
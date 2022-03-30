<template>
  <div class="arrow-item">
    <p class="arrow-item-name">Стрелка</p>
    <ArrowUI />
    <input 
        type="text" 
        class="arrow-item-tag"
        value="<ArrowUI></ArrowUI>"
        disabled
    />
  </div>

  <div class="arrow-item">
    <p class="arrow-item-name">Стрелка влево</p>
    <ArrowUI left/>
    <input 
        type="text" 
        class="arrow-item-tag"
        value="<ArrowUI left></ArrowUI>"
        disabled
    />
  </div>
</template>

<script>
export default {

}
</script>

<style src="./ArrowsBlock.css" scoped>

</style>
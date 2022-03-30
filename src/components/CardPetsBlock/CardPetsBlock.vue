<template>
  <div class="card-item-pets">
    <p class="card-item-pets-name">Карточка животного</p>
    <CardPetsUI />
    <input 
        type="text" 
        class="card-item-pets-tag"
        value="<CardPetsUI></CardPetsUI>"
        disabled
    />
  </div>
</template>

<script>
export default {

}
</script>

<style src="./CardPetsBlock.css" scoped>

</style>
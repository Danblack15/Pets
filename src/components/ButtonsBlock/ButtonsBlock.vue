<template>
  <div class="buttons-item">
    <p class="buttons-item-name">Кнопка обычная</p>
    <ButtonUI>Напиши сейчас</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI></ButtonUI>"
        disabled
    />
  </div>

  <div class="buttons-item">
    <p class="buttons-item-name">Кнопка маленькая</p>
    <ButtonUI small>Купить - 5000</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI small></ButtonUI>"
        disabled
    />
  </div>

  <div class="buttons-item">
    <p class="buttons-item-name">Кнопка большая</p>
    <ButtonUI large>Купить - 5000</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI large></ButtonUI>"
        disabled
    />
  </div>

  <div class="buttons-item">
    <p class="buttons-item-name">Кнопка широкая</p>
    <ButtonUI wide>Купить - 5000</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI wide></ButtonUI>"
        disabled
    />
  </div>
  
  <div class="buttons-item">
    <p class="buttons-item-name">Кнопка неактивная</p>
    <ButtonUI disabled>Купить - 5000</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI disabled></ButtonUI>"
        disabled
    />
  </div>
  
</template>

<script>
export default {};
</script>

<style src="./ButtonsBlock.css" scoped>
</style>
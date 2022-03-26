<template>
  <div class="buttons-item">
    <p class="buttons-item-name">Desktop кнопка</p>
    <ButtonUI>Напиши сейчас</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI></ButtonUI>"
        disabled
    />
  </div>

  <div class="buttons-item">
    <p class="buttons-item-name">CardDesktop кнопка</p>
    <ButtonUI cardDesktop>Купить - 5000</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI cardDesktop></ButtonUI>"
        disabled
    />
  </div>

  <div class="buttons-item">
    <p class="buttons-item-name">AuthDesktop кнопка</p>
    <ButtonUI auth>Войти</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI auth></ButtonUI>"
        disabled
    />
  </div>

  <div class="buttons-item">
    <p class="buttons-item-name">AuthDesktop Disabled кнопка</p>
    <ButtonUI auth class="disabled">Войти</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI auth class='disabled'></ButtonUI>"
        disabled
    />
  </div>
  
  <div class="buttons-item">
    <p class="buttons-item-name">Laptop кнопка</p>
    <ButtonUI laptop>Напиши сейчас</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI laptop></ButtonUI>"
        disabled
    />
  </div>

  <div class="buttons-item">
    <p class="buttons-item-name">CardLaptop кнопка</p>
    <ButtonUI cardLaptop>Купить - 5000</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI cardLaptop></ButtonUI>"
        disabled
    />
  </div>

  <div class="buttons-item">
    <p class="buttons-item-name">AuthLaptop кнопка</p>
    <ButtonUI auth>Войти</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI auth></ButtonUI>"
        disabled
    />
  </div>

  <div class="buttons-item">
    <p class="buttons-item-name">Tablet кнопка</p>
    <ButtonUI tablet>Напиши сейчас</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI tablet></ButtonUI>"
        disabled
    />
  </div>

  <div class="buttons-item">
    <p class="buttons-item-name">AuthTablet кнопка</p>
    <ButtonUI auth>Войти</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI auth></ButtonUI>"
        disabled
    />
  </div>

  <div class="buttons-item">
    <p class="buttons-item-name">Mobile кнопка</p>
    <ButtonUI mobile>Напиши сейчас</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI mobile></ButtonUI>"
        disabled
    />
  </div>
  

  <div class="buttons-item">
    <p class="buttons-item-name">CardMobile кнопка</p>
    <ButtonUI cardMobile>Приютить</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI cardMobile></ButtonUI>"
        disabled
    />
  </div>

  <div class="buttons-item">
    <p class="buttons-item-name">AuthMobile wide кнопка</p>
    <ButtonUI wideAuthMobile>Зарегистрироваться</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI wideAuthMobile></ButtonUI>"
        disabled
    />
  </div>

  <div class="buttons-item">
    <p class="buttons-item-name">Wide кнопка</p>
    <ButtonUI wide>Купить - 5000</ButtonUI>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<ButtonUI wide></ButtonUI>"
        disabled
    />
  </div>
  
</template>

<script>
export default {};
</script>

<style src="./ButtonsBlock.css" scoped>
</style>
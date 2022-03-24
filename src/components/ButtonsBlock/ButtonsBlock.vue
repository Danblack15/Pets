<template>
  <div class="buttons-item">
    <p class="buttons-item-name">Desktop кнопка</p>
    <DesktopButton>Напиши сейчас</DesktopButton>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<DesktopButton></DesktopButton>"
        disabled
    />
  </div>

  <div class="buttons-item">
    <p class="buttons-item-name">Laptop кнопка</p>
    <LaptopButton>Напиши сейчас</LaptopButton>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<LaptopButton></LaptopButton>"
        disabled
    />
  </div>

  <div class="buttons-item">
      <p class="buttons-item-name">Tablet кнопка</p>
    <TabletButton>Напиши сейчас</TabletButton>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<TabletButton></TabletButton>"
        disabled
    />
  </div>

  <div class="buttons-item">
      <p class="buttons-item-name">Mobile кнопка</p>
    <MobileButton>Напиши сейчас</MobileButton>
    <input 
        type="text" 
        class="buttons-item-tag"
        value="<MobileButton></MobileButton>"
        disabled
    />
  </div>
</template>

<script>
export default {};
</script>

<style src="./ButtonsBlock.css" scoped>
</style>
<template>
  <div class="left-menu-item">
    <p class="left-menu-item-name">Элемент меню</p>
    <MenuHome>
        <img src="@/assets/img/homeicon.svg" alt="home">
    </MenuHome>
    <input 
        type="text" 
        class="left-menu-item-tag"
        value="<MenuHome></MenuHome>"
        disabled
    />
  </div>

  <div class="left-menu-item">
    <p class="left-menu-item-name">Активный элемент меню</p>
    <MenuHome active>
        <img src="@/assets/img/homeicon.svg" alt="home">
    </MenuHome>
    <input 
        type="text" 
        class="left-menu-item-tag"
        value="<MenuHome class='active'></MenuHome>"
        disabled
    />
  </div>

  <div class="left-menu-item">
    <p class="left-menu-item-name">Tablet открыть меню</p>
    <MenuHome>
        <img src="@/assets/img/openmenu.svg" alt="openmenu">
    </MenuHome>
    <input 
        type="text" 
        class="left-menu-item-tag"
        value="<MenuHome></MenuHome>"
        disabled
    />
  </div>

  <div class="left-menu-item">
    <p class="left-menu-item-name">Mobile открыть меню</p>
    <MenuHome>
        <img src="@/assets/img/mobileopenmenu.svg" alt="openmenu">
    </MenuHome>
    <input 
        type="text" 
        class="left-menu-item-tag"
        value="<MenuHome></MenuHome>"
        disabled
    />
  </div>
  
</template>

<script>
export default {

}
</script>

<style src="./LeftMenuIcons.css" scoped>

</style>
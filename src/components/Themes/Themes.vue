<template>
  <div class="theme-item">
    <p class="theme-item-name">Desktop тема black</p>
    <ThemeUI />
    <input 
        type="text" 
        class="theme-item-tag"
        value="<ThemeUI></ThemeUI>"
        disabled
    />
  </div>

  <div class="theme-item">
    <p class="theme-item-name">Desktop тема white</p>
    <ThemeUI white/>
    <input 
        type="text" 
        class="theme-item-tag"
        value="<ThemeUI white></ThemeUI>"
        disabled
    />
  </div>

  <div class="theme-item">
    <p class="theme-item-name">Laptop тема black</p>
    <ThemeUI laptop/>
    <input 
        type="text" 
        class="theme-item-tag"
        value="<ThemeUI laptop></ThemeUI>"
        disabled
    />
  </div>
  
  <div class="theme-item">
    <p class="theme-item-name">Laptop тема white</p>
    <ThemeUI laptop white/>
    <input 
        type="text" 
        class="theme-item-tag"
        value="<ThemeUI laptop white></ThemeUI>"
        disabled
    />
  </div>

  <div class="theme-item">
    <p class="theme-item-name">Tablet тема black</p>
    <ThemeUI tablet/>
    <input 
        type="text" 
        class="theme-item-tag"
        value="<ThemeUI tablet></ThemeUI>"
        disabled
    />
  </div>

  <div class="theme-item">
    <p class="theme-item-name">Tablet тема white</p>
    <ThemeUI tablet white/>
    <input 
        type="text" 
        class="theme-item-tag"
        value="<ThemeUI tablet></ThemeUI>"
        disabled
    />
  </div>

  <div class="theme-item">
    <p class="theme-item-name">Mobile тема black</p>
    <ThemeUI mobile/>
    <input 
        type="text" 
        class="theme-item-tag"
        value="<ThemeUI mobile></ThemeUI>"
        disabled
    />
  </div>

  <div class="theme-item">
    <p class="theme-item-name">Mobile тема white</p>
    <ThemeUI mobile white/>
    <input 
        type="text" 
        class="theme-item-tag"
        value="<ThemeUI mobile></ThemeUI>"
        disabled
    />
  </div>
</template>

<script>
export default {

}
</script>

<style src="./Themes.css" scoped>

</style>
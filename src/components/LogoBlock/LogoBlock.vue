<template>
  <div class="logo-wrapper">
    <p class="logo-wrapper-name">Logo</p>
    <LogoUI />
    <input 
        type="text" 
        class="logo-wrapper-tag"
        value="<LogoUI></LogoUI>"
        disabled
    />
  </div>

  <div class="logo-wrapper">
    <p class="logo-wrapper-name">Logo white</p>
    <LogoUI white/>
    <input 
        type="text" 
        class="logo-wrapper-tag"
        value="<LogoUI white></LogoUI>"
        disabled
    />
  </div>

  <div class="logo-wrapper">
    <p class="logo-wrapper-name">Logo medium</p>
    <LogoUI medium/>
    <input 
        type="text" 
        class="logo-wrapper-tag"
        value="<LogoUI medium></LogoUI>"
        disabled
    />
  </div>

  <div class="logo-wrapper">
    <p class="logo-wrapper-name">Logo medium white</p>
    <LogoUI medium white/>
    <input 
        type="text" 
        class="logo-wrapper-tag"
        value="<LogoUI medium white></LogoUI>"
        disabled
    />
  </div>

  <div class="logo-wrapper">
    <p class="logo-wrapper-name">Logo big</p>
    <LogoUI big/>
    <input 
        type="text" 
        class="logo-wrapper-tag"
        value="<LogoUI big></LogoUI>"
        disabled
    />
  </div>

  <div class="logo-wrapper">
    <p class="logo-wrapper-name">Logo big white</p>
    <LogoUI big white/>
    <input 
        type="text" 
        class="logo-wrapper-tag"
        value="<LogoUI big white></LogoUI>"
        disabled
    />
  </div>

</template>

<script>
export default {

}
</script>

<style src="./LogoBlock.css" scoped>

</style>
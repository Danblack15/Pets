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
    <p class="logo-wrapper-name">Logo big</p>
    <LogoUI large/>
    <input
        type="text" 
        class="logo-wrapper-tag"
        value="<LogoUI large></LogoUI>"
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
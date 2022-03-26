<template>
  <div class="avatar-item">
    <p class="avatar-item-name">Avatar в Header</p>
    <AvatarUI/>
    <input 
        type="text" 
        class="avatar-item-tag"
        value="<AvatarUI></AvatarUI>"
        disabled
    />
  </div>

  <div class="avatar-item">
    <p class="avatar-item-name">Avatar в постах</p>
    <AvatarUI post/>
    <input 
        type="text" 
        class="avatar-item-tag"
        value="<AvatarUI post></AvatarUI>"
        disabled
    />
  </div>

  <div class="avatar-item">
    <p class="avatar-item-name">Avatar в постах online</p>
    <AvatarUI post online/>
    <input 
        type="text" 
        class="avatar-item-tag"
        value="<AvatarUI post online></AvatarUI>"
        disabled
    />
  </div>
</template>

<script>
export default {

}
</script>

<style src="./AvatarBlock.css" scoped>

</style>
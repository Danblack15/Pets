<template>
  <section class="write-now">
      <div class="write-now__friends">
          <AvatarUI post class="write-now__avatar"/>
          <AvatarUI post class="write-now__avatar"/>
          <AvatarUI post class="write-now__avatar"/>
          <AvatarUI post class="write-now__avatar"/>
          <AvatarUI post class="write-now__avatar"/>
          <div class="write-now__add">+</div>
      </div>
      <ButtonUI wide class="write-now-button">Напиши сейчас</ButtonUI>
  </section>

</template>

<script>
export default {
    name: "WriteNowUI",

    props: {
       
    }
}
</script>

<style src="./WriteNowUI.css" scoped>

</style>
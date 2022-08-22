<template>
  <div :class="['pets-second', {
    'pets-second--white': whiteTheme
  }]">
    <h3 class="pets-second__title">Загрузите пару изображений питомца</h3>
    <p class="pets-second__subtitle">Вы можете загрузить не более 15 изображений</p>
    <form 
      class="pets-second__images" 
      method="post" 
      @submit.prevent="submitForm"
    >
      <input 
        type="file" 
        id="files" 
        name="files" 
        multiple 
        ref="images"
        accept=".jpg, .jpeg, .png"
        class="pets-second__input"
        @change="changeImg"
        @dragenter="dragened"
        @dragleave="dragendOff"
        v-show="images.length == 0"
      >
      <label 
        for="files" 
        class="pets-second__label" 
        v-if="images.length == 0"
      >
        <h4 class="pets-second__label-title"><b>Выберете файлы</b> или<br />перетащите их сюда</h4>
      </label>

      <div class="pets-second__wrapper-images" v-if="images.length > 0">
        <div 
          v-for="image in images"
          :key="image"
          class="pets-second__selected-img"
        >
          <img 
            :src="image"
            alt="img"
          />
          <div class="pets-second__delete-img" @click="deleteimg(image)">
            <img src="@/assets/img/cross.svg" alt="delete">
          </div>
        </div>
        
        <label for="files" class="pets-second__label-more" v-if="images.length < 10">
          <span>+</span>
        </label>
      </div>

      <ButtonUI 
        class="pets-second__submit"
        :disabled="images.length == 0" 
        :to="'/home'"
      >Дальше</ButtonUI>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    whiteTheme: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      images: []
    }
  },

  methods: {
    changeImg(e) {
      let files = e.target.files

      for (const key in files) {
        if (Object.hasOwnProperty.call(files, key)) {
          const element = files[key];

          this.images.push(URL.createObjectURL(element))
        }
      }
    },

    deleteimg(image) {      
      this.images = this.images.filter((img) => img !== image)
    },

    dragened() {
      let label = document.querySelector('.pets-second__label')

      label.classList.add('pets-second__label--drag')
    },

    dragendOff() {
      let label = document.querySelector('.pets-second__label')

      label.classList.remove('pets-second__label--drag')
    },

    submitForm() {
      if (this.images.length > 0) {
        this.$emit('second', this.images)
      }
    }
  },

}
</script>

<style lang="scss">
@import "./YourPetsSecond.scss";
</style>
<template>
  <div>
    <div :class="['show-form', {
        'show-form--white': whiteTheme
      }]" 
      v-if="!showForm"
    >
      <img src="@/assets/img/show-form.svg" alt="dog" class="show-form__img">
      <h4 class="show-form__title">У вас ещё нет питомцев, скорее добавьте его</h4>
      <ButtonUI 
        class="show-form__btn"
        @click="showFormFun"
      >Добавить питомца</ButtonUI>
    </div>
    <div :class="['your-pets', {
        'your-pets--white': whiteTheme
      }]" 
      v-if="showForm"
    >
      <YourPetsNav 
        :indexItem="indexReg"
        :whiteTheme="whiteTheme"
      />
      <YourPetsFirst 
        :class="['your-pets__first', {
          'show-index': indexReg == 1,
          'disabled-index': indexReg > 1,
          'disabled-deep': indexReg > 2
        }]"
        @first="firstValue"
        :whiteTheme="whiteTheme" 
      />

      <YourPetsSecond
        :class="['your-pets__second', { 
          'show-index': indexReg == 2,
          'disabled-index': indexReg > 2
        }]"
        @second="imagesValue"
        :whiteTheme="whiteTheme" 
      />

      <YourPetsThird 
        :class="['your-pets__third', { 
          'show-index': indexReg == 3,
          'disabled-index': indexReg > 3
        }]"
        :purpose="form.first.purpose"
        @third="thirdValue"
        :whiteTheme="whiteTheme" 
      />

      <YourPetsResult
        :class="['your-pets__result', { 
          'show-index': indexReg == 4
        }]" 
        :form="form"
        :whiteTheme="whiteTheme" 
      />

      <ButtonUI 
        class="your-pets__prev"
        v-if="indexReg > 1 && indexReg < 4"
        @click="indexPrev"
      >Назад</ButtonUI>
    </div>
  </div>
</template>

<script>
import YourPetsNav from "@/components/YourPetsNav/YourPetsNav"
import YourPetsFirst from "@/components/YourPetsFirst/YourPetsFirst"
import YourPetsSecond from "@/components/YourPetsSecond/YourPetsSecond"
import YourPetsThird from "@/components/YourPetsThird/YourPetsThird"
import YourPetsResult from "@/components/YourPetsResult/YourPetsResult"

export default {
  components: {
    YourPetsNav,
    YourPetsFirst,
    YourPetsSecond,
    YourPetsThird,
    YourPetsResult
  },

  props: {
    whiteTheme: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      form: {
        first: {
          desk: null,
          namePet: null,
          purpose: null,
          sex: null
        },
        images: null,
        third: null
      },
      disabled: false,
      indexReg: 1,
      showForm: false,
    }
  },

  methods: {
    firstValue(e) {
      this.form.first = e

      this.indexReg++
      
    },

    imagesValue(e) {
      this.form.images = e

      this.indexReg++

    },

    thirdValue(e) {
      this.form.third = e

      this.indexReg++
    },

    indexPrev() {
      this.indexReg--
    },

    showFormFun() {
      this.showForm = !this.showForm
    }
  },
}
</script>

<style lang="scss">
@import "./YourPets.scss";
</style>
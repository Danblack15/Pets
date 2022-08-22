<template>
  <div :class="['account-tab', {
    'account-tab--white': whiteTheme
  }]">
    <h4 class="account-tab__title">Информация</h4>

    <form action="account" method="post" class="form-account" @submit.prevent="submitForm">
      <label for="img" class="form-account__img" title="Добавьте фото">
        <img src="@/assets/img/add-img.svg" alt="img" id="preview">
      </label>
      <input 
        @change="previewImg" 
        type="file" 
        id="img" 
        name="img" 
        class="form-account__file"
        accept=".jpg, .jpeg, .png"
      />

      <div class="general-info">
        <fieldset
          :class="{
            'form-item--error': v$.form.name.$invalid && v$.$dirty,
            'form-item--success': !v$.form.name.$invalid && v$.$dirty,
          }"
        >
          <input 
            type="text" 
            id="name" 
            name="name" 
            class="general-info__input"
            v-model.trim="form.name"
          >
          <label 
            for="name" 
            class="general-info__label"
            :class="validator(form.name)"
          >Имя</label>
          <span class="form-hint" v-if="v$.form.name.$error">Заполните имя пользователя</span>
        </fieldset>

        <fieldset
          :class="{
            'form-item--error': v$.form.date.$invalid && v$.$dirty,
            'form-item--success': !v$.form.date.$invalid && v$.$dirty,
          }"
        >
          <input 
            type="date" 
            id="date" 
            name="date" 
            class="general-info__input"
            v-model.trim="form.date"
          >
          <label 
            for="date" 
            class="general-info__label label--valid"
            :class="validator(form.date)"
          >Дата рождения</label>
          <span class="form-hint" v-if="v$.form.date.$error">Заполните имя пользователя</span>
        </fieldset>

        <fieldset
          :class="{
            'form-item--error': v$.form.status.$invalid && v$.$dirty,
            'form-item--success': !v$.form.status.$invalid && v$.$dirty,
          }"
        >
          <input 
            type="text" 
            id="status" 
            name="status" 
            class="general-info__input"
            v-model.trim="form.status"
          >
          <label 
            for="status" 
            class="general-info__label"
            :class="validator(form.status)"
          >Статус</label>
          <span class="form-hint" v-if="v$.form.status.$error">Заполните имя пользователя</span>
        </fieldset>

        <fieldset
          :class="{
            'form-item--error': v$.form.geo.$invalid && v$.$dirty,
            'form-item--success': !v$.form.geo.$invalid && v$.$dirty,
          }"
        >
          <input 
            type="text" 
            id="geo" 
            name="geo" 
            class="general-info__input"
            v-model.trim="form.geo"
          >
          <label 
            for="geo" 
            class="general-info__label"
            :class="validator(form.geo)"
          >Местоположение</label>
          <span class="form-hint" v-if="v$.form.geo.$error">Заполните имя пользователя</span>
        </fieldset>
      </div>

      <h4 class="form-account__title">Безопасность</h4>
      <div class="safety-info">
        <fieldset
          :class="{
            'form-item--error': v$.form.password.$invalid && v$.$dirty,
            'form-item--success': !v$.form.password.$invalid && v$.$dirty,
          }"
        >
          <input 
            type="password" 
            id="password" 
            name="password" 
            class="general-info__input"
            v-model.trim="form.password"
          >
          <label 
            for="password" 
            class="general-info__label"
            :class="validator(form.password)"
          >Текущий пароль</label>
          <span class="form-hint" v-if="v$.form.password.$error">Заполните имя пользователя</span>
        </fieldset>

        <fieldset
          :class="{
            'form-item--error': v$.form.newPassword.$invalid && v$.$dirty,
            'form-item--success': !v$.form.newPassword.$invalid && v$.$dirty,
          }"
        >
          <input 
            type="password" 
            id="newPassword" 
            name="newPassword" 
            class="general-info__input"
            v-model.trim="form.newPassword"
          >
          <label 
            for="newPassword" 
            class="general-info__label"
            :class="validator(form.newPassword)"
          >Новый пароль</label>
          <span class="form-hint" v-if="v$.form.newPassword.$error">Заполните имя пользователя</span>
        </fieldset>
      </div>

      <ButtonUI 
        class="form-account__btn"
        :link="disabled"
        :disabled="v$.$errors.length > 0" 
        :to="'/home'"
      >Сохранить</ButtonUI>
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core"
import { required, email } from "@vuelidate/validators"

export default {
  setup() {
    return { v$: useVuelidate() }
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
        name: "",
        date: "",
        status: "",
        geo: "",
        password: "",
        newPassword: ""
      },
      disabled: false,
    }
  },

  validations() {
    return {
      form: {
        name: { required, $lazy: true },
        date: { required, $lazy: true },
        status: { required, $lazy: true },
        geo: { required, $lazy: true },
        password: { required, $lazy: true },
        newPassword: { required, $lazy: true },
      },
      disabled: false,
    }
  },

  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate()
 
      if (isFormCorrect) {
        console.log('Данные отправлены')
      } else {
        this.disabled = true
      }
    },

    validator(e) {
      if (e.length > 0) {
        return "label--valid"
      } else {
        return ""
      }
    },

    previewImg(e) {
      let file = e.target.files[0]

      if (file) {
        preview.src = URL.createObjectURL(file)

        let img = document.querySelector('.form-account__img img'),
            wrapperImg = document.querySelector('.form-account__img')

        img.classList.add('form-account__img-preview')
        
        wrapperImg.classList.add('form-account__img--active')

        setTimeout(() => {
          wrapperImg.classList.remove('form-account__img--active')
        }, 2800);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "./AccountTab.scss";
</style>
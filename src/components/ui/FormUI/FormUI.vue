<template>
  <form action="form" method="post" class="form" @submit.prevent="submitForm">
    <fieldset
      v-if="register"
      :class="{
        'form-item--error': v$.form.name.$invalid && v$.$dirty,
        'form-item--success': !v$.form.name.$invalid && v$.$dirty,
      }"
    >
      <input
        type="text"
        id="name"
        name="name"
        class="form-input"
        v-model.trim="form.name"
      />
      <label 
        for="name" 
        class="form-label" 
        :class="validator(form.name)"
      >Имя пользователя</label>
      <span class="form-hint" v-if="v$.form.name.$error">Заполните имя пользователя</span>
    </fieldset>

    <fieldset
      :class="{
        'form-item--error': v$.form.email.$invalid && v$.$dirty,
        'form-item--success': !v$.form.email.$invalid && v$.$dirty,
      }"
    >
      <input
        type="text"
        id="email"
        name="email"
        class="form-input"
        v-model.trim="form.email"
        @keydown.space.prevent
      />
      <label 
        for="email" 
        class="form-label" 
        :class="validator(form.email)"
      >Адресс эл. почты</label>
      <span class="form-hint" v-if="v$.form.email.$error">Заполните адресс эл. почты</span>
    </fieldset>

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
        class="form-input"
        v-model.trim="form.password"
        @keydown.space.prevent
      />
      <label 
        for="password" 
        class="form-label" 
        :class="validator(form.password)"
      >Пароль</label>
      <span class="form-hint" v-if="v$.form.password.$error">Заполните пароль</span>
    </fieldset>

    <p class="form-forgot" v-if="!register">Забыли пароль?</p>

    <ButtonUI 
      wide 
      :link="disabled"
      :to="'/login'"
      :disabled="v$.$error" 
      v-if="register" class="form-button"
    >Зарегистрироваться</ButtonUI>

    <ButtonUI
      :link="disabled"
      :to="'/home'"
      wide
      :disabled="v$.$errors.length > 1" 
      v-else 
      class="form-button"
    >Вход</ButtonUI>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core"
import { required, email } from "@vuelidate/validators"

export default {
  name: "FormUI",

  setup() {
    return { v$: useVuelidate() }
  },

  props: {
    register: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      disabled: false,
    }
  },

  validations() {
    return {
      form: {
        name: { required, $lazy: true },
        email: { required, email, $lazy: true },
        password: { required, $lazy: true },
      },
    }
  },

  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate()
 
      if (isFormCorrect && this.register) {
        console.log('Данные отправлены')
        
      } else if (!this.register && this.v$.$errors.length == 1) {
        console.log('Данные отправлены')
      } else {
        this.disabled = true
      }
    },

    validator(e) {
      if (e.length > 0) {
        return "form-label--valid"
      } else {
        return ""
      }
    }
  }
};
</script>

<style src="./FormUI.css" scoped>
</style>
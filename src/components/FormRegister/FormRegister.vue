<template>
  <form action="form" method="post" class="form" @submit.prevent="submitForm">
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
      <InputUI
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

      <span class="form-hint" v-if="v$.form.email.$error"
        >Заполните адресс эл. почты</span>
    </fieldset>

    <fieldset
      :class="{
        'form-item--error': v$.form.password.$invalid && v$.$dirty,
        'form-item--success': !v$.form.password.$invalid && v$.$dirty,
      }"
    >
      <InputUI
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

      <span class="form-hint" v-if="v$.form.password.$error"
        >Заполните пароль</span>
    </fieldset>

    <ButtonUI 
			wide 
			:disabled="v$.$error" 
			class="form-button"
		>Зарегистрироваться</ButtonUI>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
	setup() {
    return { v$: useVuelidate() };
  },

	data() {
    return {
      form: {
				name: "",
        email: "",
        password: ""
      }
    };
  },

  validations() {
    return {
      form: {
				name: { required, $lazy: true },
        email: { required, email, $lazy: true },
        password: { required, $lazy: true },
      },
    };
  },

	methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();

      if (isFormCorrect) {
        this.$router.push('/login')
      }
    },

    validator(e) {
      if (e.length > 0) {
        return "form-label--valid";
      } else {
        return "";
      }
    },
  },
};
</script>

<style src="./FormRegister.css" scoped>
</style>
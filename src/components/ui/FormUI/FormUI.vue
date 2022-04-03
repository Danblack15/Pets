<template>
  <form action="form" method="post" class="form" @submit.prevent="submitForm">
    <fieldset v-if="register" id="nameBlock">
      <input
        type="text"
        id="name"
        name="name"
        class="form-input"
        v-model.trim="form.name"
				@change="unDisabled"
      />
      <label for="name" class="form-label" :class="validator(form.name)"
        >Имя пользователя</label
      >
      <span class="form-hint">Заполните имя пользователя</span>
    </fieldset>

    <fieldset id="emailBlock">
      <input
        type="text"
        id="email"
        name="email"
        class="form-input"
        v-model.trim="form.email"
        @keydown.space.prevent
				@change="unDisabled"
      />
      <label for="email" class="form-label" :class="validator(form.email)"
        >Адресс эл. почты</label
      >
      <span class="form-hint">Заполните адресс эл. почты</span>
    </fieldset>

    <fieldset id="passwordBlock">
      <input
        type="password"
        id="password"
        name="password"
        class="form-input"
        v-model.trim="form.password"
        @keydown.space.prevent
				@change="unDisabled"
      />
      <label for="password" class="form-label" :class="validator(form.password)"
        >Пароль</label
      >
      <span class="form-hint">Заполните пароль</span>
    </fieldset>

    <p class="form-forgot" v-if="!register">Забыли парль?</p>

    <ButtonUI wide :disabled="disabled" v-if="register" class="form-button"
      >Зарегистрироваться</ButtonUI
    >
    <ButtonUI wide :disabled="disabled" v-else class="form-button">Вход</ButtonUI>
  </form>
</template>

<script>
export default {
  name: "FormUI",

  props: {
    register: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
			disabled: false
    }
  },

  methods: {
    submitForm() {
      if (this.validInput()) {
        
      } else {
				this.disabled = true
			}
    },

    validInput() {
      let regularEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
      let formElem = document.querySelectorAll(".form fieldset");
      let inc = 0;

      formElem.forEach((item) => {
        let input = item.children[0];

        if (input.value == 0) {
          item.classList.remove("form--success");
          item.classList.add("form--error");
        } else {
          if (input.getAttribute("name") == "email") {
            if (!regularEmail.test(input.value)) {
              item.classList.remove("form--success");
              item.classList.add("form--error");
            } else {
              item.classList.add("form--success");
              item.classList.remove("form--error");
              inc++;
            }
          } else {
            item.classList.add("form--success");
            item.classList.remove("form--error");
            inc++;
          }
        }
      });

      if (inc == formElem.length) {
        return true;
      } else {
        return false;
      }
    },

    validator(e) {
      if (e.length > 0) {
        return "form-label--valid";
      } else {
        return "";
      }
    },

		unDisabled() {
			this.disabled = false
		}
  }
};
</script>

<style src="./FormUI.css" scoped>
</style>
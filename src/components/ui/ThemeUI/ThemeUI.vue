<template>
  <div class="theme" id="theme">
    <label for="blackTheme" class="theme__label theme__black active" @click.stop>
      <input class="theme-input" type="radio" name="theme" id="blackTheme" @click="theme"/>
      <img src="@/assets/img/moonWhite.svg" alt="blackTheme" @click.stop/>
    </label>
    <label for="whiteTheme" class="theme__label theme__white" @click.stop>
      <input class="theme-input" type="radio" name="theme" id="whiteTheme" @click="theme"/>
      <img src="@/assets/img/sunWhite.svg" alt="whiteTheme" @click.stop/>
    </label>
  </div>
</template>

<script>
export default {
  name: "ThemeUI",

  methods: {
    theme(e) {
      let elem = e.target.parentNode
      
      document.getElementsByClassName('theme__black')[0].classList.remove('active')
      document.getElementsByClassName('theme__white')[0].classList.remove('active')
      
      elem.classList.add('active')

      let theme = elem.getAttribute('for')

      //Вместо изменения классов будет обращение к VUEX для изменения темы
      if (theme == 'whiteTheme') {
        document.getElementById('theme').classList.add('whiteTheme')
      } else {
        document.getElementById('theme').classList.remove('whiteTheme')
      }
    }
  }
};
</script>

<style src="./ThemeUI.css" scoped>
</style>
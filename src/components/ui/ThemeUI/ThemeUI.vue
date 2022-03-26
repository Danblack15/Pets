<template>
  <!-- <div class="theme theme-white" v-if="white">
    <label for="blackTheme" class="theme__black">
      <input type="radio" name="theme" id="blackTheme" />
      <img src="@/assets/img/moonWhite.svg" alt="blackTheme" />
    </label>
    <label for="whiteTheme" class="theme__white active">
      <input type="radio" name="theme" id="whiteTheme" />
      <img src="@/assets/img/sunWhite.svg" alt="whiteTheme" />
    </label>
  </div> -->

  <div class="theme theme-laptop theme-white" v-if="laptop && white">
    <label for="blackTheme" class="theme__black">
      <input type="radio" name="theme" id="blackTheme" />
      <img src="@/assets/img/moonWhite.svg" alt="blackTheme" />
    </label>
    <label for="whiteTheme" class="theme__white active">
      <input type="radio" name="theme" id="whiteTheme" />
      <img src="@/assets/img/sunWhite.svg" alt="whiteTheme" />
    </label>
  </div>

  <div class="theme theme-laptop" v-else-if="laptop & black">
    <label for="blackTheme" class="theme__black">
      <input type="radio" name="theme" id="blackTheme" />
      <img src="@/assets/img/moon.svg" alt="blackTheme" />
    </label>
    <label for="whiteTheme" class="theme__white active">
      <input type="radio" name="theme" id="whiteTheme" />
      <img src="@/assets/img/sun.svg" alt="whiteTheme" />
    </label>
  </div>

  <div class="theme theme-tablet theme-white" v-else-if="tablet && white">
    <label for="blackTheme" class="theme__black">
      <input type="radio" name="theme" id="blackTheme" />
      <img src="@/assets/img/moonWhite.svg" alt="blackTheme" />
    </label>
    <label for="whiteTheme" class="theme__white active">
      <input type="radio" name="theme" id="whiteTheme" />
      <img src="@/assets/img/sunWhite.svg" alt="whiteTheme" />
    </label>
  </div>

	<div class="theme theme-tablet" v-else-if="tablet && black">
    <label for="blackTheme" class="theme__black active">
      <input type="radio" name="theme" id="blackTheme" />
      <img src="@/assets/img/moon.svg" alt="blackTheme" />
    </label>
    <label for="whiteTheme" class="theme__white">
      <input type="radio" name="theme" id="whiteTheme" />
      <img src="@/assets/img/sun.svg" alt="whiteTheme" />
    </label>
  </div>

  <div class="theme theme-mobile theme-white" v-else-if="mobile && white">
    <label for="blackTheme" class="theme__black">
      <input type="radio" name="theme" id="blackTheme" />
      <img src="@/assets/img/moonWhite.svg" alt="blackTheme" />
    </label>
    <label for="whiteTheme" class="theme__white active">
      <input type="radio" name="theme" id="whiteTheme" />
      <img src="@/assets/img/sunWhite.svg" alt="whiteTheme" />
    </label>
  </div>

	<div class="theme theme-mobile" v-else-if="mobile && black">
    <label for="blackTheme" class="theme__black active">
      <input type="radio" name="theme" id="blackTheme" />
      <img src="@/assets/img/moon.svg" alt="blackTheme" />
    </label>
    <label for="whiteTheme" class="theme__white">
      <input type="radio" name="theme" id="whiteTheme" />
      <img src="@/assets/img/sun.svg" alt="whiteTheme" />
    </label>
  </div>

  <div class="theme theme-white" v-else-if="white">
    <label for="blackTheme" class="theme__black">
      <input type="radio" name="theme" id="blackTheme" />
      <img src="@/assets/img/moonWhite.svg" alt="blackTheme" />
    </label>
    <label for="whiteTheme" class="theme__white active">
      <input type="radio" name="theme" id="whiteTheme" />
      <img src="@/assets/img/sunWhite.svg" alt="whiteTheme" />
    </label>
  </div>

  <div class="theme" v-else>
    <label for="blackTheme" class="theme__black active">
      <input type="radio" name="theme" id="blackTheme" />
      <img src="@/assets/img/moon.svg" alt="blackTheme" />
    </label>
    <label for="whiteTheme" class="theme__white">
      <input type="radio" name="theme" id="whiteTheme" />
      <img src="@/assets/img/sun.svg" alt="whiteTheme" />
    </label>
  </div>
</template>

<script>
export default {
  name: "ThemeUI",

  props: {
    white: {
      type: Boolean,
      default: false,
    },
    laptop: {
      type: Boolean,
      default: false,
    },
		tablet: {
			type: Boolean,
      default: false,
		},
		mobile: {
			type: Boolean,
      default: false,
		},
    black: {
      type: Boolean,
      default: true
    }
  },
};
</script>

<style src="./ThemeUI.css" scoped>
</style>
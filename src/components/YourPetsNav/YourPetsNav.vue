<template>
  <div :class="['pets-nav', {
		'pets-nav--white': whiteTheme
	}]">
    <div class="pets-nav__item">
			<p :class="['pets-nav__number', 
					{'pets-nav__number--active': indexItem >= 1}]"
			>1</p>
			<div :class="['pets-nav__line', 
					{'pets-nav__line--active': indexItem == 1},
					{'pets-nav__line--activated': indexItem > 1}]"
			>
					<span class="pets-nav__line-active"></span>
			</div>
    </div>
    <div class="pets-nav__item">
			<p :class="['pets-nav__number', 
					{'pets-nav__number--active': indexItem >= 2}]"
			>2</p>
			<div :class="['pets-nav__line', 
					{'pets-nav__line--active': indexItem == 2},
					{'pets-nav__line--activated': indexItem > 2}]"
			>
					<span class="pets-nav__line-active"></span>
			</div>
    </div>
    <div class="pets-nav__item">
			<p :class="['pets-nav__number', 
					{'pets-nav__number--active': indexItem >= 3}]"
			>3</p>
			<div :class="['pets-nav__line', 
					{'pets-nav__line--active': indexItem == 3},
					{'pets-nav__line--activated': indexItem > 3}]"
			>
					<span class="pets-nav__line-active"></span>
			</div>
    </div>
    <div class="pets-nav__item">
			<p :class="['pets-nav__number', 
					{'pets-nav__number--active': indexItem >= 4}]"
			>4</p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
			indexItem: {
					type: Number
			},
			whiteTheme: {
				type: Boolean,
				default: false
			}
    }
}
</script>

<style lang="scss">
@import "./YourPetsNav.scss";
</style>
<template>
	<div class="checkBox" v-if="whiteTheme !== null">
		<input 
			class="checkBox-input" 
			type="checkbox" 
			:name="name" 
			:id="name" 
			v-model="data" 
			:checked="!whiteTheme"
			@click="setting" 
			@change="themeChange"
		/>
		<label :for="name" class="checkBox__label">
			<div class="checkBox__label-oval">
				<div class="checkBox__label-circle"></div>
			</div>
			<p class="checkBox__label-title">
				<slot></slot>
			</p>
		</label>
	</div>

	<div class="checkBox" v-else>
		<input 
			class="checkBox-input" 
			type="checkbox" 
			:name="name" 
			:id="name" 
			v-model="data" 
			:checked="data"
			@click="setting" 
		/>
		<label :for="name" class="checkBox__label">
			<div class="checkBox__label-oval">
				<div class="checkBox__label-circle"></div>
			</div>
			<p class="checkBox__label-title">
				<slot></slot>
			</p>
		</label>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	props: {
		name: {
			type: String,
			default: "default",
		},
		whiteTheme: {
			type: Boolean,
			default: null
		}
	},

	data() {
		return {
			data: localStorage[this.name] == 'true'
		}
	},

	methods: {
		...mapActions({
			changeTheme: "data/changeWhiteTheme"
		}),

		setting() {
			localStorage.setItem(this.name, !this.data)
		},

		themeChange() {
			this.changeTheme()
		}
	},

	name: "CheckBox",
};
</script>

<style lang="scss">
@import "./CheckBoxUI.scss";
</style>
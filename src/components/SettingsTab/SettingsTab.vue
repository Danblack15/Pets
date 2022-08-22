<template>
	<div :class="['settings-tab', {
		'settings-tab--white': whiteTheme
	}]">
		<h4 class="settings-tab__title">Настройки</h4>
		<div class="settings-tab__account">
			<h5 class="settings-tab__account-title">Аккаунт</h5>
			<div class="settings-tab__account-item">
				<CheckBoxUI :name="'noti'">Включить уведомления</CheckBoxUI>
			</div>
			<div class="settings-tab__account-item">
				<CheckBoxUI :name="'mailing'">Получать новостную рассылку</CheckBoxUI>
			</div>

			<h5 class="settings-tab__account-title">Приложение</h5>
			<div class="settings-tab__account-item">
				<CheckBoxUI :name="'theme-black'" :whiteTheme="whiteTheme">Включить ночной режим</CheckBoxUI>
			</div>
			<div class="settings-tab__account-item">
				<CheckBoxUI :name="'noti-sound'">Получать уведомления со звуком</CheckBoxUI>
			</div>
			<div class="settings-tab__account-item">
				<CheckBoxUI :name="'noti-brows'">Браузерные уведомления</CheckBoxUI>
			</div>
		</div>
	</div>
</template>

<script>
import CheckBoxUI from '../ui/CheckBoxUI/CheckBoxUI.vue';
export default {
	components: { CheckBoxUI },

	props: {
    whiteTheme: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "./SettingsTab.scss";
</style>
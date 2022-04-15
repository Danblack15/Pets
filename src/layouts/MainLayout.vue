<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
import markRaw from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout'

export default {
  name: "MainLayout",

	data() {
		return {
			layout: DefaultLayout
		}
	},

  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        try {
          const component = await import(
            `@/layouts/${route.meta.layout}/${route.meta.layout}.vue`
          );
          this.layout = component?.default || DefaultLayout
        } catch (e) {
          this.layout = DefaultLayout;
        }
      },
    },
  },
};
</script>

<style>
</style>
<template>
  <section class="progress">
    <ProgressGraph :chartData="chartData"/>
    <ProgressListUI :chartData="chartData"/>
  </section>
</template>

<script>
export default {
  name: "ProgressDayUI",

  data() {
    return {
      chartData: [
				{
					title: 'Прогулка в парке',
					color: '#66CB9F',
					complete: true
				},
				{
					title: 'Обед',
					color: '#FFEF5E',
					complete: true
				},
				{
					title: 'Перекус',
					color: '#F16063',
					complete: true
				},
				{
					title: 'Игры',
					color: '#4C6FFF',
					complete: true
				}
			]
    }
  }
};
</script>

<style src="./ProgressDayUI.css" scoped>
</style>
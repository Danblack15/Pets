<template>
  <section :class="['progress', {
    'progress--white': whiteTheme
  }]">
    <ProgressGraph :chartData="chartData" :whiteTheme="whiteTheme"/>
    <ProgressListUI :chartData="chartData" :whiteTheme="whiteTheme"/>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "ProgressDayUI",

  data() {
    return {
      chartData: [
        {
          title: "Прогулка в парке",
          color: "#66CB9F",
          complete: true,
        },
        {
          title: "Обед",
          color: "#FFEF5E",
          complete: true,
        },
        {
          title: "Перекус",
          color: "#F16063",
          complete: true,
        },
        {
          title: "Игры",
          color: "#4C6FFF",
          complete: true,
        },
      ],
    }
	
  },

  computed: {
    ...mapGetters({
      whiteTheme: "data/getWhiteTheme"
    })
  }
};
</script>

<style src="./ProgressDayUI.css" scoped>
</style>
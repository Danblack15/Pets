<template>
  <section :class="['graph', {
    'graph--white': whiteTheme
  }]">
    <div class="graph__circle">
      <p class="graph__circle-percent">{{ totalPer }}%</p>
    </div>
    <svg class="chart" viewBox="0 0 35 35">
      <template v-for="(item, index) in sortCompletedData" :key="item.name">
        <circle
          class="chart__unit"
          r="15.9" cx="50%" cy="50%"
          v-if="item.complete"
          :style="{
            stroke: item.color,
            'stroke-dasharray': 100 / chartData.length + ' 100',
            'stroke-dashoffset': -(100 / chartData.length) * index
          }"
        ></circle>
      </template>
    </svg>
  </section>
</template>

<script>
export default {
  name: "ProgressGraph",

  props: {
    chartData: {
      type: Array,
    },

    whiteTheme: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    sortCompletedData() {
      return this.chartData.filter((p) => p.complete);
    },

    totalPer() {
      let inc = 0,
        data = this.chartData

      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          const item = data[key]

          if (item.complete) {
            inc++
          }
        }
      }

      return Math.trunc((100 / data.length) * inc)
    },
  },
  
};
</script>

<style src="./ProgressGraph.css" scoped>
</style>
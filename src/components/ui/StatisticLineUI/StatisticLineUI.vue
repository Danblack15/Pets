<template>
  <div :class="['chart-item', {
    'chart-item--white': whiteTheme
  }]">
    <div class="chart-item__line">
      <span class="chart-item__likes" :style="{'height': likesLine + '%'}"></span>
      <span class="chart-item__views" :style="{'height': viewsLine + '%'}"></span>
    </div>
    <div class="chart-item__date">
      <p>{{day}}</p>
      <p>{{ weekDay[0].value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticLineUI",

  props: {
    item: {
      type: Object
    },
    day: {
      type: Number
    },
    whiteTheme: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      week: [
        {
          id: 1,
          value: 'ПН'
        },
        {
          id: 2,
          value: 'ВТ'
        },
        {
          id: 3,
          value: 'СР'
        },
        {
          id: 4,
          value: 'ЧТ'
        },
        {
          id: 5,
          value: 'ПТ'
        },
        {
          id: 6,
          value: 'СБ'
        },
        {
          id: 7,
          value: 'ВС'
        },
      ] 
    }
  },

  computed: {
    likesLine() {
      let total = this.item.likes + this.item.views,
          height = this.item.likes * 100 / (total + 2)

      return height
    },

    viewsLine() {
      let total = this.item.likes + this.item.views,
          height = this.item.views * 100 / (total + 2)

      return height
    },

    weekDay() {
      return this.week.filter((p) => p.id == this.item.id)
    }
  }
};
</script>

<style src="./StatisticLineUI.css" scoped>
</style>
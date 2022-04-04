<template>
  <div class="chart-item">
    <div class="chart-item__line">
      <span class="chart-item__likes" :style="{'height': likesLine + '%'}"></span>
      <span class="chart-item__views" :style="{'height': viewsLine + '%'}"></span>
    </div>
    <div class="chart-item__date">
      <p>{{day}}</p>
      <p><slot></slot></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticLineUI",

  props: {
    day: {
      type: Number
    }
  },

  data() {
    return {
      data: {
        likes: 3,
        views: 10
      },
    }
  },

  computed: {
    likesLine() {
      let total = this.data.likes + this.data.views,
          height = this.data.likes * 100 / total

      return height
    },

    viewsLine() {
      let total = this.data.likes + this.data.views,
          height = this.data.views * 100 / total

      return height
    }
  }
};
</script>

<style src="./StatisticLineUI.css" scoped>
</style>
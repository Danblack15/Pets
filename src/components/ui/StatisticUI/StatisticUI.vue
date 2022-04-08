<template>
  <section class="statistic" v-if="data.length">
      <div class="statistic__person">
          <div class="statistic__person__avatar" :style="{'background-image': `url(${data[0].img})`}">
              <div class="statistic__person__select">
                  <span><ArrowUI left class="statistic__person__select__arrow"/></span>
                  <span><ArrowUI class="statistic__person__select__arrow"/></span>
              </div>
          </div>
          <div class="statistic__person__name">
              <h3>{{ data[0].name }}</h3>
              <h4>{{ data[0].likes }} лайка</h4>
          </div>
      </div>
      <div class="statistic__data">
          <div class="statistic__data__name">
              <p>Лайки <span class="statistic__data__likes-circle"></span></p>
              <p>Просмотры <span class="statistic__data__view-circle"></span></p>
          </div>
          <div class="statistic__data__chart">
              <StatisticLineUI 
                v-for="(item, index) in data[0].graphic"
                :key="item.id"
                :item="item"
                :day="dayWeek(index)"
              />
          </div>
      </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "StatisticUI",

    data() {
        return {
            img: 'https://demotivation.ru/wp-content/uploads/2020/07/unnamed-1-768x768.jpg'
        }
    },

    mounted() {
        this.fetchData()
    },

    methods: {
        ...mapActions({
            fetchData: "data/likesData"
        }),

        dayWeek(index) {
            let d = new Date()

            d.setDate(d.getDate() - (6 - index))

            return d.getDate()
        }
    },

    computed: {
        ...mapGetters({
            data: "data/statisticLikes"
        }),

    }


}
</script>

<style src="./StatisticUI.css" scoped>

</style>
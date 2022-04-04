<template>
  <section class="statistic">
      <div class="statistic__person">
          <div class="statistic__person__avatar" :style="{'background-image': `url(${img})`}">
              <div class="statistic__person__select">
                  <span><ArrowUI left class="statistic__person__select__arrow"/></span>
                  <span><ArrowUI class="statistic__person__select__arrow"/></span>
              </div>
          </div>
          <div class="statistic__person__name">
              <h3>Jhony</h3>
              <h4>3 лайка</h4>
          </div>
      </div>
      <div class="statistic__data">
          <div class="statistic__data__name">
              <p>Лайки <span class="statistic__data__likes-circle"></span></p>
              <p>Просмотры <span class="statistic__data__view-circle"></span></p>
          </div>
          <div class="statistic__data__chart">
              <StatisticLineUI :day="17">пн</StatisticLineUI>
              <StatisticLineUI :day="18">вт</StatisticLineUI>
              <StatisticLineUI :day="19">ср</StatisticLineUI>
              <StatisticLineUI :day="20">чт</StatisticLineUI>
              <StatisticLineUI :day="21">пт</StatisticLineUI>
              <StatisticLineUI :day="22">сб</StatisticLineUI>
              <StatisticLineUI :day="23">вс</StatisticLineUI>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    name: "StatisticUI",

    data() {
        return {
            img: 'https://demotivation.ru/wp-content/uploads/2020/07/unnamed-1-768x768.jpg'
        }
    }
}
</script>

<style src="./StatisticUI.css" scoped>

</style>
<template>
  <section :class="['data-block', {
    'data-block--white': whiteTheme
  }]">
    <div class="data-block__time">
      <div class="data-block__time-up">
        <div>
          <img src="@/assets/img/clock.svg" alt="whatch" />
        </div>
        <p>На часах у нас</p>
      </div>
      <h3>{{ time }}</h3>
    </div>
    <div class="data-block__date">
      <div class="data-block__date-up">
        <div>
          <img src="@/assets/img/calendar.svg" alt="calendary" />
        </div>
        <p>На календаре у нас</p>
      </div>
      <h3>{{ dateNow }}</h3>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "DataUI",

  data() {
    return {
      time: '00:00',
    };
  },

  created() {
    setInterval(this.timeNow, 1000);
  },

  mounted() {
    this.timeNow()
  },

  methods: {
    timeNow() {
      let date = new Date(),
        hour = date.getHours(),
        minutes = String(date.getMinutes());

      if (minutes.length == 1) {
        minutes = `0${minutes}`;
      }

      this.time = `${hour}:${minutes}`;
    },
  },

  computed: {
    ...mapGetters({
      whiteTheme: "data/getWhiteTheme"
    }),

    dateNow() {
      let date = new Date(),
        year = date.getFullYear(),
        month = String(date.getMonth() + 1),
        day = String(date.getDate());

      if (month.length == 1) {
        month = `0${month}`;
      }

      if (day.length == 1) {
        day = `0${day}`;
      }

      return `${day}.${month}.${year}`;
    },
  },
};
</script>

<style src="./DataUI.css" scoped>
</style>
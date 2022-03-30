<template>
  <section class="data-block">
      <div class="data-block__time">
          <div class="data-block__time-up">
              <div>
                <img src="@/assets/img/clock.svg" alt="whatch">
              </div>
              <p>На часах у нас</p>
          </div>
          <h3>3:46</h3>
      </div>
      <div class="data-block__date">
          <div class="data-block__date-up">
              <div>
                <img src="@/assets/img/calendar.svg" alt="calendary">
              </div>
              <p>На календаре у нас</p>
          </div>
          <h3>05.10.2021</h3>
      </div>
  </section>
</template>

<script>
export default {
    name: "DataUI",

    props: {
      
    }
}
</script>

<style src="./DataUI.css" scoped>

</style>
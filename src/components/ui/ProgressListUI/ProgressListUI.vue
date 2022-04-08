<template>
  <div class="progress-list">
    <p class="progress-list-name">Ежедневный прогресс</p>
    <ul class="progress-list__list">
      <li
        class="progress-list__item"
        v-for="item in chartData"
        :key="item.title"
      >
        <div 
          class="progress-list__status"
          :style="{
            'background': item.color
          }"
        >
          <img v-if="item.complete" src="@/assets/img/complete.svg" alt="cross">
          <img v-else src="@/assets/img/cross.svg" alt="cross">
        </div>
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProgressListUI",

  props: {
    chartData: {
      type: Array
    }
  }
};
</script>

<style src="./ProgressListUI.css" scoped>
</style>
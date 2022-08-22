<template>
  <section :class="['statistic', {
      'statistic--white':whiteTheme
    }]" 
    v-if="data.length">
    <div class="statistic__person">
      <div
        class="statistic__person__avatar"
        :style="{ 'background-image': `url(${data[petId].img})` }"
      >
        <div class="statistic__person__select">
          <span>
						<ArrowUI 
							left 
							class="statistic__person__select__arrow" 
							@click="backPet"
						/>
					</span>
          <span>
						<ArrowUI 
							class="statistic__person__select__arrow" 
							@click="nextPet"
						/>
					</span>
        </div>
      </div>
      <div class="statistic__person__name">
        <h3>{{ data[petId].name }}</h3>
        <h4>{{ data[petId].likes }} лайка</h4>
      </div>
    </div>
		
    <div class="statistic__data">
      <div class="statistic__data__name">
        <p>Лайки <span class="statistic__data__likes-circle"></span></p>
        <p>Просмотры <span class="statistic__data__view-circle"></span></p>
      </div>
      <div class="statistic__data__chart">
        <StatisticLineUI
          v-for="(item, index) in data[petId].graphic"
          :key="item.id"
          :item="item"
          :day="dayWeek(index)"
          :whiteTheme="whiteTheme"
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
			petId: 0
		};
  },

  mounted() {
    this.likesData()
  },

  methods: {
    ...mapActions({
      likesData: "data/likesData"
    }),

		nextPet() {
			if (this.petId < this.data.length - 1)
				this.petId++
		},

		backPet() {
			if (this.petId > 0)
				this.petId--
		},

    dayWeek(index) {
      let d = new Date();

      d.setDate(d.getDate() - (6 - index));

      return d.getDate();
    },
  },

  computed: {
    ...mapGetters({
      data: "data/statisticLikes",
      whiteTheme: "data/getWhiteTheme"
    }),
  },
};
</script>

<style src="./StatisticUI.css" scoped>
</style>
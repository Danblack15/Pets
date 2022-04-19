<template>
  <section class="home">
      <div class="home__general" v-show="!loading">
        <WelcomeBackUI />
        <ProgressDayUI class="home__general__chart"/>
        <DataUI class="home__general__date"/>
      </div>

      <PostsList />
      
      <div class="home__bottom" v-if="!loading">
        <HomePetsList />
        <WriteNowUI class="home__bottom__write-now"/>
        <StatisticUI class="home__bottom__statistic"/>
      </div>
  </section>
  <section class="loading" v-if="loading">
    <div class="loading__animate-wrapper">
      <img src="@/assets/img/leganimate.svg" alt="leg" class="loading__img loading__img-left">
      <img src="@/assets/img/leganimate.svg" alt="leg" class="loading__img loading__img-right">
    </div>
  </section>
</template>

<script>
import {mapGetters} from "vuex"

import PostsList from '@/components/PostsList/PostsList'
import HomePetsList from '@/components/HomePetsList/HomePetsList'

export default {
    components: {
        PostsList,
        HomePetsList
    },

    computed: {
      ...mapGetters({
        loading: "data/getLoadingHome"
      })
    }
}
</script>

<style src="./HomePage.css" scoped>

</style>
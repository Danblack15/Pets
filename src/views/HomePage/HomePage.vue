<template>
  <section class="home" v-show="!loading">
    <WelcomeBackUI class="home__welcome-back" />
    <ProgressDayUI class="home__chart" />
    <DataUI class="home__date" />

    <MediaSlider class="home__media-slider" />

    <PostsList class="home__post-list"/>

    <HomePetsList class="home__pets-list"/>
    <WriteNowUI class="home__write-now" />
    <StatisticUI class="home__statistic" />
  </section>

  <section class="loading" v-if="loading">
    <div class="loading__animate-wrapper">
      <img
        src="@/assets/img/leganimate.svg"
        alt="leg"
        class="loading__img loading__img-left"
      />
      <img
        src="@/assets/img/leganimate.svg"
        alt="leg"
        class="loading__img loading__img-right"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

import PostsList from "@/components/PostsList/PostsList";
import HomePetsList from "@/components/HomePetsList/HomePetsList";
import MediaSlider from "@/components/MediaSlider/MediaSlider"

export default {
  components: {
    PostsList,
    HomePetsList,
    MediaSlider
  },

  computed: {
    ...mapGetters({
      loading: "data/getLoadingHome"
    }),
  },
};
</script>

<style src="./HomePage.css" scoped>
</style>
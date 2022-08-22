<template>
	<section 
		class="news-list masonry"
		v-masonry
		column-width="50"
		item-selector=".news-list__item"
		transition-duration="0.3s" 
		stagger="0.03s"
	>
		<NewsItemUI 
			class="news-list__item"
			v-masonry-tile
			v-for="(news, index) in allNews"
			:key="news"
			:news="news"
			:style="{'z-index': 99 - index}"
		/>
		
	</section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters({
			allNews: "data/getAllNews"
		})
	}
}
</script>

<style lang="scss">
@import './NewsList.scss';
</style>
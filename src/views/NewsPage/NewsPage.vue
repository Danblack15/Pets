<template>
	<div class="news">
		<section class="news__wrapper">
			<WritePost />

			<NewsList />
		</section>
	</div>
</template>

<script>
import WritePost from '@/components/WritePost/WritePost'
import NewsList from '@/components/NewsList/NewsList'

export default {
	components: {
		WritePost,
		NewsList
	}
}
</script>

<style lang="scss">
@import './NewsPage.scss';
</style>
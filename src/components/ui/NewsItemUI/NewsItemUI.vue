<template>
	<div class="news-item" v-show="imgLoaded || !news.images">
		<div class="news-item__header">
			<AvatarUI class="news-item__header-avatar" :img="news.person.preview"/>
			<div class="news-item__header-wrapper">
				<div class="news-item__header-general">
					<h4>{{ news.person.name }}</h4>
					<p class="news-item__header-text--gray news-item__header-desk">{{ news.person.desk }}</p>
				</div>
				<div class="news-item__header-time">
					<p class="news-item__header-text--gray">{{ parseDate }}</p>
					<p class="news-item__header-text--gray">{{ parseTime }}</p>
				</div>
			</div>
		</div>

		<p class="news-item__text">{{ news.text }}</p>

		<section 
			v-if="news.images"
			:class="['news-item__wrapper-img', 'masonry', {
				'masonry--one': news.images.length == 1,
				'masonry--two': news.images.length == 2,
				'masonry--three': news.images.length == 3 && (randomCollage === 0),
				'masonry--three-dop': news.images.length == 3 && (randomCollage === 1),
				'masonry--thour': news.images.length == 4 && (randomCollage === 0),
				'masonry--thour-dop': news.images.length == 4 && (randomCollage === 1),
				'masonry--five': news.images.length == 5 && (randomCollage === 0),
				'masonry--five-dop': news.images.length == 5 && (randomCollage === 1)
			}]" 
		>
			<div 
				class='masonry__item'
				v-for="(img, index) in news.images"
				:key="img"
				@click="lookImgFun(index)"
			>
				<img 
					:src="img" 
					alt="img" 
					@load="imgLoadedFun"
					:class="['masonry__img', {
						'masonry__img--loaded': imgLoadedFun
					}]"
				/>
			</div>
			<div class="masonry__full-wrapper" v-if="fullImgShow" @click="fullImgShow = false">
				<img :src="news.images[indexImg]" alt="img" class="masonry__full-img"/>
			</div>
		</section>

		<div class="news-item__statistic">
			<div class="news-item__likes">
				<svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="news-item__heart"
					@click.stop="likePet"
        >
          <path
            d="M8.99609 15.5C8.99609 15.5 16.9961 9.93631 16.9961 4.66032C16.9961 -0.615631 9.89511 -1.01304 8.99609 4.26976C8.09704 -1.01304 0.996094 -0.60878 0.996094 5.07143C0.996094 10.7517 8.99609 15.5 8.99609 15.5Z"
            stroke="#F16063"
            stroke-linejoin="round"
						:class="{'news-item__heart--liked': liked}"
          />
        </svg>
				<p class="news-item__statistic-text">{{ petLikes }} лайка</p>
			</div>
			<div class="news-item__comments">
				<img src="@/assets/img/comments.svg" alt="comments">
				<p class="news-item__statistic-text">{{ news.comments }} комментариев</p>
			</div>
		</div>

		<form 
			action="comments" 
			method="post" 
			class="news-item__form"
		>
			<div class="news-item__form-avatar">
				<AvatarUI />
			</div>
			<textarea 
				type="text" 
				class="news-item__input" 
				placeholder="Написать комментарий..."
				@keydown="textareaHeight"
			></textarea>
		</form>
	</div>
</template>

<script>



export default {
	props: {
		news: {
			type: Object,
			required: true
		}
	},

	data() {
		return {
			liked: false,
			petLikes: this.news.likes,
			imgLoaded: false,
			indexImg: 0,
			fullImgShow: false
		}
	},

	methods: {
		likePet() {
			this.liked = !this.liked
			
			if(this.liked) {
				this.petLikes++
			} else {
				this.petLikes--
			}
		},

		textareaHeight(e) {
			let {target} = e
    
      target.style.height = "1px"
      target.style.height = (target.scrollHeight - 3) + "px"
		},

		imgLoadedFun() {
			this.imgLoaded = true
		},

		lookImgFun(index) {
			this.fullImgShow = true
			this.indexImg = index
		}
	},

	computed: {
		parseDate() {
			const apiDate = this.news.time

			const date = new Date(apiDate)

			console.log(`${date.getHours()}:${date.getMinutes()}`)

			let month = date.getMonth(),
					day = date.getDate()

			const months = {
				0: 'января',
				1: 'февраля',
				2: 'марта',
				3: 'апреля',
				4: 'майя',
				5: 'июня',
				6: 'июля',
				7: 'августа',
				8: 'сентября',
				9: 'октября',
				10: 'ноября',
				11: 'декабря'
			}

			let correctMonth = months[month]

			return `${day} ${correctMonth}`
		},

		parseTime() {
			const apiDate = this.news.time

			const date = new Date(apiDate)

			let hours = date.getHours(),
					minutes = date.getMinutes()

			if (minutes < 10)
				minutes = `0${minutes}`

			let time = `${hours}:${minutes}`

			return time
		},

		randomCollage() {
			let randomValue = Math.floor(Math.random() * 2)

			return randomValue
		}
	},
	
  name: "NewsItemUI"
}
</script>

<style lang="scss">
@import './NewsItemUI.scss';
</style>
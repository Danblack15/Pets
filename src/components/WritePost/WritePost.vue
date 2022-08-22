<template>
	<form class="write-post">
		<AvatarUI class="write-post__avatar"/>

		<textarea 
			name="post" 
			id="post" 
			class="write-post__textarea" 
			:placeholder="randomPlaceholder"
			@keydown="textareaHeight"
			v-model.trim="post.text"
		></textarea>

		<div class="write-post__photo">
			<input 
				type="file" 
				multiple 
				id="images" 
				name="images" 
				class="write-post__photo-input"
				accept=".jpg, .jpeg, .png"
				@change="changeImg"
			/>
			<label for="images" v-if="post.images.length == 0">
				<img src="@/assets/img/news-add-photo.svg" alt="photo" class="write-post__photo-img" />
			</label>
			<div class="write-post__wrapper-images" v-if="post.images.length > 0">
        <div 
          v-for="image in post.images"
          :key="image"
          class="write-post__selected-img"
        >
          <img 
            :src="image"
            alt="img"
          />
          <div class="write-post__delete-img" @click="deleteimg(image)">
            <img src="@/assets/img/cross.svg" alt="delete">
          </div>
        </div>
        
        <label for="images" class="write-post__label-more" v-if="post.images.length < 5">
          <span>+</span>
        </label>
      </div>
		</div>
	</form>
</template>

<script>

export default {
	data() {
		return {
			post: {
				text: "",
				images: [],
				time: new Date()
			},
			placeholders: [
				'Что у вас нового?',
				'Как прошел день?',
				'Расскажите всем!',
				'Выложите запись',
				'Новый пост?'
			]
		}
	},

	methods: {
		textareaHeight(e) {
			let {target} = e
    
      target.style.height = "1px"
      target.style.height = (target.scrollHeight - 3) + "px"
		},

		changeImg(e) {
      let files = e.target.files

      for (const key in files) {
        if (Object.hasOwnProperty.call(files, key)) {
          const element = files[key];

          this.post.images.push(URL.createObjectURL(element))
        }
      }
    },

		deleteimg(image) {      
      this.post.images = this.post.images.filter((img) => img !== image)
    },
	},

	computed: {
		randomPlaceholder() {
			let size = this.placeholders.length,
					randomValue = Math.floor(Math.random() * size)

			return this.placeholders[randomValue]
		},

	}
}
</script>

<style lang="scss">
@import './WritePost.scss';
</style>
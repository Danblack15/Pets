<template>
  <section
    class="card-pets"
    v-if="groupPets.length"
    :class="{ 'card-pets--masonry': masonry }"
  >
    <div class="card-pets__img">
      <img :src="pet.previewImg" alt="pet" />
    </div>
    <div class="card-pets__info">
      <div class="card-pets__info__name">
        <h3 class="card-pets__info-name">{{ pet.name }}</h3>
        <p class="card-pets__info-category">{{ selectGroup }}</p>
      </div>
      <div class="card-pets__info__likes">
        <p class="card-pets__likes">{{ petLikes }} лайка</p>

        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="['card-pets__info__like', { 'card-pets__info__like--liked': liked }]"
					@click="likePet"
        >
          <path
            d="M8.99609 15.5C8.99609 15.5 16.9961 9.93631 16.9961 4.66032C16.9961 -0.615631 9.89511 -1.01304 8.99609 4.26976C8.09704 -1.01304 0.996094 -0.60878 0.996094 5.07143C0.996094 10.7517 8.99609 15.5 8.99609 15.5Z"
            stroke="#F16063"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CardPetsUI",

  props: {
    pet: {
      type: Object,
      required: true,
    },
    masonry: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      petLikes: this.pet.likes,
			liked: false,
      groupDetail: [
        {
          id: 1,
          sexT: 'Кобель',
          sexF: 'Сука',
          baby: 'Щенок'
        },
        {
          id: 2,
          sexT: 'Кот',
          sexF: 'Кошка',
          baby: 'Котёнок'
        },
        {
          id: 3,
          sexT: 'Птица',
          sexF: 'Птица',
          baby: 'Птенец'
        },
        {
          id: 4,
          sexT: 'Заяц',
          sexF: 'Зайчиха',
          baby: 'Зайчонок'
        },
        {
          id: 5,
          sexT: 'Мышь',
          sexF: 'Мышь',
          baby: 'Мышонок'
        },
        {
          id: 6,
          sexT: 'Другие',
          sexF: 'Другие',
          baby: 'Другие'
        }
      ]
    };
  },

	methods: {
		likePet() {
			this.liked = !this.liked
			
			if(this.liked) {
				this.petLikes++
			} else {
				this.petLikes--
			}
		}
	},

  computed: {
    ...mapGetters({
      groupPets: "data/getGroupPets",
    }),

    selectGroup() {
      let obj = this.groupDetail.filter((e) => e.id == this.pet.groupID)

      let born = new Date(this.pet.age),//Дата рождения
          date = new Date(),
          age = (date - born) / 31536000000//Кол-во лет

      if (age <= 1)
        return obj[0].baby

      if (this.pet.sex) {
        return obj[0].sexT
      } else {
        return obj[0].sexF
      }

    },
  },
};
</script>

<style src="./CardPetsUI.css" scoped>
</style>
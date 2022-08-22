<template>
  <section class="pet-info">
    <div class="pet-info__general">
      <div class="pet-info__osn">
        <h1 class="pet-info__name">{{ pet.name }},</h1>
        <img src="@/assets/img/location.svg" alt="geo" class="pet-info__osn__img"/>
        <h1 class="pet-info__location">{{ pet.location }}</h1>
      </div>
      <p class="pet-info__type">
        {{ pet.type }}
        <span class="pet-info__type__circle"></span>
        {{ selectGroup }}
      </p>
      <div class="pet-info__statistic">
        <div>
          <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="['pet-info__statistic__likes', { 'pet-info__statistic__likes--liked': liked }]"
					@click="likePet"
        >
          <path
            d="M8.99609 15.5C8.99609 15.5 16.9961 9.93631 16.9961 4.66032C16.9961 -0.615631 9.89511 -1.01304 8.99609 4.26976C8.09704 -1.01304 0.996094 -0.60878 0.996094 5.07143C0.996094 10.7517 8.99609 15.5 8.99609 15.5Z"
            stroke="#F16063"
            stroke-linejoin="round"
          />
        </svg>
          <p>{{ petLikes }} Лайка</p>
        </div>

        <div class="pet-info__statistic__money">
          <img src="@/assets/img/money.svg" alt="money" class="pet-info__statistic__money__img"/>
          <p>5000 ₽</p>
        </div>
      </div>
    </div>

    <div class="pet-info__dop">
      <div class="pet-info__dop__statistics">
        <div>
          <p>Возраст</p>
          <p>{{age}}</p>
        </div>
        <div>
          <p>Вес</p>
          <p>{{pet.weight}} кг</p>
        </div>
        <div>
          <p>Пол</p>
          <p>{{pet.sex ? 'Мужской' : 'Женский'}}</p>
        </div>
      </div>

      <div class="pet-info__dop__desc">
        <h4 class="pet-info__dop__desc__name">Описание</h4>
        <p class="pet-info__dop__desc__text">Кот Локи больше не просит есть. Он просто сидит напротив и смотрит на меня так, будто ждет, что я подам ему еду. Как-то ночью я проснулся от того, что почувствовал, что рядом кто-то есть. Я повернулся, чтобы увидеть, кто это, но там никого не было. Мне было страшно.</p>
      </div>
      <ButtonUI class="pet-info__dop__button">Купить - 5000 ₽</ButtonUI>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pet: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      petLikes: this.pet.likes,
			liked: false,
      age: null,
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
  },

  computed: {
    selectGroup() {
      let obj = this.groupDetail.filter((e) => e.id == this.pet.groupID)

      let born = new Date(this.pet.age),//Дата рождения
          date = new Date(),
          age = (date - born) / 31536000000//Кол-во лет


      if (age <= 1) {
        this.age = `${Math.floor((date - born) / 3858000000)} месяца`//кол-во месяцев
        return obj[0].baby
      } else {
        this.age = `${Math.floor(age)} года`
      }

      if (this.pet.sex) {
        return obj[0].sexT
      } else {
        return obj[0].sexF
      }

    }
  }
}
</script>

<style src="./PetDetailInfo.css" scoped>
</style>
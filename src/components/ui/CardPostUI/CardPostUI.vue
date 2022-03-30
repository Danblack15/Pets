<template>
  <section class="card-post">
      <div class="card-post__info">
          <div class="card-post__info__person">
              <AvatarUI post/>

              <div class="card-post__info__person-text">
                <h3 class="card-post-name">Ynfan</h3>
                <h4 class="card-post-status">Пельмень с мясом.</h4>
              </div>
          </div>
          <div class="card-post__info__date">
              <p>17:20</p>
          </div>
      </div>
      <div class="card-post__text">
          <p>Мой кот постоянно ходит по краю бассейна, как будто ждет, что оттуда выпрыгнет утка.
Я его уже не уговариваю.
Он так сидит уже несколько лет.</p>
      </div>
  </section>
</template>

<script>
export default {
    name: "CardPostUI",

    props: {
        
    }
}
</script>

<style src="./CardPostUI.css" scoped>

</style>
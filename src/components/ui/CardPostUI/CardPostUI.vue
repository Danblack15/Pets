<template>
  <section class="card-post">
      <div class="card-post__info">
          <div class="card-post__person">
              <AvatarUI post class="card-post__person__avatar"/>

              <div class="card-post__person__text">
                <h3 class="card-post__name">{{ post.author }}</h3>
                <h4 class="card-post__status">{{ post.status }}</h4>
              </div>
          </div>
          <div class="card-post__date">
              <p>{{ timePost }}</p>
          </div>
      </div>
      <div class="card-post__text">
          <p>{{ post.body }}</p>
      </div>
  </section>
</template>

<script>
export default {
    name: "CardPostUI",

    props: {
        post: {
            type: Object,
            required: true
        }
    },

    computed: {
        timePost() {
            let date = this.post.time
            date = date.split(/[ ]/)

            return date[1]
        }
    }
}
</script>

<style src="./CardPostUI.css" scoped>

</style>
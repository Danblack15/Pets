<template>
  <div>
    <div v-if="img" class="wrapper-avatar">
      <div class="avatar-post avatar-post--img" v-if="post">
        <img :src="imgImport" alt="preview" />
        <div class="avatar-post-online" v-if="online"></div>
      </div>

      <div class="avatar avatar--img" v-else>
        <img :src="img" alt="preview" />
      </div>
    </div>

    <div v-else class="wrapper-avatar">
      <div class="avatar-post" v-if="post">
        <p>R</p>
        <div class="avatar-post-online" v-if="online"></div>
      </div>

      <div class="avatar" v-else>
        <p>JD</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AvatarUI",

  props: {
    post: {
      type: Boolean,
      default: false,
    },
    online: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
      default: null
    }
  },

  computed: {
    imgImport() {
      return require(`@/assets/img/${this.img}`)
    }
  }
};
</script>

<style src="./AvatarUI.css" scoped>
</style>
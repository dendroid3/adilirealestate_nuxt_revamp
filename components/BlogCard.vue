<template>
  <div class="rounded main_blog">
    <v-card class="grey lighten-4">
      <v-card-title class="d-flex justify-center text-center">
        <p class="my-0 sub-heading" style="width: 100%;">
          {{ blog.title }}
        </p> <br>
        <p class="my-0">
          {{ blog.sub_title }}
        </p>
      </v-card-title>

      <v-img
        class="rounded"
        :src="require(`@/assets/blogs/${blog.image}`)"
        :aspect-ratio="2/1"
        contain
      />

      <v-card-text>
        <span class="body-text">
          {{ blog.content | sizeUp }}
        </span>
      </v-card-text>

      <v-card-actions>
        <v-btn small class="success" @click="readMore">
          read more
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'BlogCard',

  filters: {
    sizeUp (text) {
      return text.slice(0, 200) + '...'
    }
  },

  props: {
    blog: Object
  },

  methods: {
    readMore () {
      const url = `/blog/${this.blog.url}`
      window.location = url
    }
  }
}
</script>
<style lang="css" scoped>
.main_blog{
  font-family: dosis;
}

</style>

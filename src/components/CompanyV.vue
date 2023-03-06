<template>
  <v-carousel
    id="company"
    cycle
    height="500"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(photo, i) in photos"
      :key="i"
      :src="photo.src"
    >
      <v-overlay absolute>
        <v-row
          align="center"
          justify="center"
        >
          <v-container class="justify-center text-center">
            <div
              v-vue-aos="{animationClass:'animate__animated animate__slideInUp'}"
              class="justify-center text-center text-h4"
            >
              Welcome to our company
            </div>
            <v-btn
              v-vue-aos="{animationClass:'animate__slideInDown animate__animated'}"
              class="mt-6"
              :to="{name: 'Companies'}"
            >
              See more info
            </v-btn>
          </v-container>
        </v-row>
      </v-overlay>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      photos: [
        {
          src: 'https://livedemo00.template-help.com/wt_prod-20844/images/project-3-671x214.jpg',
        },
        {
          src: 'https://livedemo00.template-help.com/wt_prod-20844/images/project-1-671x214.jpg',
        },
        {
          src: 'https://ld-wt73.template-help.com/wt_prod-20176/images/background-breadcrumbs-01-1920x345.jpg',
        },
      ],
    }
  },
}
</script>
<style scoped>
.v-btn{
  background: linear-gradient(to right, #B3E5FC, #1E88E5);
}
</style>

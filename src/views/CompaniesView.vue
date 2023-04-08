<template>
  <div>
    <v-carousel
      class="my-14"
      cycle
      height="380"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(photo, i) in photos"
        :key="i"
        :src="photo.src"
      />
    </v-carousel>
    <v-parallax
      height="100%"
      src="https://demo.themexbd.com/rtl/smartdev/wp-content/uploads/2021/06/choose-bg.png"
    >
      <v-container
        class="my-6"
      >
        <v-row
          v-for="(company, i) in companies"
          :key="i"
          justify="center"
        >
          <v-col
            cols="4"
          >
            <v-img
              v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
              src="https://livedemo00.template-help.com/wt_prod-20844/images/index-image-4-390x332.jpg"
              height="300px"
            />
          </v-col>
          <v-col
            v-vue-aos="{animationClass:'animate__animated animate__fadeInRight'}"

            cols="5"
            class="text--primary"
          >
            <div class="text-h5 mt-2 ">
              {{ company.name }}
            </div>
            <div class="mt-2">
              <span class="group">
                <v-icon
                  color="#2a93c9"
                  small
                >mdi-star
                </v-icon>
                <v-icon
                  color="#2a93c9"
                  small
                >mdi-star
                </v-icon>
                <v-icon
                  color="#2a93c9"
                  small
                >mdi-star
                </v-icon>
                <v-icon
                  color="#2a93c9"
                  small
                >mdi-star
                </v-icon>
                4 customer reviews
              </span>
            </div>
            <div class="text mt-2">
              {{ company.summary }}
            </div>
            <div>
              <p class="mt-2">
                <v-icon
                  left
                  color="#2a93c9"
                  size="25px"
                >
                  {{ icons.email }}
                </v-icon>
                <span
                  class="text-h6 "
                >
                  {{ company.email }}
                </span>
              </p>
              <p>
                <v-icon
                  left
                  color="#2a93c9"
                  size="25px"
                >
                  {{ icons.home }}
                </v-icon>
                <span
                  class="text-h6 "
                >
                  {{ company.website }}
                </span>
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </div>
</template>
<script>
export default {
  data: () => ({
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
    companies: [],
    icons: {
      email: 'mdi-email',
      home: 'mdi-home',
    },
  }),
  mounted () {
    const self = this
    this.axios.get('/get_companys').then(res => {
      self.companies = res.data
    })
  },
}
</script>

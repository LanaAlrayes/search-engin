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
              src="https://livedemo00.template-help.com/wt_prod-20844/images/index-image-4-390x332.jpg"

              height="300px"
            />
          </v-col>
          <v-col
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
            <v-btn
              class="mt-12"
              outlined
              color="#2a93c9"
              large
              @click="$router.push('/company')"
            >
              MORE INFO
            </v-btn>
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
    companies: [
      {
        // name: 'Ultra Medica',
        // summary: 'Since its inception in 1955, when Ultra Medica began to take its place in the world of pharmaceutical industries in Syria, it has been built on the basis of its enthusiasm and emphasis on hard work to develop the life sciences industry.Now, Ultra Medica is one of the largest and fastest growing companies in Syria.',
        src: 'https://livedemo00.template-help.com/wt_prod-20844/images/news-1-325x220.jpg',
      },
      {
        // name: 'Human Pharma',
        // summary: 'Im a thing. But, like most politicians, he promised more than he could deliver. You wont have time for sleeping, soldier, not with all the bed making youll be doing. Then well go with that data file! Hey, you add a one and two zeros to that or we walk! Youre going to do his laundry? Ive got to find a way to escape.',
        src: 'https://livedemo00.template-help.com/wt_prod-20844/images/news-3-325x220.jpg',
      },
      {
        // name: 'Ultra Medica',
        // summary: 'Im a thing. But, like most politicians, he promised more than he could deliver. You wont have time for sleeping, soldier, not with all the bed making youll be doing. Then well go with that data file! Hey, you add a one and two zeros to that or we walk! Youre going to do his laundry? Ive got to find a way to escape.',
        src: 'https://livedemo00.template-help.com/wt_prod-20844/images/index-image-4-390x332.jpg',
      },
    ],
  }),
  mounted () {
    const self = this
    this.axios.get('/get_companys').then(res => {
      self.companies = res.data.slice(8, 10)
      // self.companies = res.data
    })
  },
}
</script>

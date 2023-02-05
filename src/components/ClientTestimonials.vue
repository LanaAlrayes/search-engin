<template>
  <v-parallax
    height="100%"
    src="https://demo.themexbd.com/rtl/smartdev/wp-content/uploads/2021/06/choose-bg.png"
  >
    <v-container
      id="client"
    >
      <v-row
        class="my-16"
        justify="center"
      >
        <v-col cols="12">
          <div
            v-vue-aos="{animationClass:'animate__animated animate__fadeInDown'}"
            class="text-h6 text-center my-5 grey--text"
          >
            Client Testimonials
          </div>
          <div
            v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
            class="text-h3 text-center my-5 text--primary"
          >
            What Our Clients Say
          </div>
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          v-vue-aos="{animationClass:'animate__animated animate__fadeInRight'}"
          cols="12"
          md="4"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
              <v-card-title
                class="text-h6 white--text fill-height flex-column"
                justify="space-between"
              >
                <v-avatar
                  :class="{'border': hover}"
                  size="120"
                >
                  <img
                    alt="user"
                    :src=" item.img"
                  >
                </v-avatar>
                <p class="mt-4 blue--text text-body-1">
                  {{ item.title }}
                </p>
              </v-card-title>
              <v-card-title>
                <p class="subheading text-left">
                  {{ item.subtext }}
                </p>
              </v-card-title>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Betty Wade',
        subtext: '"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Lorem ipsum dolor sit amet consectetur adipisicing elit."',
        img: 'https://slidesigma.nyc/templatemonster/react/findpharma/assets/img/doctors-grid/348x350-1.jpg',
      },
      {
        title: 'Matthew Reyes',
        subtext: '"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Lorem ipsum dolor sit amet consectetur adipisicing elit."',
        img: 'https://slidesigma.nyc/templatemonster/react/findpharma/assets/img/doctors-grid/348x350-0.jpg',
      },
      {
        title: 'Bryan Green',
        subtext: '"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Lorem ipsum dolor sit amet consectetur adipisicing elit."',
        img: 'https://ld-wt73.template-help.com/wt_prod-20176/images/our-team-07-384x410.jpg',
      },
    ],
  }),
}
</script>
<style scoped>
  .border{
    position: relative;
    content: '';
    top: 24px;
    right: 0;
    bottom: 0;
    left: 0;
    border: 4px solid rgb(36, 136, 198) !important;
    transform: translatey(-14px);
    transition: all .3s ease-in-out;
}
  </style>

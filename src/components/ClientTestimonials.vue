<template>
  <v-container
    id="client"
  >
    <v-row
      class="my-16"
      justify="center"
    >
      <v-col cols="12">
        <div
          class="text-h6 text-center my-5 grey--text"
        >
          Client Testimonials
        </div>
        <div
          class="text-h3 text-center my-5"
        >
          What Our Clients Say
        </div>
      </v-col>
      <template v-for="(item, i) in items">
        <v-col
          :key="i"
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
      </template>
    </v-row>
  </v-container>
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
    transparent: 'rgba(255, 255, 255, 0)',
  }),
}
</script>
<style scoped>
  .v-card {
    transition: opacity .4s ease-in-out;
  }
  .show-btns {
    color: rgba(255, 255, 255, 1) !important;
  }
  </style>

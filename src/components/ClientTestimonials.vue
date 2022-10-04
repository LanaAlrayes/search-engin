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
                <p class="ma-2 black--text text-body-1 font-weight-bold">
                  {{ item.title }}
                </p>
                <p class="text-caption blue--text font-weight-medium">
                  {{ item.text }}
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
        title: 'New Releases',
        text: 'It\'s New Release Friday',
        subtext: '"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Lorem ipsum dolor sit amet consectetur adipisicing elit."',
        img: 'https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80',
      },
      {
        title: 'Rock',
        text: 'Greatest Rock Hits',
        subtext: '"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Lorem ipsum dolor sit amet consectetur adipisicing elit."',
        img: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
      },
      {
        title: 'Mellow Moods',
        text: 'Ambient Bass',
        subtext: '"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.Lorem ipsum dolor sit amet consectetur adipisicing elit."',
        img: 'https://images.unsplash.com/photo-1542320868-f4d80389e1c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3750&q=80',
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

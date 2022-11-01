<template>
  <div>
    <v-parallax
      height="450"
      src="https://livedemo00.template-help.com/wt_prod-20844/images/breadcrumbs-bg.jpg"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1
            id="font-size"
            class="font-weight-thin mb-4"
          >
            About us
          </h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <v-row>
        <v-col
          v-vue-aos="{animationClass:'animate__animated animate__fadeInDown'}"
          cols="12"
          class="text-center"
        >
          <h2>About Our Creative Team</h2>
        </v-col>
      </v-row>
      <v-timeline>
        <v-timeline-item
          v-for="(image,n) in images"
          :key="n"
          large
        >
          <template #icon>
            <v-avatar
              size="70"
            >
              <img :src="require(`../assets/${image.img}`)">
            </v-avatar>
          </template>
          <template #opposite>
            <span>{{ image.section }}</span>
          </template>
          <v-card
            v-vue-aos="{animationClass:'animate__animated animate__fadeInRight'}"
            class="elevation-2"
          >
            <v-card-title class="text-h5">
              {{ image.title }}
            </v-card-title>
            <v-card-text
              id="description"
            >
              {{ image.description }}
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
      <span
        class="text-right d-flex justify-center"
      >"This is the end of the university but it's a new beginning for a new journey.
        Thank you"</span> <br>
      <h2
        v-vue-aos="{animationClass:'animate__animated animate__fadeInDown'}"
        class="text-right d-flex justify-center"
      >
        About The Project
      </h2>
    </v-container>
    <v-container>
      <v-row class="mb-12">
        <v-col
          cols="12"
          md="6"
        >
          <v-hover>
            <template #default="{ hover }">
              <v-card
                height="230"
                width="500"
                :elevation="hover ? 12 : 2"
              >
                <v-img
                  src="https://serv5.com/wp-content/uploads/2021/09/%D8%B4%D8%B1%D9%83%D8%A9-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D8%A7%D9%82%D8%B9-%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9-3.jpg"
                  height="230"
                  width="500"
                  class="mx-auto pa-1"
                />
              </v-card>
            </template>
          </v-hover>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-hover>
            <template #default="{ hover }">
              <v-card
                :elevation="hover ? 24 : 6"
                class="mx-auto pl-12 "
                width="500"
              >
                <v-card-title class="text--primary text-h6">
                  Our Project is about
                </v-card-title>
                <div class="text--primary">
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolor atque odio praesentium eaque, architecto culpa! Vel inventore voluptatibus cupiditate ratione, aspernatur corrupti eaque placeat veniam. Quisquam quis praesentium repudiandae.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iure at dignissimos ad, numquam animi reprehenderit quasi! Corrupti, quibusdam vel? Veritatis adipisci
                    </li>
                  </ul>
                </div>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    images: [
      {
        img: 'Dr.Mohmmad.jpg',
        section: 'first section',
        title: 'Dr.Mohammad Hajjouz',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolor atque odio praesentium eaque, architecto culpa! Vel inventore voluptatibus cupiditate ratione, aspernatur corrupti eaque placeat veniam. Quisquam quis praesentium repudiandae.',
      },
      {
        img: 'Lana.jpg',
        section: 'second section',
        title: 'Lana Alrayes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolor atque odio praesentium eaque, architecto culpa! Vel inventore voluptatibus cupiditate ratione, aspernatur corrupti eaque placeat veniam. Quisquam quis praesentium repudiandae.',
      },
      {
        img: 'Amar.jpg',
        section: 'Third section',
        title: 'Ammar Khadaj',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolor atque odio praesentium eaque, architecto culpa! Vel inventore voluptatibus cupiditate ratione, aspernatur corrupti eaque placeat veniam. Quisquam quis praesentium repudiandae.',
      },
      {
        img: 'Lana.jpg',
        section: 'Third section',
        title: 'Reem Aboras',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolor atque odio praesentium eaque, architecto culpa! Vel inventore voluptatibus cupiditate ratione, aspernatur corrupti eaque placeat veniam. Quisquam quis praesentium repudiandae.',
      },
    ],

  }),
}
</script>
<style scoped>

#font-size{
  font-size: 60px;
}
span{
  font-size: 20px;
}
#description{
  font-size: 20px;
}

</style>

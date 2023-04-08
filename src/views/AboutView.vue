<template>
  <div>
    <hero-about />
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
              size="80"
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
                      Syrian Drug Index is a search engine that aims to provide users with comprehensive information about the drugs available in the market and how to use them properly, and to provide information about the producing companies.
                      The site features many easy-to-use interfaces, with the ability to search for medicines by trade name and search for producing companies with the company's own name.
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
import HeroAbout from '@/components/HeroAbout.vue'
export default {
  name: 'AboutView',
  components: {
    HeroAbout,
  },
  data: () => ({
    images: [
      {
        img: 'Dr.Mohmmad.jpg',
        section: 'first section',
        title: 'Dr.Mohammad Hajjouz',
        description: 'PhD in Mathematical Sciences "Informatics" .Lecturer in the Faculty of Science at Al-Baath University since 2009 for information courses.Lecturer in the Faculty of Information Engineering at Al-Baath University in 2006 for the course of the databases. Lecturer at the Institute of Public Administration since 2015 for the directors of electronic administration and management information systems. Lecturer at the Virtual University of Information Systems Engineering Programs since 2010 to decide databases. Supervisor of MWS Master students since 2012. I also Lecturer in the HND, BSCE, and BL programs for an introduction course to computer science during Previous semester.',
      },
      {
        img: 'Amar.jpg',
        section: 'second section',
        title: 'Ammar Khadaj',
        description: 'Database developer (bigdata), Database administrator, Data analyst.',
      },
      {
        img: 'Reem.png',
        section: 'Third section',
        title: 'Reem Aboras',
        description: 'Master degree in mathematics specialized in analysis (contact manifold) asistant instructor for 6 years in   AIU civil engineering.',
      },
      {
        img: 'Lana.jpg',
        section: 'Fourth section',
        title: 'Lana Alrayes',
        description: 'I have good experience in front-end design And also average experience in the back-end.',
      },
    ],
  }),
}
</script>
<style scoped>
span{
  font-size: 20px;
}
#description{
  font-size: 20px;
}

</style>

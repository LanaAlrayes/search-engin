<template>
  <v-container id="ourTeam">
    <v-row
      class="my-16"
      justify="center"
    >
      <v-col cols="12">
        <div
          v-vue-aos="{animationClass:'animate__animated animate__fadeInDown'}"
          class="text-h6 text-center my-5 grey--text"
        >
          Meet Our Team
        </div>
        <div
          v-vue-aos="{animationClass:'animate__animated animate__fadeInRight'}"
          class="text-h3 text-center my-5"
        >
          Our Creative Team
        </div>
      </v-col>
      <v-col
        v-for="(teams,i) in team"
        :key="i"
        v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
        class="text-center justify-center ml-10"
        cols="12"
        md="3"
        sm="4"
      >
        <v-hover v-slot="{ hover }">
          <div>
            <v-avatar
              size="170"
              :class="{'border': hover}"
            >
              <img
                alt="user"
                :src="require(`../assets/${teams.img}`)"
                class="d-flex justify-center"
              >
            </v-avatar>
            <v-card
              class="mx-auto text-center justify-center"
            >
              <!-- grey lighten-4 -->
              <v-card-title class="justify-center pt-5">
                {{ teams.name }}
              </v-card-title>
              <v-card-subtitle class="blue--text text--darken-1">
                {{ teams.job_title }}
              </v-card-subtitle>
              <v-card-text>
                Syrian Virtual University
              </v-card-text>
            </v-card>
          </div>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      team: [
        {
          name: 'Lana Alrayes',
          job_title: 'Front End',
          img: 'Lana.jpg',
        },
        {
          name: 'Ammar Khadaj',
          job_title: 'Data Bases',
          img: 'Amar.jpg',
        },
        {
          name: 'Reem Aboras',
          job_title: 'Back End',
          img: 'Lana.jpg',
        },

      ],
    }
  },
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
.v-avatar{
    border: 8px solid white;
        top: 24px;
        z-index: 1;
}
</style>

<template>
  <v-parallax
    height="100%"
    src="https://demo.themexbd.com/rtl/smartdev/wp-content/uploads/2021/06/choose-bg.png"
  >
    <v-container id="ourTeam">
      <v-row
        class="my-16"
        justify="center"
      >
        <v-col
          cols="12"
        >
          <div
            v-vue-aos="{animationClass:'animate__animated animate__fadeInDown'}"
            class="text-h6 text-center my-5 grey--text"
          >
            Meet Our Team
          </div>
          <div
            v-vue-aos="{animationClass:'animate__animated animate__fadeInRight'}"
            class="text-h3 text-center my-5 text--primary"
          >
            Our Creative Team
          </div>
        </v-col>

        <v-col
          v-for="(teams,i) in team"
          :key="i"
          v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
          class="text-center justify-center"
          cols="12"
          md="4"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              width="300"
              height="350"
              class="mx-auto text-center justify-center"
            >
              <div>
                <v-img
                  alt="user"
                  :src="require(`../assets/${teams.img}`)"
                  height="270"
                >
                  <v-expand-x-transition>
                    <div
                      v-if="hover"
                      class="blue"
                      style="height:100%;
                      width:20%;"
                    >
                      <div>
                        <v-btn
                          class="mx-1 mt-10"
                          fab
                          small
                          color="white"
                        >
                          <v-icon
                            color="indigo"
                          >
                            {{ icons.facebook }}
                          </v-icon>
                        </v-btn>
                        <v-btn
                          class="mx-1 mt-5"
                          fab
                          small
                          color="white"
                        >
                          <v-icon
                            color="cyan"
                          >
                            {{ icons.twitter }}
                          </v-icon>
                        </v-btn>
                        <v-btn
                          class="mx-1 mt-5"
                          fab
                          small
                          color="white"
                        >
                          <v-icon
                            color="indigo"
                          >
                            {{ icons.linked }}
                          </v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </v-expand-x-transition>
                </v-img>
              </div>
              <v-card-title class="justify-center pt-2">
                {{ teams.name }}
              </v-card-title>
              <v-card-subtitle class="blue--text text--darken-1">
                {{ teams.job_title }}
              </v-card-subtitle>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  data () {
    return {
      team: [
        {
          name: 'Ammar Khadaj',
          job_title: 'Data Bases',
          img: 'Amar.jpg',
          university: 'Syrian Virtual University',
        },
        {
          name: 'Reem Aboras',
          job_title: 'Back End',
          img: 'Reem.png',
          university: 'Syrian Virtual University',
        },
        {
          name: 'Lana Alrayes',
          job_title: 'Front End',
          img: 'Lana.jpg',
          university: 'Syrian Virtual University',
        },
      ],
      icons: {
        facebook: 'mdi-facebook',
        linked: 'mdi-linkedin',
        twitter: 'mdi-twitter',
      },
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

<template>
  <v-footer
    cols="12"
    md="3"
    dark
    padless
    height="450"
    class="light-blue lighten-1 d-flex align-end"
  >
    <v-container>
      <v-row
        class="align-center justify-space-around"
      >
        <v-col
          cols="12"
          md="4"
          class="pa-0"
        >
          <v-list
            v-vue-aos="{animationClass:'animate__animated animate__fadeInRight'}"
            class="light-blue lighten-1"
          >
            <v-subheader class="text-uppercase font-weight-bold text-h6">
              Contact us
            </v-subheader>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="#757575">
                  mdi-phone
                </v-icon>
              </v-list-item-icon>
              <v-list-item>
                <a
                  href="tel:#"
                  class="link-phone white--text text-decoration-none "
                >
                  {{ settings.search_phone }}
                </a>
              </v-list-item>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="#757575">
                  mdi-email
                </v-icon>
              </v-list-item-icon>
              <v-list-item>
                <a
                  class="link-aemail white--text text-decoration-none "
                  href="mailto:lanaalrayss@gmail.com"
                >
                  {{ settings.search_email }}
                </a>
              </v-list-item>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="#757575">
                  mdi-map-marker
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item>
                  <a
                    class="link-location white--text text-decoration-none"
                    href="#"
                  >
                    {{ settings.search_address }}
                  </a>
                </v-list-item>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col
          cols="12"
          md="4"
          class="pa-0"
        >
          <v-list
            v-vue-aos="{animationClass:'animate__animated animate__fadeInUp'}"
            class="light-blue lighten-1"
          >
            <v-subheader class="text-uppercase font-weight-bold text-h6">
              Copular news
            </v-subheader>
            <v-list-item>
              Pills or Drink: What to  Choose and Why
            </v-list-item>
            <v-list-item style="color:#757575">
              May 04,2021
            </v-list-item>
            <v-list-item>
              Our Guide for Patients on a Budget
            </v-list-item>
            <v-list-item style="color:#757575">
              May 04,2021
            </v-list-item>
          </v-list>
        </v-col>

        <v-col
          cols="12"
          md="4"
          class="pa-0"
        >
          <v-list
            v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
            class="light-blue lighten-1"
          >
            <v-subheader class="text-uppercase font-weight-bold text-h6">
              quick links
            </v-subheader>
            <v-row>
              <v-col>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="#757575">
                      mdi-circle-medium
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    <a
                      class="white--text text-decoration-none "
                      @click="$vuetify.goTo('#home')"
                    >
                      Home</a>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="#757575">
                      mdi-circle-medium
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    <a
                      class="white--text text-decoration-none "
                      @click="$vuetify.goTo('#different')"
                    >
                      Different</a>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="#757575">
                      mdi-circle-medium
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    <a
                      class="white--text text-decoration-none "
                      @click="$vuetify.goTo('#medicine')"
                    >
                      Counter Medicine</a>
                  </v-list-item-title>
                </v-list-item>
                <v-hover v-slot="{hover}">
                  <v-btn
                    class="text-uppercase white--text font-weight-bold"
                    :outlined="!hover"
                    color="#757575"
                    :to="{name: ''}"
                  >
                    search now
                  </v-btn>
                </v-hover>
              </v-col>
              <v-col>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="#757575">
                      mdi-circle-medium
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    <a
                      class="white--text text-decoration-none "
                      @click="$vuetify.goTo('#company')"
                    >
                      Companies</a>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="#757575">
                      mdi-circle-medium
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    <a
                      class="white--text text-decoration-none "
                      @click="$vuetify.goTo('#ourTeam')"
                    >
                      Our Team</a>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="#757575">
                      mdi-circle-medium
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    <a
                      class="white--text text-decoration-none "
                      @click="$vuetify.goTo('#client')"
                    >Client</a>
                  </v-list-item-title>
                </v-list-item>
                <v-hover v-slot="{hover}">
                  <v-btn
                    class="text-uppercase white--text font-weight-bold"
                    :outlined="!hover"
                    color="#757575"
                    :to="{name: ''}"
                  >
                    get in touch
                  </v-btn>
                </v-hover>
              </v-col>
            </v-row>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
    <v-card
      flat
      tile
      class="blue-grey lighten-3 white--text "
      width="100%"
      min-height="20%"
    >
      <v-row
        class="text-center pt-8"
      >
        <v-col
          cols="12"
          md="3"
        >
          &copy; {{ new Date().getFullYear() }} — <strong>{{ settings.search_name }}. All rights reserved</strong>
        </v-col>
        <v-col>
          <v-btn
            v-for="icon in icons"
            :key="icon"

            icon
            cols="12"
            md="3"
          >
            <v-icon size="18px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <strong>privacy policy</strong>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-google',
      'mdi-instagram',
    ],
    settings: {
      search_name: 'Search',
      search_phone: '0123456789',
      search_address: 'Damascus',
      search_email: 'info@info.com',
      search_logo: 'search.png',
    },
  }),

}
</script>

<style>
.v-application {
  font-family: 'Teko' !important;
}

</style>

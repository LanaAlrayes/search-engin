<template>
  <v-footer
    padless
    height="350"
    color="#2a93c9"
  >
    <v-container>
      <v-row
        class="align-center justify-space-between"
      >
        <v-col
          v-vue-aos="{animationClass:'animate__fadeInRight animate__animated'}"
          cols="12"
          md="3"
          sm="4"
        >
          <v-img
            :src="require(`../assets/logo3.png`)"
            max-width="200"
            max-height="150"
          />
          <div>
            <v-btn
              class="mx-1"
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
              class="mx-1"
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
              class="mx-1"
              fab
              small
              color="white"
            >
              <v-icon
                color="red"
              >
                {{ icons.google }}
              </v-icon>
            </v-btn>
            <v-btn
              class="mx-1"
              fab
              small
              color="white"
            >
              <v-icon
                color="purple"
              >
                {{ icons.instagra }}
              </v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="4"
          class="mt-8"
          color="#2a93c9"
        >
          <v-list
            v-vue-aos="{animationClass:'animate__fadeInRight animate__animated'}"
            color="#2a93c9"
          >
            <v-subheader class="text-uppercase font-weight-bold text-h6 white--text">
              Contact us
            </v-subheader>
            <v-divider
              class="mr-16 ml-4"
              color="white"
            />

            <v-list-item>
              <v-icon color="#f1f7fc">
                mdi-phone
              </v-icon>
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
              <v-icon color="#f1f7fc">
                mdi-map-marker
              </v-icon>

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

            <v-list-item>
              <v-icon color="#f1f7fc">
                mdi-email
              </v-icon>
              <v-list-item>
                <a
                  class="link-aemail white--text text-decoration-none"
                  href="mailto:lanaalrayss@gmail.com"
                >
                  {{ settings.search_email }}
                </a>
              </v-list-item>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col
          cols="12"
          md="4"
          class="mt-3"
        >
          <v-list
            v-vue-aos="{animationClass:'animate__fadeInLeft animate__animated'}"
            color="#2a93c9"
          >
            <v-subheader class="text-uppercase font-weight-bold text-h6 white--text">
              NEWSLETTER
            </v-subheader>
            <v-divider
              class="mx-4"
              color="white"
            />
            <v-row>
              <v-col>
                <v-list-item>
                  <v-icon color="#f1f7fc">
                    {{ icons.circle }}
                  </v-icon>

                  <v-list-item>
                    <a
                      class="white--text text-decoration-none "
                      @click="$vuetify.goTo('#home')"
                    >
                      Home</a>
                  </v-list-item>
                </v-list-item>

                <v-list-item>
                  <v-icon color="#f1f7fc">
                    {{ icons.circle }}
                  </v-icon>

                  <v-list-item>
                    <a
                      class="white--text text-decoration-none "
                      @click="$vuetify.goTo('#different')"
                    >
                      Different</a>
                  </v-list-item>
                </v-list-item>

                <v-list-item>
                  <v-icon color="#f1f7fc">
                    {{ icons.circle }}
                  </v-icon>

                  <v-list-item>
                    <a
                      class="white--text text-decoration-none "
                      @click="$vuetify.goTo('#medicine')"
                    >
                      Counter Medicine</a>
                  </v-list-item>
                </v-list-item>
              </v-col>
              <v-col>
                <v-list-item>
                  <v-icon color="#f1f7fc">
                    {{ icons.circle }}
                  </v-icon>

                  <v-list-item>
                    <a
                      class="white--text text-decoration-none "
                      @click="$vuetify.goTo('#company')"
                    >
                      Companies</a>
                  </v-list-item>
                </v-list-item>

                <v-list-item>
                  <v-icon color="#f1f7fc">
                    {{ icons.circle }}
                  </v-icon>

                  <v-list-item>
                    <a
                      class="white--text text-decoration-none "
                      @click="$vuetify.goTo('#ourTeam')"
                    >
                      Our Team</a>
                  </v-list-item>
                </v-list-item>

                <v-list-item>
                  <v-icon color="#f1f7fc">
                    {{ icons.circle }}
                  </v-icon>

                  <v-list-item>
                    <a
                      class="white--text text-decoration-none "
                      @click="$vuetify.goTo('#client')"
                    >Client</a>
                  </v-list-item>
                </v-list-item>
              </v-col>
            </v-row>
          </v-list>
        </v-col>
      </v-row>
      <v-card
        flat
        tile
        class="white--text"
        width="100%"
        min-height="20%"
        color="#2a93c9"
      >
        <div
          class="pt-8"
        >
          &copy; {{ new Date().getFullYear() }} — <strong>{{ settings.search_name }} .Privacy Policy</strong>
        </div>
      </v-card>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  name: 'App',
  data: () => ({
    icons: {
      facebook: 'mdi-facebook',
      twitter: 'mdi-twitter',
      google: 'mdi-google-plus',
      instagra: 'mdi-instagram',
      circle: 'mdi-circle-medium',
    },
    settings: {
      search_name: 'Syrian Drug Index',
      search_phone: '+963 954763265',
      search_address: 'Syria Damascus',
      search_email: 'info@info.com',
    },
  }),

}
</script>

<style scoped>
.v-application {
  font-family: 'Teko' !important;
}

</style>

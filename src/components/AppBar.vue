<template>
  <v-app-bar
    fixed
    color="#2a93c9"
    dense
    prominent
    height="45px"
    scroll-target="#scrolling-techniques-7"
  >
    <template
      #extension
    >
      <v-img
        :src="require(`../assets/logo3.png`)"
        max-width="200"
        max-height="145"
        class="mb-7 ml-6"
      />

      <v-tabs
        align-with-title
        color="white"
        class=" text-h5"
      >
        <v-tab
          :to="{name: 'Home'}"
        >
          Home
        </v-tab>
        <v-tab :to="{name: 'About'}">
          About us
        </v-tab>
        <v-tab :to="{name: 'Companies'}">
          companies
        </v-tab>
        <v-tab :to="{name: 'Contact'}">
          Contact Us
        </v-tab>
      </v-tabs>
      <div class="d-flex flex-row mr-16">
        <v-btn
          class="mx-1 mb-2"
          fab
          x-small
          color="white"
        >
          <v-icon
            color="indigo"
          >
            {{ icons.facebook }}
          </v-icon>
        </v-btn>

        <v-btn
          class="mx-1 mb-2"
          fab
          x-small
          color="white"
        >
          <v-icon
            color="cyan"
          >
            {{ icons.twitter }}
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-1 mb-2"
          fab
          x-small
          color="white"
        >
          <v-icon
            color="red"
          >
            {{ icons.google }}
          </v-icon>
        </v-btn>

        <v-btn
          :to="{name: 'Login'}"
          class="mx-1 mb-2"
          fab
          x-small
          color="white"
        >
          <v-icon
            color="blue darken-4"
          >
            {{ icons.account }}
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-1 mb-1"
          fab
          x-small
          color="white"
          @click="$vuetify.theme.dark=!$vuetify.theme.dark"
        >
          <v-icon
            v-if="!$vuetify.theme.dark"
            color="blue darken-4"
          >
            {{ icons.night }}
          </v-icon>
          <v-icon
            v-else
            color="lime"
          >
            {{ icons.sunny }}
          </v-icon>
        </v-btn>
      </div>
    </template>
  </v-app-bar>
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
      account: ' mdi-account-plus',
      night: 'mdi-weather-night',
      sunny: ' mdi-white-balance-sunny',
    },
  }),
}
</script>

<template>
  <v-app-bar
    fixed
    outlined
    dense
    color="light-blue lighten-1"
    prominent
    height="20px"
    scroll-target="#scrolling-techniques-7"
  >
    <template
      #extension
    >
      <v-div>
        <v-toolbar-title class="black--text ml-16">
          Search Engine
        </v-toolbar-title>
      </v-div>

      <v-tabs
        align-with-title
        color="white"
        class="ml-10 text-h5"
      >
        <v-tab
          :to="{name: 'Home'}"
        >
          Home
        </v-tab>
        <v-tab :to="{name: 'About'}">
          About us
        </v-tab>
        <v-tab :to="{name: 'Team'}">
          Team
        </v-tab>
        <v-tab :to="{name: 'Companies'}">
          companies
        </v-tab>
        <v-tab :to="{name: 'Contact'}">
          Contact Us
        </v-tab>
      </v-tabs>

      <v-btn
        icon
        @click="$vuetify.theme.dark=!$vuetify.theme.dark"
      >
        <v-icon v-if="!$vuetify.theme.dark">
          mdi-weather-night
        </v-icon>
        <v-icon v-else>
          mdi-white-balance-sunny
        </v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>
          mdi-heart
        </v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>
          mdi-dots-vertical
        </v-icon>
      </v-btn>
      <v-spacer />
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    return: {
      show: false,
    },
  }),
}
</script>

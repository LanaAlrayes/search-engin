<template>
  <v-app-bar
    fixed
    color="teal lighten-4"
    scroll-target="#scrolling-techniques-2"
    prominent
    height="20px"
  >
    <template
      #extension
    >
      <v-app-bar-title class="blue-grey--text mx-16">
        Search Engine
      </v-app-bar-title>

      <v-tabs
        align-with-title
        color="blue-grey"
        class="hidden-sm-and-down"
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
        <v-tab :to="{name: 'companies'}">
          companies
        </v-tab>
        <v-tab :to="{name: 'Contact'}">
          Contact Us
        </v-tab>
      </v-tabs>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-spacer />
    </template>
  </v-app-bar>
</template>
<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
}
</script>
  <style>

  </style>

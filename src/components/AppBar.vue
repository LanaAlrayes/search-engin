<template>
  <v-app-bar
    app
    color="teal lighten-3"
  >
    <v-spacer />
    <div>
      <v-toolbar-title
        class="mt-1 blue-grey--text mr-4"
        contain
      >
        Search Engine
      </v-toolbar-title>
    </div>
    <v-spacer />

    <v-row
      justify="start"
      no-gutters
    >
      <v-btn
        color="white"
        text
        rounded
        class="my-2 mx-2"
      >
        Home
      </v-btn>
      <v-btn
        color="white"
        text
        rounded
        class="my-2 mx-2"
      >
        About Us
      </v-btn>
      <v-btn
        color="white"
        text
        rounded
        class="my-2 mx-2"
      >
        Team
      </v-btn>
      <v-btn
        color="white"
        text
        rounded
        class="my-2 mx-2"
      >
        companies
      </v-btn>
      <v-btn
        color="white"
        text
        rounded
        class="my-2 mx-2"
      >
        Contact Us
      </v-btn>
    </v-row>
    <v-text-field
      v-model="search"
      color="teal lighten-3"
      class="rounded-pill"
      solo-inverted
      flat
      hide-details
      dark
      append-icon="mdi-magnify"
      label="Search News"
    />
    <v-spacer />
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

<template>
  <v-container>
    <div
      class="mt-16 d-flex pt-10 align-center flex-column "
    >
      <div>
        <v-img
          alt="Medicine Logo"
          class="shrink"
          contain
          src="../assets/undraw_medicine_b1ol (2).png"
          transition="scale-transition"
          width="350"
        />
      </div>

      <div
        style="min-width:500px"
      >
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search News"
          color="teal darken-1"
          class=" mt-4 rounded-pill"
          hide-details
          single-line
        />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({

  }),
}
</script>

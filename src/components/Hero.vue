<template>
  <v-parallax
    id="home"
    class="my-16"
    height="700"
    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
  >
    <v-container>
      <v-text-field
        append-icon="mdi-microphone"
        hide-details
        dark

        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
      />
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
  }),
}
</script>
<style scoped>
.div{
  width: 50px !important;
  height: 600px;
}
</style>

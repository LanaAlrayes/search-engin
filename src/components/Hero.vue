<template>
  <v-parallax
    id="home"
    src="https://livedemo00.template-help.com/wt_prod-20844/images/breadcrumbs-bg.jpg"
  >
    <v-container>
      <v-text-field
        append-icon="mdi-microphone"
        hide-details
        dark
        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo-inverted
        @click="overlay = !overlay"
      />
    </v-container>
    <!-- <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      />
    </v-overlay> -->
  </v-parallax>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    overlay: false,
  }),
  watch: {
    overlay (val) {
      val && setTimeout(() => {
        this.overlay = false
      }, 3000)
    },
  },
}
</script>

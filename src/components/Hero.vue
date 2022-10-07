<template>
  <v-parallax
    id="home"
    class="mt-16 mb-0"

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

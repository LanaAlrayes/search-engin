<template>
  <v-parallax
    height="450"
    src="https://livedemo00.template-help.com/wt_prod-20844/images/breadcrumbs-bg.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="text-h4 font-weight-bold">
          About us
        </h1>
        <div class="colorBreads d-flex justify-center">
          <v-breadcrumbs
            :items="items"
            large
          />
        </div>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'AboutUs',
          disabled: true,
          href: '/about',
        }],
    }
  },
}
</script>

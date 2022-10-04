<template>
  <v-carousel
    id="company"
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    class="my-16"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-img
        src="https://sigmadigitalpartners.com/themes/templatemonster/html/pharmia/assets/images/about/3.jpg"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-btn class="text-h6 ">
            {{ slide }} Slide
          </v-btn>
        </v-row>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
      ],
      slides: [
        'First',
        'Second',
        'Third',
      ],
    }
  },
}
</script>

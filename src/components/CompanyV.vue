<template>
  <v-carousel
    cycle
    height="500"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    >
      <!-- <v-sheet
        :items="items[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </v-row>
      </v-sheet> -->
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'https://livedemo00.template-help.com/wt_prod-20844/images/project-3-671x214.jpg',
        },
        {
          src: 'https://livedemo00.template-help.com/wt_prod-20844/images/project-1-671x214.jpg',
        },
        {
          src: 'https://ld-wt73.template-help.com/wt_prod-20176/images/background-breadcrumbs-01-1920x345.jpg',
        },
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
}
</script>
<!-- src="" -->

  <!--  src=""
-->

<template>
  <v-carousel
    id="company"
    cycle
    height="500"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    />
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
    }
  },
}
</script>
<!-- src="" -->

  <!--  src=""
-->

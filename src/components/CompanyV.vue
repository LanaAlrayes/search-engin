<template>
  <v-hover>
    <template #default="{ hover }">
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
        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#90CAF9"
          >
            <v-btn
              :to="{name: 'Companies'}"
            >
              See more info
            </v-btn>
          </v-overlay>
        </v-fade-transition>
      </v-carousel>
    </template>
  </v-hover>
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
      overlay: false,
    }
  },
}
</script>
<style scoped>
.v-btn{
  background: linear-gradient(to right, #B3E5FC, #1E88E5);
}
</style>

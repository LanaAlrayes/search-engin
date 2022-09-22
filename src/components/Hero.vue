<template>
  <v-parallax
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
<!--
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwl2n_YJyEgP6V1BPKo9SgUUU1ui37VedO4tFfA-hXMdb2LmZF7TNkKkHWEqtzrT0dWM8&usqp=CAU"
         -->
<!--<template>
  <v-parallax>
    <v-overlay absolute>
      <v-row>
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="text-h4 font-weight-bold mb-4">
            Search a medicine
          </h1>
        </v-col>
        <v-text-field
          flat
          label="Search"
          solo-inverted
        />
      </v-row>
    </v-overlay>
  </v-parallax>
</template>
 <template>
  <v-carousel
    id="hero"

    height="600"
  >
    <v-carousel-item
      v-for="(slide,j) in slides"
      :key="j"
    >
      <v-parallax
        :src="slide.src"
      >
        <v-overlay absolute>
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-container class="justify-center text-center">
              <div
                v-vue-aos="{animationClass:'animate__slideInUp animate__animated'}"
                class=" justify-center text-h6 text-center teal--text"
              >
                {{ slide.subtitle }}
              </div>
              <br>
              <div
                v-vue-aos="{animationClass:'animate__slideInUp animate__animated'}"
                class="justify-center text-h3 text-center"
              >
                {{ slide.title }}
              </div>
            </v-container>
          </v-row>
        </v-overlay>
      </v-parallax>
    </v-carousel-item>
    <v-row>
      <v-btn
        v-vue-aos="{animationClass:'animate__slideInDown animate__animated'}"
        class=" black--text"
        color="teal darken-1"
        tile
        height="45px"
        width="200px"
      >
        Search a medicine
      </v-btn>
      <v-toolbar
        color="teal lighten-1"
        dark
        flat
      >
        <v-text-field
          class="mx-16"
          flat
          hide-details
          label="Search"
          solo-inverted
        />
      </v-toolbar>
    </v-row>
  </v-carousel>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {

  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
.template{ font-family: 'Oswald', sans-serif;
}

</style> -->

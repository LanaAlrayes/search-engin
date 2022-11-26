<template>
  <v-parallax
    height="100%"
    src="https://demo.themexbd.com/rtl/smartdev/wp-content/uploads/2021/06/blog-shape.png"
  >
    <v-container
      id="different"
    >
      <div
        v-vue-aos="{animationClass:'animate__animated animate__fadeInUp'}"
        class="text-h3 my-16 text--primary"
      >
        What Makes Us Different
      </div>
      <v-row>
        <v-col
          v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
          cols="6"
          sm="4"
        >
          <v-avatar size="130">
            <v-icon
              x-large
              color="light-blue darken-1"
            >
              mdi-seal
            </v-icon>
          </v-avatar>
          <v-card-text class="mt-6">
            <p class="text-h5 text--primary font-weight-medium">
              Credibility
            </p>
            <p class="text-subtitle-1 grey--text">
              We help to get the best medicine.
              Provide Essential Service For Your Health.
            </p>
          </v-card-text>
        </v-col>
        <v-col
          v-vue-aos="{animationClass:'animate__animated animate__fadeInDown'}"
          cols="6"
          sm="4"
        >
          <v-avatar size="130">
            <v-icon
              x-large
              color="light-blue darken-1"
            >
              mdi-checkbox-marked-circle
            </v-icon>
          </v-avatar>
          <v-card-text class="mt-6">
            <p class="text-h5 text--primary font-weight-medium">
              Guarantee
            </p>
            <p class="text-subtitle-1 grey--text">
              Pharmaceuticals produced by companies are distributed among all groups.
            </p>
          </v-card-text>
        </v-col>
        <v-col
          v-vue-aos="{animationClass:'animate__animated animate__fadeInRight'}"
          cols="6"
          sm="4"
        >
          <v-avatar size="130">
            <v-icon
              x-large
              color="light-blue darken-1"
            >
              mdi-pill
            </v-icon>
          </v-avatar>
          <v-card-text class="mt-6">
            <p class="text-h5 text--primary font-weight-medium">
              Goals
            </p>
            <p class="text-subtitle-1 grey--text">
              The companies aim to produce and sell human medicines and develop the pharmaceutical industry in the country.
            </p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<style scoped>
.v-avatar{
    border: 3px solid #e8e8e9;
        top: 24px;
        z-index: 1;
}
</style>

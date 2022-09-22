<template>
  <v-container
    id="different"
  >
    <div
      v-vue-aos="{animationClass:'animate__fadeInRight animate__animated'}"
      class="text-h3  my-5 blue-grey--text"
    >
      What Makes Us Different
    </div>
    <v-row>
      <v-col
        cols="6"
        sm="4"
      >
        <v-avatar size="100">
          <v-icon
            large
            color="teal darken-2"
          >
            mdi-email
          </v-icon>
        </v-avatar>
        <v-card-text class="mt-5">
          <p class="text-h4 text--primary">
            Origin
          </p>
          <p>We help to get the best medicine</p>
        </v-card-text>
      </v-col>

      <v-col
        cols="6"
        sm="4"
      >
        <v-avatar size="100">
          <v-icon
            large
            color="teal darken-2"
          >
            mdi-email
          </v-icon>
        </v-avatar>
        <v-card-text class="mt-5">
          <p class="text-h4 text--primary">
            Origin
          </p>
          <p>We Provide Essential Service For Your Health</p>
        </v-card-text>
      </v-col>

      <v-col
        cols="6"
        sm="4"
      >
        <v-avatar size="100">
          <v-icon
            large
            color="teal darken-2"
          >
            mdi-email
          </v-icon>
        </v-avatar>
        <v-card-text class="mt-5">
          <p class="text-h4 text--primary">
            Origin
          </p>
          <p>We Provide Essential Service For Your Health</p>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.v-avatar{
    border: 2px solid #EEEEEE;
        top: 24px;
        z-index: 1;
}
</style>

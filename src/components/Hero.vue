<template v-slot:default="{ hover }">
  <v-parallax
    id="home"
    src="https://livedemo00.template-help.com/wt_prod-20844/images/breadcrumbs-bg.jpg"
  >
    <v-container>
      <div
        v-vue-aos="{animationClass:'animate__animated animate__fadeInDown'}"
        class="justify-center text-center text-h4"
      >
        Welcome to Syrian Drug Index!
      </div>

      <div
        class="text-center text-h6"
      >
        <v-btn
          v-vue-aos="{animationClass:'animate__animated animate__fadeInDown'}"
          class="mr-6 mt-12 rounded-lg"
          tile
          color="#2a93c9"
          :to="{name: 'SearchCompany'}"
        >
          <v-icon left>
            mdi-magnify
          </v-icon>
          Find your information about company
        </v-btn>
        <v-btn
          v-vue-aos="{animationClass:'animate__animated animate__fadeInDown'}"
          class="mt-12 rounded-lg"
          tile
          color="#2a93c9"
          :to="{name: 'SearchMedicine'}"
        >
          <v-icon left>
            mdi-magnify
          </v-icon>
          Find your medicine
        </v-btn>
      </div>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
}
</script>
<style scoped>
.myfirst {
  width: 50px;
  height: 50px;
  color: white;
  position: relative;
  animation: myfirst 8s linear 1s infinite alternate;
}

@keyframes myfirst {
    0%    {left:0px; top:0px;}
    25%   {left:0px; top:50px;}
    50%   {left:0px; top:0px;}
    100%  {left:0px; top:50px;}

  }
</style>

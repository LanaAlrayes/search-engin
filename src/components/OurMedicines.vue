<template>
  <v-parallax
    height="100%"
    src="https://demo.themexbd.com/rtl/smartdev/wp-content/uploads/2021/06/choose-bg.png"
  >
    <v-container
      id="medicine"
    >
      <v-row class="my-16">
        <v-col cols="12">
          <div
            v-vue-aos="{animationClass:'animate__animated animate__fadeInDown'}"
            class="text-h6 text-center my-5 grey--text"
          >
            trending
          </div>
          <div
            v-vue-aos="{animationClass:'animate__animated animate__fadeInRight'}"
            class="text-h3 text-center my-5 text--primary"
          >
            The Counter Medicine
          </div>
        </v-col>
        <v-tabs
          color="blue"
          centered
          cols="6"
          sm="4"
        >
          <v-tab>All</v-tab>
          <v-tab>Pills</v-tab>
          <v-tab>Cream</v-tab>
          <v-tab>Syrups</v-tab>
          <v-tab-item>
            <v-row
              class="flex"
              justify="center"
              display="inline"
            >
              <v-col
                cols="12"
                md="3"
              >
                <v-hover v-slot="{ hover }">
                  <v-img
                    v-vue-aos="{animationClass:'animate__animated animate__slideInDown'}"
                    :class="{'scale': hover}"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkC5k7cwtkaDk0QLyy6EiliNYr0RK0BiJQlw&usqp=CAU"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="grey darken-1"
                    >
                      <v-row
                        justify="center"
                        align="center"
                        class="fill-height"
                      >
                        <div class="text-h6 centerd">
                          <v-btn
                            icon
                            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkC5k7cwtkaDk0QLyy6EiliNYr0RK0BiJQlw&usqp=CAU"
                            target="_blank"
                          >
                            <v-icon>mdi-magnify-plus-outline</v-icon>
                          </v-btn><br>
                        </div>
                      </v-row>
                    </v-overlay>
                  </v-img>
                </v-hover>
              </v-col>
              <v-col
                cols="12"
                md="3"
              >
                <v-hover v-slot="{ hover }">
                  <v-img
                    v-vue-aos="{animationClass:'animate__animated animate__slideInUp'}"
                    src="https://livedemo00.template-help.com/wt_prod-20844/images/index-image-2-229x170.jpg"
                    aspect-ratio="1"
                    class="grey lighten-2 "
                    :class="{'scale': hover}"
                  >
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="grey darken-1"
                    >
                      <v-row
                        justify="center"
                        align="center"
                        class="fill-height"
                      >
                        <div class="text-h6 centerd">
                          <v-btn
                            target="_blank"
                            icon
                            href="https://livedemo00.template-help.com/wt_prod-20844/images/index-image-2-229x170.jpg"
                          >
                            <v-icon>mdi-magnify-plus-outline</v-icon>
                          </v-btn><br>
                        </div>
                      </v-row>
                    </v-overlay>
                  </v-img>
                </v-hover>
              </v-col>
              <v-col
                cols="12"
                md="3"
              >
                <v-hover v-slot="{ hover }">
                  <v-img
                    v-vue-aos="{animationClass:'animate__animated animate__slideInRight'}"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtAAuDBdCvgHq6E4mKQeI5VtualnTCEm6LMA&usqp=CAU"
                    aspect-ratio="1"
                    class="grey lighten-2 "
                    min-height="552"

                    display="inline"
                    :class="{'scale': hover}"
                  >
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="grey darken-1"
                    >
                      <v-row
                        justify="center"
                        align="center"
                        class="fill-height"
                      >
                        <div class="text-h6 centerd">
                          <v-btn
                            target="_blank"
                            icon
                            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtAAuDBdCvgHq6E4mKQeI5VtualnTCEm6LMA&usqp=CAU"
                          >
                            <v-icon>mdi-magnify-plus-outline</v-icon>
                          </v-btn><br>
                        </div>
                      </v-row>
                    </v-overlay>
                  </v-img>
                </v-hover>
              </v-col>
              <v-col
                cols="12"
                md="3"
              >
                <v-hover v-slot="{ hover }">
                  <v-img
                    v-vue-aos="{animationClass:'animate__animated animate__slideInLeft'}"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1cyI_Fzg69cFvbJKxh38qLJUzKrROycgdXA&usqp=CAU"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    :class="{'scale': hover}"
                  >
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="grey darken-1"
                    >
                      <v-row
                        justify="center"
                        align="center"
                        class="fill-height"
                      >
                        <div class="text-h6 centerd">
                          <v-btn
                            target="_blank"
                            icon
                            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1cyI_Fzg69cFvbJKxh38qLJUzKrROycgdXA&usqp=CAU"
                          >
                            <v-icon>mdi-magnify-plus-outline</v-icon>
                          </v-btn><br>
                        </div>
                      </v-row>
                    </v-overlay>
                  </v-img>
                </v-hover>
              </v-col>
            </v-row>
            <v-row
              class="flex"
              justify="center"
            >
              <v-col
                cols="12"
                md="6"
              >
                <v-hover v-slot="{ hover }">
                  <v-img
                    v-vue-aos="{animationClass:'animate__animated animate__slideInUp'}"
                    :class="{'scale': hover}"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyegj3D8iAirRA_iSuC14IuXT8X2eJOce1-Q&usqp=CAU"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    max-height="266"
                    min-width="500"
                  >
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="grey darken-1"
                    >
                      <v-row
                        justify="center"
                        align="center"
                        class="fill-height"
                      >
                        <div class="text-h6 centerd">
                          <v-btn
                            target="_blank"
                            icon
                            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyegj3D8iAirRA_iSuC14IuXT8X2eJOce1-Q&usqp=CAU"
                          >
                            <v-icon>mdi-magnify-plus-outline</v-icon>
                          </v-btn><br>
                        </div>
                      </v-row>
                    </v-overlay>
                  </v-img>
                </v-hover>
              </v-col>
              <v-spacer />
              <v-col
                cols="12"
                md="3"
              >
                <v-hover v-slot="{ hover }">
                  <v-img
                    v-vue-aos="{animationClass:'animate__animated animate__slideInRight'}"
                    src="https://livedemo00.template-help.com/wt_prod-20844/images/index-image-1-229x170.jpg"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    :class="{'scale': hover}"
                  >
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="grey darken-1"
                    >
                      <v-row
                        justify="center"
                        align="center"
                        class="fill-height"
                      >
                        <div class="text-h6 centerd">
                          <v-btn
                            target="_blank"
                            icon
                            href="https://livedemo00.template-help.com/wt_prod-20844/images/index-image-1-229x170.jpg"
                          >
                            <v-icon>mdi-magnify-plus-outline</v-icon>
                          </v-btn><br>
                        </div>
                      </v-row>
                    </v-overlay>
                  </v-img>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row
              class="flex"
              justify="center"
              display="inline"
            >
              <v-col
                cols="12"
                md="3"
              >
                <v-hover v-slot="{ hover }">
                  <v-img
                    v-vue-aos="{animationClass:'animate__animated animate__slideInUp'}"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtAAuDBdCvgHq6E4mKQeI5VtualnTCEm6LMA&usqp=CAU"
                    aspect-ratio="1"
                    class="grey lighten-2 "
                    min-height="552"
                    :class="{'scale': hover}"
                  >
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="grey darken-1"
                    >
                      <v-row
                        justify="center"
                        align="center"
                        class="fill-height"
                      >
                        <div class="text-h6 centerd">
                          <v-btn
                            target="_blank"
                            icon
                            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtAAuDBdCvgHq6E4mKQeI5VtualnTCEm6LMA&usqp=CAU"
                          >
                            <v-icon>mdi-magnify-plus-outline</v-icon>
                          </v-btn><br>
                        </div>
                      </v-row>
                    </v-overlay>
                  </v-img>
                </v-hover>
              </v-col>
              <v-col
                cols="12"
                md="3"
              >
                <v-hover v-slot="{ hover }">
                  <v-img
                    v-vue-aos="{animationClass:'animate__animated animate__slideInRight'}"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1cyI_Fzg69cFvbJKxh38qLJUzKrROycgdXA&usqp=CAU"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    :class="{'scale': hover}"
                  >
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="grey darken-1"
                    >
                      <v-row
                        justify="center"
                        align="center"
                        class="fill-height"
                      >
                        <div class="text-h6 centerd">
                          <v-btn
                            target="_blank"
                            icon
                            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1cyI_Fzg69cFvbJKxh38qLJUzKrROycgdXA&usqp=CAU"
                          >
                            <v-icon>mdi-magnify-plus-outline</v-icon>
                          </v-btn><br>
                        </div>
                      </v-row>
                    </v-overlay>
                  </v-img>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row
              class="flex"
              justify="center"
              display="inline"
            >
              <v-col
                cols="12"
                md="3"
              >
                <v-hover v-slot="{ hover }">
                  <v-img
                    v-vue-aos="{animationClass:'animate__animated animate__slideInRight'}"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkC5k7cwtkaDk0QLyy6EiliNYr0RK0BiJQlw&usqp=CAU"
                    aspect-ratio="1"
                    class="grey lighten-2 "
                    :class="{'scale': hover}"
                  >
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="grey darken-1"
                    >
                      <v-row
                        justify="center"
                        align="center"
                        class="fill-height"
                      >
                        <div class="text-h6 centerd">
                          <v-btn
                            target="_blank"
                            icon
                            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkC5k7cwtkaDk0QLyy6EiliNYr0RK0BiJQlw&usqp=CAU"
                          >
                            <v-icon>mdi-magnify-plus-outline</v-icon>
                          </v-btn><br>
                        </div>
                      </v-row>
                    </v-overlay>
                  </v-img>
                </v-hover>
              </v-col>
              <v-col
                cols="12"
                md="6"
              >
                <v-hover v-slot="{ hover }">
                  <v-img
                    v-vue-aos="{animationClass:'animate__animated animate__slideInRight'}"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyegj3D8iAirRA_iSuC14IuXT8X2eJOce1-Q&usqp=CAU"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    max-height="266"
                    min-width="500"
                    :class="{'scale': hover}"
                  >
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="grey darken-1"
                    >
                      <v-row
                        justify="center"
                        align="center"
                        class="fill-height"
                      >
                        <div class="text-h6 centerd">
                          <v-btn
                            target="_blank"
                            icon
                            href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyegj3D8iAirRA_iSuC14IuXT8X2eJOce1-Q&usqp=CAU"
                          >
                            <v-icon>mdi-magnify-plus-outline</v-icon>
                          </v-btn><br>
                        </div>
                      </v-row>
                    </v-overlay>
                  </v-img>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row
              class="flex"
              justify="center"
              display="inline"
            >
              <v-col
                cols="12"
                md="3"
              >
                <v-hover v-slot="{ hover }">
                  <v-img
                    v-vue-aos="{animationClass:'animate__animated animate__slideInUp'}"
                    src="https://livedemo00.template-help.com/wt_prod-20844/images/index-image-2-229x170.jpg"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    :class="{'scale': hover}"
                  >
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="grey darken-1"
                    >
                      <v-row
                        justify="center"
                        align="center"
                        class="fill-height"
                      >
                        <div class="text-h6 centerd">
                          <v-btn
                            target="_blank"
                            icon
                            href="https://livedemo00.template-help.com/wt_prod-20844/images/index-image-2-229x170.jpg"
                          >
                            <v-icon>mdi-magnify-plus-outline</v-icon>
                          </v-btn><br>
                        </div>
                      </v-row>
                    </v-overlay>
                  </v-img>
                </v-hover>
              </v-col>
              <v-col
                cols="12"
                md="3"
              >
                <v-hover v-slot="{ hover }">
                  <v-img
                    v-vue-aos="{animationClass:'animate__animated animate__fadeInDown'}"
                    src="https://livedemo00.template-help.com/wt_prod-20844/images/index-image-1-229x170.jpg"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    :class="{'scale': hover}"
                  >
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="grey darken-1"
                    >
                      <v-row
                        justify="center"
                        align="center"
                        class="fill-height"
                      >
                        <div class="text-h6 centerd">
                          <v-btn
                            target="_blank"
                            icon
                            href="https://livedemo00.template-help.com/wt_prod-20844/images/index-image-1-229x170.jpg"
                          >
                            <v-icon>mdi-magnify-plus-outline</v-icon>
                          </v-btn><br>
                        </div>
                      </v-row>
                    </v-overlay>
                  </v-img>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs>
      </v-row>
    </v-container>
  </v-parallax>
</template>
<script>
export default {
  data: () => ({
  }),

}
</script>
<style scoped>
  .row + .row {
      margin-top: -290px;
  }

  .scale .v-image__image{
    transform: scale(1.2);
    transition: transform 0.3s;
  }

  </style>

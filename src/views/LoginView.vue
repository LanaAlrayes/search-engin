<template>
  <div>
    <!-- <v-parallax
    height="100%"
    src="https://demo.themexbd.com/rtl/smartdev/wp-content/uploads/2021/06/choose-bg.png"
  > -->
    <svg
      class="mt-12"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 224"
    ><path
      fill="#2a93c9"
      fill-opacity="0.66"
      d="M0,32L40,32C80,32,160,32,240,64C320,96,400,160,480,154.7C560,149,640,75,720,80C800,85,880,171,960,192C1040,213,1120,171,1200,165.3C1280,160,1360,192,1400,208L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
    /></svg>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          class="mb-12"
        >
          <v-card
            v-vue-aos="{animationClass:'animate__fadeInUp animate__animatd'}"
            class="background"
            elevation="5"
            shaped
          >
            <v-img
              :src="require(`../assets/login.png`)"
              width="200"
              class="mx-16"
            />
            <v-list-item two-line>
              <v-list-item-content class="ml-8">
                <v-list-item-title class="text-h5">
                  Welcome to Syrian Drug Index!
                </v-list-item-title>
                <v-list-item-subtitle>Please sing-in to your account</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <validation-observer
              ref="observer"
              v-slot="{ invalid }"
            >
              <form
                class="py-8"
                @submit.prevent="submit"
              >
                <validation-provider
                  v-slot="{ errors }"
                  name="phoneNumber"
                  :rules="{
                    required: true,
                    regex: '^(\\+9639)'
                  }"
                >
                  <v-text-field
                    v-model="phoneNumber"
                    color="#000000"
                    class="mx-10 text-dark"
                    :counter="20"
                    :error-messages="errors"
                    label="Phone Number"
                    required
                    outlined
                  />

                  <validation-provider
                    v-slot="{errors }"
                    name="password"
                    rules="required"
                  >
                    <v-text-field
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      color="#000000"
                      class="mx-10 text-dark"
                      :error-messages="errors"
                      label="Password"
                      required
                      outlined
                      @click:append="show1 = !show1"
                    />
                  </validation-provider>

                  <v-btn
                    class="ml-12"
                    type="submit"
                    color="success"
                    :disabled="invalid"
                  >
                    LogIn
                  </v-btn>

                  <v-dialog
                    v-model="dialog"
                    width="500"
                  >
                    <v-card>
                      <v-card-title
                        class="text-h5 amber lighten-2"
                      >
                        Wrong login
                      </v-card-title>
                      <v-card-text class="text-center mt-5">
                        Please try again
                      </v-card-text>
                      <v-divider />
                      <v-card-actions>
                        <v-spacer />
                        <v-btn
                          color="success"
                          @click="dialog = false"
                        >
                          OK
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>

                  <v-btn
                    class="ml-8"
                    color="success"
                    @click="clear"
                  >
                    clear
                  </v-btn>
                </validation-provider>
              </form>
            </validation-observer>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  <!-- </v-parallax> -->
  </div>
</template>
<script>
import { required, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('regex', {
  ...regex,
  message: '{_field_} It must be mobile {regex}',
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data: () => ({
    show1: false,
    phoneNumber: '',
    password: '',
    dialog: '',

  }),

  methods: {
    submit () {
      this.$refs.observer.validate()
    },
    clear () {
      this.phoneNumber = ''
      this.password = ''
      this.$refs.observer.reset()
    },
  },
}
</script>
<style>
.background{
  position: relative;
    transform: translate(-50%,-50%);
    top:50%;
    left:50%;
    opacity: 0.9;
    width:400px;
    height:500px;

}

</style>

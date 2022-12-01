<template>
  <div>
    <hero-contact />
    <v-parallax
      height="100%"
      src="https://demo.themexbd.com/rtl/smartdev/wp-content/uploads/2021/06/choose-bg.png"
    >
      <v-container
        id="stats"
      >
        <v-row>
          <v-col
            cols="12"
            md="7"
            class="text--primary"
          >
            <p
              v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
              class="my-10 font-weight-medium text-h2"
            >
              Get In Touch
            </p>
            <p
              v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
            >
              You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can also use a quick contact form below.
            </p>
            <p
              v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
            >
              We would be happy to answer your questions.
            </p>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="send"
            >
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="firstname"
                    v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
                    :rules="nameRules"
                    :counter="40"
                    label="First Name"
                    required
                    :error-messages="errors.title"
                    outlined
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="lastname"
                    v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
                    :rules="nameRules"
                    :counter="40"
                    label="Last Name"
                    required
                    :error-messages="errors.title"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-select
                    v-model="select"
                    v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
                    :items="items"
                    label="Select"
                    :error-messages="errors.type"
                    :rules="selectRules"
                    outlined
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="email"
                    v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    :error-messages="errors.email"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-textarea
                v-model="message"
                v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
                label="Your Message"
                rows="4"
                row-height="25"
                :error-messages="errors.content"
                outlined
              />
              <v-checkbox
                v-model="agreement"
                v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
                :rules="[rules.required]"
                color="success"
              >
                <template #label>
                  I agree to the&nbsp;
                  <a
                    href="#"
                    @click.stop.prevent="dialog = true"
                  >Terms of Service</a>
                  &nbsp;and&nbsp;
                  <a
                    href="#"
                    @click.stop.prevent="dialog = true"
                  >Privacy Policy</a>*
                </template>
              </v-checkbox>
              <v-btn
                v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
                :disabled="!valid"
                color="success"
                type="submit"
                class="mr-4"
                rounded
                @click="validate"
              >
                Send message
              </v-btn>

              <v-btn
                v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
                rounded
                @click="clear"
              >
                clear
              </v-btn>
            </v-form>
          </v-col>

          <v-col
            cols="12"
            md="4"
            class="ml-10 mt-10 text--primary"
          >
            <div
              v-vue-aos="{animationClass:'animate__animated animate__fadeInRight'}"
              class="my-16"
              max-width="374"
            >
              <h6>SOCIALS</h6>
              <v-divider class="mr-4 my-2" />
              <div class="d-flex flex-row mr-16">
                <v-btn
                  class="mx-1 mb-2"
                  fab
                  x-small
                  color="white"
                >
                  <v-icon
                    color="indigo"
                  >
                    {{ icons.facebook }}
                  </v-icon>
                </v-btn>

                <v-btn
                  class="mx-1 mb-2"
                  fab
                  x-small
                  color="white"
                >
                  <v-icon
                    color="cyan"
                  >
                    {{ icons.twitter }}
                  </v-icon>
                </v-btn>
                <v-btn
                  class="mx-1 mb-2"
                  fab
                  x-small
                  color="white"
                >
                  <v-icon
                    color="red"
                  >
                    {{ icons.google }}
                  </v-icon>
                </v-btn>

                <v-btn
                  :to="{name: 'About'}"
                  class="mx-1 mb-2"
                  fab
                  x-small
                  color="white"
                >
                  <v-icon
                    color="purple"
                  >
                    {{ icons.instagra }}
                  </v-icon>
                </v-btn>
              </div>
            </div>

            <div
              v-vue-aos="{animationClass:'animate__animated animate__fadeInRight'}"
              class="my-16"
              max-width="374"
            >
              <h6>ADDRESS</h6>
              <v-divider class="mr-4 my-2" />
              <p>
                <v-icon
                  left
                  color="#2a93c9"
                  size="30px"
                >
                  {{ icons.address }}
                </v-icon>
                <span
                  style="color:#757575"
                  class="text-h6 font-weight-medium"
                >
                  {{ settings.search_address }}
                </span>
              </p>
            </div>
            <div
              v-vue-aos="{animationClass:'animate__animated animate__fadeInRight'}"
              class="mx-auto my-16"
              max-width="374"
            >
              <h6>PHONES</h6>

              <v-divider class="mr-4 my-2" />
              <p>
                <v-icon
                  left
                  color="#2a93c9"
                  size="30px"
                >
                  {{ icons.phone }}
                </v-icon>
                <span
                  style="color:#757575"
                  class="text-h6 font-weight-medium"
                >
                  {{ settings.search_phone }}
                </span>
              </p>
            </div>
            <div
              v-vue-aos="{animationClass:'animate__animated animate__fadeInRight'}"
              class="mx-auto my-16"
              max-width="374"
            >
              <h6>E-MAIL</h6>

              <v-divider class="mr-4 my-2" />
              <p>
                <v-icon
                  left
                  color="#2a93c9"
                  size="30px"
                >
                  {{ icons.email }}
                </v-icon>
                <span
                  style="color:#757575"
                  class="text-h6 font-weight-medium"
                >
                  {{ settings.search_email }}
                </span>
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
  </div>
</template>
<script>
import HeroContact from '@/components/HeroContact.vue'

export default ({
  name: 'ContactView',
  components: {
    HeroContact,
  },
  data: () => ({
    icons: {
      phone: 'mdi-phone',
      email: 'mdi-email',
      address: 'mdi-home',
      facebook: 'mdi-facebook',
      twitter: 'mdi-twitter',
      google: 'mdi-google-plus',
      instagra: 'mdi-instagram',
    },

    settings: {
      search_phone: '+9963 954763265',
      search_address: 'Syria Damascus',
      search_email: 'info@info.com',
    },
    selectRules: [
      v => !!v || 'Select is required',

    ],
    items: ['Question', 'Thanks', 'complain'],
    text: 'welcome to our hotel',
    snackbar: false,
    valid: true,
    rules: { required: v => !!v || 'This field is required' },
    message: '',
    agreement: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 40 || 'Name must be less than 40 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    errors: {},
  }),
  methods: {
    clear () {
      this.$refs.form.reset()
    },
    validate () {
      this.$refs.form.validate()
    },
    send () {
      const self = this
      const postinfo = {
        title: self.firstname,
        type: self.lastname,
        email: self.email,
        content: self.message,
      }
      this.axios.post('/messages', postinfo).then(res => {
        console.log(res.data.message)
        if (res.data.message === 'message was created') {
          // alert('Welcome to our Hotel')
          // snackbar
          self.snackbar = true
        }
      }).catch(err => {
        // sanck
        self.errors = err.response.data.errors
        console.log(err.response.data.errors)
      })
    },
  },

})
</script>
<style scoped>
h6{
  font-size: 18px;
}

</style>

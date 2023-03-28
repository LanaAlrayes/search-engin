<template>
  <v-parallax
    height="100%"
    src="https://demo.themexbd.com/rtl/smartdev/wp-content/uploads/2021/06/choose-bg.png"
  >
    <v-container>
      <div
        class="text-h4  mx-auto my-12 text--primary"
      >
        You can add the company now
      </div>
      <v-row>
        <v-col cols="10">
          <validation-observer
            ref="observer"
          >
            <form
              @submit.prevent="submit"
            >
              <v-row>
                <v-col
                  cols="9"
                >
                  <validation-provider
                    v-slot="{ errors }"
                    name="companyName"
                    rules="required|max:40"
                  >
                    <v-text-field
                      v-model="companyName"
                      :counter="40"
                      :error-messages="errors"
                      label="Company Name"
                      required
                      outlined
                    />
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="summary"
                  >
                    <v-text-field
                      v-model="summary"
                      :error-messages="errors"
                      label="Summary"
                      required
                      outlined
                    />
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="companyAddress"
                    rules="required|max:50"
                  >
                    <v-text-field
                      v-model="companyAddress"
                      :counter="50"
                      :error-messages="errors"
                      label="Company Address"
                      required
                      outlined
                    />
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="email"
                    rules="required|email"
                  >
                    <v-text-field
                      v-model="email"
                      :error-messages="errors"
                      label="E-mail"
                      required
                      outlined
                    />
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="numberProducts"
                    rules="required|max:10"
                  >
                    <v-text-field
                      v-model="numberProducts"
                      :counter="10"
                      :error-messages="errors"
                      label="Number of Products"
                      required
                      outlined
                    />
                  </validation-provider>
                </v-col>
              </v-row>
              <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="checkbox"
              >
                <v-checkbox
                  v-model="checkbox"
                  :error-messages="errors"
                  value="1"
                  label="Option"
                  type="ch
                outlinedeckbox"
                  required
                />
              </validation-provider>
              <v-btn
                class="mr-4"
                color="success"
                type="submit"
                @click="validate"
              >
                submit
              </v-btn>
              <v-btn @click="clear">
                clear
              </v-btn>
            </form>
          </validation-observer>
        </v-col>
        <v-col cols="2">
          <v-btn
            :to="{name: 'DataCompanyView'}"
            class="myfirst"
            fab
          >
            <v-icon
              size="40"
              color="blue darken-4"
            >
              mdi-database-eye-outline
            </v-icon>
          </v-btn>
          <!-- <v-btn
            class="myfirst mt-16 rounded-circle success"
            @click="$router.push({name: 'DataCompanyView'})"
          >
            Show
          </v-btn> -->
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>
<script>
import { required, email, max } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('email', {
  ...email,
  message: 'Email must be valid',
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    company: [],
    companyName: '',
    summary: '',
    companyAddress: '',
    email: '',
    numberProducts: '',
    checkbox: null,
  }),
  methods: {
    submit () {
      const postinfo = {
        name: this.companyName,
        summary: this.summary,
        website: this.companyAddress,
        email: this.email,
        count: this.numberProducts,
      }
      this.axios.post('/company_add/', postinfo).then(res => {
        if (res.data === 'Company has added') {
          window.location = '/data-company'
        } else {
          window.location = '/add-companies'
        }
      })
      this.$refs.observer.validate()
    },
    validate () {
      this.$refs.form.validate()
    },
    clear () {
      this.companyName = ''
      this.summary = ''
      this.companyAddress = ''
      this.email = ''
      this.numberProducts = ''
      this.checkbox = null
      this.$refs.observer.reset()
    },
  },
}
</script>
<style scoped>
.myfirst {
  width: 60px;
  height: 60px;
  color: white;
  position: relative;
  animation: myfirst 5s linear 2s infinite alternate;
}

@keyframes myfirst {
  0%   {left:0px; top:50px;}
  100%  {left:0px; top:100px;}
  }
</style>

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
      <validation-observer
        ref="observer"
      >
        <form
          @submit.prevent="submit"
        >
          <v-row>
            <v-col
              cols="7"
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
            type="submit"
          >
            submit
          </v-btn>
          <v-btn @click="clear">
            clear
          </v-btn>
        </form>
      </validation-observer>
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
    companyName: '',
    summary: '',
    companyAddress: '',
    email: '',
    numberProducts: '',
    checkbox: null,
  }),

  methods: {
    submit () {
      this.$refs.observer.validate()
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

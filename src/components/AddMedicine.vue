<template>
  <v-parallax
    height="100%"
    src="https://demo.themexbd.com/rtl/smartdev/wp-content/uploads/2021/06/choose-bg.png"
  >
    <v-container>
      <div
        class="text-h4 my-12 text--primary"
      >
        You can add the medicine now
      </div>
      <validation-observer
        ref="observer"
      >
        <form @submit.prevent="submit">
          <v-row>
            <v-col>
              <validation-provider
                v-slot="{ errors }"
                name="medicamentName"
                rules="required|max:40"
              >
                <v-text-field
                  v-model="medicamentName"
                  :counter="40"
                  :error-messages="errors"
                  label="Medicament Name"
                  required
                  outlined
                />
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="manufactured"
                rules="required|max:50"
              >
                <v-text-field
                  v-model="manufactured"
                  :counter="50"
                  :error-messages="errors"
                  label="Manufactured By"
                  required
                  outlined
                />
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="indications"
              >
                <v-text-field
                  v-model="indications"
                  :error-messages="errors"
                  label="Indications"
                  required
                  outlined
                />
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="adverseReactions"
              >
                <v-text-field
                  v-model="adverseReactions"
                  :error-messages="errors"
                  label="Adverse Reactions"
                  required
                  outlined
                />
              </validation-provider>
            </v-col>

            <v-col>
              <validation-provider
                v-slot="{ errors }"
                name="warnings"
              >
                <v-text-field
                  v-model="warnings"
                  :error-messages="errors"
                  label="Warnings"
                  required
                  outlined
                />
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="drugInteraction"
              >
                <v-text-field
                  v-model="drugInteraction"
                  :error-messages="errors"
                  label="Drug Interaction"
                  required
                  outlined
                />
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="howSupplied"
              >
                <v-text-field
                  v-model="howSupplied"
                  :error-messages="errors"
                  label="How Supplied"
                  required
                  outlined
                />
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="storage"
              >
                <v-text-field
                  v-model="storage"
                  :error-messages="errors"
                  label="Storage"
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
    medicamentName: '',
    manufactured: '',
    indications: '',
    adverseReactions: '',
    warnings: '',
    drugInteraction: '',

    howSupplied: '',
    storage: '',

    checkbox: null,
  }),

  methods: {
    submit () {
      this.$refs.observer.validate()
    },
    clear () {
      this.medicamentName = ''
      this.manufactured = ''
      this.indications = ''
      this.adverseReactions = ''
      this.warnings = ''
      this.drugInteraction = ''

      this.howSupplied = ''
      this.storage = ''
      this.checkbox = null
      this.$refs.observer.reset()
    },
  },
}
</script>

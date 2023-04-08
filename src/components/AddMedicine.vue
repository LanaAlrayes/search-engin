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
      <v-row>
        <v-col
          cols="10"
        >
          <validation-observer
            ref="observer"
          >
            <form @submit.prevent="submit">
              <v-row>
                <v-col cols="5">
                  <validation-provider
                    v-slot="{ errors }"
                    name="medicamentName"
                    rules="required|max:40"
                  >
                    <v-text-field
                      v-model="medicamentName"
                      :counter="40"
                      :error-messages="errors"
                      label="Medicament name"
                      required
                      outlined
                    />
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="genericName"
                    rules="required|max:50"
                  >
                    <v-text-field
                      v-model="genericName"
                      :counter="50"
                      :error-messages="errors"
                      label="Generic name"
                      required
                      outlined
                    />
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="companyName"
                    rules="required|max:40"
                  >
                    <v-text-field
                      v-model="companyName"
                      :counter="40"
                      :error-messages="errors"
                      label="Company name"
                      required
                      outlined
                    />
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="contraindications"
                  >
                    <v-text-field
                      v-model="contraindications"
                      :error-messages="errors"
                      label="Contraindications"
                      required
                      outlined
                    />
                  </validation-provider>
                </v-col>
                <v-col cols="5">
                  <validation-provider
                    v-slot="{ errors }"
                    name="sideEffects"
                  >
                    <v-text-field
                      v-model="sideEffects"
                      :error-messages="errors"
                      label="Undesirable effects"
                      required
                      outlined
                    />
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="biologicClassification"
                  >
                    <v-text-field
                      v-model="biologicClassification"
                      :error-messages="errors"
                      label="Biologic classification"
                      required
                      outlined
                    />
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="dosageAndAdministration"
                  >
                    <v-text-field
                      v-model="dosageAndAdministration"
                      :error-messages="errors"
                      label="Dosage and administration"
                      required
                      outlined
                    />
                  </validation-provider>

                  <validation-provider
                    v-slot="{ errors }"
                    name="pharmaceuticalForm"
                  >
                    <v-text-field
                      v-model="pharmaceuticalForm"
                      :error-messages="errors"
                      label="Pharmaceutical form"
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
            :to="{name: 'DataMedicineView'}"
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
    medicine: [],
    medicamentName: '',
    companyName: '',
    genericName: '',
    contraindications: '',
    sideEffects: '',
    biologicClassification: '',
    dosageAndAdministration: '',
    pharmaceuticalForm: '',
    checkbox: null,
  }),

  methods: {
    submit () {
      const postinfo = {
        name: this.medicamentName,
        company: this.companyName,
        generic_Name: this.genericName,
        about: this.contraindications,
        side_effects: this.sideEffects,
        biologic_classification: this.biologicClassification,
        uses: this.dosageAndAdministration,
        type: this.pharmaceuticalForm,
      }
      this.axios.post('/add_to_elastic/', postinfo).then(res => {
        if (res.data === 'Users has added') {
          window.location = '/data-medicine'
        } else {
          window.location = '/add-medicine'
        }
      })
      this.$refs.observer.validate()
    },
    clear () {
      this.medicamentName = ''
      this.companyName = ''
      this.genericName = ''
      this.contraindications = ''
      this.sideEffects = ''
      this.biologicClassification = ''
      this.dosageAndAdministration = ''
      this.pharmaceuticalForm = ''
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

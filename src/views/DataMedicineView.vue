<template>
  <div>
    <svg
      class="mt-12"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 224"
    ><path
      fill="#2a93c9"
      fill-opacity="0.70"
      d="M0,32L40,32C80,32,160,32,240,64C320,96,400,160,480,154.7C560,149,640,75,720,80C800,85,880,171,960,192C1040,213,1120,171,1200,165.3C1280,160,1360,192,1400,208L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
    /></svg>
    <v-container>
      <v-data-table
        :key="desserts.name"
        v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
        :headers="headers"
        :items="desserts"
        sort-by="type"
        class="elevation-1"
      >
        <template #top>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          />
          <v-dialog
            v-model="dialogDelete"
            max-width="500px"
          >
            <v-card>
              <v-card-title class="text-h5">
                Are you sure you want to delete this item?
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="blue darken-1"
                  text
                  @click="closeDelete"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="deleteItemConfirm(desserts.name)"
                >
                  OK
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template #[`item.actions`]="{ item }">
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template #no-data>
          <v-btn
            color="primary"
            @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        align: 'start',
        sortable: false,
      },
      { text: 'Medicament name', value: 'name' },
      { text: 'Generic name', value: 'generic_Name' },
      { text: 'Company name', value: 'company' },
      { text: 'Contraindications', value: 'about' },
      { text: 'Undesirable effects', value: 'side_effects' },
      { text: 'Biologic classification', value: 'biologic_classification' },
      { text: 'Dosage and administration', value: 'uses' },
      { text: 'Pharmaceutical form', value: 'type' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      medicamentName: '',
      genericName: '',
      companyName: '',
      contraindications: '',
      sideEffects: '',
      biologicClassification: '',
      dosageAndAdministration: '',
      pharmaceuticalForm: '',
    },
    defaultItem: {
      medicamentName: '',
      genericName: '',
      companyName: '',
      contraindications: '',
      sideEffects: '',
      biologicClassification: '',
      dosageAndAdministration: '',
      pharmaceuticalForm: '',
    },
  }),
  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      const payload = {
        name: this.medicamentName,
        generic_Name: this.genericName,
        company: this.companyName,
        about: this.contraindications,
        side_effects: this.sideEffects,
        biologic_classification: this.biologicClassification,
        uses: this.dosageAndAdministration,
        type: this.pharmaceuticalForm,
      }
      const self = this
      this.axios.get('/get_medicine/', payload).then(res => {
        self.desserts = res.data
      })
    },

    deleteItem (item) {
      this.dialogDelete = true
    },

    deleteItemConfirm (name) {
      const payload = {
        name: this.name,
      }
      this.axios.get('/delete_medicine/' + name, payload).then(res => {
        if (res.data === 'DONE') {
          self.desserts = res.data
        } else {
          window.location = '/data-medicine'
        }
      })
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

  },
}
</script>

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
      <v-row>
        <v-col>
          <p
            v-vue-aos="{animationClass:'animate__animated animate__fadeInDown'}"
            class="text-center text-h6"
          >
            Find your information about company
          </p>
          <v-card-title
            v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
          >
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            />
            <v-spacer />
            <v-spacer />
          </v-card-title>
          <v-data-table
            v-vue-aos="{animationClass:'animate__animated animate__fadeInLeft'}"
            :headers="headers"
            :items="desserts"
            :search="search"
            sort-by="type"
            class="elevation-1"
          >
            <template #no-data>
              <v-btn
                color="primary"
                @click="initialize"
              >
                Search
              </v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    search: '',
    headers: [
      {
        align: 'start',
        sortable: false,
      },
      { text: 'Name', value: 'name' },
      { text: 'Count', value: 'count' },
      { text: 'Address', value: 'website' },
      { text: 'Email', value: 'email' },
      { text: 'Summary', value: 'summary' },
    ],
    desserts: [],
  }),
  computed: {
    created () {
      return this.initialize
    },
  },
  methods: {
    initialize () {
      const payload = {
        name: this.name,
        summary: this.summary,
        count: this.count,
        website: this.address,
        email: this.email,
      }
      const self = this
      this.axios.get('/get_companys', payload).then(res => {
        self.desserts = res.data
      })
    },
  },
}

</script>

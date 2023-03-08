<template>
  <div>
    <v-carousel
      class="my-14"
      cycle
      height="380"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(photo, i) in photos"
        :key="i"
        :src="photo.src"
      />
    </v-carousel>
    <div>
      <v-card
        v-for="(member, i) in companies"
        :key="i"
        class="mx-auto my-10 py-6 px-4"
        max-width="1200"
        color="#ECEFF1"
      >
        <v-row>
          <v-col cols="4">
            <v-card color="#E0E0E0">
              <v-card-title class="text-h5">
                <!-- <v-img
                  src="http://ultra-pedia.com/img/logoEn.png"
                  width="300"
                /> -->
                {{ member.name }}
              </v-card-title>
              <v-divider class="mx-2 my-2" />
              <v-list
                color="#E0E0E0"
                flat
              >
                <v-card-title class="teal--text">
                  Categories
                </v-card-title>
                <v-list-item-group
                  v-model="selectedItem"
                  color="teal"
                >
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="teal">
                        mdi-arrow-right
                      </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Urological Drugs</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="teal">
                        mdi-arrow-right
                      </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Antibiotice </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="teal">
                        mdi-arrow-right
                      </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Obesity drugs </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="teal">
                        mdi-arrow-right
                      </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Antidiabetic Drugs </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon color="teal">
                        mdi-arrow-right
                      </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Cardiovascular Drugs </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
                <v-divider class="mx-2 my-2" />
                <v-list-item-group
                  v-model="selectedItem"
                  color="teal"
                >
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>{{ icons.email }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> {{ member.email }} </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>{{ icons.home }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> {{ member.address }} </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>{{ icons.counter }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> {{ member.count }} </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card
              color="#1F7087"
              dark
            >
              <v-card-title class="text-h5">
                New Products
              </v-card-title>
              <v-divider class="mx-2 my-2" />
              <v-card-subtitle
                v-for="(list, m) in medicines"
                :key="m"
              >
                <v-list-item four-line>
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-black">
                      {{ list.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="font-weight-bold">
                      {{ list.Caliber }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="font-weight-bold">
                      {{ list.TherapeuticCategories }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="font-weight-bold">
                      {{ list.PharmaceuticalForm }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card-subtitle>
              <v-card-actions>
                <v-btn
                  text
                  class="text-subtitle-1 text-lowercase"
                >
                  more about products >>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card
              color="#952175"
              dark
            >
              <v-card-title class="text-h5">
                Our Company
              </v-card-title>
              <v-divider class="mx-2 my-2" />
              <v-card-subtitle>
                {{ member.summary }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    reveal: false,
    photos: [
      {
        src: 'https://livedemo00.template-help.com/wt_prod-20844/images/project-3-671x214.jpg',
      },
      {
        src: 'https://livedemo00.template-help.com/wt_prod-20844/images/project-1-671x214.jpg',
      },
      {
        src: 'https://ld-wt73.template-help.com/wt_prod-20176/images/background-breadcrumbs-01-1920x345.jpg',
      },
    ],
    companies: [
      {
        name: 'Ultra Medica',
        summary: 'Since its inception in 1955, when Ultra Medica began to take its place in the world of pharmaceutical industries in Syria, it has been built on the basis of its enthusiasm and emphasis on hard work to develop the life sciences industry.Now, Ultra Medica is one of the largest and fastest growing companies in Syria, through its continuous follow-up of the latest technology that is in line with the global requirements and regulations of the industry.(GMP Certificate - ISO Certificates)This is through its various departments:- The industrial facility.- Marketing department.Sales and business network.We all work to achieve our goals to create new possibilities for our company.',
        address: 'Syria - Sydnaya',
        email: 'info@ultra-medica.org',
        count: '11500+',
      },
      {
        name: 'Human Pharma',
        summary: 'Im a thing. But, like most politicians, he promised more than he could deliver. You wont have time for sleeping, soldier, not with all the bed making youll be doing. Then well go with that data file! Hey, you add a one and two zeros to that or we walk! Youre going to do his laundry? Ive got to find a way to escape.',
        address: 'Tartous - Syria',
        email: 'human-pharma@hotmail.com',
        count: '25',
      },
      {
        name: 'fahed',
        summary: 'Im a thing. But, like most politicians, he promised more than he could deliver. You wont have time for sleeping, soldier, not with all the bed making youll be doing. Then well go with that data file! Hey, you add a one and two zeros to that or we walk! Youre going to do his laundry? Ive got to find a way to escape.',
        address: 'syria',
        email: 'fahed@gmail.com',
        count: '25',
      },
    ],
    Categories: [
      { te: 'd' },
    ],
    selectedItem: 1,
    icons: {
      email: 'mdi-email',
      home: 'mdi-home',
      counter: 'mdi-counter',
    },

    medicines: [
      {
        name: 'RIOXABAN 15 ( Rivaroxaban )',
        Caliber: 'Each film coated tablet contains Rivaroxaban 15 mg.',
        TherapeuticCategories: 'Cardiovascular Drugs',
        PharmaceuticalForm: 'F.C. Tablets',
      },
      {
        name: 'RIOXABAN 15 ( Rivaroxaban )',
        Caliber: 'Each film coated tablet contains Rivaroxaban 15 mg.',
        TherapeuticCategories: 'Cardiovascular Drugs',
        PharmaceuticalForm: 'F.C. Tablets',
      },
      {
        name: 'RIOXABAN 15 ( Rivaroxaban )',
        Caliber: 'Each film coated tablet contains Rivaroxaban 15 mg.',
        TherapeuticCategories: 'Cardiovascular Drugs',
        PharmaceuticalForm: 'F.C. Tablets',
      },

    ],
  }),
}
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>

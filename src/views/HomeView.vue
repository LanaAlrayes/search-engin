<template>
  <div>
    <hero />
    <different-v />
    <company-v />
    <our-medicines />
    <our-team />
    <client-testimonials />
  </div>
</template>

<script>
import Hero from '../components/Hero'
import DifferentV from '@/components/DifferentV.vue'
import CompanyV from '@/components/CompanyV.vue'
import OurMedicines from '@/components/OurMedicines.vue'
import OurTeam from '../components/OurTeam.vue'
import ClientTestimonials from '@/components/ClientTestimonials.vue'

export default {
  name: 'HomeView',

  components: {
    Hero,
    DifferentV,
    CompanyV,
    OurMedicines,
    OurTeam,
    ClientTestimonials,
  },
}
</script>

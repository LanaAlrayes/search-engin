<template>
  <div>
    <hero />
    <different-h />
    <our-medicines />
    <as-d />
    <our-team />
    <client-testimonials />
  </div>
</template>

<script>
import Hero from '../components/Hero'
import OurMedicines from '@/components/OurMedicines.vue'
import OurTeam from '../components/OurTeam.vue'
import DifferentH from '@/components/DifferentH.vue'
import AsD from '@/components/AsD.vue'
import ClientTestimonials from '@/components/ClientTestimonials.vue'

export default {
  name: 'HomeView',

  components: {
    Hero,
    OurMedicines,
    OurTeam,
    DifferentH,
    AsD,
    ClientTestimonials,
  },
}
</script>

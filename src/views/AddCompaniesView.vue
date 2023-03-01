<template>
  <div>
    <hero-companies />
    <add-companies />
  </div>
</template>
<script >
import HeroCompanies from '../components/HeroCompanies.vue'
import AddCompanies from '@/components/AddCompanies.vue'

export default {
  name: 'AddCompaniesView',
  components: {
    HeroCompanies,
    AddCompanies,

  },
}
</script>

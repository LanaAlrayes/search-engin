<template>
  <div>
    <hero-medicine />
    <add-medicine />
  </div>
</template>
<script>
import HeroMedicine from '@/components/HeroMedicine.vue'
import AddMedicine from '../components/AddMedicine.vue'

export default {
  name: 'AddMedicineView',
  components: {
    HeroMedicine,
    AddMedicine,
  },
}
</script>

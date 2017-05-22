<template>
  <div>
    <navbar></navbar>
    <h2>pageA</h2>
  </div>
</template>

<script>
import Navbar from 'app/components/Navbar.vue'


export default {
  components: { Navbar }
}
</script>
<style scoped>
  h2{
    color: green;
  }
</style>

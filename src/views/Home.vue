<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2 class="c-danger">测试 mixin</h2>
    <h2 class="c-c-orange">测试 text-color</h2>
    <cpt-test msg="this is home test component"/>
  </div>
</template>

<script>
// @ is an alias to /src
import cptTest from '@/components/cpt-test.vue'

export default {
  name: 'Home',
  components: {
    cptTest
  }
}
</script>

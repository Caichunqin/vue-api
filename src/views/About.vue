<template>
  <div class="about">
    <cpt-test msg='this is about test component'></cpt-test>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    'cpt-test': () =>
      import(/* webpackChunkName: "components/cpt-test" */
        '../components/cpt-test.vue')
  }
}
</script>

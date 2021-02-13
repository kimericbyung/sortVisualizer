<template>
  <div id="header">
    <button class="headerElement">{{ sort1 }}</button>
    <button class="headerElement">{{ sort2 }}</button>
    <button class="headerElement">{{ sort3 }}</button>
    <button class="headerElement">{{ sort4 }}</button>
    <button class="headerElement">{{ sort5 }}</button>
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       sort1: 'Merge Sort',
//       sort2: 'Quick Sort',
//       sort3: 'Bucket Sort',
//       sort4: 'Heap Sort',
//       sort5: 'Counting Sort'
//     };
//   },
// };
export default {
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style scoped>

.headerElement {
  display: inline;
}
</style>
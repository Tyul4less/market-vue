<template>
  <div style="width : 500px; height: 300px; border: 1px solid black">
  </div>
</template>

<script>
import axios from "axios";


export default {
  computed: {
/*    ...mapState({
      grid: state => state.grid,
    }),*/
  },
  data: () => ({
  }),
  created() {
    //this.$store.dispatch('SET_TABLE', tableColumns)
    axios.get('http://localhost:9999/getUser').then(e => {
      console.log(e.data)
    })
  },
}
</script>

<style>
</style>

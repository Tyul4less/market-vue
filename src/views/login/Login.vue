<template>
  <div style="background-color: lightskyblue;">
    <div class="login-big-box">
      <div class="login-small-box">
        <div>
          <input type="email" style="margin:20px 20px 10px" placeholder="email"/>
          <button style="width: 70px;">로그인</button>
        </div>
        <div>
        <input type="password" style="margin:0 20px 0 20px" placeholder="password"/>
          <button style="width: 70px;">회원가입</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  name : 'Login',
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

body {
  margin: 0;
  padding: 0;
}
.login-big-box {
  width: 90vh;
  height: 100vh;
  border: 1px solid black;
  margin: auto;
  margin-right: 0px;
  background-color: white;
}
.login-small-box {
  width: 30%;
  height: 20%;
  border: solid black 1px;
  margin : 50px 30px 0px 150px;
  right : -25%;
  position: relative;
  padding-left : 10px;
}
</style>

<template>
  <div>
    <Navbar />
    <router-view @fromChild="retrieve" :fromParent="dataNama" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue'; 

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Navbar
  },
  data() {
    return {
      dataNama: ""
    };
  },
  methods: {
    retrieve(namammu){
      this.dataNama = namammu;
      alert("Nama diterima: " + this.dataNama);
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

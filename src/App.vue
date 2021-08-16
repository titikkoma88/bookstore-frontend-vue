<template>
  <div>
    <Navbar />
    <router-view :bookList="booksData" @store="storeData" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      booksData: [
        {_id: 1, judul: "Laskar Pelangi", pengarang: "Andrea Hirata", harga: 80000, stok: 7},
        {_id: 2, judul: "New York Hari Ini", pengarang: "Aan Mansyur", harga: 85000, stok: 5}
      ],
    };
  },
  methods: {
    storeData(bookCreated) {
      console.log(bookCreated);
      alert("Data berhasil ditambahkan");
    },
  },
};
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

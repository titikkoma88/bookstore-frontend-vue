<template>
    <div class="container mt-3">
        <h1 class="text-center">Manajemen Buku</h1>
        <p>{{ bookList }}</p>
        <div id="formTambah">
            <h5>Tambah Buku</h5>
            <hr />
            <form class="form row" @submit.prevent="submitAdd">
                <div class="col-3">
                    <input type="text" class="form-control mx-2" placeholder="Judul" v-model="newBook.judul" />
                </div>
                <div class="col-3">
                    <input type="text" class="form-control mx-2" placeholder="Pengarang" v-model="newBook.pengarang" />
                </div>
                <div class="col-2">
                    <input type="text" class="form-control mx-2" placeholder="Harga" v-model="newBook.harga" />
                </div>
                <div class="col-2">
                    <input type="number" class="form-control mx-2" placeholder="Stok" v-model="newBook.stok" />
                </div>
                <div class="col-2">
                    <input type="submit" class="btn btn-primary ml-5" value="simpan" />
                </div>
            </form>
        </div>
        <div id="FormUbah"></div>
        <div id="daftarBuku">
            <h2 class="mt-3">Daftar Buku</h2>
            <hr />
            <button class="btn btn-primary m-2">
                Tambah Buku
            </button>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Judul</th>
                        <th>Pengarang</th>
                        <th>Harga</th>
                        <th>Stok</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(book, index) in bookList" :key="index">
                        <td>{{index + 1}}</td>
                        <td>{{book.judul}}</td>
                        <td>{{book.pengarang}}</td>
                        <td>{{book.harga}}</td>
                        <td>{{book.stok}}</td>
                        <td>
                            <button class="btn btn-info mr-3">Edit</button>
                            <button class="btn btn-danger">Hapus</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: ["bookList"],
    methods:{
        submitAdd() {
            const bookCreated = {
                judul: this.newBook.judul,
                pengarang: this.newBook.pengarang,
                harga: this.newBook.harga,
                stok: this.newBook.stok,
            };
            this.$emit("store", bookCreated);
            this.newBook.judul = "";
            this.newBook.pengarang = "";
            this.newBook.harga = "";
            this.newBook.stok = "";

        },
    },
    data() {
        return {
            newBook: {
                judul: "",
                pengarang: "",
                harga: "",
                stok: "",
            },
        };
    },
};
</script>

<style>

</style>
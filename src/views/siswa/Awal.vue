<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <h4>SISWA SAJA</h4>
            <hr />
            <router-link :to="{ name: 'siswa.create' }" class="btn btn-md btn-success">TAMBAH SISWA</router-link>

            <table class="table table-striped table-bordered mt-4">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">NAMA</th>
                  <th scope="col">SEKOLAH</th>
                  <th scope="col">OPTION</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(siswa, index) in siswas" :key="index">
                  <td>{{ siswa.nama }}</td>
                  <td>{{ siswa.asalsekolah }}</td>
                  <td class="text-center">
                    <router-link :to="{ name: 'siswa.edit', params: { id: siswa.id } }" class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                    <button @click.prevent="siswaDelete(siswa.id)" class="btn btn-sm btn-danger ml-1">DELETE</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
  setup() {
    //reactive state
    let siswas = ref([]);

    //mounted
    onMounted(() => {
      //get API from Laravel Backend
      axios
        .get('http://localhost:8000/api/siswa')
        .then((response) => {
          //assign state siswas with response data
          siswas.value = response.data.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });
    //method delete
    function siswaDelete(id) {
      //delete data siswa by ID
      axios
        .delete(`http://localhost:8000/api/siswa/${id}`)
        .then(() => {
          //splice siswas
          siswas.value.splice(siswas.value.indexOf(id), 1);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }

    //return
    return {
      siswas,
      siswaDelete,
    };
  },
};
</script>

<style>
body {
  background: lightgray;
}
</style>
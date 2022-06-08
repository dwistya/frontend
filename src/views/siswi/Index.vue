<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 rounded shadow">
          <div class="card-body">
            <h4>SISWI SAJA</h4>
            <hr />
            <router-link :to="{ name: 'siswi.create' }" class="btn btn-md btn-success">TAMBAH SISWI</router-link>

            <table class="table table-striped table-bordered mt-4">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">NAMA</th>
                  <th scope="col">SEKOLAH</th>
                  <th scope="col">OPTION</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(siswi, index) in siswis" :key="index">
                  <td>{{ siswi.title }}</td>
                  <td>{{ siswi.content }}</td>
                  <td class="text-center">
                    <router-link :to="{ name: 'siswi.edit', params: { id: siswi.id } }" class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                    <button @click.prevent="siswiDelete(siswi.id)" class="btn btn-sm btn-danger ml-1">DELETE</button>
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
    let siswis = ref([]);

    //mounted
    onMounted(() => {
      //get API from Laravel Backend
      axios
        .get('http://localhost:8000/api/siswi')
        .then((response) => {
          //assign state siswis with response data
          siswis.value = response.data.data;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    });
    //method delete
    function siswiDelete(id) {
      //delete data siswi by ID
      axios
        .delete(`http://localhost:8000/api/siswi/${id}`)
        .then(() => {
          //splice siswis
          siswis.value.splice(siswis.value.indexOf(id), 1);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }

    //return
    return {
      siswis,
      siswiDelete,
    };
  },
};
</script>

<style>
body {
  background: lightgray;
}
</style>
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>EDIT SISWA</h4>
                        <hr>

                        <form @submit.prevent="update">
                            <div class="form-group">
                                <label for="nama" class="font-weight-bold">NAMA</label>
                                <input type="text" class="form-control" v-model="siswa.nama" placeholder="Masukkan Nama siswa">
                                <!-- validation -->
                                <div v-if="validation.nama" class="mt-2 alert alert-danger">
                                    {{ validation.nama[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="asalsekolah" class="font-weight-bold">SEKOLAH</label>
                                <textarea class="form-control" rows="4" v-model="siswa.asalsekolah" placeholder="Masukkan Asal Sekolah siswa"></textarea>
                                <!-- validation -->
                                <div v-if="validation.harga" class="mt-2 alert alert-danger">
                                    {{ validation.harga[0] }}
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">SIMPAN</button>
                        </form>                        

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

export default {

    setup() {

        //state siswas
        const siswa = reactive({
            nama: '',
            harga: '',
            asalsekolah:'',
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //vue router
        const route = useRoute()

        //mounted
        onMounted(() => {

            //get API from Laravel Backend
            axios.get(`http://localhost:8000/api/siswa/${route.params.id}`)
            .then(response => {
              
              //assign state siswas with response data
              siswa.nama    = response.data.data.nama  
              siswa.harga  = response.data.data.harga  
              siswa.asalsekolah  = response.data.data.asalsekolah 

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //method update
        function update() {

            let nama   = siswa.nama
            let harga = siswa.harga
            let asalsekolah = siswa.asalsekolah


            axios.put(`http://localhost:8000/api/siswa/${route.params.id}`, {
                nama: nama,
                harga: harga,
                asalsekolah: asalsekolah,
            }).then(() => {

                //redirect ke siswa index
                router.push({
                    name: 'siswa.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }

        //return
        return {
            siswa,
            validation,
            router,
            update
        }

    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style>
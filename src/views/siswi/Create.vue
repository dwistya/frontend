<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH siswi</h4>
                        <hr>
                        <router-link :to="{name: 'siswi.index'}" class="btn btn-md btn-danger">Kembali</router-link>

                        <form @submit.prevent="store">
                            <div class="form-group">
                                <label for="title" class="font-weight-bold">Nama</label>
                                <input type="text" class="form-control" v-model="siswi.title" placeholder="Masukkan Nama Siswi">
                                <!-- validation -->
                                <div v-if="validation.title" class="mt-2 alert alert-danger">
                                    {{ validation.title[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="asalsekolah" class="font-weight-bold">SEKOLAH</label>
                                <textarea class="form-control" rows="4" v-model="siswi.asalsekolah" placeholder="Masukkan Asal Sekolah Siswi"></textarea>
                                <!-- validation -->
                                <div v-if="validation.asalsekolah" class="mt-2 alert alert-danger">
                                    {{ validation.asalsekolah[0] }}
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
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {

    setup() {

        //state siswis
        const siswi = reactive({
            title: '',
            asalsekolah: ''
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //method store
        function store() {

            let title   = siswi.title
            let asalsekolah = siswi.asalsekolah

            axios.siswi('http://localhost:8000/api/siswi', {
                title: title,
                asalsekolah: asalsekolah
            }).then(() => {

                //redirect ke siswi index
                router.push({
                    name: 'siswi.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }

        //return
        return {
            siswi,
            validation,
            router,
            store
        }

    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style>
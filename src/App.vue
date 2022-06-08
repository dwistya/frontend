<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link :to="{name: 'siswa.index'}" class="navbar-brand">DATA </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link :to="{name: 'siswa.index'}" class="nav-link" href="">SISWA</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name: 'siswi.index'}" class="nav-link" href="#">SISWI</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
  body {
    background: lightgray !important;
  }
</style>
<template>
  <v-app> 
    <Lou/>
    <router-view/>
  </v-app> 
</template>

<script>
import Lou from "@/components/Lou"
  export default {
    name: "App",
    components:{
      Lou,
    }
  }
</script>

<style>
</style>

<template>
  <div id="app">
    <router-link to="/head"></router-link>
    <componentshead></componentshead>
  </div>
</template>
<script>
import componentshead from '@/components/componentshead';
export default {
  components:{
    componentshead
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

</style>

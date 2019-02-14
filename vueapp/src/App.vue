<template>
  <div id="app">
    <cheader></cheader>
    <div id="content">
        <h1>电影</h1>
        <h1>电影</h1>
        <h1>电影</h1>
        <h1>电影</h1>
    </div>
    <cfooter></cfooter>
  </div>
</template>
<script>
import cheader from '@/components/cheader';
import cfooter from '@/components/cfooter';
export default {
  components:{
    cheader,
    cfooter
  }
}
</script>

<style>
#content{
    margin:1rem 0;
  }

</style>

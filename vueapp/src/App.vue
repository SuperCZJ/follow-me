<template>
  <div id="app">
    <cheader :obj="obj"></cheader>
    <div id="content">
        <router-view></router-view>
    </div>
    <cfooter :menu="menu" @changebg="color" :obj="obj"></cfooter>
  </div>
</template>
<script>
import cheader from '@/components/cheader';
import cfooter from '@/components/cfooter';
export default {
  data(){
    return {
      menu:[
        {
           path:"/movie",
           name:"电影",
           bg:"#000"  
         },
         {
           path:"/music",
           name:"音乐",
           bg:"green"
         },
         {
           path:"/book",
           name:"书籍",
           bg:"blue"
         },
         {
           path:"/photo",
           name:"图片",
           bg:"yellow"
         },
      ],
      obj:{name:"电影"}
    }
  },
  components:{
    cheader,
    cfooter
  },
  methods: {
    color(obj){
        this.obj = obj;
    }
  },
  created() {
    let result = this.menu.filter((obj,index)=>{
        return obj.path == this.$route.path
    });
    if(result.length){
      this.obj = result[0];
    }
  },
}
</script>

<style>
#content{
    margin:1rem 0;
  }

</style>

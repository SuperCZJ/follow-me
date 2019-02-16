<template>
  <div id="app">
    <cheader></cheader>
    <div id="content">
        <router-view></router-view>
    </div>
    <cfooter :menu="menu"></cfooter>
  </div>
</template>
<script>
import cheader from '@/components/cheader';
import cfooter from '@/components/cfooter';
import {mapMutations} from "vuex";
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
      ]
    }
  },
  components:{
    cheader,
    cfooter
  },
  methods:mapMutations(["change"]),
  created () {
      let result = this.menu.filter((obj,index)=>{
        return obj.path == this.$route.path;
      });
      if(result.length){
        // 修改state中存的name color 改成result[0].name result[0].bgColor
        this.change(result[0]);
      }
  },
  
}
</script>

<style>
#content{
    margin:1rem 0;
  }

</style>

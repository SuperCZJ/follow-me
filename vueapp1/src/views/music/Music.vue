<template>
    <div>
        <img class="music" v-for="(obj,index) in music" :key="index" :src="obj.bg" alt="" @click="goList">

    </div>
</template>

<script>
import Axios from 'axios'
    export default {
        data(){
            return {
                music:[]
            }
        },
    created(){
        Axios.get("/data/musiclist.json")
       .then((result)=>{
           this.music = result.data.albums;
       })
       .catch();
    },
     methods:{
            goList(){
                this.$router.push('/musiclist');
            }
        }

    }
</script>

<style scoped>
.music{
    width:50%;
}

</style>
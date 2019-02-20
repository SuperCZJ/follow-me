<template>
    <div>
        asdasdasdsa
        <!-- {{movieDeatil.images}}-->
         {{$route.params.id}} 
        {{movieDetail.title}}
    <img :src="movieDetail.images.small"/>
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        data(){
            return {
                movieDetail:{}
            }
        },
        created () {
            Axios.get("/data/moviedetail.json")
            // Axios.get(`https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/${this.$route.params.movieId}`)
            .then((result)=>{
                console.log(result.data);
                this.movieDetail = result.data;
                console.log(1231)

                console.log(this.movieDetail.title)
            }).catch(()=>{
                console.log(13213)

            })
        }
    }
</script>

<style scoped>

</style>
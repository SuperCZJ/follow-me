<template>
    <div class="footer" :style="{background:obj.bg}">
        <ul>
            <li v-for="(obj,index) in menu" :key="index">
                <router-link :to="obj.path" @click.native="change(obj)">{{obj.name}}</router-link>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        // data(){
        //     return{
        //         bg:"#000"
        //     }
        // },
        props:["menu","obj"],
        methods: {
            change(obj){
                //this.bg = obj.bg;
                //通过$emit向父组件传值
                this.$emit('changebg',obj);
            }
        },
        
    }
</script>

<style scoped>
.footer{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #000;
}
.footer ul{
        display: flex;
    }
li{
    flex-grow:1;
    color: aliceblue;   
    line-height:  1rem; 
    text-align: center;
}
.footer a{
    color: aliceblue;
    outline: none;
}
.footer a.router-link-active{
    color: blueviolet;
}

</style>
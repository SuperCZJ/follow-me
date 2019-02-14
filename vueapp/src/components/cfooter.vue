<template>
    <div class="footer">
        <ul>
            <li>电影</li>
            <li>音乐</li>
            <li>图书</li>
            <li>图片</li>
        </ul>

    </div>
</template>

<script>
    export default {
        
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

</style>
<template>
    <div>
        <header>
            <span class="goHome">首页</span>
            <span class="home">电影</span>
        </header>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
header{
    width:100%;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    color: aliceblue;
}
.goHome{
    position: absolute;
    left: 0.15rem;
}
.home{
    font-size: 0.5rem;
}
</style>
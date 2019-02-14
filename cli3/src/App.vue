<template>
  <div id="app">
    <button @click="prev()">上一页</button>
    <button @click="first()">首页</button>
    <button @click="next()">下一页</button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/abc">Abc</router-link> |
      <router-link to="/ab">Ab</router-link> |
      <router-link to="/redict/xxx/555">Redict</router-link> |
      <!-- <router-link to="/about">About</router-link> | -->
      <router-link to="/about/xx/55">About</router-link> |
      <!-- <router-link to="/mine">Mine</router-link> | -->
      <router-link :to="{name:'mine',params:{name:'zs',age:'20'}}">Mine</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/count">Count</router-link> |
      <router-link to="/xxx">Xxx</router-link>
    </div>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
    export default {
      methods: {
        prev(){
          this.$router.go(-1);
        },
        first(){
          this.$router.push('/');
        },
        next(){
          this.$router.go(1);
        }
      },
        
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
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.fade-enter{
  /* opacity: 0; */
  transform: translateX(-100%);
}
.fade-enter-active{
  transition: transform 1s ease;
}
.fade-enter-to{
  /* opacity: 1; */
  transform: translateX(0);
}
.fade-leave{
  /* opacity: 1; */
  transform: translateX(0);
}
.fade-leave-active{
  transition: transform 1s ease;
}
.fade-leave-to{
  /* opacity: 0; */
  transform: translateX(100%);
}
</style>

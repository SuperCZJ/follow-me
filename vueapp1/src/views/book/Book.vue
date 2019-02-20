<template>
    <div>
        图书

        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
    </div>
</template>

<script>
   // require('vue-swipe/dist/vue-swipe.css');
    import 'vue-swipe/dist/vue-swipe.css';
    // in ES6 modules
    import { Swipe, SwipeItem } from 'vue-swipe';
    export default {
        components: {
            Swipe,
            SwipeItem
        }
    }
</script>

<style scoped>
    .my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
  background:url('/img/001.jpg');
  background-size: 100%;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
  background:url('/img/002.jpg');
  background-size: 100%;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
  background:url('/img/003.jpg');
  background-size: 100%;
}

</style>
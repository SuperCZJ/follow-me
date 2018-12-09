
   

var aa = document.getElementById('xuanxiang');
var aLi = aa.getElementsByTagName('li');
// var arr = document.getElementById('asd');
// var adiv = arr.getElementsByTagName('span');
// var aD = document.getElementsByClassName('right-1-3-4-1');
// var aDiv = aD.getElementsByTagName('img');
// var arr = aLi[i].className.split(' ');
var adiv = document.getElementsByClassName('inner-cont2-right-1-3');

//点击切换
for(var i=0; i<aLi.length; i++){ //页面加载的时候就会执行，给三个li都绑定点击事件
    aLi[i].index = i;
    aLi[i].onclick = function(){
        //i = 3  所以 aLi[i]会返回undefined
        //this指对当前的对象的引用  点击的是谁 this就是谁
        for(var j=0; j<aLi.length; j++){ //清楚所有li的className
            aLi[j].className = "";
            // aDiv[j].className = "";
            adiv[j].className = "inner-cont2-right-1-3";
        }
        this.className = 'selected'; //给自己添加class = selected
        adiv[this.index].className = "inner-cont2-right-1-3 active";
    }
}










//当前的 划出来
var  inow = 0;
//划出去
var last = -1;
$(document).swipeUp(function(){
    last = inow;
    inow++;
    if(inow <= $('.page').length - 1){
        $('.page').eq(last).addClass('moveToTop');
        $('.page').eq(inow).removeClass('hide').addClass('moveFromBottom');
        setTimeout(function(){
            $('.page').eq(inow).find('img').removeClass('hide');
        },600)
    }
    
});
$(document).swipeDown(function(){
    last = inow;
    inow--;
    $('.page').eq(last).attr('class','page page-'+(last+1)+' moveToDown ');
    $('.page').eq(inow).attr('class','page page-'+(inow+1)+' moveFromTop ')
    setTimeout(function(){
        $('.page').eq(inow).find('img').removeClass('hide');
    },600)
});
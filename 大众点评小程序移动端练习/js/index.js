var iNow=0;
var last;
$(".page").swipeUp(function(){
  
    if(iNow<$(".page").length-1){
        last=iNow;
        iNow++;
     
        $(".page").eq(last).attr("class"," page page-"+(last+1)+" moveToTop");
        $(".page").eq(iNow).attr("class"," page page-"+(iNow+1)+" moveFromBottom");
    }


    setTimeout(function(){
        // 等iNow 当前页 600ms划出来后  再让图片出来开始执行动画
        $('.page').eq(iNow).find('img').removeClass('hide');
        $('.page').eq(last).find('img').addClass('hide');
    },300);
})

$(".page").swipeDown(function(){
 
    if(iNow>0){
       
        last=iNow;
        iNow--;
        $(".page").eq(last).attr("class","page page-"+(last+1)+" moveToBottom");
        $(".page").eq(iNow).attr("class","page page-"+(iNow+1)+" moveFromTop");
    }

    setTimeout(
        function(){
            $('.page').eq(iNow).find('img').removeClass('hide');
            $('.page').eq(last).find('img').addClass('hide');
        },300
    )
})



// $(document).swipeUp(function(){
    
//     if(iNow <= $('.page').length-1){
//         last = iNow;
//     iNow++;
//         $('.page').eq(last).attr('class','page page-'+ (last +1) +' moveToTop');
//         $('.page').eq(iNow).removeClass('hide').attr('class','page page-'+(iNow+1)+' moveFromBottom');

//         setTimeout(function(){
//             // 等iNow 当前页 600ms划出来后  再让图片出来开始执行动画
//             $('.page').eq(iNow).find('img').removeClass('hide');
//             $('.page').eq(last).find('img').addClass('hide');
//         },600);
//     }
// })
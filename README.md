# HUYA
Test

判断单前页面是否最前面---2
var hiddenProperty = 'hidden' in document ? 'hidden' :    
    'webkitHidden' in document ? 'webkitHidden' :    
    'mozHidden' in document ? 'mozHidden' :    
    null;
var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
var onVisibilityChange = function(){
    if (!document[hiddenProperty]) {    
        console.log('页面激活');
    }else{
        console.log('页面非激活')
    }
}
document.addEventListener(visibilityChangeEvent, onVisibilityChange);



判断单前页面是否最前面---2
document.addEventListener("visibilitychange", function(e){
    console.log( document.hidden ? "用户离开了" : "用户回来了");
    event.stopImmediatePropagation();
    return false;
},true);

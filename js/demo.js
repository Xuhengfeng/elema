(function(doc,win){
    var docEl=doc.documentElement;
    var run=function(){
    var clientWidth=docEl.clientWidth;
        console.log(clientWidth);
        if(!clientWidth)return;
            docEl.style.fontSize=23/375*clientWidth+"px";
    } 
        if(!doc.addEventListener)return;
        var resizeEvt='orientationchange' in window?'orientationchange':"resize";
            window.addEventListener(resizeEvt, run, false);
            doc.addEventListener("DOMContentLoaded",run,false); 
})(document,window);

    $(function(){
            var data=[
               {"id":"1","img":"images/main01.png","pinpai":"品牌","name":"小杨生煎（星游城店","piao":"保票准","xin":"★★★★☆","xins":"4.7","span1":"月售4071单","span3":"准时达","qs":"￥20元起送","ps":"配送费5元","price":"13元","jl":"1.90km","m":"26分钟"}, 
                {"id":"1","img":"images/main02.jpeg","pinpai":"品牌","name":"达美乐披萨","piao":"票","xin":"★★★★☆","xins":"4.7","span1":"月售6000单","span3":"准时达","qs":"￥20元起送","ps":"配送费5元","price":"13元","jl":"1.0km","m":"15分钟"},
                {"id":"1","img":"images/main03.jpeg","pinpai":"品牌","name":"肯德基","piao":"保票准","xin":"★★★★★","xins":"5.0","span1":"月售10000单","span3":"准时达","qs":"￥20元起送","ps":"配送费5元","price":"13元","jl":"1.90km","m":"30分钟"},  
                {"id":"1","img":"images/main04.png","pinpai":"品牌","name":"周大虾","piao":"保票准","xin":"★★★★","xins":"4.0","span1":"月售4071单","span3":"准时达","qs":"￥20元起送","ps":"配送费5元","price":"13元","jl":"1.90km","m":"30分钟"},
            ]

        //监听滚动事件
        $(document).scroll(function(){
            
            //判断滚动条高度 到一半的位置 加载数据
            //获取文档的滚动高度
            var a=$(document).height();
            // alert(a);
            
            //总体的一半位置 加载数据
            if($(document).scrollTop()>=a/20){
                // alert(1);
                //只要发生滚动事件就添加数据
                var  str='';
                //那数据遍历添加
                for(var i in data){
                //console.log(data[i]);
                
                //str重新赋值

            str+='<li><a href="product_detail.html">';
            str+='<img src="'+data[i]['img']+'">';
            str+='<div class="box">';
                str+='<div class="box-top"><span>'+data[i]['pinpai']+'</span><h3>'+data[i]['name']+'</h3><p>'+data[i]['piao']+'</p></div>';           
                str+='<div class="box-center">';
                    str+='<div>';
                        str+='<span style="width:2.782609rem">'+data[i]['xin']+'</span>';
                    str+='</div>';
                        str+='<p>'+data[i]['xins']+'</p>';
                        str+='<p class="span1">'+data[i]['span1']+'</p>';
                        str+='<p class="span3">'+data[i]['span3']+'</p>';
                str+='</div>';
                str+='<div class="box-bottom">';
                        str+='<p>'+data[i]['qs']+'<span>/</span>'+data[i]['ps']+'<span>/</span>'+data[i]['price']+'<span>/</span>人</p>';
                        str+='<p class="p">'+data[i]['jl']+'/<span style="color:#0096ff;">'+data[i]['m']+'</span></p>';

                str+='</div>';
            str+='</div>';
            str+='</a></li>';
                }
                
                //拿到数据给#main li尾部添加
                $('#main').append(str);
            }
        });
        
    })

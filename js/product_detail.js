

$("#nav .nav-title").click(function(){
    $(this).css("color","#3190e8").siblings().css("color","#000");
    var indexO=$(this).index();
    $("#pro-main .pro-mbox").eq(indexO).show().siblings().hide();
})

        var app=angular.module("myapp",[]);
        app.filter("substrs",function(){
                return function(val,num){
                    if(val.length>num){
                        val=val.substring(0,num)+"...";
                    }
                    return val;
                }
            })
        app.controller("cont",function($scope){
            $scope.data=[
                {"goodsId":"1","img":"images/main01.png","proContH1":"小杨生煎","proContP":"黑米粥，有补气养血，养胃，保产育胎的功效。对孕妇来说，常食此粥，尤其对胎儿的大脑发育有着特殊作用","proContSpan1":"月售105份","proContSpan2":"好评率100%",price:6,num:0},
                {"goodsId":"2","img":"images/main02.jpeg","proContH1":"达美乐披萨","proContP":"黑米粥，有补气养血，养胃，保产育胎的功效。对孕妇来说，常食此粥，尤其对胎儿的大脑发育有着特殊作用","proContSpan1":"月售105份","proContSpan2":"好评率100%",price:12,num:0},
                {"goodsId":"3","img":"images/main03.jpeg","proContH1":"肯德基","proContP":"黑米粥，有补气养血，养胃，保产育胎的功效。对孕妇来说，常食此粥，尤其对胎儿的大脑发育有着特殊作用","proContSpan1":"月售105份","proContSpan2":"好评率100%",price:24,num:0},
                {"goodsId":"4","img":"images/main04.png","proContH1":"黑米粥","proContP":"周大虾，有补气养血，养胃，保产育胎的功效。对孕妇来说，常食此粥，尤其对胎儿的大脑发育有着特殊作用","proContSpan1":"月售105份","proContSpan2":"好评率100%",price:8,num:0},
            ];
            $scope.cart=[];
            $scope.set=function(goodsId,bool){
                console.log(goodsId); // 商品ID
                // console.log(bool);
                angular.forEach($scope.data,function(item,index){
                    if(goodsId==item.goodsId){
                        // console.log(item);//当前用户点击商品
                        if(bool){
                            if(item.num==0){
                                item.num=1;
                                $scope.cart.push(item);
                            }else{
                                item.num++;
                                // console.log($scope.cart);
                            }
                        }else{
                            item.num--;
                            item.num=item.num<=0?0:item.num;
                        }
                    }//当前用户点击的数据
                })
                
            }

        
            $scope.$watch("cart",function(){
            $scope.allPrice=0;
                angular.forEach($scope.cart,function(item,index){
                    $scope.allPrice+=item.num*item.price;
                     if(item.num<=0){$scope.cart.splice(index,1)};
                })
            },true);

            // $scope.add=function(active){
            //     angular.forEach($scope.data,function(item,index){
            //         if(active==index){
            //             item.num++;
            //         }
            //     })
            // };
            // $scope.sub=function(active){
            //     console.log(active);
            //     for(var i=0;i<$scope.data.length;i++){
            //         if(active==i){
            //             $scope.data[i].num--;
            //         }

            //     }

            // };
            $scope.totalNum=function(){
                var total=0;
                angular.forEach($scope.data,function(item){
                    total+=item.num;
                });
                return total;
            };
            //总数
            $scope.Sum=function(){
                var sum=0;
                angular.forEach($scope.data,function(item){
                    sum+=item.num;
                    if(sum>=1){
                        // $('.shopping img').toggle(
                        //     function(){
                        //        $('#pro-cart').css('display','block'); 
                        //     },
                        //     function(){
                        //        $('#pro-cart').css('display','none'); 
                        //     }
                        // )
                        // $('.shopping2 img').toggle(
                        //     function(){
                        //        $('#pro-cart').css('display','block');
                        //     },
                        //     function(){
                        //        $('#pro-cart').css('display','none'); 
                        //     }
                        // )
                    }
                });
                return sum;
            };
            //总价
            $scope.totalPrice=function(){
                var total=0;
                angular.forEach($scope.data,function(item){
                    total+=item.num*item.price+item.num*0.5;
                });
                return total;
            };
            //差价
            $scope.chaPrice=function(){
                var cha=0;
                angular.forEach($scope.data,function(item){
                    cha+=item.num*item.price+item.num*0.5;
                    if(cha>=20){
                        // alert(1);
                        $('.shopping').css('display','none');
                        $('.shopping2').css('display','block');
                    }else{
                        $('.shopping').css('display','block');
                        $('.shopping2').css('display','none');
                    }
                });
                return cha;
                // if(cha>20){
                //    $('shopping').css('display','none'); 
                //    $('shopping2').css('display','block'); 
                // }
            };
            //餐盒
            $scope.canHe=function(){
                var can=0;
                angular.forEach($scope.data,function(item){
                    can+=item.num*0.5;
                });
                return can;
            };
            // 删除
            $scope.romoveItem=function(active){
                $scope.data.splice(active,1);
            }

        });


// var proClfprice=document.getElementsByClassName("pro-Clfprice");
// console.log(proClfprice);



                

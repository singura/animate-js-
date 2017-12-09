$(function(){
    $('#fullpage').fullpage({
    	navigation: true,
    	verticalCentered:false,
    	afterLoad:function(linkName,index){
    		if(index == 2){
    			$(".s2_search").animate({
    				bottom:309,
    				right:372
    			},1000,"easeOutBack",function(){
    				$(".s2_font").fadeIn(function(){
    					$(".s2_search").hide();
    					$(".s2_font").hide();
    					$(".s2_full_search").show().animate({
    						    bottom: 449,
							    right: 260,
							    height: 30,
    					},1000);
    					$(".s2_sfs").show().animate({
    						width: 441
    					}, 1000)
    					$(".s2_title1").fadeOut(1000);
    					$(".s2_title2").fadeIn(1000);
    				});
					$(".nextPage").fadeIn(400);
    			});
    		}
			if(index == 5){
				$(".s5_hand").animate({
					bottom:0,
				},1000,function(){
					$(".s5_mouse2").fadeIn(function(){
						$(".s5_sf").animate({
							bottom:"13%"
						},1000,function(){
							$(".s5_order").animate({
							bottom:"59.4%"
							},1000,function(){
								$(".s5_title").addClass("s5_rotate");
							})
							$(".nextPage").fadeIn(400);
						})
					});
				})
			}
			if(index == 7){
				$(".s7_star").animate({
					width:222
				},2000)
				setTimeout(function(){
					$(".s7_good_comment").fadeIn(1000);
				},800)
				$(".nextPage").fadeIn(400);
			}
			if(index == 8){
				$(document.body).mousemove(function(e){
					var clientX = e.clientX-68;
					var clientY = e.clientY;
					var maxTop = $(".s8").height() - 449;
					if(clientY < maxTop){
						clientY = maxTop;
					}
					$(".s8_hand").css({
						top:clientY+20,
						left:clientX
					})
				})
				$(".s8_again").on("click",function(){
					$.fn.fullpage.moveTo(1);
					$(".section *").attr("style","");
					$(".s6").css({
						backgroundPositionX:"25%"
					})
					$(".nextPage").fadeIn(400);
				})
			}
    	},
		onLeave:function(index,nextIndex ,direction){
			$(".nextPage").fadeOut(400);
			if(index == 2 && nextIndex == 3){
				$(".s2_wrap").show();
				$(".s3_sf").show().animate({
					bottom:230,
					left:256,
					width:207
				},1000,function(){
					$(".s3_black_size,.s3_gray_car").fadeOut(1000);
					$(".s3_white_size,.s3_white_car").fadeIn(1000);
					$(".nextPage").fadeIn(400);
				});
			}
			if(index == 3 && nextIndex == 4){
				$(".s3_sf").hide();
				$(".s4_sf").show().animate({
					bottom:187,
					left:165,
				},1000,function(){
					$(".s4_full_car").animate({
						left:1500
					},2000,"easeInOutElastic",function(){
						$(".s4_title1").fadeOut(1000);
						$(".s4_title2").fadeIn(1000);
						$(".s4_adress").fadeIn(1000);
						$(".nextPage").fadeIn(400);
					})
				})
			}
			if(index == 5 && nextIndex == 6){
				$(".s5_sf").hide();
				$(".s6_sf").show().animate({
					bottom:-96,
					left:20,
					width:82
				},1000,function(){});
				$(".s6_full_box").animate({
					left:300
				},1000,function(){
					$(".s6_full_box").animate({
						bottom: "100px",
    					left: "30%"
					},1000,function(){
						$(".s6_font").animate({
							left:"25%"
						},1000,"easeOutElastic")
						$(".s6_adress").fadeIn(1000);
						$(".s6").animate({
							backgroundPositionX:"100%"
						},4000,function(){
							$(".s6_boys").animate({
								left:"30%",
								bottom:116,
								height:305
							},1000,function(){
								$(".s6_boys").animate({
									left:"47%"
								},1000,function(){
									$(".s6_door").fadeIn(1000);
									$(".s6_girl").show().animate({
										width:87
									},1000,function(){
										$(".s6_recive").fadeIn(1000);
										$(".nextPage").fadeIn(400);
									})
								})
							})
						})
					})
				})
			}
		}
    });
	$(".nextPage").on("click",function(){
		$.fn.fullpage.moveSectionDown();
	})
});
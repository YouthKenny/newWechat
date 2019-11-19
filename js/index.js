var wechat_num=new Array("zhuxin503","liaomei483","zhuxin466");     //微信
var weixinKey = "weixinKey"; 
var storage = window.localStorage;
var V = onStart();
if(!V){
    V = Math.floor(Math.random()*wechat_num.length);
    bendihuancun(V);
}

var arr1 = ["您的性别是？"," 您的年龄是？","您的情感问题是？"
    ,"你们分开多时间是多久？","分开后你有为求挽回而微信或者电话轰炸过对方吗？"
    ,"在一起的时候你有查过对方手机习惯吗？","在一起的时候你有身体或者精神出轨吗？","分手后对方是否拉黑了你的所有联系方式？","TA现在是否有了新的恋人？","如果挽回TA需要1个月，你需要经历复联破冰，重建印象，关系升温等步骤，但过程充满坎坷和煎熬，你是否会因为这些困难，而放弃一生的幸福？","<span style='color: red'>恭喜你，你的情况符合情感修复标准。</span>且没有原则性错误，只要有正确的引导和挽回方法，复合机会很大！你想尽快开始行动吗？","<span style='color: red'>点击复制下方的微信号，即可获得Amy导师免费1对1情感分析服务，每天仅限10个名额！</span>想挽回心爱的TA就马上添加我的微信号吧！【复制微信后，记得去微信进行添加】<label style='margin-top:.5rem;display:block;text-align:center;line-height:1rem;background:#eee;'>长按复制导师微信：<b style='color:red;font-size:.43rem;'>"+wechat_num[V]+"</b></label>"];

var arr2 = ["男"," 18岁-30岁","分手挽回","6个月以内","有","有","有","是","是","还是放弃吧","是",""];

var arr3 = ["女","30岁以上","挽救婚姻","6个月以上","没有","没有","没有","否","否","这点困难算什么","否",""];

function answerShow(answer){
    var index0 = $(".chat-teacher").length;
    $("#chatBox").append('<div class="chat-user f-flex-box justify-end animated fadeInUp">'+
      '<div class="user-msg">' + answer + '</div>'+
      '</div>');
    $(".msg-select-options").eq(index0-2).hide();
    setTimeout(function () {
        $("#chatBox").append('<div class="chat-teacher f-flex-box animated fadeInUp">'+
        '<div class="teacher-avatar"><img src="img/teacher.jpg"></div>'+
        '<div class="teacher-msg flex1">'+
        '<div class="teacher-info "><span class="teacher-info-name">Amy导师 挽爱无忧情感专家</span></div>'+
        '<div class="teacher-msg-item teacher-msg-select">'+
        '<p>'+ arr1[index0] +'</p>'+
        '<div class="msg-select-options f-flex-box wrap justify-between">'+
        '<div class="option">'+ arr2[index0] +'</div>'+
        '<div class="option">'+ arr3[index0] +'</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
        $(".option").each(function(){
            if(!$(this).html()){
                $(this).hide();
            }
        })
        if(index0+1==arr1.length){
            $("footer,#weixin_clip_button").show();
            window.history.pushState(null, null, "#wechat");
            setTimeout(function () {
                $(".comment,.wechat_img").show();
            },1000)
        }   
    },700);
}

$(function(){
    $(".wechat-box").text(wechat_num[V]);
    $(".start_btn").click(function(){
        $(this).hide();
        $("#chatBox").append('<div class="chat-teacher f-flex-box animated fadeInUp">'+
        '<div class="teacher-avatar"><img src="img/teacher.jpg"></div>'+
        '<div class="teacher-msg flex1">'+
        '<div class="teacher-info"><span class="teacher-info-name">Amy老师 挽爱无忧情感专家</span></div>'+
        '<div class="teacher-msg-item teacher-msg-select teacher-msg-text">'+
        '<p>'+ arr1[0] +'</p>'+
        '<div class="msg-select-options f-flex-box wrap justify-between">'+
        '<div class="option">'+ arr2[0] +'</div>'+
        '<div class="option">'+ arr3[0] +'</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
        $(".option").each(function(){
            if(!$(this).html()){
                $(this).hide();
            }
        })
        setTimeout(function () {
            $('body,html').animate({scrollTop:$('.body_p').offset().top},800);
        },500);
    })
    $("#chatBox").on("click",".option",function(){
        var answer = $(this).html();
        answerShow(answer);
        setTimeout(function () {
            $('body,html').animate({scrollTop:$('.body_p').offset().top},800);
        },700);
    });
    $("#weixin_clip_button").click(function(){

    })
    //微信号复制
    var weixin_clipboard = new Clipboard('#weixin_clip_button', {
	    text: function() {
	        return wechat_num[V];
	    }
    });
    weixin_clipboard.on('success', function(e) {
        alert("复制成功，请到微信添加导师");
    });
    weixin_clipboard.on('error', function(e) {
        alert('请选择“拷贝”进行复制!')
    });
	$(".shadow").on("touchmove",function(event){
		event.preventDefault(); 
    })
    //退出页面时
    $(".btn-keep").click(function(){
        $("#m-dialog").hide();
    })
    $(".btn-cancel").click(function(){
        $("#m-dialog").hide();
    })
    pushHistory(); 
    window.addEventListener("popstate", function(e) {
        // console.log(location.hash);
        if(location.hash != "#wechat"){
            // window.history.pushState('forward', null, '#nowechat');
            // window.history.forward(1);
            $("#m-dialog").show();
            return false
        }
    }, true); 
    function pushHistory() { 
        var state = { 
            title: "title", 
            url: "#nowechat"
        }; 
        window.history.pushState(state, "title", "#nowechat"); 
    }
    // UC自动加链接
    var pageDATA_ua = window.navigator.userAgent.toLowerCase();
    if(pageDATA_ua.indexOf('ucbrowser') >= 0) {
        setInterval("jiejueuc();", 1000);
    }
})

function jiejueuc() {
    $("a").each(function(index, element) {
        try {
            var thishref = $(this).attr("href");
            var thisText = $(this).html();
            if(thishref.indexOf("uc.cn") >= 0) {
                $(this).replaceWith(thisText);
            }
        } catch(e) {}
    });
    $("script").each(function(index, element) {
        try {
            var thissrc = $(this).attr("src");
            if(thissrc.indexOf("ucbrowser") >= 0) {
                $(this).remove();
            }
        } catch(e) {}
    });
}

//以下的weixinKey要与上面的weixinKey一致
function onStart(){ 
    var num = -1;
	if(storage.getItem(weixinKey)!=null){ 
		num = storage.getItem(weixinKey); 
	}else if(getCookie(weixinKey)!=null){ 
		num = getCookie(weixinKey); 
    } 
    if(num > -1 && num < wechat_num.length){
        return num;
    }
    var f = Math.floor(Math.random()*wechat_num.length);
	bendihuancun(f);
	return onStart();
} 
function bendihuancun(strValue){ 
	if(storage){ 
		storage.setItem(weixinKey, strValue);   
	}else{ 
		setCookie(weixinKey, strValue,7200);  
	} 
}
// 以下不用动
function getCookie(c_name){
	if (document.cookie.length>0){ 
		c_start=document.cookie.indexOf(c_name + "=")
		if (c_start!=-1){ 
			c_start=c_start + c_name.length+1;
			c_end=document.cookie.indexOf(";",c_start);
			if (c_end==-1) c_end=document.cookie.length;
			return unescape(document.cookie.substring(c_start,c_end));
		} 
	}
	return null;
}
function setCookie(c_name,value,expiredays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : "; expires="+exdate.toGMTString());
}







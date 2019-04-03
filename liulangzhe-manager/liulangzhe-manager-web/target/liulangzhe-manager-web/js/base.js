//设置cookie和保存cookie
var cookie = {
    set:function(key,val,time){//设置cookie方法
        var date=new Date(); //获取当前时间
        var expiresDays=time;  //将date设置为n天以后的时间
        date.setTime(date.getTime()+expiresDays*24*3600*1000); //格式化为cookie识别的时间
        document.cookie=key + "=" + val +";expires="+date.toGMTString();  //设置cookie
    },
    get:function(key){//获取cookie方法
        /*获取cookie参数*/
        var getCookie = document.cookie.replace(/[ ]/g,"");  //获取cookie，并且将获得的cookie格式化，去掉空格字符
        var arrCookie = getCookie.split(";")  //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
        var tips;  //声明变量tips
        for(var i=0;i<arrCookie.length;i++){   //使用for循环查找cookie中的tips变量
            var arr=arrCookie[i].split("=");   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
            if(key==arr[0]){  //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
                tips=arr[1];   //将cookie的值赋给变量tips
                break;   //终止for循环遍历
            }
        }
        return tips;
    }
};
function $(id) {return document.getElementById(id);}
function show(obj){obj.style.display = "block"}
function hide(obj) {obj.style.display = "none";
}
function scroll() {
    if(window.pageYOffset != null){   //兼容ie9+和其他浏览器
        return {
            left:pageXOffset,
            top:pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat"){  //如果声明了文档头
        return {
            left:document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   //没有声明文档头
        left:document.body.scrollLeft,
        top:document.body.scrollTop
    }
}
function client() {
    if(window.innerWidth != null){
        return {
            width:window.innerWidth,
            height:window.innerHeight
        }
    }
    else if(document.compatMode === "CSS1Compat"){
        return {
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }
    return {
        width:document.body.clientWidth,
        height:document.body.clientHeight
    }
}
// var fenlei = $("fenlei");
// var mask = $("mask");
// fenlei.onmousemove = function (ev) {
//     mask.style.display = "block";
// };
// fenlei.onmouseout = function (ev) {
//     mask.style.display = "none";
// };
// mask.onmousemove = function (ev2) {
//     mask.style.display = "block";
//     fenlei.className = "fenlei bd2";
// };
// mask.onmouseout = function (ev) {
//     mask.style.display = "none";
//     fenlei.className = "fenlei";
// };





var land = document.getElementById("land");
var zhuce = document.getElementById("zhuce");
var zhucetable = document.getElementById("zhucetable");
var landtable = document.getElementById("landtable");
var err = document.getElementById("err");
var zhanghao = document.getElementById("zhanghao");
var mima = document.getElementById("mima");
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
}
land.onclick = function (ev) {
    land.className = "land bd";
    zhuce.className = "zhuce";
    zhucetable.style.display = "none";
    landtable.style.display = "block";
    window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
    document.title = "登陆 - 流浪者";
};
zhuce.onclick = function (ev) {
    zhuce.className = "zhuce bd";
    land.className = "land";
    zhucetable.style.display = "block";
    landtable.style.display = "none";
    window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
    document.title = "注册 - 流浪者"
};
var x,y;
zhanghao.oninput = function (ev) {
    x = zhanghao.value;
};
mima.oninput = function (ev) {
    y = mima.value;
};
function login() {
    var xhr = new XMLHttpRequest;
    var fd = new FormData(landtable);
    xhr.open("post","http://47.103.6.223:8080/liulangzhe-manager-web/login.action");
    //xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(fd);
    xhr.onreadystatechange = function () {
        var json = JSON.parse(xhr.responseText);
        if(xhr.readyState == 4 && xhr.status == 200 && (json.userid == ""||undefined||null)){
            err.style.display = "block";
        }
        else if(xhr.readyState == 4 && xhr.status == 200 &&  (json.userid != ""||undefined||null)){
            cookie.set("username",json.username,7);
            cookie.set("userid",json.userid,7);
            window.location.href='index.html';
        }
    }
}












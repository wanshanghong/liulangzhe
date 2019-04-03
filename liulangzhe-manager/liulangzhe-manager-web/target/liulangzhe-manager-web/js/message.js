function ajax() {
    var xhr = new XMLHttpRequest;
    xhr.open("post","论坛数据库.html");
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("11");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (xhr.responseText != "") {
                //判断是否有用户登陆
                var username = cookie.get("username");
                if (username) {
                    var header = document.querySelector("header");
                    var address = document.getElementById("user");
                    address.innerHTML = cookie.get("username");
                    address.style.marginRight = "150px";
                    address.style.borderLeft = "1px solid #ffffff";
                    var i = document.createElement("i");
                    address.appendChild(i);
                    var b = document.createElement("b");
                    b.innerHTML = "◇";
                    i.appendChild(b);
                    header.removeChild(header.children[0]);
                    header.removeChild(header.children[0]);
                    var ul = document.createElement("ul");
                    address.appendChild(ul);
                    var li1 = document.createElement("li");
                    ul.appendChild(li1);
                    var a1 = document.createElement("a");
                    a1.href = "message.html";
                    a1.innerHTML = "个人中心";
                    li1.appendChild(a1);
                    var li2 = document.createElement("li");
                    ul.appendChild(li2);
                    var a2 = document.createElement("a");
                    a2.innerHTML = "退出";
                    li2.appendChild(a2);
                    a2.className = "exit";
                    var Exit = document.getElementsByClassName("exit")[0];
                    Exit.onclick = function () {
                        cookie.set("username", "", -1);
                        cookie.set("userid","",-1);
                        window.location.href = "index.html";
                    }
                }
            }
        }
    }
}
ajax();

// 登陆后
var address = document.getElementById("user");
address.onmouseover = function (ev) {
    address.className = "";
};
document.onmouseout = function (ev) {
    address.className = "hd";
}

//渲染页面
function getmsg() {
    var xhr = new XMLHttpRequest();
    xhr.open("post", "个人信息.html");
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("userid="+cookie.get("userid"));
    xhr.onreadystatechange = function (ev) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            var userimgbox = document.getElementsByClassName("touxiang-m")[0];
            var userbox = document.getElementsByClassName("userimgbox")[0];
            var userimg = document.createElement("img");
            userimg.src = json[0].userimg;
            userimgbox.appendChild(userimg);
            var h2 = document.createElement("h2");
            h2.innerHTML = cookie.get("username");
            userimgbox.appendChild(h2);
            var lv = document.createElement("span");
            lv.innerHTML = "LV" + " " + json[0].lv;
            userimgbox.appendChild(lv);
            var woguanzhu = document.getElementsByClassName("woguanzhu")[0];
            woguanzhu.children[1].innerHTML = json[0].woguanzhu;
            var guanzhuwo = document.getElementsByClassName("guanzhuwo")[0];
            guanzhuwo.children[1].innerHTML = json[0].guanzhuwo;


            //右侧导航栏
            var messages_ul = document.getElementsByClassName("messages-r-ul")[0];
            var huati = messages_ul.children[0].children[0].innerHTML = json[0].huati;
            var gzwd = messages_ul.children[1].children[0].innerHTML = json[0].tiwen;
            var wgzd = messages_ul.children[2].children[0].innerHTML = json[0].huati;
            // var guanzhu = messages_ul.children[3].children[0].innerHTML = json[0].guanzhu;
            // var shoucang = messages_ul.children[4].children[0].innerHTML = json[0].shoucang;

            var zuixin = document.getElementById("zuixin");
            for (var j = 0; j < json.length; j++) {
                tiezibox = document.createElement("div");
                tiezibox.className = "tiezibox";
                zuixin.appendChild(tiezibox);
                tiezi = document.createElement("div");
                tiezi.className = "tiezi";
                tiezibox.appendChild(tiezi);
                touxianga = document.createElement("a");
                touxianga.className = "touxiang";
                tiezi.appendChild(touxianga);
                touxiangimg = document.createElement("img");
                touxiangimg.src = json[j].userphoto;
                touxianga.appendChild(touxiangimg);
                namespan = document.createElement("span");
                namespan.innerHTML = json[j].username;
                tiezi.appendChild(namespan);
                titlea = document.createElement("a");
                titlea.href = "post1.html";
                tiezi.appendChild(titlea);
                title = document.createElement("h1");
                title.innerHTML = json[j].postTitle;
                titlea.appendChild(title);
                time = document.createElement("time");
                time.innerHTML = json[j].postDate.year + "/" + json[j].postDate.month + "/" + json[j].postDate.day;
                tiezi.appendChild(time);
                content = document.createElement("p");
                content.className = "tiezicontent";
                content.innerHTML = json[j].postContent;
                tiezi.appendChild(content);
                pic = document.createElement("div");
                pic.className = "tupian";
                tiezi.appendChild(pic);
                images = document.createElement("img");
                images.src = json[j].imgPath1;
                pic.appendChild(images);
                var tupian = document.getElementsByClassName("tupian");
                for (i = 0; i < tupian.length; i++) {
                    if (tupian[i].children.length === 0) {
                        tupian[i].style.height = "0";
                    }
                }
                // //判断有多少张图片传来

                footer = document.createElement("footer");
                footer.innerHTML = "阅读量:";
                tiezi.appendChild(footer);
                footerspan = document.createElement("span");
                footerspan.innerHTML = "1234";
                footer.appendChild(footerspan);
                footera = document.createElement("a");
                footera.className = "look";
                footera.href = "javascript:void(0);";
                footera.innerHTML = "查看全文";
                footer.appendChild(footera);
                zandiv = document.createElement("div");
                zandiv.className = "zan";
                tiezi.appendChild(zandiv);
                zanul = document.createElement("ul");
                zandiv.appendChild(zanul);
                var Arr1 = ["收藏", "分享", "点赞", "评论"];
                for (var k = 0; k < 4; k++) {
                    zanli = document.createElement("li");
                    zanul.appendChild(zanli);
                    zanli.innerHTML = Arr1[k];
                    zanspan = document.createElement("span");
                    zanspan.innerHTML = "0";
                    zanli.appendChild(zanspan);
                }
                shouqi = document.createElement("a");
                shouqi.className = "unlook";
                shouqi.href = "javascript:void(0);";
                shouqi.style.display = "none";
                shouqi.innerHTML = "收起全文";
                tiezi.appendChild(shouqi);

            }
            huidiao();
        }
    }
}
getmsg(huidiao);




function huidiao() {
    function $(id) {return document.getElementById(id);}
    var guanzhume = document.getElementById("guanzhume");
    var meguanzhu = document.getElementById("meguanzhu");
    var yonghu = document.getElementsByClassName("yonghu");
    var tiwen = document.getElementsByClassName("tiwen");
    var huati = document.getElementById("luntanbody");
    var lis = $("messages-r").children[0].children;
    for (var i = 0;i<lis.length;i++){
        lis[i].index = i;
        lis[i].onclick = function () {
            for(var j = 0;j<lis.length;j++){
                lis[j].className = "";
            }
            if(this.index===0){
                hide(guanzhume);
                hide(meguanzhu);
                show(huati);
            }
            else if(this.index===1){
                hide(guanzhume);
                hide(huati);
                show(meguanzhu);
            }
            else if(this.index===2){
                hide(huati);
                hide(meguanzhu);
                show(guanzhume);
            }
            lis[this.index].className = "bd1";

        };
    }
//查看全文
    var look = document.getElementsByClassName("look");
    var unlook = document.getElementsByClassName("unlook");
    var tupian = document.getElementsByClassName("tupian");
    var tiezicontent = document.getElementsByClassName("tiezicontent");
    var zan = document.getElementsByClassName("zan");
    for (i = 0; i < tupian.length; i++) {
        if (tupian[i].children.length === 0) {
            tupian[i].style.height = "0";
        }
    }
    for (i = 0; i < look.length; i++) {
        look[i].index = i;
        unlook[i].index = i;
        look[i].onclick = function () {
            tupian[this.index].style.height = "auto";
            hide(look[this.index].parentNode);
            unlook[this.index].style.display = "inline";
            tiezicontent[this.index].style.overflow = "visible";
            tiezicontent[this.index].style.whiteSpace = "normal";
            zan[this.index].style.display = "block";
            for(var j = 0;j<tupian[this.index].children.length;j++){
                tupian[this.index].children[j].style.height = "auto";
            }
        };
        unlook[i].onclick = function () {
            if (tupian[this.index].children.length === 0) {
                tupian[this.index].style.height = "0";
            }
            else {
                tupian[this.index].style.height = "120px";
            }
            look[this.index].parentNode.style.display = "inline";
            hide(unlook[this.index]);
            tiezicontent[this.index].style.overflow = "hidden";
            tiezicontent[this.index].style.whiteSpace = "nowrap";
            hide(zan[this.index]);
            for(var j = 0;j<tupian[this.index].children.length;j++){
                tupian[this.index].children[j].style.height = "120px";
            }
        }
    }
//点赞功能
    for(i=0;i<zan.length;i++){
        zan[i].children[0].onclick = function (event) {
            var event = event || window.event;
            if(event.target == "[object HTMLLIElement]"){
                event.target.children[0].innerHTML++;
            }
            else if(event.target == "[object HTMLImageElement]"){
                event.target.parentNode.children[0].innerHTML++;
            }
            else if(event.target == "[object HTMLUListElement]"){

            }
            else{
                event.target.innerHTML++;
            }
        }
    }
//预览图片
    var mask = document.getElementsByClassName("yulan")[0];
    var imgs = document.getElementsByTagName("img");
    for (i = 0; i < imgs.length; i++) {
        imgs[i].index = i;
        imgs[i].onclick = function () {
            mask.children[0].src = imgs[this.index].src;
            show(mask);
        };
    }
    mask.onclick = function () {
        hide(mask);
    };


}





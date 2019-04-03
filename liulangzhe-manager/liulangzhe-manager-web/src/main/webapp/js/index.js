
//请求用户信息
function ajax() {
    var xhr = new XMLHttpRequest();
    xhr.open("post", "");
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
    xhr.onreadystatechange = function (ev) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            if (xhr.responseText != "") {
                //判断是否有用户登陆
                var username = cookie.get("username");
                if (username) {
                    var header = document.querySelector("header");
                    var address = document.getElementById("user");
                    address.innerHTML = cookie.get("username");
                    address.style.marginRight = "150px";
                    address.style.borderLeft = "1px solid #f2473d";
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

// nav
var navlis = document.getElementById("nav2").children;
var navurl = ["index.html","dog.html","#","#","#"];
for(var i = 0;i<navlis.length;i++){
    navlis[i].index = i;
    navlis[i].onclick = function () {
        switch (this.index){
            case 0:window.location.href='index.html';break;
            case 1:window.location.href='dog.html';break;
            case 2:window.location.href='cat.html';break;
            case 3:window.location.href='#';break;
            case 4:window.location.href='#';break;
        }
    }
}

//进入导航
function Gomap() {
    window.location.href = "map.html";
}

//轮播图
function animate(obj,target){
    clearInterval(obj.timer);  // 先清除定时器
    var speed = obj.offsetLeft < target ? 100 : -100;  // 用来判断 应该 +  还是 -
    obj.timer = setInterval(function() {
        var result = target - obj.offsetLeft; // 因为他们的差值不会超过5
        obj.style.left = obj.offsetLeft + speed + "px";
        if(Math.abs(result)<=100)  // 如果差值不小于 5 说明到位置了
        {
            clearInterval(obj.timer);
            obj.style.left = target + "px";  // 有5像素差距   我们直接跳转目标位置
        }
    },10)
}
    // 获取元素
    var box = document.getElementById("box");  // 大盒子
    var ul = document.getElementById("ul");
    var ulLis = ul.children;
    var ol = document.getElementById("ol");
    // 操作元素
    function getanimate() {
    var xhr = new XMLHttpRequest();
    xhr.open("post","index数据库.html");
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
    xhr.onreadystatechange = function (ev) {
        if(xhr.readyState == 4 && xhr.status == 200){
            var json = JSON.parse(xhr.responseText);
            var shadow = document.querySelector(".shadow");
            var pictitle = shadow.children[0];
            var titlearr = [];
            var animateul = document.getElementById("ul");
            pictitle.innerHTML = "做人当如平头哥：生死看淡，不服就干！";
            for(var i =0;i<4;i++){
                titlearr[i] = json[i].title;
                animateul.children[i].children[0].src = json[i].animateimg;
            }
            var li = document.createElement("li");
            ul.appendChild(li);
            var img = document.createElement("img");
            img.src = json[0].animateimg;
            li.appendChild(img);
            // 2. 创建 ol  和  小 li
            for (var i = 0; i < ulLis.length - 1; i++) {
                var li = document.createElement("li");
                // li.innerHTML = i + 1;  //  给里面小的li 文字  1 2 3 4 5
                ol.appendChild(li);  // 添加到 ol 里面
            }
            ol.children[0].className = "current";

            //3. 开始动画部分

            var olLis = ol.children;
            for (var i = 0; i < olLis.length; i++) {
                olLis[i].index = i;  // 获得当前第几个小li 的索引号
                olLis[i].onmouseover = function () {
                    for (var j = 0; j < olLis.length; j++) {
                        olLis[j].className = "";  // 所有的都要清空
                    }
                    this.className = "current";
                    animate(ul,-this.index*760);
                    key = fangkuai = this.index;
                    pictitle.innerHTML = titlearr[this.index];
                }
            }
            var timer = null;
            var key = 0;
            var fangkuai = 0;
            timer = setInterval(autoplay,3000);
            function autoplay() {
                key++;
                if(key==1){
                    pictitle.innerHTML = titlearr[1];
                }
                else if(key==2){
                    pictitle.innerHTML = titlearr[2];
                }
                else if(key==3){
                    pictitle.innerHTML = titlearr[3];
                }
                else if(key ==4){
                    pictitle.innerHTML = titlearr[0];
                }
                if(key > ulLis.length - 1){
                    ul.style.left = 0;
                    key = 1;
                    if(key==1){
                        pictitle.innerHTML = titlearr[1];
                    }
                }
                animate(ul,-key*760);
                fangkuai ++;
                for(var j = 0;j<olLis.length;j++){
                    olLis[j].className = "";
                }
                if(fangkuai > olLis.length - 1){
                    fangkuai = 0;
                }
                olLis[fangkuai].className = "current";
            }
            box.onmouseover = function () {
                clearInterval(timer);
            };
            box.onmouseout = function () {
                timer = null;
                timer = setInterval(autoplay,3000);
            }
        }
    }
}
getanimate();
    // 因为我们要做无缝滚动  ，所以要克隆第一张，放到最后一张后面去
    // a.appendchild(b)   把 b 放到 a 的最后面
    // 1. 克隆完毕


    //滚动条
    var col1 = document.getElementById("col1");
    var col2 = document.getElementById("col2");
    var col3 = document.getElementById("col3");
    var len = 600;
    var x = 0;
    var time = null;
    time = setInterval(function () {
        col1.style.right = -500 + x + "px";
        col2.style.right = -1000 + x + "px";
        col3.style.right = -1468 + x + "px";
        x++;
        if(-1468+x === 1450){
            x=0;
        }
    },15);
    var aside = document.getElementById("aside-l");
    var asidetop = aside.offsetTop;
    var leader=0,target=0;
    var time = null;
    window.onscroll = function (ev) {
        timer = setInterval(function () {
            target = scroll().top + asidetop;
            leader = leader + (target - leader) / 10;
            aside.style.top = leader + "px";
        },30);
    }

//猫狗专区点击
    var doglis = document.getElementsByClassName("dog")[0].children[1].children;
    var catlis = document.getElementsByClassName("cat")[0].children[1].children;
    for(var i = 0;i<doglis.length;i++){
        doglis[i].index = i;
        doglis[i].onmouseover = function () {
            doglis[this.index].style.backgroundColor = "#f2473d";
            doglis[this.index].children[0].style.color = "#ffffff";
        }
    }
    for(var i = 0;i<catlis.length;i++){
        catlis[i].index = i;
        catlis[i].onmouseover = function () {
            catlis[this.index].style.backgroundColor = "#f2473d";
            catlis[this.index].children[0].style.color = "#ffffff";
        }
    }
    document.onmouseout = function (ev) {
        address.className = "hd";
        for(var i =0;i<doglis.length;i++){
            doglis[i].style.backgroundColor = "rgb(242,242,242)";
            doglis[i].children[0].style.color = "#666666";
            catlis[i].style.backgroundColor = "rgb(242,242,242)";
            catlis[i].children[0].style.color = "#666666";
        }
    };


//猫狗新闻专区
function GetTitle() {
    var DogTitle = document.getElementById("DogTitle").children;
    var CatTitle = document.getElementById("CatTitle").children;
    var xhr = new XMLHttpRequest();
    xhr.open("post","index数据库.html");
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send("13");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
            for(var i = 0;i<DogTitle.length;i++){
                DogTitle[i].href = "news-only.html";
                DogTitle[i].children[0].innerHTML = "<mark>[狗狗新闻]</mark>" + json[i].dogtitle;
                CatTitle[i].href = "news-only.html";
                CatTitle[i].children[0].innerHTML = "<mark>[猫咪新闻]</mark>" + json[i].cattitle;
        }

    }
    }
}
GetTitle();

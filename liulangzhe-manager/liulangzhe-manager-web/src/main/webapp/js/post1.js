//打开页面请求数据
function ajax(huidiao) {
    var xhr = new XMLHttpRequest();
    var pinglun = document.getElementsByClassName("pinglun")[0];
    var tiezi = document.getElementsByClassName("tiezi")[0];
    xhr.open("get", "http://47.103.6.223:8080/liulangzhe-manager-web/FindPostByPostId.action");
    xhr.send(null);
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
            var json = JSON.parse(xhr.responseText);
            //头部
            document.title = json[0].postTitle;
            var haed = document.getElementById("luntanhead");
            var headtitle = document.createElement("h4");
            headtitle.innerHTML = json[0].postTitle;
            haed.appendChild(headtitle);
            //主体
            var touxianga = document.createElement("a");
            touxianga.className = "touxiang";
            tiezi.insertBefore(touxianga, pinglun);
            var touxiang = document.createElement("img");
            touxiang.src = json[0].userphoto;
            touxianga.appendChild(touxiang);
            var username1 = document.createElement("span");
            username1.innerHTML = json[0].username;
            username1.setAttribute("userid",json[0].userid);
            tiezi.insertBefore(username1, pinglun);
            var titlea = document.createElement("a");
            titlea.href = "post1.html";
            tiezi.insertBefore(titlea, pinglun);
            var titleh1 = document.createElement("h1");
            titleh1.innerHTML = json[0].postTitle;
            titlea.appendChild(titleh1);
            var time1 = document.createElement("time");
            var date = new Date(json[0].postDate.time);
            time1.innerHTML = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDay();
            tiezi.insertBefore(time1, pinglun);
            var contentp = document.createElement("p");
            contentp.className = "tiezicontent";
            contentp.innerHTML = json[0].postContent;
            tiezi.insertBefore(contentp, pinglun);
            var imgbox = document.createElement("div");
            imgbox.className = "tupian";
            tiezi.insertBefore(imgbox, pinglun);
            var imgbox_img = document.createElement("img");
            imgbox_img.src = json[0].imgPath1;
            imgbox.appendChild(imgbox_img);
            // var imgbox_img1 = document.createElement("img");
            // imgbox_img1.src = json[0].imgPath1;
            // imgbox.appendChild(imgbox_img1);
            var cl = document.createElement("div");
            cl.className = "cl";
            tiezi.insertBefore(cl, pinglun);
            var h5 = document.createElement("h5");
            h5.innerHTML = "共" + json.length + "条回复";
            pinglun.appendChild(h5);
            var ul2 = document.createElement("ul");
            ul2.className = "pinglunul";
            pinglun.appendChild(ul2);
            //评论区
            for (var j = 0; j < json.length; j++) {
                var li = document.createElement("li");
                ul2.appendChild(li);
                var img = document.createElement("img");
                img.src = json[j].userphoto;
                li.appendChild(img);
                var username = document.createElement("span");
                username.innerHTML = json[j].username;
                username.setAttribute("userid",json[j].userid);
                li.appendChild(username);
                var time = document.createElement("time");
                var date = new Date(json[j].postDate.time);
                time.innerHTML = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDay();
                li.appendChild(time);
                var content = document.createElement("p");
                content.innerHTML = json[j].postContent;
                li.appendChild(content);
                var footer = document.createElement("div");
                footer.className = "footer";
                li.appendChild(footer);
                var ol = document.createElement("ol");
                footer.appendChild(ol);
                var olli = document.createElement("li");
                ol.appendChild(olli);
                var count = document.createElement("span");
                count.innerHTML = 0;
                olli.appendChild(count);
                var olli2 = document.createElement("li");
                olli2.className = "requestbtn";
                olli2.innerHTML = "回复";
                ol.appendChild(olli2);
                var olli3 = document.createElement("li");
                olli3.className = "lookbtn";
                olli3.innerHTML = "查看回复";
                ol.appendChild(olli3);
                var request = document.createElement("div");
                request.className = "request";
                request.style.display = "none";
                li.appendChild(request);
                var form = document.createElement("form");
                request.appendChild(form);
                var input1 = document.createElement("input");
                input1.type = "text";
                input1.placeholder = "请输入回复的内容";
                input1.className = "requestcontent";
                form.appendChild(input1);
                var input2 = document.createElement("input");
                input2.type = "button";
                input2.value = "回复";
                form.appendChild(input2);
                //查看回复
                var lookrequest = document.createElement("div");
                lookrequest.className = "lookrequest pinglun";
                hide(lookrequest);
                li.appendChild(lookrequest);
                var lookbox = document.createElement("div");
                lookbox.className = "lookbox";
                lookrequest.appendChild(lookbox);
                var userimg = document.createElement("img");
                userimg.src = json[j].userphoto;
                lookbox.appendChild(userimg);
                var username2 = document.createElement("span");
                username2.innerHTML = json[j].username;
                lookbox.appendChild(username2);
                var time2 = document.createElement("time");
                var date = new Date(json[j].postDate.time);
                time2.innerHTML = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDay();
                lookbox.appendChild(time2);
                var post_content = document.createElement("p");
                post_content.innerHTML = json[j].postContent;
                lookbox.appendChild(post_content);
                var footer1 = document.createElement("div");
                footer1.className = "footer";
                lookbox.appendChild(footer1);
                var ol1 = document.createElement("ol");
                footer1.appendChild(ol1);
                var li1 = document.createElement("li");
                var count1 = document.createElement("span");
                var old_count = 0;
                count1.innerHTML = old_count;
                li1.appendChild(count1);
                ol1.appendChild(li1);
                var h6 = document.createElement("h6");
                h6.className = "h6";
                lookbox.appendChild(h6);
                h6.innerHTML = ol1.length;
            }
            huidiao();
        }
    }
    //请求评论
    // var xhr1 = new XMLHttpRequest();
    // xhr1.open("post", "11.html");
    // xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // xhr1.send("11");
    // xhr1.onreadystatechange = function (ev2) {
    //     if (xhr1.readyState == 4 && xhr1.status == 200) {
    //         var json = JSON.parse(xhr1.responseText);
    //         huidiao();
    //     }
    // }
}
ajax(huidiao);

// 登陆后
var address = document.getElementById("user");
address.onmouseover = function (ev) {
    address.className = "";
};

function huidiao() {
    var mask2 = document.getElementsByClassName("yulan")[0];
    var imgs = document.getElementsByTagName("img");
    for (i = 0; i < imgs.length; i++) {
        imgs[i].index = i;
        imgs[i].onclick = function () {
            mask2.children[0].src = imgs[this.index].src;
            show(mask2);
        };
    }
    mask2.onclick = function () {
        hide(mask2);
    };

//提交评论
    function pinglunajax() {
        var txtval = document.getElementById("txt").value;
        var ul = document.querySelector(".pinglun").children[1];
        var lastli = document.getElementById("last");
        var xhr = new XMLHttpRequest();
        xhr.open("post", "论坛数据库.html");
        xhr.setRequestHeader('Content-Type', 'multipart/form-data');
        xhr.send("txtval="+txtval+"&"+"userid="+cookie.get("userid"));
        xhr.onreadystatechange = function (ev) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var json = xhr.responseText;
                var li = document.createElement("li");
                ul.insertBefore(li, lastli);
                var userimg = document.createElement("img");
                userimg.setAttribute("userid",json[0].userid);
                userimg.src = json[0].images/touxiang.jpg;
                li.appendChild(userimg);
                var username = document.createElement("span");
                username.innerHTML = json[0].username;
                li.appendChild(username);
                var time = document.createElement("time");
                time.innerHTML = json[0].postDate.year+"/"+json[0].postDate.month+"/"+json[0].postDate.day;
                li.appendChild(time);
                var post_content = document.createElement("p");
                post_content.innerHTML = txtval;
                li.appendChild(post_content);
                var footer = document.createElement("div");
                footer.className = "footer";
                li.appendChild(footer);
                var ol = document.createElement("ol");
                footer.appendChild(ol);
                var arr = ["回复", "查看回复"];
                for (var i = 0; i < 3; i++) {
                    var lis = document.createElement("li");
                    if (i === 0) {
                        var count = document.createElement("span");
                        count.innerHTML = 0;
                        lis.appendChild(count);
                        ol.appendChild(lis);
                        continue;
                    }
                    lis.innerHTML = arr[i - 1];
                    ol.appendChild(lis);
                }
            }
        }
    }

//回复显示
    var request = document.getElementsByClassName("request");
    var requestbtn = document.getElementsByClassName("requestbtn");
    for (var i = 0; i < requestbtn.length; i++) {
        requestbtn[i].index = i;
        requestbtn[i].onclick = function () {
            if (requestbtn[this.index].innerHTML === "回复") {
                show(request[this.index]);
                requesttxt.value = "";
                requestbtn[this.index].innerHTML = "取消回复";
            }
            else if (requestbtn[this.index].innerHTML === "取消回复") {
                hide(request[this.index]);
                requesttxt.value = "";
                requestbtn[this.index].innerHTML = "回复";
            }
        };
    }
//查看回复
    var lookbtn = document.getElementsByClassName("lookbtn");
    var lookrequest = document.getElementsByClassName("lookrequest");
    var lookbox = document.getElementsByClassName("lookbox");
    var requesttxt = document.getElementsByClassName("requestcontent")[0];
    var deldiv = document.createElement("div");
    for (i = 0; i < lookbtn.length; i++) {
        lookbtn[i].index = i;
        lookbtn[i].onclick = function () {
            var that = this.index;
            if (lookbox[that].children.length > 6) {
                show(lookrequest[that]);
                if(deldiv.className == ""){
                    deldiv.className = "del";
                    deldiv.innerHTML = "X";
                }
                lookbox[that].appendChild(deldiv);
                deldiv.onclick = function (ev) {
                    hide(lookrequest[that]);
                }
            }
            else{
                alert("暂时没有回复");
            }
        };
    }

//评论区回复请求
    for(i= 0;i<request.length;i++){
        request[i].children[0].children[1].addEventListener("click",requestajax);
    }
    function requestajax(event) {
        var event = event || window.event;
        var requestval = event.target.parentNode.children[0].value;
        var lookrequest = event.target.parentNode.parentNode.nextElementSibling;
        var lookbox = lookrequest.children[0];
        var xhr = new XMLHttpRequest();
        xhr.open("post", "论坛数据库.html");
        xhr.setRequestHeader('Content-Type', 'multipart/form-data');
        xhr.send("requestval="+requestval+"&"+"userid="+cookie.get("userid"));   //回复内容+回复人id+被回复人id
        xhr.onreadystatechange = function (ev) {
            if (xhr.readyState == 4 && xhr.status == 200 ) {
                if(cookie.get("username") && requestval != ""){
                    alert("回复成功");
                    var json = JSON.parse(xhr.responseText);
                    var lis = document.querySelector(".pinglun").children[1].children;
                    var ul = document.createElement("ul");
                    ul.className = "huifubox";
                    lookbox.appendChild(ul);
                    var li = document.createElement("li");
                    ul.appendChild(li);
                    var img = document.createElement("img");
                    img.src = json[0].userphoto;
                    li.appendChild(img);
                    var username = document.createElement("span");
                    username.innerHTML = json[0].username;
                    var time = document.createElement("time");
                    time.innerHTML = json[0].postDate.year+"/"+json[0].postDate.month+"/"+json[0].postDate.day;
                    li.appendChild(time);
                    var content = document.createElement("p");
                    content.innerHTML = requestval;
                    li.appendChild(content);
                    var footer = document.createElement("div");
                    footer.className = "footer";
                    li.appendChild(footer);
                    var ol = document.createElement("ol");
                    footer.appendChild(ol);
                    var olli1 = document.createElement("li");
                    ol.appendChild(olli1);
                    var count = document.createElement("span");
                    count.innerHTML = 0;
                    olli1.appendChild(count);
                    var olli2 = document.createElement("li");
                    var h6 = document.getElementsByClassName("h6")[0];
                    var ulbox = document.getElementsByClassName("huifubox");
                    h6.innerHTML = ulbox.length+"条回复";
                    requestval = "";
                }
                else if(cookie.get("username" == "")){
                    alert("您还未登陆");
                    window.location.href = "land.html";
                }
                else if(requestval == ""){
                    alert("回复不能为空");
                }
            }
        }
    }


    //回复贴主
    var huifuinput = document.getElementsByClassName("huifu")[0].children[0];
    var huifubtn = document.getElementsByClassName("huifu")[0].children[1];
    huifubtn.onclick = function () {
        var xhr = new XMLHttpRequest();
        xhr.open("post","论坛数据库.html");
        xhr.setRequestHeader('Content-Type', 'multipart/form-data');
        xhr.send("userid="+cookie.get("userid")+"inputval="+huifuinput.value);
        xhr.onreadystatechange = function (ev) {
            if(xhr.readyState == 4 && xhr.status == 200){
                if(cookie.get("username") && huifuinput.value != ""){
                    var json = JSON.parse(xhr.responseText);
                    var li = document.createElement("li");
                    var pinglunul = document.getElementsByClassName("pinglunul")[0];
                    pinglunul.appendChild(li);
                    var img = document.createElement("img");
                    img.src = json[0].userphoto;
                    li.appendChild(img);
                    var username = document.createElement("span");
                    username.innerHTML = json[0].username;
                    username.setAttribute("userid",json[0].userid);
                    li.appendChild(username);
                    var time = document.createElement("time");
                    time.innerHTML = json[0].postDate.year+"/"+json[0].postDate.month+"/"+json[0].postDate.day;
                    li.appendChild(time);
                    var content = document.createElement("p");
                    content.innerHTML = json[0].postContent;
                    li.appendChild(content);
                    var footer = document.createElement("div");
                    footer.className = "footer";
                    li.appendChild(footer);
                    var ol = document.createElement("ol");
                    footer.appendChild(ol);
                    var olli = document.createElement("li");
                    ol.appendChild(olli);
                    var count = document.createElement("span");
                    count.innerHTML = json[0].postDate.day;
                    olli.appendChild(count);
                    var olli2 = document.createElement("li");
                    olli2.className = "requestbtn";
                    olli2.innerHTML = "回复";
                    ol.appendChild(olli2);
                    var olli3 = document.createElement("li");
                    olli3.className = "lookbtn";
                    olli3.innerHTML = "查看回复";
                    ol.appendChild(olli3);
                    var request = document.createElement("div");
                    request.className = "request";
                    request.style.display = "none";
                    li.appendChild(request);
                    var form = document.createElement("form");
                    request.appendChild(form);
                    var input1 = document.createElement("input");
                    input1.type = "text";
                    input1.placeholder = "请输入回复的内容";
                    input1.className = "requestcontent";
                    form.appendChild(input1);
                    var input2 = document.createElement("input");
                    input2.type = "button";
                    input2.value = "回复";
                    form.appendChild(input2);
                }


            }
        }

    }
}

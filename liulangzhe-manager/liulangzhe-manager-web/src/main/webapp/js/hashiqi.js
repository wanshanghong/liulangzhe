//打开页面请求数据
function ajax1(huidiao) {
    var xhr = new XMLHttpRequest();
    xhr.open("post","http://47.103.6.223:8080/liulangzhe-manager-web/loadAllPost.action");//http://47.103.6.223:8080/liulangzhe-manager-web/
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("userid="+cookie.get("userid"));
    xhr.onreadystatechange = function () {
        if (xhr.readyState == '4' && xhr.status == '200') {
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


            var json = JSON.parse(xhr.responseText);
            for(var j = 0;j<json.length;j++){
                postIdArr[j] = json[j].postId;
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
                titlea.className = "postId";
                titlea.href = "post1.html";
                titlea.setAttribute("userid",json[j].userid);
                titlea.setAttribute("postId",json[j].postId);
                tiezi.appendChild(titlea);
                title = document.createElement("h1");
                title.innerHTML = json[j].postTitle;
                titlea.appendChild(title);
                time = document.createElement("time");
                var date = new Date(json[j].postDate.time);
                time.innerHTML = date.getFullYear() + '/' + (date.getMonth()+1 )+ '/' + date.getDate();
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
                footerspan.innerHTML = json[j].attentionAmount;
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
                var Arr1 = ["收藏","分享","点赞","评论"];
                for(var k=0;k<4;k++){
                    zanli = document.createElement("li");
                    zanul.appendChild(zanli);
                    zanli.innerHTML = Arr1[k];
                    zanspan = document.createElement("span");
                    if(k===2||k===3){
                        zanspan.innerHTML = "0";
                    }
                    zanli.appendChild(zanspan);
                }
                shouqi = document.createElement("a");
                shouqi.className = "unlook";
                shouqi.href = "javascript:void(0);";
                shouqi.style.display = "none";
                shouqi.innerHTML = "收起全文";
                tiezi.appendChild(shouqi);

                //渲染右侧

                // var logo_right = document.getElementById("logo-right");
                // logo_right.children[0].src = ;
                // logo_right.children[1].innerHTML = json[0].logo;
                huidiao();
            }
        }
    }
}
ajax1(huidiao);

// 登陆后
var address = document.getElementById("user");
address.onmouseover = function (ev) {
    address.className = "";
};
document.onmouseout = function (ev) {
    address.className = "hd";
}
function huidiao() {
    var luntanheadlis = document.getElementById("luntanhead").children[0].children;
    function $(id) {return document.getElementById(id);}
    var zuixin = $("zuixin");
    var remen = $('remen');
    var wenda = $("wenda");
    for(var i = 0;i<luntanheadlis.length;i++) {
        luntanheadlis[i].index = i;
        luntanheadlis[i].onclick = function () {
            for (var j = 0; j < luntanheadlis.length; j++) {
                luntanheadlis[j].style.borderBottom = "0";
            }
            luntanheadlis[this.index].style.borderBottom = "3px solid #f2473d";
            if (this.index === 0) {
                show(zuixin);
                hide(remen);
                hide(wenda);
            }
            else if (this.index === 1) {
                show(remen);
                hide(zuixin);
                hide(wenda);
            }
            else if (this.index === 2) {
                show(wenda);
                hide(zuixin);
                hide(remen);
            }
        }
    }

    //


    //发帖btn
    var fatiebtn = document.getElementsByClassName("fatiebtn")[0];
    var luntanbody = document.getElementById("luntanbody");
    fatiebtn.onclick = function () {
        window.scrollTo(0,luntanbody.offsetHeight + 200);
    };


// //上传视频
// var file1 = document.getElementById("uploadvid");
// function uploadvid() {
//     file1.click();
// }
//
// function changevid() {
//         var reads1 = new FileReader();
//         var fd = file1.files[0];
//         reads1.readAsDataURL(fd);
//         reads1.onload = function (ev) {
//
//         }
// }
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



    //进入帖子发送postId
    function sendpost() {
        var sendpostid = document.getElementsByClassName("postId");
        for(i =0;i<sendpostid.length;i++){
            sendpostid[i].index = i;
            sendpostid[i].onclick = function () {
                var userid = sendpostid[this.index].getAttribute("userid");
                var postid = sendpostid[this.index].getAttribute("postId");
                var xhr = new XMLHttpRequest();
                xhr.open("post","11.html");
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.send("userid="+userid+"&"+"postId="+postid);
                xhr.onreadystatechange = function (ev) {
                    if(xhr.readyState == 4 && xhr.status == 200){
                        alert("ok");
                    }
                }
            }
        }
    }
sendpost();
}
huidiao();


//上传图片
var file = document.getElementById("uploadpic");
var pic = document.getElementById("pic");
var k = 0;
var imgdiv, imgbox, img, span;
var form = document.getElementById('form1');
var Arrimg = [];
var Arradd = [];
var id = 0;


function changepic() {
    var mask = document.getElementsByClassName("yulan")[0];
    var imgparent = document.getElementsByClassName("imgbox");
    var f = file.files;
    console.log(f.length);
    if (f.length + imgparent.length > 9) {
        alert("最多上传9张图片");
    }
    else {
        for (i = 0; i < f.length + imgparent.length; i++) {
            Arrimg[id] = f[i];
            Arradd[id] = URL.createObjectURL(f[i]);
            id++;
            var reads = new FileReader();
            reads.readAsDataURL(f[i]);
            reads.onload = function (ev) {
                if (k === 0) {
                    imgdiv = document.createElement("div");
                    imgdiv.className = "img";
                    form.insertBefore(imgdiv, submit);
                    imgbox = document.createElement("div");
                    imgbox.className = "imgbox";
                    imgdiv.appendChild(imgbox);
                    img = document.createElement("img");
                    img.src = this.result;
                    imgbox.appendChild(img);
                    span = document.createElement("span");
                    imgbox.appendChild(span);
                    span.innerHTML = "X";
                    k++;
                }
                else {
                    var imgbox = document.createElement("div");
                    imgbox.className = "imgbox";
                    imgdiv.appendChild(imgbox);
                    img = document.createElement("img");
                    img.src = this.result;
                    imgbox.appendChild(img);
                    span = document.createElement("span");
                    imgbox.appendChild(span);
                    span.innerHTML = "X";
                }
                img.onclick = function () {
                    var imgboxs = document.getElementsByClassName("imgbox");
                    for (j = 0; j < imgboxs.length; j++) {
                        imgboxs[j].style.position = "static";
                        hide(imgboxs[j].children[1]);
                    }
                    mask.children[0].src = this.src;
                    show(mask);
                    // img.parentNode.style.position = "";
                };
                mask.onclick = function () {
                    var imgboxs = document.getElementsByClassName("imgbox");
                    hide(mask);
                    for (j = 0; j < imgboxs.length; j++) {
                        imgboxs[j].style.position = "relative";
                        show(imgboxs[j].children[1]);
                    }
                };
                span.onclick = function () {
                    var del = this.parentNode;
                    var box = document.getElementsByClassName("imgbox");
                    for (i = 0; i < f.length; i++) {
                        if (box[i] == del) {
                            // Arrimg.splice(i, 1);
                        }
                    }
                    del.removeChild(del.children[0]);
                    del.parentNode.removeChild(del);
                };
            };
        }
    }
}
file.onchange = changepic;
pic.onclick = function (ev) {
    file.click();
};


//发帖ajax
function postajax() {
    var fd = new FormData(form);
    var title = fd.get("postTitle");
    var content = fd.get("postContent");
    fd.set("userid",cookie.get("userid"));
    var xhr = new XMLHttpRequest;
    xhr.open("post", "http://47.103.6.223:8080/liulangzhe-manager-web/sendpost1.action");
    // xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    xhr.send(fd);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // if(cookie.get("username")) {
                alert("发帖成功");
                var posttitle = document.getElementById("posttitle");
                var postcontent = document.getElementById("content");
                posttitle.value = "";
                postcontent.value = "";
                location.reload(false);
            // }

            // else{
            //     alert("您还未登陆");
            //     window.location.href = "land.html";
            // }
        }
    }
}
var postbtn = document.getElementById("submit");
postbtn.onclick = postajax;
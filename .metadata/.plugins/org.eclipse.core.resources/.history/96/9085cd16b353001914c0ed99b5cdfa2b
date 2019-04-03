//请求用户信息
function ajax() {
    var xhr = new XMLHttpRequest();
    xhr.open("post", "");
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send("11");
    xhr.onreadystatechange = function (ev) {
        if (xhr.readyState == 4 || xhr.status == 200) {
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
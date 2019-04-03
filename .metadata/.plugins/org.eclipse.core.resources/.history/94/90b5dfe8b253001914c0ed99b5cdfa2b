var land = document.getElementById("land");
var zhuce = document.getElementById("zhuce");
var zhucetable = document.getElementById("zhucetable");
var landtable = document.getElementById("landtable");
var btn = document.getElementById("btn");
var err = document.getElementById("err");
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
var flag = false;
var username = document.getElementsByClassName("smallbox")[0].children[1];
var eml = document.getElementsByClassName("smallbox")[1].children[1];
var userpassword = document.getElementsByClassName("smallbox")[2].children[1];
var phone = document.getElementsByClassName("smallbox")[3].children[1];
var nameval,emlval,mimaval,phoneval;
userpassword.oninput = function (ev) {
    mimaval = userpassword.value;
};
eml.oninput = function (ev) {
    emlval = eml.value;
};
phone.oninput = function (ev) {
    phoneval = phone.value;
};
username.oninput = function (ev) {
    nameval = username.value;
};
var re=/^[\u4e00-\u9fa5]+$/;
var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
var phonereg = /^1[3-578]\d{9}$/;
var namereg = /^[0-9]*$/;
function blur_name() {
    if(nameval == undefined){
        username.parentNode.children[2].innerHTML = "用户名不能为空";
        flag = false;
    }
    else if(nameval.length>7&&re.test(nameval)){
        username.parentNode.children[2].innerHTML = "用户名最长14各英文或7个汉字";
        flag = false;
    }
    else if(nameval.length>14 && nameval >= "a" && nameval<= "z" || nameval>="A"&&nameval<="Z"){
        username.parentNode.children[2].innerHTML = "用户名最长14个英文或7个汉字";
        flag = false;
    }
    else if(namereg.test(nameval)&&nameval.length>14){
        username.parentNode.children[2].innerHTML = "用户名最长14个英文或7个汉字";
        flag = false;
    }
    else {
        username.parentNode.children[2].innerHTML = "";
        flag = true;
    }
}
// function check_name() {
//     var str;
//     var arr = ["&", "\\", "/", "*", ">", "<", "@", "!"];
//     for(var i=0;i<arr.length;i++){
//         if(nameval == arr[i]){
//             username.parentNode.children[2].innerHTML = "用户名不能含有特殊字符";
//             flag = false
//             break;
//         }
//         else{
//             flag = true;
//         }
//     }
// }
function blur_password() {
    if(mimaval == undefined){
        userpassword.parentNode.children[2].innerHTML = "密码不能为空";
        flag = false;
    }
    else if(mimaval.length < 6 || mimaval.length > 14){
        userpassword.parentNode.children[2].innerHTML = "密码长度为6~14个字符";
        flag = false;
    }
    else{
        userpassword.parentNode.children[2].innerHTML = "";
        flag = true;
    }
}
function blur_email() {
        if(emlval == undefined){
        eml.parentNode.children[2].innerHTML = "邮箱不能为空";
        flag = false;
    }
    else if(!reg.test(emlval)){
        eml.parentNode.children[2].innerHTML = "请输入正确的邮箱地址";
        flag = false;
    }
    else{
        eml.parentNode.children[2].innerHTML = "";
        flag = true;
    }
}
function blur_phone() {
        if(phoneval == undefined){
        phone.parentNode.children[2].innerHTML = "手机号码不能为空";
        flag = false;
    }
    else if(!phonereg.test(phoneval)){
        phone.parentNode.children[2].innerHTML = "请输入正确的手机号码";
        flag = false;
    }
    else{
        phone.parentNode.children[2].innerHTML = "";
            flag = true;
    }
}
var zhucebtn = document.getElementsByClassName("zhucebtn")[0];
zhucebtn.onclick = function () {
    var xhr = new XMLHttpRequest();
    var fd = new FormData(zhucetable);
    xhr.open("post","registe.action");
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send(fd);
            if(flag){
                window.location.href='index.html';
            }
            else if(flag == false){
                alert("注册失败");
            }
};
// function check(event) {
//     var event = event || window.event;
//     alert("hhh");
//     if(flag){
//         alert("注册成功");
//     }
//     else{
//         event.preventDefault();
//     }
// }





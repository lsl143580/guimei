$(function () {
    var from = document.getElementById("loginf");
    var tab = from.getElementsByTagName("table")[0];

    var userName = from.username;
    var loginname = from.loginname;
    var password = from.password;
    var password1 = from.password1;
    var email = from.email;
    var IDCard = from.IDCard;
    var address = from.address;

    var a1 = document.getElementsByClassName("a1")[0];
    var a2 = document.getElementsByClassName("a2")[0];
    var a3 = document.getElementsByClassName("a3")[0];
    var a4 = document.getElementsByClassName("a4")[0];
    var a5 = document.getElementsByClassName("a5")[0];
    var a6 = document.getElementsByClassName("a6")[0];
    var a7 = document.getElementsByClassName("a7")[0];
    var a8 = document.getElementsByClassName("a8")[0];

    var userName_reg = /^[\u4e00-\u9fa5]{2,4}$/; //名字
    var loginname_reg = /^(?![0-9]+$)[0-9a-zA-Z]{6,20}$/;
    var password_reg = /^[0-9a-zA-Z]{6,20}$/ //不能全是数字，只能是6—20位的数字和字母
    var email_reg = /^[0-9a-zA-Z]{1,}[@][a-zA-Z]{1,}[.][0-9a-zA-Z]{1,}$/;
    var address_reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

    var userName_b = false;
    var loginname_b = false;
    var password_b = false;
    var password1_b = false;
    var email_b = false;
    var IDCard_b = false;
    var address_b = false;
    var hobby_b = false;

    /*   var inps = from.getElementsByTagName("input");
       for(var i = 0; i < inps.length; i++) {
           inps[i].value = "";

       }*/
    IDCard.onblur = function() {
        fIDCard(this);
    }
    function fIDCard(d){
        if(d.value == "") {
            a6.innerText = "　不能为空！";
            a6.style.color = "red"
            IDCard_b = false;
        } else {
            if(address_reg.test(d.value)) {
                a6.innerText = "　输入正确";
                a6.style.color = "green"
                IDCard_b = true;
            } else {
                a6.innerText = "　请输入正确的身份证号！";
                a6.style.color = "red"
                IDCard_b = false;
            }
        }
    }
    address.onblur = function() {
        fAddress(this);
    }
    function fAddress(d){
        if(d.value == "") {
            a7.innerText = "　不能为空！";
            a7.style.color = "red"
            address_b = false;
        } else {
            a7.innerText = "　输入正确";
            a7.style.color = "green"
            address_b = true;
        }
    }

    userName.onblur = function() {
        fUserName(this);
    }
    function fUserName(d){
        if(d.value == "") {
            a1.innerText = "　不能为空！";
            a1.style.color = "red"
            userName_b = false;
        } else {
            if(userName_reg.test(d.value)) {
                a1.innerText = "　输入正确";
                a1.style.color = "green"
                userName_b = true;
            } else {
                a1.innerText = "　2到4位的汉字！";
                a1.style.color = "red"
                userName_b = false;
            }
        }
    }

    loginname.onblur = function() {
        fLoginName(this);
    }
    function fLoginName(d){
        var $loginname = $(d);
        if(d.value == "") {
            a2.innerText = "　不能为空！";
            a2.style.color = "red"
            loginname_b = false;
        } else {
            if(loginname_reg.test(d.value)) {
                $.ajax({
                    url:'user',
                    data:{'zh':$loginname.val(),"gn":"ajaxLoginNameVerify"},
                    success:function (res) {
                        if(res=='cg'){
                            a2.innerText = "　输入正确";
                            a2.style.color = "green"
                            loginname_b = true;
                        }else {
                            a2.innerText = "　用户名已存在！";
                            a2.style.color = "red"
                            loginname_b = false;
                        }
                    }
                });

            } else {
                a2.innerText = "　（不能全是数字，只能是6—20位的数字和字母）";
                a2.style.color = "red"
                loginname_b = false;
            }
        }
    }
    password.onblur = function() {
        fPassword(this);
    }
    function fPassword(d){
        if(d.value == "") {
            a3.innerText = "　不能为空！";
            a3.style.color = "red"
            password_b = false;
        } else {
            if(password_reg.test(d.value)) {
                a3.innerText = "　输入正确";
                a3.style.color = "green"
                password_b = true;
                //修改的时候验证一下 重复输入的密码框
                if(password1.value.length > 0 && password1.value != d.value) {
                    a4.innerText = "　密码不一致！";
                    a4.style.color = "red"
                    password1_b = false;
                }
            } else {
                a3.innerText = "　（包含6-20位的数字和字母）";
                a3.style.color = "red"
                password_b = false;
            }
        }
    }
    password1.onblur = function() {
        if(this.value == password.value && password.value != "") {
            a4.innerText = "　输入正确";
            a4.style.color = "green"
            password1_b = true;
        } else {
            if(this.value != password.value) {
                a4.innerText = "　密码不一致！";
                a4.style.color = "red"
                password1_b = false;
            }
            if(password.value == "") {
                a3.innerText = "　不能为空！";
                a3.style.color = "red"
                password_b = false;
            }

        }
    }
    email.onblur = function() {
        fEmail(this);
    }
    function fEmail(d) {
        var $email = $(d);
        if(d.value == "") {
            a5.innerText = "　不能为空！";
            a5.style.color = "red"
            email_b = false;
        } else {
            if(email_reg.test(d.value)) {
                $.ajax({
                    url:'user',
                    data:{'yx':$email.val(),"gn":"ajaxEmailVerify"},
                    success:function (res) {
                        if(res=='cg'){
                            a5.innerText = "　输入正确";
                            a5.style.color = "green"
                            email_b = true;
                        }else {
                            a5.innerText = "　邮箱已存在！";
                            a5.style.color = "red"
                            email_b = false;
                        }
                    }
                });
            } else {
                a5.innerText = "　（请输入正确的邮箱格式！）";
                a5.style.color = "red"
                email_b = false;
            }
        }
    }
    $(".ah1 input:checked").on("click",function () {
        var ah = $(".ah1 input:checked").length > 1
        a8.innerText = "　　填写正确";
        a8.style.color = "green";
    })

    //点击提交
    var sub = document.getElementById("submit");
    var res = document.getElementById("reset");

    from.onsubmit = function() {
        fUserName(userName);
        fLoginName(loginname);
        fPassword(password);
        fEmail(email);
        fIDCard(IDCard);
        fAddress(address);


        var ah = $(".ah1 input:checked").length > 1
        if(userName_b && loginname_b && password_b && password1_b && email_b && IDCard_b && address_b && $(".ah1 input:checked").length > 1) {
            return true;
        }
        if(!ah) {
            a8.innerText = "　　至少选中2个";
            a8.style.color = "red";
        } else {
            alert("请正确填写表单");
        }
        return false;
    }
    res.onclick = function(event) {
        event.preventDefault();
        from.reset();
    }

});
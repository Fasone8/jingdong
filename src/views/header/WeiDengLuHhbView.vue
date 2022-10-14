<template>
    <router-link to="/">
    <div id="diyi" >
        <svg class="icon" >
            <use xlink:href="#icon-jiantou_liebiaoxiangzuo"></use>
        </svg>
    </div>
    </router-link>
    <p class="dingbu">京东登录注册</p>
    <div class="shoujihao">
        <span>+86</span>
        <div>
            <svg class="icon1">
                <use xlink:href="#icon-xialajiantouxiao"></use>
            </svg>
        </div>
        <input type="text" placeholder="请输入手机号" class="input1">
    </div>
    <div class="yanzhengma">
        <input type="text" placeholder="请输入收到的验证码" class="input2" >
       <button>
           获取验证码
       </button>
    </div>
    <div class="denglu">
        <span>登录</span>
    </div>
    <div class="zhuce">
        <span class="a">
            账号密码登录
        </span>
        <span class="b">
            手机快速注册
        </span>
    </div>
    <div class="fangshi">
        <div class="a1"></div>
         <a class="xiaozi">其他登录方式</a>
        <div class="b1"></div>
        <div class="c1">
        <ul>
            <li>
                <svg class="icon3">
                    <use xlink:href="#icon-QQ-circle-fill"></use>
                </svg>
            </li>
            <li>
                <svg class="icon4">
                    <use xlink:href="#icon-weixin"></use>
                </svg>
            </li>
            <li>
                <svg class="icon3">
                    <use xlink:href="#icon-pinpaibiaoshi_pingguo"></use>
                </svg>
            </li>
        </ul>
        </div>
    </div>
    <div class="dibu">
        <input type="checkbox" class="input3">
        <span class="dibuwenzi">
            若您输入的手机号未注册，将为您直接注册，注册即视为同意
            <a href="">京东用户注册协议</a>、
            <a href="">用户隐私政策</a>
        </span>
    </div>
</template>

<script>
    export default {
        name: "WeiDengLuHhbView"
    }
    document.body.style.backgroundColor="#fff";

</script>

<style scoped>
    /*body{*/
    /*    background: blue !important;*/
    /*}*/
.dingbu{
    margin-top: 8px;
    margin-left: 130px;
    font-size: 17px;
}
div{
    float: left;
    margin-left: 15px;
}
    .icon{
        width: 30px;
        height: 30px;
    }
    .shoujihao{
        margin-left: 30px;
        margin-top: 20px;
        width: 340px;
        height: 50px;
        /*background: #e43130;*/
        border-bottom-width: 0.05rem;
        border-bottom-style: solid;
        border-bottom-color: rgb(239, 239, 239);
    }
    span{
        width: 50px;
        height: 50px;
        float: left;
        margin-top: 17px;
        margin-left: 5px;
    }
    .icon1{
       width: 35px;
        height: 20px;
        margin-left: -35px;
        margin-top: 18px;
    }
    .input1{
        width: 200px;
        height: 30px;
        float: left;
        font-size: 16px;
        border: none;
        margin-top:12px ;
        background: none;
        outline: none;
    }
    .yanzhengma{
        margin-left: 30px;
        margin-top: 20px;
        width: 340px;
        height: 50px;
        /*background: blue;*/
        border-bottom-width: 0.05rem;
        border-bottom-style: solid;
        border-bottom-color: rgb(239, 239, 239);
    }
    .input2{
        width: 200px;
        height: 30px;
        float: left;
        font-size: 16px;
        border: none;
        margin-top:12px ;
        background: none;
        border-right-width: 0.1rem;
        border-right-style: solid;
        border-right-color: rgb(239, 239, 239);
        outline: none;
    }
    .yanzhengma>button{
        width: 100px;
        height: 30px;
        font-size: 14px;
        margin-left: 25px;
        border: none;
        background: none;
        margin-top: 12px;
        color: #868489;
    }
    .denglu{
        width: 340px;
        height: 50px;
        background-image: -webkit-gradient(linear,left top,right top,color-stop(0,#fab3b3),color-stop(73%,#ffbcb3),to(#ffcaba));
        border-radius: 23px;
        margin-top: 35px;
        margin-left: 30px;
    }
    .denglu>span{
        font-size: 16px;
        margin-left: 150px;
        color: white;
    }
    .zhuce{
        width: 340px;
        height: 20px;
        /*background: yellow;*/
        margin-left: 30px;
        margin-top:20px ;
    }
    .zhuce>.a{
        font-size: 14px;
        width:90px;
        height: 20px;
        margin-top: 0;
        color: #00000066;
    }
    .zhuce>.b{
        font-size: 14px;
        width:90px;
        height: 20px;
        margin-top: 0;
       float: right;
        color: #00000066;
    }
    .fangshi{
        width: 340px;
        height: 100px;
        /*background: #e43130;*/
        margin-left: 30px;
        margin-top: 60px;
    }
    .xiaozi{
        font-size: 12px;
        color: #00000033;
        margin-left: 35px;
    }
    .a1{
        height: 0.05rem;
        width: 100px;
        background-color: #00000033;
        margin-top: 17px;
        margin-left: 0;
    }
    .b1{
        height: 0.05rem;
        width: 100px;
        background-color: #00000033;
        float: right;
        margin-top: 15px;
        margin-right: 0;
    }
.c1{
    /*background: black;*/
    width: 340px;
    height: 60px;
    margin-left: 0;
    margin-top: 15px;
}
    .c1>ul{
        display: flex;
        justify-content:center ;
        margin-left: -30px;
    }
    li{
        padding-left: 30px;
    }
    .icon3{
        width:50px ;
        height: 50px;
    }
    .icon4{
        width: 46px;
        height: 46px;
    }
    .dibu{
        width: 340px;
        height: 40px;
        margin-left: 30px;
        margin-top: 10px;
        /*background: #e43130;*/
    }
    .input3{
        float: left;
    }
    .dibuwenzi{
        margin-top: 0;
        color: #0000004D;
        width: 310px;
        height: 35px;
        font-size: 13px;
    }
    a{
        color:#4A90E2 ;
    }
</style>
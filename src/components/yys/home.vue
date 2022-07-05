<style scoped lang="less">
#yys-home-container{
    position: relative;
}
/* body {
  min-width: 1280px;
  max-width: 1980px;
} */
body.noScroll {
  overflow: hidden;
  height: 100%;
}
/* 背景 */
#bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
#bg .bg {
  width: 100%;
  background-repeat: no-repeat;
  background-position: top center;
}
#bg .bg1 {
  width: 100%;
  height: 1080px;
  margin-top: -54px;
  background-image: url("../../assets/images/yys/bg1.jpg");
}
#bg .bg1 object {
  position: absolute;
  top: -54px;
}
#bg .bg1 embed {
  opacity: 0;
}
#bg .bg2 {
  margin-top: -54px;
  height: 1080px;
  background-image: url("../../assets/images/yys/bg2.jpg");
}
#bg .bg3 {
  height: 534px;
  background-image: url("../../assets/images/yys/bg3.jpg");
}

/* 首屏 */
#wrap {
  /* overflow: hidden; */
  position: relative;
  width: 100%;
  height: 1280px;
}
/* 滑入部分 */
#wrap .wSwiper #logo {
  position: relative;
  opacity: 0;
  left: -200px;
  width: 150px;
  height: 115px;
  padding: 30px 0 0 30px;
}
#wrap .wSwiper #logo img {
  float: left;
}
#wrap .wSwiper #logo .img2 {
  width: 90px;
  height: 90px;
  margin-left: 10px;
  border: 2px solid #fff;
  border-radius: 20px;
}
#wrap .wSwiper .swp2 {
  position: absolute;
  top: 30px;
  right: -200px;
  opacity: 0;
  margin-right: 30px;
  width: 177px;
  height: 45px;
  background-image: url("../../assets/images/yys/goindex.png");
}
#wrap .wSwiper .swp2 a {
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  transition: 0.3s;
}
#wrap .wSwiper .swp2 a:hover {
  background-color: rgba(0, 0, 0, 0);
}
#wrap .wSwiper .swp3 {
  position: absolute;
  top: 260px;
  right: 60px;
  opacity: 0;
  width: 340px;
  height: 521px;
  background: url("../../assets/images/yys/swp3.png");
}
#wrap .wSwiper .swp4 {
  position: absolute;
  opacity: 0;
  top: 810px;
  right: 335px;
  width: 440px;
  height: 160px;
}
#wrap .wSwiper .swp4 p {
  color: #3d2672;
  font-weight: bold;
  font-size: 16px;
}
#wrap .wSwiper .swp4 .qrcode {
  position: relative;
  float: left;
  width: 130px;
  height: 130px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.5) url("../../assets/images/yys/qrcode.png") no-repeat center
    center/120px 120px;
}
#wrap .wSwiper .swp4 .qrcode .line {
  position: absolute;
  top: 4px;
  left: -7px;
  width: 150px;
  height: auto;
  animation: move 4s linear infinite;
}
#wrap .wSwiper .swp4 .download {
  float: right;
  width: 205px;
  height: 130px;
}

/* 视频按钮 */
#wrap .videoBtn {
  position: absolute;
  top: 450px;
  right: 550px;
  width: 165px;
  height: 120px;
  background-image: url("../../assets/images/yys/videoBtn.png");
  cursor: pointer;
}
#wrap .videoBtn img {
  position: absolute;
  top: 2px;
  left: 48px;
}
#wrap .video {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
#wrap #video {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 800px;
  height: 450px;
  margin: auto;
  border: 2px solid #b69476;
}
#wrap #video .close,
#wrap .popwindow .close {
  position: absolute;
  top: 0;
  right: -40px;
  width: 35px;
  height: 35px;
  background: url("../../assets/images/yys/close.png") 0 0/100% 100%;
  cursor: pointer;
  transform: rotate(0deg);
  transition: 0.3s;
}
#wrap #video .close:hover {
  transform: rotate(180deg);
}
/* 鼠标提示 */

#wrap .mouse {
  position: absolute;
  left: 50%;
  top: 60%;
  width: 30px;
  height: 70px;
  margin-left: 15px;
  background-image: url("../../assets/images/yys/dBtn.png");
  animation: down 1s linear infinite;
}

/*newinfo部分*/
#newinfo {
  position: relative;
  top: 900px;
  z-index: 99;
}
#newinfo .main {
  width: 1284px;
  margin: 0 auto;
}
#newinfo .main .title {
  position: relative;
  top: 0;
  opacity: 1;
  height: 150px;
  background: url("../../assets/images/yys/newinfo/newinf.png") no-repeat center top;
  transition: 0.5s;
}
#newinfo .main .title.hide {
  top: 80px;
  opacity: 0;
}
#newinfo .main .infoList ul {
  overflow: hidden;
}
#newinfo .main .infoList ul li {
  float: left;
  position: relative;
  top: 0;
  opacity: 1;
  width: 418px;
  height: 213px;
  margin: 11px 5px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position-y: 17px;
  transition: 0.5s;
}
#newinfo .main .infoList ul li.hide {
  top: 80px;
  opacity: 0;
}
#newinfo .main .infoList ul li:hover {
  background-position-y: 0;
}
#newinfo .main .infoList ul li.l1 {
  background-image: url("../../assets/images/yys/newinfo/p1.png");
}
#newinfo .main .infoList ul li.l2 {
  background-image: url("../../assets/images/yys/newinfo/p2.png");
}
#newinfo .main .infoList ul li.l3 {
  background-image: url("../../assets/images/yys/newinfo/p3.png");
}
#newinfo .main .infoList ul li.l4 {
  background-image: url("../../assets/images/yys/newinfo/p4.png");
}
#newinfo .main .infoList ul li.l5 {
  background-image: url("../../assets/images/yys/newinfo/p5.png");
}
#newinfo .main .infoList ul li.l6 {
  background-image: url("../../assets/images/yys/newinfo/p6.png");
}
#newinfo .main .infoList ul li i {
  position: absolute;
  background: #a57c47;
}
#newinfo .main .infoList ul li .i1,
#newinfo .main .infoList ul li .i3 {
  width: 0;
  height: 2px;
}
#newinfo .main .infoList ul li .i2,
#newinfo .main .infoList ul li .i4 {
  width: 2px;
  height: 0;
}

#newinfo .main .infoList ul li .i1 {
  top: 9px;
  left: 9px;
}
#newinfo .main .infoList ul li .i2 {
  top: 9px;
  right: 9px;
}
#newinfo .main .infoList ul li .i3 {
  bottom: 24px;
  right: 9px;
}
#newinfo .main .infoList ul li .i4 {
  bottom: 24px;
  left: 9px;
}
#newinfo .main .infoList ul li:hover .i1 {
  animation: i1 0.2s 0s linear 1;
}
#newinfo .main .infoList ul li:hover .i2 {
  animation: i2 0.09s 0.2s linear 1;
}
#newinfo .main .infoList ul li:hover .i3 {
  animation: i1 0.2s 0.29s linear 1;
}
#newinfo .main .infoList ul li:hover .i4 {
  animation: i2 0.09s 0.49s linear 1;
}
#newinfo .main .infoList ul li:hover i {
  animation-fill-mode: forwards !important;
} /*停在最后一帧*/

#newinfo .popwindow {
  display: none;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
#newinfo .popwindow .content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 1180px;
  height: 735px;
  margin: auto;
}
#newinfo .popwindow .content ul li {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: -50px 0 0 -60px;
}
#newinfo .popwindow .close {
  top: 69px;
  right: 60px;
}
#newinfo .popwindow .close:hover {
  transform: rotate(180deg);
}

#newinfo .content .txt {
  overflow: hidden;
  position: relative;
  width: 440px;
  height: 315px;
  margin: 210px 0 0 550px;
  font-size: 16px;
}
#newinfo .content .txt .mainTxt {
  position: absolute;
  top: 0;
  left: 0;
  width: 410px;
  line-height: 35px;
}
#newinfo .content .txt .boldRed {
  font-weight: bold;
  color: #e5402a;
}
#newinfo .content .txt .boldBlack {
  font-weight: bold;
  color: #000;
}
#newinfo .content .txt .mBottom {
  margin-bottom: 35px;
}
#newinfo .content .txt .normal {
  color: 333;
}
#newinfo .content .txt .scroll {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 8px;
  background-color: #e2e2e2;
}
#newinfo .content .txt:hover .scroll {
  display: block;
}
#newinfo .content .txt .scroll .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #000;
}
#newinfo .popwindow .btn {
  position: absolute;
  top: 50%;
  width: 46px;
  height: 18px;
  margin-left: -9px;
  cursor: pointer;
}
#newinfo .left {
  left: 0;
  background-image: url("../../assets/images/yys/newinfo/toleft.png");
  animation: leftBtn 1s infinite;
}
#newinfo .right {
  right: 0;
  background-image: url("../../assets/images/yys/newinfo/toright.png");
  animation: rightBtn 1s infinite;
}

/* 轮播 */
#game {
  position: relative;
  top: 300px;
}
#game .main {
  position: relative;
  width: 1130px;
  height: 650px;
  margin: 100px auto 0;
}
#game .main .title {
  position: relative;
  width: 800px;
  height: 150px;
  background: url("../../assets/images/yys/game/game_title.png");
  margin: 0 auto;
}
#game .pic {
  position: relative;
  width: 936px;
  height: 439px;
  margin: auto;
  transform-style: preserve-3d;
}
#game .pic ul {
  width: 774px;
  height: 438px;
  perspective: 800px;
}
#game .pic ul li {
  position: absolute;
  top: 0;
  left: 80px;
  width: 774px;
  height: 438px;
  background: #000;
  transform: translate3D(0px, 0px, -233px) rotateY(0deg);
  transition: transform 0.5s;
}
#game .pic ul li img {
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}
#game .pic ul li.mid img {
  opacity: 1;
}
#game .pic ul li.left {
  transform: translate3D(-196px, 0px, -302px) rotateY(30deg);
  z-index: 2;
}
#game .pic ul li.mid {
  transform: translate3D(0, 0, 0px) rotateY(0deg);
  z-index: 3;
}
#game .pic ul li.right {
  transform: translate3D(196px, 0px, -302px) rotateY(-30deg);
  z-index: 1;
}
#game .btn p {
  position: absolute;
  top: 50%;
  margin-top: -41px;
  width: 42px;
  height: 82px;
  cursor: pointer;
}
#game .btn p.left {
  left: 0;
  background-image: url("../../assets/images/yys/game/left.png");
}
#game .btn p.right {
  right: 0;
  background-image: url("../../assets/images/yys/game/right.png");
}

/* 


	   动画
		↓
		↓
		↓
		↓
		↓
		↓
		↓
		↓

*/

/* 扫描二维码 */
@keyframes move {
  0% {
    top: 4px;
  }
  50% {
    top: 120px;
  }
  100% {
    top: 4px;
  }
}
/* 鼠标提示 */
@keyframes down {
  from {
    top: 60%;
    opacity: 1;
  }
  to {
    top: 80%;
    opacity: 0;
  }
}

/*i1 i3的动画*/
@keyframes i1 {
  from {
    width: 0;
  }
  to {
    width: 400px;
  }
}
/*i2 i4的动画*/
@keyframes i2 {
  from {
    height: 0;
  }
  to {
    height: 180px;
  }
}

/* newinfo弹床层动画 */
@keyframes leftBtn {
  0% {
    left: 0;
  }
  50% {
    left: -10px;
  }
  100% {
    left: 0;
  }
}
@keyframes rightBtn {
  0% {
    right: 0;
  }
  50% {
    right: -10px;
  }
  100% {
    right: 0;
  }
}
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
button,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}
body {
  background: #fff;
  color: #000;
  font-size: 14px;
  font-family: "Microsoft yahei", Verdana, Arial, Helvetica, sans-serif;
}
td,
th,
caption {
  font-size: 14px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 100%;
}
address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
  font-style: normal;
  font-weight: normal;
}
a {
  text-decoration: none;
}
img {
  border: none;
}
a img {
  display: block;
}
ol,
ul,
li {
  list-style: none;
}
li {
  vertical-align: top;
}
input,
textarea,
select,
button {
  font: 14px "Microsoft yahei", Verdana, Helvetica, Arial, sans-serif;
}
table {
  border-collapse: collapse;
}
.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom: 1;
}
</style>
<template>    
<div id="yys-home-container">
  <!-- 背景 -->
  <div id="bg">
    <!-- 背景1 -->
    <div class="bg bg1">
      <!-- <embed src="./object/yys_xsjj.swf" height="100%" width="100%"></embed> -->
      <!-- <object data="object/yys_xsjj.swf" type="application/x-shockwave-flash" id="flash_641895589" width="100%" height="1026"style="margin-top:54px">
        <param name="allowScriptAccess" value="always">
        <param name="wmode" value="transparent">
        <param name="movie" value="object/yys_xsjj.swf">
    </object>  -->
    </div>
    <!-- 背景2 -->
    <div class="bg bg2"></div>
    <!-- 背景3 -->
    <div class="bg bg3"></div>
  </div>
  <!-- 首屏 -->
  <div id="wrap">
    <!-- 滑入显示部分 -->
    <div class="wSwiper">
      <div id="logo" class="swp swp1">
        <a href="/yys/index">
          <img src="../../assets/images/yys/logo1.png" class="img1" alt="" width="35" height="115">
          <img src="../../assets/images/yys/logo2.png" class="img2" alt="" width="108" height="108">
        </a>
      </div>
      <div class="swp swp2">
        <a href="/yys/index"></a>
      </div>
      <div class="swp swp3"></div>
      <div class="swp swp4">
        <p>扫一扫，下载游戏</p>
        <div class="qrcode">
          <img class="line" src="../../assets/images/yys/line.png" width="148" height="10" alt="">
        </div>
        <div class="downloan">
          <a href="">
            <img src="../../assets/images/yys/downios.png" alt="">
          </a>
          <a href="">
            <img src="../../assets/images/yys/downand.png" class="android" alt="">
          </a>
        </div>
      </div>
    </div>
    <!-- 首屏视频按钮 -->
    <div class="videoBtn">
      <img src="../../assets/images/yys/videoBtnAR.png" alt="">
    </div>
    <!-- 视频弹窗 -->
    <div class="video">
      <div class="video-box" id="video">
        <object data="https://nie.res.netease.com/comm/js/nie/util/video/img/player.swf?v=2017032302" type="application/x-shockwave-flash"
          width="800" height="450">
          <param name="allowFullScreen" value="true">
          <param name="allowscriptaccess" value="always">
          <param name="bgcolor" value="#000000">
          <param name="flashvars" value="width=800&amp;height=450&amp;wmode=direct&amp;bgcolor=#000000&amp;host=yys.163.com&amp;movieUrl=https://nie.v.netease.com/nie/2017/0518/a7f3a0546e69013b5d039c988d7c458bqt.mp4&amp;HDmovieUrl=&amp;SHDmovieUrl=&amp;vtype=&amp;&amp;&amp;&amp;volume=0.8&amp;autoPlay=true&amp;&amp;loopTimes=0&amp;&amp;bufferTime=5&amp;videoIndex=0&amp;&amp;allowFullScreen=true&amp;fat=">
          <param name="movie" value="https://nie.res.netease.com/comm/js/nie/util/video/img/player.swf?v=2017032302">
        </object>
        <span class="close"></span>
      </div>
    </div>
    <!-- 鼠标提示 -->
    <div class="mouse"></div>
    <!-- 新版本情报 -->
    <div id="newinfo">
      <div class="main">
        <div class="title">
          <div class="infoList">
            <ul>
              <li class="l1">
                <i class="i1"></i>
                <i class="i2"></i>
                <i class="i3"></i>
                <i class="i4"></i>
              </li>
              <li class="l2">
                <i class="i1"></i>
                <i class="i2"></i>
                <i class="i3"></i>
                <i class="i4"></i>
              </li>
              <li class="l3">
                <i class="i1"></i>
                <i class="i2"></i>
                <i class="i3"></i>
                <i class="i4"></i>
              </li>
              <li class="l4">
                <i class="i1"></i>
                <i class="i2"></i>
                <i class="i3"></i>
                <i class="i4"></i>
              </li>
              <li class="l5">
                <i class="i1"></i>
                <i class="i2"></i>
                <i class="i3"></i>
                <i class="i4"></i>
              </li>
              <li class="l6">
                <i class="i1"></i>
                <i class="i2"></i>
                <i class="i3"></i>
                <i class="i4"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="popwindow">
        <div class="content">
          <ul>
            <li style="background: url('img/newinfo/ren1.png')">
              <div class="txt">
                <div class="mainTxt">
                  <p class="boldRed">现世集结！逢魔寻妖，跨服斗技。</p>
                  <p class="boldRed">逢魔之时开启</p>
                  <p class="boldBlack">玩法介绍</p>
                  <p class="normal">全新跨区玩法【逢魔之时】即将到来！15级及以上的阴阳师大人，可以在每天黄昏阴阳交界之时,前往【町中】-【逢魔之时】使用灵视观察周围环境,并发现藏身于自己身边的妖怪。在现世探索中各位阴阳师大人，可能会发现密信、宝箱，还有可能发现附着在他人身上的式神！</p>
                  <p class="normal">此外，还有概率发现稀有的跨区集结BOSS【土蜘蛛】！全新BOSS将会出现在LBS地图上，范围内的附近玩家可以直接参与（跨区），也可以邀请其他不在附近的好友、寮友共同参与。 </p>
                  <p class="normal">集结·BOSS战斗中采用全新的场景模式，阴阳师大人可以看到当前的战况，以及并肩作战的其他阴阳师们的情况。奖励也很丰厚哦！</p>
                  <p class="boldBlack">活动时间</p>
                  <p class="normal mBottom">5月20日更新维护后每日17:00-20:00 </p>
                  <p class="boldRed">跨服好友全服开启 </p>
                  <p class="boldBlack">玩法介绍</p>
                  <p class="normal">跨区好友全面来袭，架起友谊之桥！</p>
                  <p class="normal">全服开放跨区好友功能，跨区好友也可以聊天和切磋了。 </p>
                  <p class="boldBlack">活动时间</p>
                  <p class="normal mBottom">5月20日更新维护后 </p>
                  <p class="boldRed">集结之境修习模式全服开启</p>
                  <p class="boldBlack">玩法介绍</p>
                  <p class="normal">全新的跨区玩法——修习模式在全部服务器开放，服务器斗技达到2段以上可以参与跨区竞技，该模式下使用全新的战前选人方式，以及全新的积分系统，阴阳师大人可以充分展示自己的实力，获得世界排名。</p>
                  <p class="boldBlack">活动时间</p>
                  <p class="normal mBottom">5月20日更新维护后，每日11：00-12：00，20：00-21：00</p>
                  <p class="boldRed">全新地图呈现唯美平安京</p>
                  <p class="boldBlack">玩法介绍</p>
                  <p class="normal">新增LBS地图3D化，将地图视角拉近后，可以看到平安风格的新地图效果。</p>
                  <p class="normal">本次LBS地图更新，采用与实际地图对应的方式，在现有地图的基础上，全面还原一个真实的平安世界，各位阴阳师大人快看看自己熟悉的建筑在平安世界变成了什么样子吧~</p>
                  <p class="boldBlack">活动时间</p>
                  <p class="normal">5月20日更新维护后</p>
                  <p class="normal">温馨提示，需要将客户端升至1.0.20以上，并将地图镜头拉近，即可观赏到新平安风格地图。</p>
                </div>

                <div class="scroll">
                  <div class="bar"></div>
                </div>
              </div>
            </li>
            <li style="background: url('img/newinfo/ren2.png')">
              <div class="txt">
                <div class="mainTxt">
                  <p class="boldRed">亲友回归福利，全平台新区再集结。</p>
                  <p class="boldRed">重聚京都——呼朋唤友，回流福利</p>
                  <p class="normal">非活跃玩家（5月12日0:00后未登录过游戏，且5月12日0:00前等级≥15级）活动期间登录游戏，即可获得丰厚的回流礼包。</p>
                  <p class="normal">非活跃玩家活动期间登录游戏，填写活跃好友（等级≥15级）的游戏ID，即可形成绑定关系。</p>
                  <p class="normal">如果没有符合条件的活跃好友，也可以选择与其他活跃玩家形成好友关系后进行绑定。</p>
                  <p class="normal">形成绑定后，与绑定的玩家组队完成指定任务，双方还可以获得丰厚的每日奖励（金币、勾玉、御魂加成、美食结界卡等）。</p>
                  <p class="normal">具体规则详见庭院左侧灯笼架「重聚京都」。</p>
                  <p class="boldBlack">活动时间</p>
                  <p class="normal mBottom">5月20日更新维护后-5月26日</p>
                  <p class="boldRed">全平台新区再集结</p>
                  <p class="boldBlack">活动内容</p>
                  <p class="normal">全平台新区「深情厚谊」开启，iOS、网易安卓、渠道安卓用户皆可进入，更有新区集结奖励可以领取。</p>
                  <p class="boldBlack">开服时间</p>
                  <p class="normal">5月20日10:00</p>
                </div>
                <div class="scroll">
                  <div class="bar"></div>
                </div>
              </div>
            </li>
            <li style="background: url('img/newinfo/ren3.png')">
              <div class="txt">
                <div class="mainTxt">
                  <p class="boldRed">亲友回归福利，全平台新区再集结。</p>
                  <p class="boldRed">重聚京都——呼朋唤友，回流福利</p>
                  <p class="normal">非活跃玩家（5月12日0:00后未登录过游戏，且5月12日0:00前等级≥15级）活动期间登录游戏，即可获得丰厚的回流礼包。</p>
                  <p class="normal">非活跃玩家活动期间登录游戏，填写活跃好友（等级≥15级）的游戏ID，即可形成绑定关系。</p>
                  <p class="normal">如果没有符合条件的活跃好友，也可以选择与其他活跃玩家形成好友关系后进行绑定。</p>
                  <p class="normal">形成绑定后，与绑定的玩家组队完成指定任务，双方还可以获得丰厚的每日奖励（金币、勾玉、御魂加成、美食结界卡等）。</p>
                  <p class="normal">具体规则详见庭院左侧灯笼架「重聚京都」。</p>
                  <p class="boldBlack">活动时间</p>
                  <p class="normal mBottom">5月20日更新维护后-5月26日</p>
                  <p class="boldRed">全平台新区再集结</p>
                  <p class="boldBlack">活动内容</p>
                  <p class="normal">全平台新区「深情厚谊」开启，iOS、网易安卓、渠道安卓用户皆可进入，更有新区集结奖励可以领取。</p>
                  <p class="boldBlack">开服时间</p>
                  <p class="normal">5月20日10:00</p>
                </div>
                <div class="scroll">
                  <div class="bar"></div>
                </div>
              </div>
            </li>
            <li style="background: url('img/newinfo/ren4.png')">
              <div class="txt">
                <div class="mainTxt">
                  <p class="boldRed">亲友回归福利，全平台新区再集结。</p>
                  <p class="boldRed">重聚京都——呼朋唤友，回流福利</p>
                  <p class="normal">非活跃玩家（5月12日0:00后未登录过游戏，且5月12日0:00前等级≥15级）活动期间登录游戏，即可获得丰厚的回流礼包。</p>
                  <p class="normal">非活跃玩家活动期间登录游戏，填写活跃好友（等级≥15级）的游戏ID，即可形成绑定关系。</p>
                  <p class="normal">如果没有符合条件的活跃好友，也可以选择与其他活跃玩家形成好友关系后进行绑定。</p>
                  <p class="normal">形成绑定后，与绑定的玩家组队完成指定任务，双方还可以获得丰厚的每日奖励（金币、勾玉、御魂加成、美食结界卡等）。</p>
                  <p class="normal">具体规则详见庭院左侧灯笼架「重聚京都」。</p>
                  <p class="boldBlack">活动时间</p>
                  <p class="normal mBottom">5月20日更新维护后-5月26日</p>
                  <p class="boldRed">全平台新区再集结</p>
                  <p class="boldBlack">活动内容</p>
                  <p class="normal">全平台新区「深情厚谊」开启，iOS、网易安卓、渠道安卓用户皆可进入，更有新区集结奖励可以领取。</p>
                  <p class="boldBlack">开服时间</p>
                  <p class="normal">5月20日10:00</p>
                </div>
                <div class="scroll">
                  <div class="bar"></div>
                </div>
              </div>
            </li>
            <li style="background: url('img/newinfo/ren5.png')">
              <div class="txt">
                <div class="mainTxt">
                  <p class="boldRed">亲友回归福利，全平台新区再集结。</p>
                  <p class="boldRed">重聚京都——呼朋唤友，回流福利</p>
                  <p class="normal">非活跃玩家（5月12日0:00后未登录过游戏，且5月12日0:00前等级≥15级）活动期间登录游戏，即可获得丰厚的回流礼包。</p>
                  <p class="normal">非活跃玩家活动期间登录游戏，填写活跃好友（等级≥15级）的游戏ID，即可形成绑定关系。</p>
                  <p class="normal">如果没有符合条件的活跃好友，也可以选择与其他活跃玩家形成好友关系后进行绑定。</p>
                  <p class="normal">形成绑定后，与绑定的玩家组队完成指定任务，双方还可以获得丰厚的每日奖励（金币、勾玉、御魂加成、美食结界卡等）。</p>
                  <p class="normal">具体规则详见庭院左侧灯笼架「重聚京都」。</p>
                  <p class="boldBlack">活动时间</p>
                  <p class="normal mBottom">5月20日更新维护后-5月26日</p>
                  <p class="boldRed">全平台新区再集结</p>
                  <p class="boldBlack">活动内容</p>
                  <p class="normal">全平台新区「深情厚谊」开启，iOS、网易安卓、渠道安卓用户皆可进入，更有新区集结奖励可以领取。</p>
                  <p class="boldBlack">开服时间</p>
                  <p class="normal">5月20日10:00</p>
                </div>
                <div class="scroll">
                  <div class="bar"></div>
                </div>
              </div>
            </li>
            <li style="background: url('img/newinfo/ren6.png')">
              <div class="txt">
                <div class="mainTxt">
                  <p class="boldRed">亲友回归福利，全平台新区再集结。</p>
                  <p class="boldRed">重聚京都——呼朋唤友，回流福利</p>
                  <p class="normal">非活跃玩家（5月12日0:00后未登录过游戏，且5月12日0:00前等级≥15级）活动期间登录游戏，即可获得丰厚的回流礼包。</p>
                  <p class="normal">非活跃玩家活动期间登录游戏，填写活跃好友（等级≥15级）的游戏ID，即可形成绑定关系。</p>
                  <p class="normal">如果没有符合条件的活跃好友，也可以选择与其他活跃玩家形成好友关系后进行绑定。</p>
                  <p class="normal">形成绑定后，与绑定的玩家组队完成指定任务，双方还可以获得丰厚的每日奖励（金币、勾玉、御魂加成、美食结界卡等）。</p>
                  <p class="normal">具体规则详见庭院左侧灯笼架「重聚京都」。</p>
                  <p class="boldBlack">活动时间</p>
                  <p class="normal mBottom">5月20日更新维护后-5月26日</p>
                  <p class="boldRed">全平台新区再集结</p>
                  <p class="boldBlack">活动内容</p>
                  <p class="normal">全平台新区「深情厚谊」开启，iOS、网易安卓、渠道安卓用户皆可进入，更有新区集结奖励可以领取。</p>
                  <p class="boldBlack">开服时间</p>
                  <p class="normal">5月20日10:00</p>
                </div>
                <div class="scroll">
                  <div class="bar"></div>
                </div>
              </div>
            </li>
          </ul>

          <div class="close"></div>
          <div class="left btn"></div>
          <div class="right btn"></div>
        </div>
      </div>
    </div>
    <!-- wrap结束 -->
  </div>
  <!--  游戏特色 -->
  <div id="game">
    <div class="main">
      <p class="title"></p>
      <div class="banner">
        <div class="pic">
          <ul>
            <li class="left">
              <img src="../../assets/images/yys/game/bannerimg1.jpg" alt="">
            </li>
            <li class="mid">
              <img src="../../assets/images/yys/game/bannerimg2.jpg" alt="">
            </li>
            <li class="right">
              <img src="../../assets/images/yys/game/bannerimg3.jpg" alt="">
            </li>
            <li>
              <img src="../../assets/images/yys/game/bannerimg4.jpg" alt="">
            </li>
            <li>
              <img src="../../assets/images/yys/game/bannerimg5.jpg" alt="">
            </li>
          </ul>
        </div>
        
        <div class="btn">
          <p class="left"></p>
          <p class="right"></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import $ from "jquery";
import "jquery-mousewheel";

export default {
  mounted() {
    // 首屏滑入logo
    $(
      (function () {
        (function () {
          var $embed = $("#bg .bg1 embed"),
            $wrap = $("#wrap"),
            $swp = $wrap.find(".swp");

          setTimeout(function () {
            $embed.onload = function () {
              $(this).css("opacity", 1);
            };
          }, 1500);
          $swp.eq(0).show().animate(
            {
              opacity: 1,
              left: 0,
            },
            1000
          );

          $swp.eq(1).show().animate(
            {
              opacity: 1,
              right: 30,
            },
            1000
          );

          $swp.eq(2).show().animate(
            {
              opacity: 1,
              top: 100,
            },
            1000
          );

          $swp.eq(3).show().animate(
            {
              opacity: 1,
              top: 610,
            },
            800
          );
        })();

        //视频弹窗
        (function () {
          var $wrap = $("#wrap"),
            $btn = $wrap.find(".videoBtn"),
            $video = $wrap.find(".video"),
            $close = $wrap.find(".close");

          $btn.click(function () {
            $video.show();
            $(document.body).addClass("Scroll");
          });
          $close.click(function () {
            $video.hide();
            $(document.body).removeClass("Scroll");
          });
        })();

        // 最新情报弹窗
        (function () {
          var $newinfo = $("#newinfo"),
            $title = $newinfo.find(".title"),
            $infoListLi = $newinfo.find(".infoList li"),
            $pop = $newinfo.find(".popwindow"),
            $popLi = $pop.find(".content ul li"),
            $popClose = $pop.find(".close"),
            $txt = $pop.find(".content .txt"),
            $btn = $pop.find(".content .btn"),
            txtH = $txt.height(),
            index = 0,
            length = $popLi.length;

          //自定义滚动条
          $txt.each(function () {
            var $mainTxt = $(this).find(".mainTxt"),
              $scroll = $(this).find(".scroll"),
              $bar = $(this).find(".bar"),
              mainH = $mainTxt.height(),
              barH = (txtH * txtH) / mainH,
              topMax = txtH - barH,
              topMin = 0;
            $bar.height(barH);

            //点击滑块拖动
            $bar.mousedown(function (e) {
              var sY = e.clientY,
                sTop = $(this).position().top,
                $This = $(this),
                $mainTxt = $(this).parent().siblings();

              $(document)
                .mousemove(function (e) {
                  var nY = e.clientY,
                    top = sTop + nY - sY;
                  top = Math.min(top, topMax);
                  top = Math.max(top, topMin);
                  $This.css("top", top);
                  $mainTxt.css("top", (-top * mainH) / txtH);
                })
                .mouseup(function () {
                  $(this).off("mousemove").off("mouseup");
                });
              return false;
            });

            //鼠标滚轮事件
            $(this).mousewheel(function (e, d) {
              var top = $bar.position().top;
              if (d < 0) {
                //拉
                top += 10;
              } else {
                //推
                top -= 10;
              }
              top = Math.min(top, topMax);
              top = Math.max(top, topMin);
              $bar.css("top", top);
              $mainTxt.css("top", (-top * mainH) / txtH);
              return false;
            });

            //点击滚动条动画
            $scroll.click(function (e) {
              if (e.target === this) {
                var y =
                    e.clientY -
                    ($(this).offset().top - $(document).scrollTop()),
                  top = $bar.position().top;
                top = y < top ? top - 100 : top + 100;
                top = Math.min(top, topMax);
                top = Math.max(top, topMin);
                $bar.stop().animate(
                  {
                    top: top,
                  },
                  500
                );
                $mainTxt.stop().animate(
                  {
                    top: (-top * mainH) / txtH,
                  },
                  500
                );
              }
            });
          });

          $pop.hide().css("opacity", 1);
          $popLi.hide();

          //点击弹出全屏窗
          $infoListLi.click(function () {
            index = $(this).index();
            $(document.body).addClass("noScroll");
            $pop.show();
            $popLi.eq(index).show().siblings().hide();
          });

          //关闭弹窗
          $popClose.click(function () {
            $(document.body).removeClass("noScroll");
            $pop.hide();
          });

          //弹窗层左右按钮
          $btn.click(function () {
            if ($(this).index(".content .btn")) {
              index++;
              index %= length;
            } else {
              index--;
              if (index < 0) index = length - 1;
            }
            $popLi.eq(index).show().siblings().hide();
          });
        })();

        //游戏特色轮播
        (function () {
          var $game = $("#game"),
            $btn = $game.find(".btn"),
            $picLi = $game.find(".pic ul li"),
            index = 0,
            length = $picLi.length;

          $picLi.click(function () {
            if ($(this).index !== index) {
              index = $(this).index();
              change();
            }
          });

          $btn.click(function () {
            if ($(this).index()) {
              index++;
              index %= length;
            } else {
              index--;
              if (index < 0) index = length - 1;
            }
            change();
          });
          function change() {
            var lindex = index - 1,
              rindex = index + 1;
            if (lindex < 0) lindex = length - 1;
            if (rindex >= length) rindex = 0;
            $picLi.removeClass("left mid right");
            $picLi.eq(lindex).addClass("left");
            $picLi.eq(index).addClass("mid");
            $picLi.eq(rindex).addClass("right");
          }
        })();
      })()
    );
  },
};
</script>
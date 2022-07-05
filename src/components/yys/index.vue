<style lang="less" scoped>
body {
  min-width: 1400px;
}
#main {
  position: relative;
  width: 100%;
  height: 4500px;
  background-color: #fff;
}
#header {
  position: relative;
  width: 100%;
  height: 628px;
  background: url("../../assets/images/yys/index/main_banner.jpg") top center;
}
#nav {
  position: absolute;
  top: 0;
  right: 0;
  width: 83.33%;
  height: 100px;
  transition: 0.3s;
  // min-width: 1400px;
  z-index: 999;
  opacity: 0.9;
}
#nav.hover {
  background: rgba(255, 255, 255, 0.8);
}
#nav.scroll {
  position: fixed;
  background: rgba(255, 255, 255, 0.8);
}
#nav ul.mainList {
  float: right;
  margin-right: 40px;
  margin-top: 40px;
  // width: 700px;
  height: 25px;
}
#nav ul.mainList > li {
  float: left;
}
#nav ul.mainList li.mNav {
  font-size: 16px;
  line-height: 25px;
}
#nav ul.mainList li.mNav > a {
  display: block;
  color: #000;
  transition: 0.3s;
  padding: 0 15px 35px;
}
#nav ul.mainList li.mNav > a:hover {
  color: #cc4336;
  transition: 0.3s;
}
#nav ul.mainList li.line {
  width: 15px;
  height: 25px;
  background: url("../../assets/images/yys/index/index.png") 16px 116px;
}
#nav .mNav .hide {
  display: none;
  position: absolute;
  left: 0;
  top: 100px;
  width: 100%;
  height: 200px;
  background-color: #e1ebeb;
}
#nav .mNav .arrow {
  display: none;
  width: 0;
  height: 0;
  margin: -20px 0 0 35px;
  border: 10px solid #e1ebeb;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
}
#nav .guanfang:hover .arrow {
  display: block;
}
#nav .hideList li {
  position: relative;
  top: 0;
  float: right;
  width: 215px;
  height: 150px;
  margin-top: 25px;
  margin-right: 10px;
  transition: 0.5s;
  border-right: 1px solid #ccc;
}
#nav .hideList li:first-child {
  border: 0;
}
#nav .hideList li i {
  display: block;
  margin: 22.5px auto 0;
  background-image: url("../../assets/images/yys/index/index2.png");
}
#nav .hideList li p {
  margin-top: 5px;
  line-height: 35px;
  text-align: center;
  font-size: 16px;
}
#nav .hideList li i.i1 {
  width: 80px;
  height: 70px;
  background-position: -1410px -600px;
}
#nav .hideList li i.i2 {
  width: 81px;
  height: 68px;
  background-position: -1410px -674px;
}
#nav .hideList li i.i3 {
  width: 88px;
  height: 88px;
  background: url("../../assets/images/yys/index/wb.png") 100% 100% / cover;
}
#nav .hideList li i.i4 {
  width: 88px;
  height: 88px;
  background: url("../../assets/images/yys/index/wx.jpg") 100% 100% / cover;
}
#nav .hideList li:hover {
  top: -20px;
}
#nav .logo {
  display: none;
  float: left;
  padding: 13px 0 0 15px;
}
#nav .logo .qrcode p {
  float: left;
  width: 16px;
  height: 64px;
  padding-right: 10px;
}
#nav .logo .qrcode {
  float: left;
  padding-right: 20px;
  border-right: 1px solid #666;
}
#nav .logo .mLogo {
  float: left;
  width: 220px;
  padding-left: 20px;
}
#nav .logo .mLogo img {
  float: left;
  margin-right: 10px;
}
#nav .logo .mLogo h3 {
  color: #333;
  font-size: 32px;
}
#nav .logo .mLogo p {
  font-size: 16px;
}
#header .logo2 {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 70px;
  height: 199px;
  transition: 0.5s;
}
#role {
  position: relative;
  width: 1105px;
  height: 584px;
  margin: 0 auto;
  user-select: none;
}
#role .bottomImg {
  position: absolute;
  bottom: 1px;
  left: 0;
  z-index: 5;
}
#role .role {
  position: absolute;
  bottom: 2px;
  opacity: 1;
  transition: 1s;
}
#role .role1 {
  width: 437px;
  height: 537px;
  background: url("../../assets/images/yys/index/role/role1.png");
  left: 20px;
}
#role .role2 {
  width: 423px;
  height: 544px;
  background: url("../../assets/images/yys/index/role/role2.png");
  left: 319px;
}
#role .role1.hide,
#role .role2.hide {
  left: 150px;
  opacity: 0;
}
#role .role3 {
  width: 491px;
  height: 583px;
  background: url("../../assets/images/yys/index/role/role3.png");
  left: 0;
  z-index: 1;
}
#role .role4 {
  display: block;
  width: 503px;
  height: 501px;
  background: url("../../assets/images/yys/index/role/role4.png");
  left: 234px;
}
#role .role3.hide,
#role .role4.hide {
  left: 117px;
  opacity: 0;
}
#role .btn {
  position: absolute;
  top: 290px;
  left: 800px;
  width: 41px;
  height: 66px;
  background: url("../../assets/images/yys/index/index.png") 158px -439px;
  cursor: pointer;
  transform: scale(1);
  transition: 0.5s;
}
#role .btn:hover {
  transform: scale(1.15);
}
#server {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 90px;
  height: 105px;
  z-index: 5;
  cursor: pointer;
}
#server:hover {
  opacity: 0.8;
}
#server img {
  width: 100%;
  height: 100%;
}
#slide {
  z-index: 6;
  position: absolute;
  top: 420px;
  left: 50%;
  margin-left: calc(504px / 2);
  width: 504px;
  height: 1100px;
  background-image: url("../../assets/images/yys/index/side_bg.png");
}
#slide .title {
  position: absolute;
  top: -20px;
  left: 30px;
  width: 312px;
  height: 170px;
  background: url(../../assets/images/yys/index/index.png) -587px -853px;
}
#slide .arrow {
  position: absolute;
  top: 140px;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-left-color: #fccc00;
}
#slide .download {
  overflow: hidden;
  position: absolute;
  top: 43px;
  right: 504px;
  padding: 5px;
  width: 23px;
  height: 106px;
  border-radius: 10px 0 0 10px;
  background-color: #fccc00;
  border: 5px solid #fdde00;
  border-right: 0;
  transition: width 0.5s;
}
#slide .download.stretch {
  width: 533px;
}
#slide .download .shrink {
  display: none;
  width: 23px;
  height: 106px;
  background-image: url(../../assets/images/yys/index/index.png);
  background-position: 231px -613px;
  cursor: pointer;
}
#slide .download .downloadMain {
  position: relative;
  display: block;
  width: 380px;
  height: 100%;
}
#slide .downloadMain .close {
  float: left;
  width: 22px;
  height: 22px;
  background: url("../../assets/images/yys/index/index.png") 106px -621px;
  cursor: pointer;
}
#slide .downloadMain .downTxt {
  float: left;
  width: 45px;
  height: 100px;
  margin-left: 10px;
  background-image: url("../../assets/images/yys/index/index2.png");
  background-position: -1410px -104px;
}
#slide .downloadMain .qrcode {
  position: relative;
  float: left;
  width: 91px;
  height: 91px;
  padding: 10px;
  margin-top: -2.5px;
  margin-left: 10px;
  background: url("../../assets/images/yys/qrcode.png") no-repeat;
  background-size: 91px 91px;
  background-color: #fff;
  background-position: 10px 10px;
  border-radius: 10px;
}
#slide .downloadMain .qrcode .line {
  position: absolute;
  left: 2px;
  width: 107px;
  height: 9px;
  background-image: url("../../assets/images/yys/index/line.png");
  animation: scan 2s linear infinite;
}
@keyframes scan {
  from {
    top: 0;
  }
  to {
    top: 91px;
  }
}
#slide .downloadMain .mDown {
  float: left;
  margin-left: 5px;
  width: 175px;
  height: 120px;
}
#slide .downloadMain .mDown span {
  display: block;
  width: 170px;
  height: 50px;
  background-image: url("../../assets/images/yys/index/index2.png");
  border-radius: 10px;
  cursor: pointer;
}
#slide .downloadMain .mDown .iosDown {
  background-position: -862px -753px;
}
#slide .downloadMain .mDown .andDown {
  margin-top: 5px;
  background-position: -769px -552px;
}
#slide .downloadMain .mDown .iosDown:hover::after,
#slide .downloadMain .mDown .andDown:hover::after {
  content: "";
  display: block;
  width: 170px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
}
#slide .downloadMain .picDown {
  position: absolute;
  right: -133px;
  width: 131px;
  height: 107px;
  background-image: url("../../assets/images/yys/index/index2.png");
  background-position: -750px 246px;
  border-radius: 10px;
}
#slide .downloadMain .picDown:hover::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  cursor: pointer;
}
#slide .linkList {
  position: relative;
  width: 345px;
  height: 850px;
  margin-top: 135px;
  cursor: pointer;
}
#slide .linkList > div {
  transition: transform 0.5s;
  border-radius: 10px;
  background-image: url("../../assets/images/yys/index/index2.png");
}
#slide .linkList > div:hover {
  transform: translateX(15px);
}
#slide .linkList .list1 {
  position: relative;
  width: 315px;
  height: 89px;
  margin-left: 30px;
  background-position: -430px 235px;
}
#slide .linkList .list1 p {
  position: absolute;
  left: 25px;
  bottom: 5px;
}
#slide .linkList .list2 {
  z-index: 99;
  position: absolute;
  width: 317px;
  height: 93px;
  margin-top: 5px;
  background-position: -915px 370px;
}
#slide .linkList .list3 {
  z-index: 3;
  position: absolute;
  top: 182px;
  width: 315px;
  height: 87px;
  margin-top: 5px;
  margin-left: 30px;
  background-position: -1505px -105px;
}
#slide .linkList .list4 {
  position: relative;
  top: 180px;
  width: 315px;
  height: 100px;
  background-position: 0 240px;
}
#slide .linkList .list4 p {
  position: absolute;
  right: 5px;
  bottom: 15px;
}
#slide .linkList .list5 {
  display: block;
  position: relative;
  top: 187px;
  width: 314px;
  height: 133px;
  margin-left: 30px;
  background-position: -580px 380px;
}
#slide .linkList .list5 > p {
  position: absolute;
  top: 50px;
  left: 8px;
  background: transparent;
}
#slide .linkList .txt5 {
  z-index: 99;
  display: none;
  position: absolute;
  top: 376px;
  left: 30px;
  width: 316px;
  height: 133px;
  background-image: url("../../assets/images/yys/index/index2.png");
  background-position: -771px -17px;
}
#slide .linkList .txt5 p:first-child {
  position: absolute;
  top: 42px;
}
#slide .linkList .txt5 .mTop {
  margin-top: 90px;
}
#slide .linkList .txt5 p {
  display: none;
  margin: 8px 8px;
}
#slide .linkList .txt5 p#notHide {
  display: block;
}
#slide .linkList .list6 {
  z-index: 2;
  position: absolute;
  top: 460px;
  width: 320px;
  height: 90px;
  background-position: 315px 0;
}
#slide .linkList .list7 {
  position: absolute;
  top: 550px;
  width: 300px;
  height: 80px;
  margin-left: 30px;
  margin-top: 10px;
  background-position: -624px 125px;
}
#slide .linkList .list7 p {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
#slide .linkList .list8 {
  position: absolute;
  top: 635px;
  width: 300px;
  height: 95px;
  margin-left: 30px;
  margin-top: 10px;
  background-position: -935px 130px;
}
#slide .linkList .list8 p {
  position: absolute;
  bottom: 15px;
  right: 10px;
}
#slide .linkList .list9 {
  position: absolute;
  top: 735px;
  width: 300px;
  height: 85px;
  margin-left: 30px;
  margin-top: 10px;
  background-position: -13px 125px;
}
#slide .linkList .list9 p {
  position: absolute;
  bottom: 10px;
  right: 5px;
}
#content {
  width: 1400px;
  height: auto;
  margin: 0 auto;
}
#news {
  width: 940px;
  height: 270px;
}
#news .banner {
  position: relative;
  float: left;
  width: 360px;
  height: 270px;
}
#news .banner .pics {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
}
#news .banner ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 500%;
  height: 100%;
}
#news .banner ul li {
  float: left;
  width: 20%;
  height: 100%;
}
#news .banner .tab {
  position: absolute;
  bottom: 10px;
  left: 50%;
  width: 105px;
  height: 14px;
  margin-left: -50px;
}
#news .banner .tab ul li {
  float: left;
  width: 8px;
  height: 8px;
  border: 3px solid #e37b63;
  border-radius: 100%;
  margin: 0 3px;
  cursor: pointer;
}
#news .banner .tab ul li.on {
  background: #e37b63;
}
#news .banner .tab {
  position: absolute;
  bottom: 10px;
  left: 50%;
  width: 105px;
  height: 14px;
  margin-left: -50px;
}
#news .banner .tab ul li {
  position: relative;
  float: left;
  width: 8px;
  height: 8px;
  border: 3px solid #e37b63;
  border-radius: 100%;
  margin: 0 3px;
  cursor: pointer;
}
#news .banner .tab ul li.on {
  background: #e37b63;
}
#news .inform {
  float: left;
  width: 500px;
  height: 270px;
  margin-left: 35px;
}
#news .inform .tab {
  width: 100%;
  height: 45px;
  border-bottom: 2px solid #000;
}
#news .inform .tab ul {
  width: 100%;
  height: 100%;
}
#news .inform .tab li {
  float: left;
  position: relative;
  width: 92px;
  height: 100%;
}
#news .inform .tab li.l1 {
  width: 80px;
}
#news .inform .tab li span {
  position: absolute;
  right: 16px;
  bottom: 13px;
  z-index: 1;
  display: block;
  width: 45px;
  height: 31px;
  background-image: url("../../assets/images/yys/index/index.png");
}
#news .inform .tab li.l1 span {
  background-position: 159px 405px;
}
#news .inform .tab li.l2 span {
  background-position: 159px 527px;
}
#news .inform .tab li.l3 span {
  background-position: 159px 464px;
  height: 30px;
}
#news .inform .tab li.l4 span {
  background-position: 159px 434px;
  height: 30px;
}
#news .inform .tab li.l5 span {
  background-position: 159px 495px;
}
#news .inform .tab li i {
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 0;
  width: 76px;
  height: 32px;
  background: #68d7fc;
  border-radius: 16px;
  transition: 0.5s cubic-bezier(1, 0, 0.67, 0.35);
}
#news .inform .tab li.on i {
  bottom: 8px;
  opacity: 1;
}
#news .inform .tab li b {
  position: absolute;
  top: 11px;
  left: 2px;
  width: 16px;
  height: 29px;
  background: url(../../assets/images/yys/index/index.png) 100px -508px;
}
#news .inform .wrapUl .new p {
  line-height: 35px;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#character {
  width: 100%;
  height: 601px;
  background: url("../../assets/images/yys/index/content/strategy_bg.jpg") center top;
  margin-top: 37px;
}
#character .sMain {
  position: relative;
  width: 1400px;
  height: 601px;
  margin: 0 auto;
}
#character .sMain .title {
  width: 460px;
  height: 95px;
  margin-left: 100px;
}
#character .title .bg1 {
  float: left;
  display: block;
  width: 130px;
  height: 69px;
  background: url("../../assets/images/yys/index/index.png") -411px -587px;
  margin-top: 13px;
}
#character .title .dotted {
  float: left;
  display: block;
  width: 44px;
  height: 4px;
  background: url("../../assets/images/yys/index/index.png") -1422px -153px;
  margin: 45.5px 10px 0;
}
#character .title .tab {
  position: relative;
  float: left;
  width: 96px;
  height: 90px;
  margin-top: 2.5px;
  cursor: pointer;
}
#character .title .tab i {
  position: absolute;
  top: 15px;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../../assets/images/yys/index/index.png") 619px 258px;
  opacity: 0;
  transition: 0.5s;
}
#character .title .tab.active i,
#character .title .tab:hover i {
  top: 0;
  opacity: 1;
}
#character .title .tab span {
  display: block;
  position: relative;
  background-image: url("../../assets/images/yys/index/index.png");
}
#character .title .tab1 {
  width: 70px;
  height: 33px;
  background-position: 158px -865px;
  margin: 28.5px auto 0;
}
#character .title .tab2 {
  width: 65px;
  height: 36px;
  background-position: 80px 117px;
  margin: 24px auto 0;
}
#character .showMain {
  position: relative;
  width: 840px;
  height: 350px;
  margin-left: 100px;
}
#character .showMain ul.mList {
  position: relative;
  width: 100%;
  height: 100%;
}
#character .showMain ul.mList li.mLi {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
}
#character li.shishenList .shishenTab {
  margin-top: 20px;
  width: 810px;
  height: 29px;
  padding: 13px 0;
  border-bottom: 1px dotted #333;
}
#character li.shishenList .shishenTab li {
  float: left;
}
#character .shishenTab li.clickBtn {
  margin: 0 15px;
  line-height: 29px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
#character .shishenTab li.clickBtn.on,
#character .shishenTab li.clickBtn:hover {
  color: #cea441;
}
#character .showMain .mList .shishenList .shishenShow {
  overflow: hidden;
  position: absolute;
  left: 2px;
  bottom: 18px;
  width: 800px;
  height: 250px;
}
#character .showMain .shishenList .shishenShow ul {
  position: absolute;
  width: 6150px;
  height: 100%;
  margin-top: 20px;
}
#character .showMain .shishenList .shishenShow ul li {
  float: left;
  width: 120px;
}
#character .showMain .shishenList .lBtn,
#character .showMain .shishenList .rBtn {
  z-index: 10;
  position: absolute;
  top: 60%;
  width: 42px;
  height: 33px;
  background-image: url("../../assets/images/yys/index/index2.png");
  cursor: pointer;
}
#character .showMain .shishenList .lBtn {
  left: -23px;
  margin-top: -16.5px;
  background-position: 79px 247px;
}
#character .showMain .shishenList .rBtn {
  right: 0;
  margin-top: -16.5px;
  background-position: 79px 293px;
}
#character .showMain .shishenList .lBtn:hover {
  background-position: 79px 215px;
}
#character .showMain .shishenList .rBtn:hover {
  background-position: 79px 133px;
}
#character .showMain .shishenList .shishenShow ul img {
  transition: 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}
#character .showMain .shishenList .shishenShow ul img:hover {
  transform: translateY(-18px);
  cursor: pointer;
}
#character .showMain div.mRole {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#character .showMain div.mRole .zhujue-tab {
  float: left;
  width: 150px;
  height: 250px;
  margin-top: 45px;
}
#character .showMain .mRole .zhujue-tab li {
  position: relative;
  width: 100%;
  height: 35px;
  line-height: 35px;
  margin-top: 20px;
  text-align: center;
  border: 2px solid #fff;
  font-size: 18px;
  cursor: pointer;
}
#character .showMain .mRole .zhujue-tab li.on {
  border-color: #000;
  background-color: #fff;
}
#character .showMain .mRole .zhujue-tab li:hover {
  border-color: #000;
  background-color: #fff;
}
#character .showMain .mRole .zhujue-tab li:hover em {
  border-left-color: #000;
}
#character .showMain .mRole .zhujue-tab em {
  position: absolute;
  top: 14.5px;
  right: -20px;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-right-width: 10px;
}
#character .showMain .mRole .zhujue-tab em.show {
  border-left-color: #000;
}
#character .showMain div.mRole .wrap {
  position: absolute;
  float: right;
  right: 20px;
  width: 625px;
  height: 345px;
  opacity: 1;
}
#character .showMain div.mRole .sl,
#character .showMain div.mRole .yby,
#character .showMain div.mRole .bbbqn {
  display: none;
}
#character .showMain div.mRole .wrap .zhujue-info {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 95px;
  width: 250px;
  height: 150px;
}
#character .showMain div.mRole .wrap h3 {
  font-weight: bolder;
  font-size: 30px;
  border-bottom: 2px solid #000;
}
#character .showMain div.mRole .wrap p {
  margin-top: 5px;
  line-height: 22px;
  border-top: 1px solid #000;
}
#main #strategy {
  width: 1300px;
  height: 440px;
  margin: 0 auto;
  border: 1px solid #000;
}
#main #strategy .leftBanner {
  position: relative;
  float: left;
  width: 372px;
  height: 100%;
  border: 1px solid #f00;
}
#main #strategy .leftBanner .searchTitle {
  position: absolute;
  top: -60px;
  left: 0;
  width: 100%;
  height: 40px;
  border: 2px solid #000;
  border-right: 0;
}
#main #strategy .leftBanner .searchTitle input {
  width: 292px;
  height: 100%;
  line-height: 100%;
  padding-left: 15px;
  border: 0;
  outline: 0;
}
#main #strategy .leftBanner .searchTitle .btn {
  position: absolute;
  right: 0;
  top: -18px;
  width: 58px;
  height: 54px;
  border-top: 2px solid #000;
  background: url("../../assets/images/yys/index/index2.png") 79px -786px;
}
#main #strategy .leftBanner .searchTitle .btn:hover {
  background-position: 79px -866px;
  cursor: pointer;
}
#main #strategy .leftBanner .banner {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 228px;
  cursor: pointer;
}
#main #strategy .leftBanner .banner .pics {
  position: absolute;
  width: 200%;
  height: 228px;
}
#main #strategy .leftBanner .tabs {
  position: absolute;
  left: 50%;
  top: 260px;
  width: 50px;
  height: 16px;
  margin-left: -20px;
}
#main #strategy .leftBanner .tabs li {
  float: left;
  width: 8px;
  height: 8px;
  margin-right: 5px;
  border: 5px solid #000;
  border-radius: 50%;
  cursor: pointer;
}
#main #strategy .leftBanner .tabs li.on {
  background-color: #000;
}
#main #strategy .leftBanner .nav {
  position: absolute;
  bottom: 10px;
  width: 100%;
  height: 140px;
}
#main #strategy .leftBanner .nav li {
  box-sizing: border-box;
  float: left;
  width: 25%;
  height: 137px;
  border-left: 1px solid #000;
}
#main #strategy .leftBanner .nav li.temp {
  border-left: none;
}
#main #strategy .leftBanner .nav li span {
  display: block;
  width: 25px;
  height: 145px;
  margin: 0 auto;
  margin-top: -10px;
  background-image: url("../../assets/images/yys/index/index2.png");
  transition: 0.5s;
}
#main #strategy .leftBanner .nav li span:hover {
  transform: translateY(-15px);
}
#main #strategy .leftBanner .nav li span.xitong {
  background-position: 477px 790px;
}
#main #strategy .leftBanner .nav li span.mengxin {
  background-position: 502px 790px;
}
#main #strategy .leftBanner .nav li span.xuanshang {
  background-position: -1379px -387px;
}
#main #strategy .leftBanner .nav li span.datui {
  background-position: 525px 790px;
}
#main #strategy .rightTxt {
  position: relative;
  float: right;
  width: 850px;
  height: 100%;
}
#main #strategy .rightTxt .title {
  width: 100%;
  height: 110px;
  border-bottom: 1px solid #000;
}
#main #strategy .rightTxt .title * {
  float: left;
}
#main #strategy .rightTxt .title div {
  width: 134px;
  height: 85px;
  background: url("../../assets/images/yys/index/index2.png") 239px -290px;
  cursor: pointer;
}
#main #strategy .rightTxt .title i {
  display: block;
  width: 70px;
  height: 4px;
  margin-top: 54px;
  background: url("../../assets/images/yys/index/index.png") 239px -322px;
}
#main #strategy .rightTxt .title a {
  position: relative;
  top: 5px;
  width: 100px;
  height: 100px;
}
#main #strategy .rightTxt .title a.on {
  background: url("../../assets/images/yys/index/index2.png") 130px -192px;
}
#main #strategy .rightTxt .title span {
  position: absolute;
  top: 20px;
  left: 5px;
  width: 85px;
  height: 45px;
  background: url("../../assets/images/yys/index/index2.png");
}
#main #strategy .rightTxt .title .xinshou {
  height: 40px;
  background-position: 89px 407px;
}
#main #strategy .rightTxt .title .shishen {
  height: 38px;
  background-position: 89px 331px;
}
#main #strategy .rightTxt .title .douji {
  height: 38px;
  background-position: 89px 367px;
}
#main #strategy .rightTxt .title .wanfa {
  top: 25px;
  height: 30px;
  background-position: 415px -808px;
}
#main #strategy .rightTxt .txtShow {
  overflow: hidden;
  position: absolute;
  bottom: 10px;
  width: 100%;
  height: 300px;
}
#main #strategy .rightTxt .txtShow .uls {
  position: absolute;
  top: 0;
  left: 0;
  width: 400%;
  height: 100%;
}
#main #strategy .rightTxt ul {
  float: left;
  box-sizing: border-box;
  width: 850px;
  height: 100%;
}
#main #strategy .rightTxt ul li {
  position: relative;
  box-sizing: border-box;
  float: left;
  width: 50%;
  height: 20%;
  padding: 10px;
  border-bottom:1px dotted #000;
}
#main #strategy .rightTxt ul li:nth-child(odd) {
  padding-right: 20px;
}
#main #strategy .rightTxt ul li:nth-child(even) {
  padding-left: 20px;
}
#main #strategy .rightTxt ul li::after {
  display: block;
  position: absolute;
  top: 15px;
  left: 0;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-left-width: 8px;
  border-left-color: #000;
  content: "";
}
#main #strategy .rightTxt ul a {
  display: block;
  width: 100%;
  height: 100%;
  color: #000;
  /* border-bottom: 1px dotted #000; */
}
#main #strategy .rightTxt ul a span {
  display: block;
  overflow: hidden;
  width: 100%;
  height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#main #strategy .rightTxt ul a em {
  position: absolute;
  bottom: 1px;
  color: #b2afaf;
}
#main #tongren {
  position: relative;
  width: 1300px;
  margin: 0 auto;
  margin-top: 50px;
}
#main #tongren .top {
  width: 100%;
  height: 80px;
}
#main #tongren .top > a {
  float: left;
  display: block;
  width: 110px;
  height: 110px;
  background: url("../../assets/images/yys/index/index2.png") -883px 247px;
}
#main #tongren .top .tab {
  float: right;
  width: 1150px;
  height: 100%;
  margin-top: 20px;
  border-bottom: 1px solid #000;
}
#main #tongren .top .tab li {
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  float: left;
  width: calc(1150px / 7);
  height: 100%;
  border-right: 1px dotted #aaa;
  cursor: pointer;
}
#main #tongren .top .tab li:hover .on {
  transform: translateY(-61px);
}
#main #tongren .top .tab li:hover .active {
  transform: translateY(-27px);
}
#main #tongren .top .tab li.lastone {
  border-right: 0;
}
#main #tongren .top .tab li.lastone {
  transition: 0.5s;
}
#main #tongren .top .tab li.lastone:hover {
  transform: translateX(30px);
}
#main #tongren .top .tab li span {
  position: relative;
  display: block;
  left: 50%;
  height: 20px;
  margin-top: 30px;
  transition: 0.5s;
  background-image: url("../../assets/images/yys/index/index2.png");
}
#main #tongren .top .tab li i {
  position: relative;
  bottom: -40px;
  display: block;
  width: 160px;
  height: 52px;
  background-image: url("../../assets/images/yys/index/fan/icons.png");
  transition: 0.5s;
}
#main #tongren .top .tab li:first-child span {
  width: 75px;
  margin-left: -37.5px;
  background-position: 80px 668px;
}
#main #tongren .top .tab li:first-child i {
  background-position: 0 0;
}
#main #tongren .top .tab li:nth-child(2) span {
  width: 75px;
  margin-left: -37.5px;
  background-position: 414px 541px;
}
#main #tongren .top .tab li:nth-child(2) i {
  background-position: -160px 0;
}
#main #tongren .top .tab li:nth-child(3) span {
  width: 75px;
  margin-left: -37.5px;
  background-position: 80px 587px;
}
#main #tongren .top .tab li:nth-child(3) i {
  background-position: -320px 0;
}
#main #tongren .top .tab li:nth-child(4) span {
  width: 75px;
  height: 19px;
  margin-left: -37.5px;
  background-position: 414px 577px;
}
#main #tongren .top .tab li:nth-child(4) i {
  background-position: -470px 1px;
}
#main #tongren .top .tab li:nth-child(5) span {
  width: 75px;
  height: 18px;
  margin-left: -37.5px;
  background-position: 414px 559px;
}
#main #tongren .top .tab li:nth-child(5) i {
  background-position: -620px 1px;
}
#main #tongren .top .tab li:nth-child(6) span {
  width: 90px;
  height: 18px;
  margin-left: -45px;
  background-position: 414px 594px;
}
#main #tongren .top .tab li:nth-child(6) i {
  background-position: -920px 1px;
}
#main #tongren .top .tab li:nth-child(7) span {
  left: 24px;
  width: 120px;
  height: 25px;
  background-position: 553px 640px;
}
#main #tongren .cover {
  overflow: hidden;
  position: relative;
  top: 60px;
  width: 100%;
  height: 420px;
  margin-top: 125px;
}
#main #tongren .cover .uls {
  position: absolute;
  width: 600%;
  height: 100%;
}
#main #tongren .cover .uls ul {
  box-sizing: border-box;
  float: left;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 16.66%;
  height: 100%;
}
#main #tongren .cover .uls ul li {
  position: relative;
  float: left;
  width: 300px;
  height: 50%;
}
#main #tongren .cover .uls ul li span {
  height: 32px;
  line-height: 32px;
  text-align: center;
}
#main #tongren .cover .uls ul li img {
  cursor: pointer;
}
#main #tongren .cover .uls ul li .wrap {
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 300px;
  height: 168px;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: 0.3s;
}
#main #tongren .cover .uls ul li .wrap span {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 80px;
  height: 97px;
  margin: auto;
  background: url("../../assets/images/yys/index/index2.png") 296px -190px;
}
#main #tongren .cover .uls ul li:hover .wrap {
  opacity: 1;
}
#main #huace {
  position: relative;
  top: 550px;
  width: 1300px;
  height: 160px;
  margin: 0 auto;
}
#main #huace ul {
  display: flex;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  height: 100%;
}
#main #huace ul li {
  position: relative;
  float: left;
  width: 30%;
  height: 100%;
  a{
    display: block;
    width: 100%;
    height: 100%;
    img{
      height: 100%;
      width: 100%;
    }
  }
}
#main #huace ul li p {
  position: absolute;
  top: 0;
  left: -22.5px;
  width: 45px;
  height: 130px;
  border: 2px solid #000;
  background-color: #fff;
}
#main #huace ul li p span {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 15px;
  height: 60px;
  margin: auto;
  font-weight: bold;
}
#main #shitu {
  position: relative;
  top: 650px;
  width: 100%;
  height: 514px;
  margin: 0 auto;
  background-image: url("../../assets/images/yys/index/video/video_bg.jpg");
}
#main #shitu .wrap {
  position: relative;
  width: 1300px;
  height: 100%;
  margin: 0 auto;
}
#main #shitu .video,
#main #shitu .bizhi {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  float: left;
  box-sizing: border-box;
  width: 50%;
  height: 100%;
}
#main #shitu div h3 {
  width: 230px;
  height: 130px;
  background: url("../../assets/images/yys/index/index2.png") -861px -603px;
  cursor: pointer;
}
#main #shitu div > a {
  overflow: hidden;
  display: block;
  width: 270px;
  height: 200px;
  color: #000;
}
#main #shitu div > a img {
  transition: 0.5s;
}
#main #shitu div > a img:hover {
  transform: scale(1.2);
}
#main #shitu div a:first-child {
  background-color: #f66;
}
#main #shitu div > a p {
  height: 47px;
  text-indent: 2em;
  line-height: 47px;
  background-color: #fff;
}
#main #shitu div a.pic1 {
  margin-left: 30px;
}
#main #shitu div.bizhi h3 {
  background-position: -348px 400px;
}
#main #activity {
  position: relative;
  top: 730px;
  width: 1300px;
  height: 370px;
  margin: 0 auto;
}
#main #activity .ac-title {
  float: left;
  width: 257px;
  height: 100%;
  background-image: url("../../assets/images/yys/index/activity/activity_title.png");
}
#main #activity ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  float: right;
  width: 960px;
  height: 100%;
}
#main #activity ul li {
  overflow: hidden;
  position: relative;
  width: 270px;
  height: 153px;
}
#main #activity ul li img {
  transition: 0.5s;
}
#main #activity ul li img:hover {
  transform: scale(1.2);
}
#main #activity ul li span {
  position: absolute;
  bottom: 10px;
  left: 20px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  border: 1px solid #fff;
  text-align: center;
}
#main #foot {
  overflow: hidden;
  position: relative;
  top: 750px;
  width: 100%;
  height: 524px;
  background-image: url("../../assets/images/yys/index/foot.jpg");
}
#main #foot > p,
#main #foot .wrap > em,
#main #foot .wrap .foot-door,
#main #foot .wrap span,
#main #foot .wrap .box p {
  background-image: url("../../assets/images/yys/index/index2.png");
}
#main #foot > p {
  width: 660px;
  height: 30px;
  margin: 110px auto;
  background-position: 0 30px;
}
#main #foot .wrap {
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -140px;
  width: 380px;
  height: 330px;
  cursor: pointer;
}
#main #foot .wrap > em {
  display: block;
  opacity: 1;
  width: 120px;
  height: 30px;
  margin: 0 auto;
  background-position: 553px 616px;
  transition: 0.5s;
}
#main #foot .wrap .foot-door {
  position: absolute;
  bottom: -90px;
  left: 50%;
  width: 205px;
  height: 310px;
  margin-left: -102.5px;
  background-position: 0 -606px;
  transition: 0.5s;
}
#main #foot .wrap:hover .foot-door {
  bottom: -140px;
}
#main #foot .wrap:hover em {
  opacity: 0;
}
#main #foot .wrap > span {
  position: absolute;
  display: block;
  top: 50px;
  left: 50%;
  width: 25px;
  height: 70px;
  margin-left: -12.5px;
  background-position: 30px -188px;
  transition: 0.5s;
}
#main #foot .wrap:hover span {
  top: -50px;
}
#main #foot .wrap .box {
  z-index: 10;
  opacity: 0;
  position: absolute;
  top: 40px;
  left: 50%;
  width: 203px;
  height: 154px;
  margin-left: -81px;
  transition: 0.5s;
}
#main #foot .wrap .box img {
  box-shadow: 0 0 20px skyblue;
}
#main #foot .wrap .box p {
  float: right;
  width: 18px;
  height: 100%;
  background-position: 430px -200px;
}
#main #foot .wrap:hover .box {
  opacity: 1;
  top: 0;
}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td {
    margin:0;
    padding:0;
}
body{
    background:#fff;
    color:#000;
    font-size:14px;
    font-family: 'Microsoft yahei',Verdana, Arial, Helvetica, sans-serif;
}
td,th,caption {
    font-size:14px;
}
h1, h2, h3, h4, h5, h6 {
    font-weight:normal; font-size:100%;
}
address, caption, cite, code, dfn, em, strong, th, var {
    font-style:normal; font-weight:normal;
}
a{
    text-decoration:none;
}
img{
    border:none;
}
a img{
    display: block;
}
ol,ul,li {
    list-style:none;
}
li{
    vertical-align:top;
}
input, textarea, select, button {
    font:14px 'Microsoft yahei',Verdana,Helvetica,Arial,sans-serif; }
table {
    border-collapse:collapse;
}
.clearfix:after {
    content: ".";
    display: block;
    height:0;
    clear:both;
    visibility: hidden;
}
.clearfix { *zoom:1; }
</style>
<template>
  <div id="main">
    <!-- head start -->
    <div id="header">
      <!-- 导航 -->
      <div id="nav">
        <!-- 主导航 -->
        <ul class="mainList">
          <li class="mNav">
            <a href="javascript:;">官网首页</a>
          </li>
          <li class="line"></li>
          <li class="mNav">
            <a href="javascript:;">新闻资讯</a>
          </li>
          <li class="line"></li>
          <li class="mNav">
            <a href="javascript:;">游戏攻略</a>
          </li>
          <li class="line"></li>
          <li class="mNav">
            <a href="javascript:;">游戏特色</a>
          </li>
          <li class="line"></li>
          <li class="mNav">
            <a href="javascript:;">同人专区</a>
          </li>
          <li class="line"></li>
          <li class="mNav guanfang">
            <a href="javascript:;">官方渠道</a>
            <div class="hide">
              <ul class="hideList">
                <li>
                  <a href="#">
                    <i class="i4"></i>
                    <p>官方微信</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="i3"></i>
                    <p>官方微博</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="i2"></i>
                    <p>百度贴吧</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="i1"></i>
                    <p>官方论坛</p>
                  </a>
                </li>
              </ul>
            </div>
            <span class="arrow"></span>
          </li>
        </ul>
        <!-- logo、二维码 -->
        <div class="logo">
          <div class="qrcode">
            <p>扫码下载</p>
            <img src="../../assets/images/yys/qrcode.png" alt="" width="74" height="74" />
          </div>
          <div class="mLogo">
            <img src="../../assets/images/yys/i.jpg" alt="" width="73" height="73" />
            <div>
              <h3>阴阳师</h3>
              <p>网易和风匠心巨制</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 阴阳师logo -->
      <div class="logo2">
        <img src="../../assets/images/yys/index/logo.png" alt="" />
      </div>
      <!-- 角色轮播 -->
      <div id="role" onselectstart="return false">
        <div class="rol1">
          <p class="role role1 hide"></p>
          <p class="role role2 hide"></p>
        </div>
        <div class="rol2">
          <p class="role role3 hide"></p>
          <p class="role role4 hide"></p>
        </div>
        <p class="btn"></p>
        <img class="bottomImg" src="../../assets/images/yys/index/role/role_botbg.png" alt="" />
        <div id="server">
          <img src="../../assets/images/yys/index/role/bunny.gif" alt="" />
        </div>
      </div>
    </div>
    <!-- head end -->

    <!-- slide start -->
    <div id="slide">
      <p class="title"></p>
      <span class="arrow"></span>

      <!--下载横向伸缩区-->
      <div class="download stretch">
        <p class="shrink"></p>
        <div class="downloadMain">
          <span class="close"></span>
          <span class="downTxt"></span>
          <div class="qrcode">
            <span class="line"></span>
          </div>
          <div class="mDown">
            <span class="iosDown"></span>
            <span class="andDown"></span>
          </div>
          <div class="picDown"></div>
        </div>
      </div>
      <div class="linkList">
        <div class="list1">
          <p>周一至周日 <br />12:00-13:00,20:00-21:00</p>
        </div>
        <div class="list2"></div>
        <div class="list3"></div>
        <div class="list4">
          <p>周一至周四鬼王，周五-周日 <br />阴界之门，时间19-21点</p>
        </div>

        <div class="list5">
          <p>【周四】反枕、心眼、树妖、针女</p>
        </div>
        <div class="txt5">
          <p id="notHide">【周四】反枕、心眼、树妖、针女</p>
          <p class="mTop">【周一】雪幽魂、地藏像、鸣屋、网切</p>
          <p>【周二】涅槃之火、三味、招财猫、狰</p>
          <p>【周三】 魍魉之匣、被服、阴摩罗、魅妖</p>
          <p>【周四】反枕、心眼、树妖、针女</p>
          <p>【周五】日女巳时、镜姬、钟灵、破势</p>
          <p>【周六】随机掉落全部御魂</p>
          <p>【周日】随机掉落全部御魂</p>
          <p>【业原火】增加木魅、薙魂、返魂香</p>
        </div>
        <div class="list6"></div>
        <div class="list7">
          <p>每日5点和18点重置</p>
        </div>
        <div class="list8">
          <p>
            委派式神完成对应任务， <br />
            即可获得对应奖励
          </p>
        </div>
        <div class="list9">
          <p>个人每周一6点重置，阴阳寮每 <br />日5点重置，周六日奖励翻倍</p>
        </div>
      </div>
    </div>
    <!-- slide end -->

    <!-- content start -->
    <div id="content">
      <div id="news">
        <!-- banner -->
        <div class="banner">
          <div class="pics">
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <img src="../../assets/images/yys/index/content/1.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img src="../../assets/images/yys/index/content/2.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img src="../../assets/images/yys/index/content/3.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img src="../../assets/images/yys/index/content/4.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img src="../../assets/images/yys/index/content/5.jpg" alt="" />
                </a>
              </li>
            </ul>
          </div>

          <div class="tab">
            <ul>
              <li class="on"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <!--新闻-->
        <div class="inform">
          <div class="tab">
            <ul>
              <li class="l1 on">
                <a href="javascript:void(0)">
                  <i></i>
                  <span></span>
                </a>
              </li>
              <li class="l2">
                <a href="javascript:void(0)">
                  <i></i>
                  <span></span>
                  <b></b>
                </a>
              </li>
              <li class="l3">
                <a href="javascript:void(0)">
                  <i></i>
                  <span></span>
                  <b></b>
                </a>
              </li>
              <li class="l4">
                <a href="javascript:void(0)">
                  <i></i>
                  <span></span>
                  <b></b>
                </a>
              </li>
              <li class="l5">
                <a href="javascript:void(0)">
                  <i></i>
                  <span></span>
                  <b></b>
                </a>
              </li>
            </ul>
          </div>

          <div class="show">
            <ul class="wrapUl">
              <li class="new wrapLi">
                <p>
                  -【新闻】 《阴阳师》×bilibili举办式神歌舞同欢会 妖约现世盛夏
                </p>
                <p>
                  -【新闻】 《阴阳师》半次元打造百魅夜行第二季开启唯美和风COSPLAY嘉年华
                </p>
                <p>-【新闻】 《阴阳师》同人社区全新上线，玩转精彩同人</p>
                <p>
                  -【新闻】 《阴阳师》×梅林茂纪录片发布：走进大师心中的平安世界
                </p>
                <p>-【新闻】 声控大触集结 《阴阳师》广播剧大赛精彩作品展示</p>
              </li>
              <li class="news wrapLi"></li>
              <li class="active wrapLi"></li>
              <li class="notice wrapLi"></li>
              <li class="media wrapLi"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- content end -->

    <!-- character start-->
    <div id="character">
      <div class="sMain">
        <!--平安之旅 式神 主角-->
        <div class="title">
          <span class="bg1"></span>
          <span class="dotted"></span>
          <p class="tab active">
            <i></i>
            <span class="tab1"></span>
          </p>
          <span class="dotted"></span>
          <p class="tab">
            <i></i>
            <span class="tab2"></span>
          </p>
        </div>
        <!-- 对应的显示 -->
        <div class="showMain">
          <ul class="mList">
            <!--式神列表-->
            <li class="mLi shishenList">
              <div class="lBtn"></div>
              <div class="rBtn"></div>
              <div class="shishenShow">
                <ul></ul>
              </div>
              <div class="shishenTab">
                <ul>
                  <li class="clickBtn on">全部</li>
                  <li class="clickBtn">SSR</li>
                  <li class="clickBtn">SR</li>
                  <li class="clickBtn">R</li>
                  <li class="clickBtn">N</li>
                  <li class="allBtn">
                    <a href="javascript:void(0)">
                      <img src="../../assets/images/yys/index/content/viewAll_btn.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mainList">
                <div class="mUl show">
                  <ul class="ALL">
                    <!-- <li class="ssList">
                                                 <div class="shishen">
                                                     <img src="../../assets/images/yys/index/content/shishen/201.png" alt="">
                                                     <p class="cover"><span>雪女</span></p>
                                                     <i class="new"></i>
                                                 </div>
                                                 <div class="shishen">
                                                     <img src="../../assets/images/yys/index/content/shishen/201.png" alt="">
                                                     <p class="cover"><span>雪女</span></p>
                                                     <i class="new"></i>
                                                 </div>
                                             </li>-->
                  </ul>

                  <p class="btn left"></p>
                  <p class="btn right"></p>
                </div>
                <div class="mUl">
                  <ul class="SSR"></ul>
                  <p class="btn left"></p>
                  <p class="btn right"></p>
                </div>
                <div class="mUl">
                  <ul class="SR"></ul>
                  <p class="btn left"></p>
                  <p class="btn right"></p>
                </div>
                <div class="mUl">
                  <ul class="R"></ul>
                  <p class="btn left"></p>
                  <p class="btn right"></p>
                </div>
                <div class="mUl">
                  <ul class="N"></ul>
                  <p class="btn left"></p>
                  <p class="btn right"></p>
                </div>
              </div>
            </li>

            <!--主角列表-->
            <li class="mLi zhujueList" style="display: none">
              <div class="tab">
                <ul>
                  <li class="active">
                    晴明
                    <i></i>
                  </li>
                  <li>
                    神乐
                    <i></i>
                  </li>
                  <li>
                    源博雅
                    <i></i>
                  </li>
                  <li>
                    八百比丘尼
                    <i></i>
                  </li>
                </ul>
              </div>
              <div class="pic">
                <ul>
                  <li class="qm" style="display: block">
                    <div class="img">
                      <img src="../../assets/images/yys/index/content/zhujue_qingming.png" alt="" />
                    </div>
                    <div class="dec">
                      <p class="index"></p>
                      <p class="name">晴明</p>
                      <p class="info">
                        京都城中极具盛名的天才阴阳师
                        <br />
                        却不知为何失去了自己的记忆 <br />
                        等待着他的是寻回记忆的喜悦 <br />
                        还是不堪回首的残忍真相
                      </p>
                    </div>
                  </li>
                  <li class="sl">
                    <div class="img">
                      <img src="../../assets/images/yys/index/content/zhujue_shenle.png" alt="" />
                    </div>
                    <div class="dec">
                      <p class="index"></p>
                      <p class="name">神乐</p>
                      <p class="info">
                        善良而沉默的神秘少女 <br />
                        失忆后便跟随在晴明身边 <br />
                        拥有敏锐的直觉和强大的通灵能力 <br />
                        以及不为人知的过去
                      </p>
                    </div>
                  </li>
                  <li class="yby">
                    <div class="img">
                      <img src="../../assets/images/yys/index/content/zhujue_yby.png" alt="" />
                    </div>
                    <div class="dec">
                      <p class="index"></p>
                      <p class="name">源博雅</p>
                      <p class="info">
                        拥有皇室血统的贵族青年 <br />
                        擅长弓术与结界之术 <br />
                        性情孤傲爽直 <br />
                        但似乎一直在寻找某个重要的人
                      </p>
                    </div>
                  </li>
                  <li class="bqn">
                    <div class="img">
                      <img src="../../assets/images/yys/index/content/zhujue_bqn.png" alt="" />
                    </div>
                    <div class="dec">
                      <p class="index"></p>
                      <p class="name">八宝比丘尼</p>
                      <p class="info">
                        因误食人鱼肉而不老不死 <br />
                        能力超凡的流浪占卜师 <br />
                        一直在凤凰林中等待着 <br />
                        占卜之梦预言的命运之人
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div class="mRole">
            <ul class="zhujue-tab">
              <li class="on">
                晴明
                <em class="show"></em>
              </li>
              <li>
                神乐
                <em></em>
              </li>
              <li>
                源博雅
                <em></em>
              </li>
              <li>
                八百比丘尼
                <em></em>
              </li>
            </ul>
            <div class="wrap qm">
              <img
                src="../../assets/images/yys/index/content/zhujue_qingming.png"
                class="zhujue-pic"
                alt=""
              />
              <div class="zhujue-info">
                <h3>晴明</h3>
                <p>
                  京都城中极具盛名的天才阴阳师
                  <br />
                  却不知为何失去了自己的记忆 <br />
                  等待着他的是寻回记忆的喜悦 <br />
                  还是不堪回首的残忍真相
                </p>
              </div>
            </div>
            <div class="wrap sl">
              <img
                src="../../assets/images/yys/index/content/zhujue_shenle.png"
                class="zhujue-pic"
                alt=""
              />
              <div class="zhujue-info">
                <h3>神乐</h3>
                <p>
                  善良而沉默的神秘少女
                  <br />
                  失忆后便跟随在晴明身边 <br />
                  拥有敏锐的直觉和强大的通灵能力 <br />
                  以及不为人知的过去
                </p>
              </div>
            </div>
            <div class="wrap yby">
              <img
                src="../../assets/images/yys/index/content/zhujue_yby.png"
                class="zhujue-pic"
                alt=""
              />
              <div class="zhujue-info">
                <h3>源博雅</h3>
                <p>
                  拥有皇室血统的贵族青年
                  <br />
                  擅长弓术与结界之术 <br />
                  性情孤傲爽直 <br />
                  但似乎一直在寻找某个重要的人
                </p>
              </div>
            </div>
            <div class="wrap bbbqn">
              <img
                src="../../assets/images/yys/index/content/zhujue_bqn.png"
                class="zhujue-pic"
                alt=""
              />
              <div class="zhujue-info">
                <h3>八百比丘尼</h3>
                <p>
                  因误食人鱼肉而不老不死
                  <br />
                  能力超凡的流浪占卜师 <br />
                  一直在凤凰林中等待着 <br />
                  占卜之梦预言的命运之人
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- character end -->

    <!-- strategy start -->
    <div id="strategy">
      <!-- 左边轮播图 -->
      <div class="leftBanner">
        <div class="searchTitle">
          <input type="text" placeholder="请输入寮间问题" />
          <div class="btn"></div>
        </div>
        <div class="banner">
          <div class="pics">
            <img src="../../assets/images/yys/index/strategy/banner1.jpg" alt="" />
            <img src="../../assets/images/yys/index/strategy/banner2.jpg" alt="" />
          </div>
        </div>
        <ul class="tabs">
          <li class="on"></li>
          <li></li>
        </ul>
        <div class="nav">
          <ul>
            <a href="javascript:;">
              <li class="temp">
                <span class="xitong"></span>
              </li>
            </a>
            <a href="javascript:;">
              <li>
                <span class="mengxin"></span>
              </li>
            </a>
            <a href="javascript:;">
              <li>
                <span class="xuanshang"></span>
              </li>
            </a>
            <a href="javascript:;">
              <li>
                <span class="datui"></span>
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div class="rightTxt">
        <div class="title">
          <div class="tabName"></div>
          <i></i>
          <a href="javascript:;" class="on">
            <span class="xinshou"></span>
            <em></em>
          </a>
          <i></i>

          <a href="javascript:;">
            <span class="shishen"></span>
            <em></em>
          </a>
          <i></i>

          <a href="javascript:;">
            <span class="douji"></span>
            <em></em>
          </a>
          <i></i>

          <a href="javascript:;">
            <span class="wanfa"></span>
            <em></em>
          </a>
        </div>
        <div class="txtShow">
          <div class="uls">
            <ul>
              <li>
                <a href="javascript:;">
                  <span
                    >【新手】 【萌新成长指南】第四期！
                    御魂从哪来？躺魂十的各种姿势！</span
                  >
                  <em>作者：Yeno1996</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span
                    >【新手】 【萌新成长指南】
                    特别篇~大将：呱世无双的正确入手攻略~</span
                  >
                  <em>作者：Yeno1996</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span
                    >【新手】 【萌新成长指南】
                    特别篇~大将：呱世无双的正确入手攻略~</span
                  >
                  <em>作者：Yeno1996</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span
                    >【新手】 【萌新成长指南】
                    特别篇~大将：呱世无双的正确入手攻略~</span
                  >
                  <em>作者：Yeno1996</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span
                    >【新手】 【萌新成长指南】
                    特别篇~大将：呱世无双的正确入手攻略~</span
                  >
                  <em>作者：Yeno1996</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span
                    >【新手】 【萌新成长指南】
                    特别篇~大将：呱世无双的正确入手攻略~</span
                  >
                  <em>作者：Yeno1996</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span
                    >【新手】 【萌新成长指南】
                    特别篇~大将：呱世无双的正确入手攻略~</span
                  >
                  <em>作者：Yeno1996</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span
                    >【新手】 【萌新成长指南】
                    特别篇~大将：呱世无双的正确入手攻略~</span
                  >
                  <em>作者：Yeno1996</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span
                    >【新手】 【萌新成长指南】
                    特别篇~大将：呱世无双的正确入手攻略~</span
                  >
                  <em>作者：Yeno1996</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span
                    >【新手】 【萌新成长指南】
                    特别篇~大将：呱世无双的正确入手攻略~</span
                  >
                  <em>作者：Yeno1996</em>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="javascript:;">
                  <span>【式神】 SSR御饌津，为你带来好运的小姐姐！</span>
                  <em>作者：清逸喵</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span>【式神】 SSR御饌津，为你带来好运的小姐姐！</span>
                  <em>作者：清逸喵</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span>【式神】 SSR御饌津，为你带来好运的小姐姐！</span>
                  <em>作者：清逸喵</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span>【式神】 SSR御饌津，为你带来好运的小姐姐！</span>
                  <em>作者：清逸喵</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span>【式神】 SSR御饌津，为你带来好运的小姐姐！</span>
                  <em>作者：清逸喵</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span>【式神】 SSR御饌津，为你带来好运的小姐姐！</span>
                  <em>作者：清逸喵</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span>【式神】 SSR御饌津，为你带来好运的小姐姐！</span>
                  <em>作者：清逸喵</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span>【式神】 SSR御饌津，为你带来好运的小姐姐！</span>
                  <em>作者：清逸喵</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span>【式神】 SSR御饌津，为你带来好运的小姐姐！</span>
                  <em>作者：清逸喵</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span>【式神】 SSR御饌津，为你带来好运的小姐姐！</span>
                  <em>作者：清逸喵</em>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="javascript:;">
                  <span
                    >【斗技】
                    为崽而战课堂：大佬来看看这里有没有你常用的斗技阵容</span
                  >
                  <em>作者：真白</em>
                </a>
              </li>

              <li>
                <a href="javascript:;">
                  <span
                    >【斗技】
                    为崽而战课堂：大佬来看看这里有没有你常用的斗技阵容</span
                  >
                  <em>作者：真白</em>
                </a>
              </li>

              <li>
                <a href="javascript:;">
                  <span
                    >【斗技】
                    为崽而战课堂：大佬来看看这里有没有你常用的斗技阵容</span
                  >
                  <em>作者：真白</em>
                </a>
              </li>

              <li>
                <a href="javascript:;">
                  <span
                    >【斗技】
                    为崽而战课堂：大佬来看看这里有没有你常用的斗技阵容</span
                  >
                  <em>作者：真白</em>
                </a>
              </li>

              <li>
                <a href="javascript:;">
                  <span
                    >【斗技】
                    为崽而战课堂：大佬来看看这里有没有你常用的斗技阵容</span
                  >
                  <em>作者：真白</em>
                </a>
              </li>

              <li>
                <a href="javascript:;">
                  <span
                    >【斗技】
                    为崽而战课堂：大佬来看看这里有没有你常用的斗技阵容</span
                  >
                  <em>作者：真白</em>
                </a>
              </li>

              <li>
                <a href="javascript:;">
                  <span
                    >【斗技】
                    为崽而战课堂：大佬来看看这里有没有你常用的斗技阵容</span
                  >
                  <em>作者：真白</em>
                </a>
              </li>

              <li>
                <a href="javascript:;">
                  <span
                    >【斗技】
                    为崽而战课堂：大佬来看看这里有没有你常用的斗技阵容</span
                  >
                  <em>作者：真白</em>
                </a>
              </li>

              <li>
                <a href="javascript:;">
                  <span
                    >【斗技】
                    为崽而战课堂：大佬来看看这里有没有你常用的斗技阵容</span
                  >
                  <em>作者：真白</em>
                </a>
              </li>

              <li>
                <a href="javascript:;">
                  <span
                    >【斗技】
                    为崽而战课堂：大佬来看看这里有没有你常用的斗技阵容</span
                  >
                  <em>作者：真白</em>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="javascript:;">
                  <span
                    >【玩法】
                    【副本秘籍】逢魔之时需要知道的一些小知识（上篇）</span
                  >
                  <em>作者：【NGA】40817862</em>
                </a>
              </li>

              <li>
                <a href="javascript:;">
                  <span
                    >【玩法】
                    【副本秘籍】逢魔之时需要知道的一些小知识（上篇）</span
                  >
                  <em>作者：【NGA】40817862</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span
                    >【玩法】
                    【副本秘籍】逢魔之时需要知道的一些小知识（上篇）</span
                  >
                  <em>作者：【NGA】40817862</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span
                    >【玩法】
                    【副本秘籍】逢魔之时需要知道的一些小知识（上篇）</span
                  >
                  <em>作者：【NGA】40817862</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span
                    >【玩法】
                    【副本秘籍】逢魔之时需要知道的一些小知识（上篇）</span
                  >
                  <em>作者：【NGA】40817862</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span
                    >【玩法】
                    【副本秘籍】逢魔之时需要知道的一些小知识（上篇）</span
                  >
                  <em>作者：【NGA】40817862</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span
                    >【玩法】
                    【副本秘籍】逢魔之时需要知道的一些小知识（上篇）</span
                  >
                  <em>作者：【NGA】40817862</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span
                    >【玩法】
                    【副本秘籍】逢魔之时需要知道的一些小知识（上篇）</span
                  >
                  <em>作者：【NGA】40817862</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span
                    >【玩法】
                    【副本秘籍】逢魔之时需要知道的一些小知识（上篇）</span
                  >
                  <em>作者：【NGA】40817862</em>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <span
                    >【玩法】
                    【副本秘籍】逢魔之时需要知道的一些小知识（上篇）</span
                  >
                  <em>作者：【NGA】40817862</em>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- strategy end -->

    <!-- tongren start -->
    <div id="tongren">
      <div class="top">
        <a href="javascript:;" class="title"></a>
        <ul class="tab">
          <li>
            <span></span>
            <i></i>
          </li>
          <li>
            <span></span>
            <i></i>
          </li>
          <li>
            <span></span>
            <i></i>
          </li>
          <li>
            <span></span>
            <i></i>
          </li>
          <li>
            <span></span>
            <i></i>
          </li>
          <li>
            <span></span>
            <i></i>
          </li>
          <li class="lastone">
            <span></span>
          </li>
        </ul>
        <div class="cover">
          <div class="uls">
            <ul>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/jxtj/1.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>妖狐 新皮【作者】 冬冬隆冬锵锵锵</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/jxtj/2.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>卖药郎 cos 【作者 】扬大旗</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/jxtj/3.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>面灵气与七个小矮人？【作者】 of_chain</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/jxtj/4.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>荒【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/jxtj/5.png"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>玉藻前的美好时光【作者】重花花長年過敏</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/jxtj/6.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>百物语-青行灯【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/jxtj/7.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>狐狩界-御馔津【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/jxtj/8.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>不如，一起白头？ ​​​【作者】爱因5坦</span>
              </li>
            </ul>
            <ul>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trhh/01.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>妖狐 新皮【作者】 冬冬隆冬锵锵锵</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trhh/02.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>卖药郎 cos 【作者 】扬大旗</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trhh/03.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>面灵气与七个小矮人？【作者】 of_chain</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trhh/04.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>荒【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trhh/05.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>玉藻前的美好时光【作者】重花花長年過敏</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trhh/06.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>百物语-青行灯【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trhh/07.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>狐狩界-御馔津【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trhh/08.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>不如，一起白头？ ​​​【作者】爱因5坦</span>
              </li>
            </ul>
            <ul>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/wjCOS/1.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>妖狐 新皮【作者】 冬冬隆冬锵锵锵</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/wjCOS/2.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>卖药郎 cos 【作者 】扬大旗</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/wjCOS/3.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>面灵气与七个小矮人？【作者】 of_chain</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/wjCOS/4.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>荒【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/wjCOS/5.png"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>玉藻前的美好时光【作者】重花花長年過敏</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/wjCOS/6.png"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>百物语-青行灯【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/wjCOS/7.png"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>狐狩界-御馔津【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/wjCOS/8.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>不如，一起白头？ ​​​【作者】爱因5坦</span>
              </li>
            </ul>
            <ul>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trsp/01.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>妖狐 新皮【作者】 冬冬隆冬锵锵锵</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trsp/02.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>卖药郎 cos 【作者 】扬大旗</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trsp/03.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>面灵气与七个小矮人？【作者】 of_chain</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trsp/04.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>荒【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trsp/05.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>玉藻前的美好时光【作者】重花花長年過敏</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trsp/06.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>百物语-青行灯【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trsp/07.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>狐狩界-御馔津【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trsp/08.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>不如，一起白头？ ​​​【作者】爱因5坦</span>
              </li>
            </ul>
            <ul>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trxs/01.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>妖狐 新皮【作者】 冬冬隆冬锵锵锵</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trxs/02.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>卖药郎 cos 【作者 】扬大旗</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trxs/03.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>面灵气与七个小矮人？【作者】 of_chain</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trxs/04.png"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>荒【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trxs/05.png"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>玉藻前的美好时光【作者】重花花長年過敏</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trxs/06.png"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>百物语-青行灯【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trxs/07.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>狐狩界-御馔津【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/trxs/08.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>不如，一起白头？ ​​​【作者】爱因5坦</span>
              </li>
            </ul>
            <ul>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/gszmj/01.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>妖狐 新皮【作者】 冬冬隆冬锵锵锵</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/gszmj/02.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>卖药郎 cos 【作者 】扬大旗</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/gszmj/03.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>面灵气与七个小矮人？【作者】 of_chain</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/gszmj/04.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>荒【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/gszmj/05.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>玉藻前的美好时光【作者】重花花長年過敏</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/gszmj/06.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>百物语-青行灯【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/gszmj/07.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>狐狩界-御馔津【作者】LOIZA白晝夜行</span>
              </li>
              <li>
                <img
                  data-src="/assets/images/yys/index/fan/gszmj/08.jpg"
                  alt=""
                  width="100%"
                  height="80%"
                />
                <div class="wrap">
                  <span></span>
                </div>
                <span>不如，一起白头？ ​​​【作者】爱因5坦</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- tongren end -->

    <!-- huace start -->
    <div id="huace">
      <ul>
        <li>
          <a href="javascript:;">
            <img
              src="/assets/images/yys/index/huace/01c.png"
              alt=""
              width="100%"
              heighe="100%"
            />
          </a>
          <p>
            <span>狐生日魅</span>
          </p>
        </li>
        <li>
          <a href="javascript:;">
            <img
              src="../../assets/images/yys/index/huace/02.jpg"
              alt=""
              width="100%"
              heighe="100%"
            />
          </a>
          <p>
            <span>式神宝宝</span>
          </p>
        </li>
        <li>
          <a href="javascript:;">
            <img
              src="../../assets/images/yys/index/huace/03.jpg"
              alt=""
              width="100%"
              heighe="100%"
            />
          </a>
          <p>
            <span>大触觉醒</span>
          </p>
        </li>
      </ul>
    </div>
    <!-- huace end -->

    <!-- shitu start -->
    <div id="shitu">
      <div class="wrap">
        <div class="video">
          <h3><a href="javscript:;"></a></h3>
          <a href="javascript:;" class="pic1">
            <img
              data-src="../../assets/images/yys/index/video/1.jpg"
              alt=""
              width="100%"
              height="154"
            />
            <p>番外·花火之都预告片</p>
          </a>
          <a href="javascript:;">
            <img
              data-src="../../assets/images/yys/index/video/2.jpg"
              alt=""
              width="100%"
              height="154"
            />
            <p>新SSR面灵气预告视频</p>
          </a>
          <a href="javascript:;">
            <img
              data-src="../../assets/images/yys/index/video/3.jpg"
              alt=""
              width="100%"
              height="154"
            />
            <p>大触觉醒-阴阳师创作大赛宣传片</p>
          </a>
        </div>
        <div class="bizhi">
          <h3><a href="javscript:;"></a></h3>
          <a href="javascript:;" class="pic1">
            <img
              data-src="../../assets/images/yys/index/video/4.jpg"
              alt=""
              width="100%"
              height="154"
            />
            <p>面灵气绘卷壁纸</p>
          </a>
          <a href="javascript:;">
            <img
              data-src="../../assets/images/yys/index/video/5.jpg"
              alt=""
              width="100%"
              height="154"
            />
            <p>520版本羁绊之诗登陆场景壁纸</p>
          </a>
          <a href="javascript:;">
            <img
              data-src="../../assets/images/yys/index/video/6.jpg"
              alt=""
              width="100%"
              height="154"
            />
            <p>大触觉醒-猫掌柜插画壁纸</p>
          </a>
        </div>
      </div>
    </div>
    <!-- shitu end -->

    <!-- activity start -->
    <div id="activity">
      <div class="ac-title"></div>
      <ul>
        <li>
          <a href="javascript:;">
            <img
              data-src="../../assets/images/yys/index/activity/1.png"
              alt=""
              width="100%"
              height="100%"
            />
            <span>面灵气主题同人征集活动</span></a
          >
        </li>
        <li>
          <a href="javascript:;">
            <img
              data-src="../../assets/images/yys/index/activity/2.jpg"
              alt=""
              width="100%"
              height="100%"
            />
            <span>萌宠大作战！</span></a
          >
        </li>
        <li>
          <a href="javascript:;">
            <img
              data-src="../../assets/images/yys/index/activity/3.jpg"
              alt=""
              width="100%"
              height="100%"
            />
            <span>集绘千卷漫画插画大赛</span></a
          >
        </li>
        <li>
          <a href="javascript:;">
            <img
              data-src="../../assets/images/yys/index/activity/4.jpg"
              alt=""
              width="100%"
              height="100%"
            />
            <span>“结缘物华”周边设计大赛</span></a
          >
        </li>
        <li>
          <a href="javascript:;">
            <img
              data-src="../../assets/images/yys/index/activity/5.jpg"
              alt=""
              width="100%"
              height="100%"
            />
            <span>绮妆魅服cosplay大赛</span></a
          >
        </li>
        <li>
          <a href="javascript:;">
            <img
              data-src="../../assets/images/yys/index/activity/6.jpg"
              alt=""
              width="100%"
              height="100%"
            />
            <span>第二届“百绘罗衣”式神皮肤设计大赛</span></a
          >
        </li>
      </ul>
    </div>
    <!-- activity end -->

    <!-- foot start -->
    <div id="foot">
      <p></p>
      <div class="wrap">
        <em></em>
        <span></span>
        <div class="box">
          <img src="../../assets/images/yys/index/download.png" alt="" width="152" height="152" />
          <p></p>
        </div>
        <div class="foot-door"></div>
      </div>
    </div>
    <!-- foot end -->
  </div>
</template>
<script>
import $ from "jquery";
import "jquery-mousewheel";
import shishenData from "./shishenData.json";
window.$ = $;
export default {
    mounted(){
        $(function () {
            (function () {
                var $nav = $('#nav'),
                    $logo = $nav.find('.logo'),
                    $hide = $('#nav .mNav .hide'),
                    $guanfang = $('.guanfang'),
                    $logo2 = $('#header .logo2');
                $guanfang.hover(function () {
                    $hide.stop().slideDown(200)
                }, function () {
                    $hide.stop().slideUp(200)
                });
                $(window).scroll(function () {
                    if ($(document).scrollTop() >= 80) {
                        $nav.css({
                            'position': 'fixed',
                            'background-color': 'rgba(255,255,255,.9)'
                        });
                        $logo.fadeIn();
                        $logo2.css('transform', 'scale(0)')
                    } else {
                        $nav.css({
                            'position': 'absolute',
                            'background-color': 'transparent'
                        });
                        $logo.fadeOut(200);
                        $logo2.css('transform', 'scale(1)')
                    }
                });
                if ($(document).scrollTop() >= 80) {
                    $nav.css({
                        'position': 'fixed',
                        'background-color': 'rgba(255,255,255,.9)'
                    });
                    $logo.fadeIn()
                }
            }());
            (function () {
                var $role = $('#role'),
                    $rol1 = $role.find('.rol1 .role'),
                    $rol2 = $role.find(".rol2 .role"),
                    $btn = $role.find(".btn"),
                    whichShow = false;
                $rol1.removeClass("hide");
                $btn.click(function () {
                    whichShow ? change($rol2, $rol1) : change($rol1, $rol2);
                    whichShow = !whichShow
                });

                function change($1, $2) {
                    $1.stop();
                    $2.stop();
                    $1.addClass("hide").delay(800).queue(function () {
                        $2.removeClass("hide")
                    })
                }
            }());
            (function () {
                var $slide = $("#slide"),
                    $download = $slide.find(".download"),
                    $shrink = $download.find(".shrink"),
                    $close = $download.find(".close"),
                    $downloadMain = $download.find(".downloadMain"),
                    $mainLi = $slide.find(".main .mainLi"),
                    $lists = $slide.find('.linkList');
                var $list2 = $lists.find('.list2'), $list3 = $lists.find('.list3'), $list5 = $lists.find('.list5'), $list5Txt = $lists.find('.txt5');
                $shrink.click(function () {
                    $download.addClass("stretch");
                    $(this).hide();
                    $downloadMain.show()
                });
                $close.click(function () {
                    $download.removeClass("stretch");
                    $(this).stop().delay(200).queue(function () {
                        $downloadMain.hide();
                        $shrink.show()
                    })
                });
                $list2.hover(function () {
                    $(this).css('background-position', '-8px -27px');
                    $(this).stop().animate({
                        width: 317,
                        height: 580
                    }, 500)
                }, function () {
                    $(this).stop().animate({
                        width: 317,
                        height: 93
                    }, 500, function () {
                        $(this).css({
                            'background-position': '-915px 370px'
                        })
                    })
                });
                $list3.hover(function () {
                    $(this).css('background-position', '-771px -344px');
                    $(this).stop().animate({
                        width: 317,
                        height: 208
                    }, 500)
                }, function () {
                    $(this).stop().animate({
                        width: 317,
                        height: 87
                    }, 500, function () {
                        $(this).css({
                            'background-position': '-1505px -105px'
                        })
                    })
                });
                $list5.mouseenter(function () {
                    $(this).stop().hide();
                    $list5Txt.stop().show();
                    $list5Txt.css({
                        height: 133
                    });
                    $list5Txt.children().css('display', 'block');
                    $list5Txt.stop().animate({
                        height: 320
                    }, 300)
                });
                $list5Txt.mouseleave(function () {
                    $(this).stop().animate({
                        height: 133
                    }, 300, function () {
                        $(this).children().css('display', 'none');
                        $(this).stop().hide();
                        $list5.stop().show()
                    })
                })
            }());
            (function () {
                var $banner = $('#news .banner'),
                    $ul = $banner.find('.pics ul'),
                    $lis = $ul.find('li'),
                    $banTab = $('#news .tab').eq(0).children(),
                    len = $lis.length,
                    width = $lis.eq(0).width(),
                    $newTab = $('#news').find('.inform .tab ul li'),
                    $showTxt = $('.inform .show'),
                    index = 0;
                auto();

                function auto() {
                    setInterval(function () {
                        index++;
                        index %= len;
                        var Left = $ul.position().left;
                        $ul.animate({
                            left: -index * width
                        }, 300);
                        $banTab.children().eq(index).addClass('on').siblings().removeClass('on')
                    }, 2000)
                }
                $newTab.mouseenter(function () {
                    $(this).eq($newTab.index()).addClass('on').siblings().removeClass('on')
                })
            }());
            (function () {
                var $shishen = $('#character'),
                    $shishenShow = $('.shishenShow'),
                    $shishenUl = $('.shishenShow ul'),
                    $leftBtn = $shishen.find('.lBtn'),
                    $rightBtn = $shishen.find('.rBtn'),
                    $roleTab = $shishen.find('.sMain .title .tab:last-child'),
                    $shishenTab = $shishen.find('.sMain .title .tab').eq(0),
                    $mLi = $shishen.find('.sMain .showMain .mLi').eq(0),
                    $role = $shishen.find('.mRole'),
                    $roleLi = $shishen.find('.sMain .showMain .zhujue-tab li'),
                    $arrow = $shishen.find('.zhujue-tab li em'),
                    $roleWrap = $shishen.find('.showMain .mRole .wrap'),
                    frag = document.createDocumentFragment(),
                    index = 0,
                    timer,
                    bool = true;

                    document.querySelector(".app_right_container").onscroll = function (){
						console.log(this)
                        if(this.scrollTop >= $shishen.position().top - $(".app_right_container").height()){  
                            if(bool){
								for (var i = 0, lens = shishenData.length; i < lens; i++) {
									var img = document.createElement('img');
									// img.src = `../../assets/images/yys/index/content/shishen/${shishenData[i]["id"]}.png`;
									img.src = require(`@/assets/images/yys/index/content/shishen/${shishenData[i]["id"]}.png`);
									$(img).css({
										width: 89,
										height: 92,
										margin: '14px 10px 10px 32px'
									});
									frag.appendChild(img)       
								}
                                $shishenUl.append(frag);  
                                bool = false;
                            }
                        }
                    }
                // $(window).scroll(function () {
                //         if(window.pageYOffset >= ($shishen.position().top - $(window).height())){                        
                //         if(bool){
                //             for (var i = 0, lens = shishenData.length; i < lens; i++) {
                //                 var img = document.createElement('img');
                //                 // img.src = `../../assets/images/yys/index/content/shishen/${shishenData[i]["id"]}.png`;
                //                 img.src = require(`@/assets/images/yys/index/content/shishen/${shishenData[i]["id"]}.png`);
                //                 $(img).css({
                //                     width: 89,
                //                     height: 92,
                //                     margin: '14px 10px 10px 32px'
                //                 });
                //                 frag.appendChild(img)       
                //             }
                //                 $shishenUl.append(frag);  
                //                 bool = false;
                //             } 
                //         }

                // });
                $rightBtn.click(function () {
                    $shishenUl.stop(true, true);
                    clearInterval(timer);
                    var ulLeft = $shishenUl.position().left;
                    timer = setTimeout(function () {
                        if (ulLeft >= -4800) {
                            $shishenUl.stop(true, true).animate({
                                left: -$shishenShow.width() + ulLeft
                            }, 300)
                        }
                    }, 100)
                });
                $leftBtn.click(function () {
                    $shishenUl.stop(true, true);
                    clearTimeout(timer);
                    var ulLeft = $shishenUl.position().left;
                    timer = setTimeout(function () {
                        if (ulLeft <= -800) {
                            $shishenUl.stop(true, true).animate({
                                left: $shishenShow.width() + ulLeft
                            }, 300)
                        }
                    }, 100)
                });
                $shishenTab.click(function () {
                    $(this).addClass('active');
                    $roleTab.removeClass('active');
                    $mLi.show();
                    $role.hide()
                });
                $roleTab.click(function () {
                    $(this).addClass('active');
                    $shishenTab.removeClass('active');
                    $mLi.hide();
                    $role.show()
                });
                $roleLi.click(function () {
                    index = $(this).index();
                    $roleWrap.stop(true, true).fadeOut();
                    $(this).addClass('on').siblings().removeClass('on');
                    $arrow.removeClass('show');
                    $arrow.eq(index).addClass('show');
                    $roleWrap.eq(index).stop(true, true).fadeIn()
                })
            }());
            (function () {
                var $bannerShow = $('#strategy .leftBanner .banner'),
                    $pics = $bannerShow.find('.pics'),
                    $tabs = $('.leftBanner').find('.tabs li'),
                    $imgW = $pics.find('img:eq(0)').width(),
                    length = $pics.find('img').length,
                    $showBox = $('.txtShow'),
                    $uls = $showBox.find('.uls'),
                    $titles = $('.rightTxt .title a'),
                    i = 0,
                    index = 0,
                    ulLeft;
                setInterval(function () {
                    i++;
                    i %= length;
                    $tabs.eq(i).addClass('on').siblings().removeClass('on');
                    $pics.stop().animate({
                        left: -i * $imgW
                    }, 300)
                }, 2000);
                var ind = {
                    2: 0,
                    4: 1,
                    6: 2,
                    8: 3
                };
                $titles.mouseenter(function () {
                    index = $(this).index();
                    ulLeft = $showBox.width();
                    $(this).addClass('on').siblings().removeClass('on');
                    $uls.stop().animate({
                        left: -ind[index] * ulLeft
                    }, 300)
                })
            }());

            (function () {
                var $tongren = $('#main #tongren'),
                    $shitu = $('#shitu'),
                    $activity = $('#activity'),
                    $tab = $tongren.find('.tab'),
                    $li = $tab.children().not('.lastone'),
                    $span = $tab.find('span'),
                    $i = $tab.find('i'),
                    $uls = $tongren.find('.uls'),
                    $cover = $tongren.find('.cover'),
                    coverW = $cover.width(),
                    index = 0,
                    $pics = $uls.find('ul li img'),
                    $imgs = $shitu.find('img'),
                    $activityImgs = $activity.find('img'),
                    $shituTop = $('#shitu').position().top,
                    tongrenHasLoaded = true,
                    shituHasLoaded = true,
                    activityHasLoaded = true;
					
                var $shishen = $('#character'),
                    $shishenUl = $('.shishenShow ul'),
                    frag = document.createDocumentFragment(),
                    index = 0,
                    bool = true;

                    document.querySelector(".app_right_container").onscroll = function (){
                        if(this.scrollTop >= $shishen.position().top - $(".app_right_container").height()){  
                            if(bool){
								for (var i = 0, lens = shishenData.length; i < lens; i++) {
									var img = document.createElement('img');
									// img.src = `../../assets/images/yys/index/content/shishen/${shishenData[i]["id"]}.png`;
									img.src = require(`@/assets/images/yys/index/content/shishen/${shishenData[i]["id"]}.png`);
									$(img).css({
										width: 89,
										height: 92,
										margin: '14px 10px 10px 32px'
									});
									frag.appendChild(img)       
								}
                                $shishenUl.append(frag);  
                                bool = false;
                            }
                        }
                        if(this.scrollTop >= $tongren.position().top - $(".app_right_container").height()){  
                            if(tongrenHasLoaded){
                              $pics.each(function (index,item) {
                                $(item).attr('src',$(item).attr('data-src'));
                              });
                              tongrenHasLoaded = false;
                            }
                        }
                        
                        if(this.scrollTop >= $shituTop - $(".app_right_container").height()){  
                            if(shituHasLoaded){
                              $imgs.each(function (index,item) {
                                $(item).attr('src',$(item).attr('data-src'));
                              });
                              shituHasLoaded = false;
                            }
                        }
                        
                        if(this.scrollTop >= $shituTop - $(".app_right_container").height()){  
                            if(activityHasLoaded){
                              $activityImgs.each(function (index,item) {
                                $(item).attr('src',$(item).attr('data-src'));
                              });
                              activityHasLoaded = false;
                            }
                        }
                    }
                    
                $li.mouseenter(function () {
                    index = $(this).index();
                    $span.eq(index).addClass('active').siblings().removeClass('active');
                    $i.eq(index).addClass('on').siblings().removeClass('on');
                    $uls.stop().animate({
                        left: -index * coverW
                    }, 300);
                });
            }());
        });
    }
}
</script>
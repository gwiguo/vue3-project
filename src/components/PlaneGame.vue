<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
body,
html {
  overflow: hidden;
  height: 100%;
  // background-color: #000;
}
li {
  list-style: none;
}
h1 {
  height: 50px;
  padding-bottom: 100px;
  line-height: 50px;
}
#wrap {
  overflow: hidden;
  position: relative;
  // left: 50%;
  // margin-left: -300px;
  // width: 600px;
  height: 100%;
  background-image: url("../assets/images/plane-game/bg_1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

#gameSelect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  color: red;
  text-align: center;
}

#gameSelect > ul {
  margin-top: 100px;
}

#gameSelect ul li {
  width: 150px;
  height: 50px;
  margin: 10px 0;
  line-height: 50px;
  font-size: 32px;
  cursor: pointer;
}

#gameSelect ul li:hover {
  color: #fff;
}

#logo {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background-image: url("../assets/images/plane-game/regou.gif");
  background-size: 100% 100%;
}

#gameStart {
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  cursor: none;
}

#myplane {
  position: absolute;
  top: 0;
  left: 0;
}

.bullet {
  position: absolute;
  top: 0;
  left: 0;
}

.enemy,
.boom {
  position: absolute;
  top: 0;
  left: 0;
}

#gameStart #scoreBox {
  width: 200px;
  height: 100px;
  font-size: 25px;
  text-align: center;
  line-height: 100px;
  color: red;
}

#gameOver {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 300px;
  color: #fff;
  font-size: 32px;
  line-height: 50px;
  padding-top: 100px;
  text-align: center;
}

#overScore {
  color: #f00;
}
</style>
<template>
  <div id="wrap">
    <!-- 选择难度 -->
    <div id="gameSelect">
      <h1>热狗大战</h1>
      <div id="logo"></div>
      <ul>
        <li>很少热狗</li>
        <li>正常热狗</li>
        <li>好多热狗</li>
        <li>超多热狗</li>
      </ul>
    </div>
    <!-- 开始游戏 -->
    <div id="gameStart">
      <div id="scoreBox">
        <h2>0</h2>
      </div>
    </div>
    <!-- 游戏结束 -->
    <div id="gameOver">
      <p>游戏结束！</p>
      您的积分是：
      <p id="overScore"></p>
    </div>
  </div>
</template>
<script>
export default {
  name: "PlaneGame",
  data() {
    return {
      wrapBox:null
    };
  },
  methods:{ 
    planeMoveCb (e) {
      this.nowLeft = e.pageX - this.wrapBox.offsetLeft - (this.plane.width / 2);
      this.nowTop = e.pageY - this.wrapBox.offsetTop - (this.plane.height / 2);

      if (this.nowLeft < this.maxLeft) this.nowLeft = this.maxLeft;
      if (this.nowLeft > this.maxRight) this.nowLeft = this.maxRight
      if (this.nowTop < this.maxTop) this.nowTop = this.maxTop;
      if (this.nowTop > this.maxBottom) this.nowTop = this.maxBottom;

      this.plane.style.left = this.nowLeft + 'px';
      this.plane.style.top = this.nowTop + 'px';
    }
  },
  destroyed(){
    document.removeEventListener('mousemove',this.planeMoveCb,false);
  },
  mounted(){
        const that = this;
        var wrapBox = document.getElementById("wrap"),
            selectBox = document.getElementById("gameSelect"),
            startBox = document.getElementById("gameStart"),
            overBox = document.getElementById("gameOver"),
            overScore = document.getElementById("overScore"),
            score = 0,
            num = 0,
            timer1 = null,
            timer2 = null;

        wrapBox.querySelectorAll("li").forEach(function (item, index) {
            item.addEventListener("click", function (e) {

                let time = [400, 300, 200, 100][index]; //敌机生成速度

                new SelectBox().hide(selectBox); //隐藏选择难度界面

                new StartBox().show(startBox);  // 显示游戏界面

                let myplane = new MyPlane(e);  //生成我方飞机

                timer1 = setInterval(function () {
                    new Enemy();  //生成敌机
                }, time);

                timer2 = setInterval(function () {
                    new Bullet(); //生成子弹
                }, time);

            })
        });

        function MyPlane(e) {
            this.createPlane(e); //创建我方飞机
            this.move();  // 我方飞机移动
        }
        MyPlane.prototype = {
            createPlane(e) {
                this.plane = new Image();
                this.plane.id = 'myplane';
                this.plane.src = require("../assets/images/plane-game/myPlane.png");
                this.plane.width = 70;
                this.plane.height = 70;
                this.plane.style.left = e.pageX - wrapBox.offsetLeft - (this.plane.width / 2) + 'px';
                this.plane.style.top = e.pageY - wrapBox.offsetTop - (this.plane.height / 2) + 'px';
                startBox.appendChild(this.plane)
            },
            move() {
                this.maxTop = 0;
                this.maxBottom = document.documentElement.offsetHeight - this.plane.height;
                this.maxLeft = 0;
                this.maxRight = wrapBox.offsetWidth - this.plane.width;
                document.addEventListener('mousemove', that.planeMoveCb.bind(this))
            }
        }

        function Enemy() {
            this.speed = retRandom(3, 8); //敌机下落速度
            this.createEnemy(); //生成敌机
            this.move();  //敌机下落
            this.nowTop = this.enemy.offsetTop; //敌机的top值
        }
        Enemy.prototype = {
            createEnemy() {
                let i = ++num;
                this.enemy = document.createElement("img");
                this.enemy.className = 'enemy';
                this.enemy.classList.add(i % 5 ? 'small' : 'big');
                this.enemy.src = i % 5 ? require("../assets/images/plane-game/enemy_small.png") : require("../assets/images/plane-game/enemy_big.png");
                this.enemy.width = i % 5 ? 70 : 140;
                this.enemy.height = i % 5 ? 70 : 140;
                this.enemy.style.left = retRandom(-this.enemy.width / 2, wrapBox.offsetWidth - this.enemy.width / 2) + 'px';
                this.enemy.style.top = (i % 5 ? -70 : -140) + 'px';
                startBox.appendChild(this.enemy)
            },
            move() {
                function fn() {
                    this.nowTop = this.enemy.offsetTop;
                    this.nowTop += this.speed;
                    this.enemy.style.top = this.nowTop + 'px';
                    if (this.nowTop < wrapBox.offsetHeight) {
                        this.flag = requestAnimationFrame(fn.bind(this))
                    } else {
                        this.enemy.remove();
                    }

                    if (pz(this.enemy, document.getElementById("myplane"))) {
                        cancelAnimationFrame(this.flag)
                        clearInterval(timer1);
                        clearInterval(timer2);
                        new StartBox().hide(startBox);
                        new OverBox().show(overBox, score);
                    }
                }
                fn.call(this);
            }

        }

        function Bullet() {
            this.createBullet(); //创建子弹
            this.fire(); //开火 
            this.nowTop = this.bullet.offsetTop;
        }
        Bullet.prototype = {
            createBullet() {
                this.bullet = new Image();
                this.bullet.className = 'bullet';
                this.bullet.src = require("../assets/images/plane-game/hotDog.png");
                this.bullet.width = 40;
                this.bullet.height = 60;
                this.bullet.style.left = myplane.offsetLeft + 'px';
                this.bullet.style.top = myplane.offsetTop - this.bullet.height / 2 + 'px';
                startBox.appendChild(this.bullet)
            },
            fire() {
                function fn() {
                    [...document.getElementsByClassName("enemy")].forEach(function (enemy) { // 子弹碰撞敌机

                        if (pz(this.bullet, enemy)) {
                            enemy.remove();
                            new Boom(enemy); //生成爆炸图片
                            this.bullet.remove();
                            score += enemy.classList.contains("big") ? 500 : 100;
                            document.getElementsByTagName("h2")[0].innerText = score;
                        }
                    }.bind(this))

                    this.nowTop = this.bullet.offsetTop;
                    this.nowTop -= 10;
                    this.bullet.style.top = this.nowTop + 'px';


                    if (this.nowTop > - this.bullet.offsetHeight) {
                        requestAnimationFrame(fn.bind(this))
                    } else {
                        this.bullet.remove();
                    }
                }
                fn.call(this);
            }
        }
        function Boom(enemy) {
            this.createBoom(enemy);//创建爆炸图片
            this.hideBoom(); //1S后移除爆炸图片
        }
        Boom.prototype = {
            createBoom(enemy) {
                this.boom = new Image();
                this.boom.className = 'boom';
                this.boom.src = enemy.classList.contains("big") ? require("../assets/images/plane-game/boom_big.png") : require("../assets/images/plane-game/boom_small.png");
                this.boom.width = this.boom.height = 64;
                this.boom.style.left = parseInt(enemy.style.left) + 'px';
                this.boom.style.top = parseInt(enemy.style.top) + 'px';
                startBox.appendChild(this.boom);
            },
            hideBoom() {
                setTimeout(function () {
                    this.boom.remove();
                }.bind(this), 1000)
            }
        }

        function SelectBox(box) {
        }
        SelectBox.prototype = {
            hide(box) {
                box.style.display = 'none';
            }
        }
        function StartBox() {
        }
        StartBox.prototype = {
            show(box) {
                box.style.display = 'block'
            },
            hide(box) {
                box.style.display = 'none'
            }
        }
        function OverBox() {
        }
        OverBox.prototype = {
            show(box, score) {
                box.style.display = 'block';
                overScore.innerText = score;
            }
        }
        function retRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        function pz(ele1, ele2) {

            var L1 = ele1.offsetLeft,
                U1 = ele1.offsetTop,
                R1 = ele1.offsetLeft + ele1.clientWidth,
                B1 = ele1.offsetTop + ele1.clientWidth,

                L2 = ele2.offsetLeft,
                U2 = ele2.offsetTop,
                R2 = ele2.offsetLeft + ele2.clientWidth,
                B2 = ele2.offsetTop + ele2.clientHeight;

            if (R1 >= L2 && B1 >= U2 && L1 <= R2 && U1 <= B2) {
                return true;
            } else {
                return false;
            }

        }
  }
};
</script>
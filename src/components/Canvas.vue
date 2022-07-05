<template>
    <div class="canvas-container">
        <img src="../assets/images/canvas/1.jpg" draggable="false" alt="">
    </div>
</template>
<script>
export default {
    mounted(){
         let oImg = document.querySelector('img');
     oImg.onload = function () {
            let oC = document.createElement('canvas');
            oC.draggable = false;
            oC.style.position = 'absolute';
            oC.style.left = oImg.offsetLeft + 'px';
            oC.style.top = oImg.offsetTop + 'px';
            oC.width = oImg.width;
            oC.height = oImg.height;
            oImg.parentNode.insertBefore(oC,oImg);
            let cxt = oC.getContext('2d');
            cxt.fillStyle = '#bbb';
            cxt.fillRect(0,0,oC.width,oC.height);

            oC.onmousedown = function (e) {
                e = e || event;
                let x = e.pageX - this.offsetLeft;
                let y = e.pageY - this.offsetTop;
                cxt.beginPath();
                cxt.arc(x,y,50,0,2*Math.PI);
                cxt.fill();
                // 合成 显示透明色
                cxt.globalCompositeOperation = 'destination-out';
                cxt.lineCap = 'round';
                cxt.lineWidth = 100;
                this.onmousemove = function (e) {
                    e = e || event;
                    cxt.beginPath();
                    cxt.moveTo(x,y);
                    cxt.lineTo(e.pageX - oC.offsetLeft,e.pageY-oC.offsetTop);
                    cxt.stroke();
                    cxt.beginPath();
                    x = e.pageX - oC.offsetLeft;
                    y = e.pageY - oC.offsetTop;
                }
                this.onmouseup = function () {
                    this.onmousemove = null;
                    this.onmouseup = null;
                }
            }

            oC.ontouchstart = function (e) {
                e = e || event;
                let x = e.pageX - this.offsetLeft;
                let y = e.pageY - this.offsetTop;
                cxt.beginPath();
                cxt.arc(x,y,50,0,2*Math.PI);
                cxt.fill();
                // 合成 显示透明色
                cxt.globalCompositeOperation = 'destination-out';
                cxt.lineCap = 'round';
                cxt.lineWidth = 100;
                this.ontouchmove = function (e) {
                    e.preventDefault();
                    e = e || event;
                    cxt.beginPath();
                    cxt.moveTo(x,y);
                    cxt.lineTo(e.pageX - oC.offsetLeft,e.pageY-oC.offsetTop);
                    cxt.stroke();
                    cxt.beginPath();
                    x = e.pageX - oC.offsetLeft;
                    y = e.pageY - oC.offsetTop;
                }
                this.ontouchend = function () {
                    
                    this.onmousemove = null;
                    this.onmouseup = null;
                }
            }

        }
    }
}
</script>
<style lang="less" scoped>
.canvas-container{
    height: 100%;
    -webkit-user-select: none;
    user-select: none;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>
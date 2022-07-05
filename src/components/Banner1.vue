<template>    
    <div id="banner-container"></div>
</template>
<script>

export default {
    mounted(){
        var wrap = document.getElementById("banner-container");
        var z = 9999;
        var arr = [
            require("../assets/images/banner1/1.jpg"), 
            require("../assets/images/banner1/2.jpg"), 
            require("../assets/images/banner1/3.jpg"), 
            require("../assets/images/banner1/4.jpg"), 
            require("../assets/images/banner1/5.jpg")
        ]
        var index = 0;
        boom(10, 10);
        function boom(row, col) {
            var row = row,
                col = col;
            var parent = document.createElement("div");
            parent.style.zIndex = z;
            z--;
            wrap.appendChild(parent);
            for (var i = 0; i < row; i++) {
                for (var j = 0; j < col; j++) {
                    var oI = document.createElement("i");
                    parent.appendChild(oI);
                    oI.style.width = wrap.clientWidth / col + 'px';
                    oI.style.height = wrap.clientHeight / row + 'px';
                    oI.style.left = j * oI.clientWidth + 'px';
                    oI.style.top = i * oI.clientHeight + 'px';
                    oI.style.backgroundImage = "url(" + arr[index] + ")";
                    oI.style.backgroundSize = '960px 600px';
                    oI.style.backgroundPositionX = oI.offsetWidth * -j + 'px';
                    oI.style.backgroundPositionY = oI.offsetHeight * -i + 'px';
                    oI.style.backgroundRepeat = 'no-repeat';
                }
            }

            var allI = document.querySelectorAll('i');
            setTimeout(function () {
                index++;
                index %= arr.length;
                boom(row, col);
                for (var i = 0; i < allI.length; i++) {
                    allI[i].style.transform = `
                        perspective(800px)
                        translateX(${Math.random() * 600 - 300}px)
                        translateY(${Math.random() * 600 - 300}px)
                        scale(${Math.random() * 2 + 1})
                        rotateX(${Math.random() * 360}deg)
                        rotateY(${Math.random() * 360}deg)
                    `;
                    allI[i].style.opacity = 0;
                    allI[i].style.transition = `all ${Math.random() * 1 + 0.5}s`;
                }
            }, 2000)

            setTimeout(function () {
                wrap.removeChild(parent)
            }, 3500)
        }        
    }
}
</script>

<style lang="less" scoped>

#banner-container {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 960px;
    height: 600px;
    transform: translate(-50%, -50%);

}

#banner-container div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
}

#banner-container i {
    position: absolute;
    perspective: 800px;
}
#banner-container > div{
    height: 600px;
}
</style>
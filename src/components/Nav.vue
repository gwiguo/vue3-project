<template>
  <el-menu default-active="/" router>
    <el-menu-item index="/">
      <template #title>
        <el-icon><HomeFilled /></el-icon>
        <span>首页</span>
      </template>
    </el-menu-item>
    <el-menu-item index="plane-game">
      <template #title>
		<el-icon><Promotion /></el-icon>
		<span>飞机大战</span>
      </template>
    </el-menu-item>
    <el-menu-item index="banner1">
      <template #title>
		<el-icon><PictureFilled /></el-icon>
		<span>酷炫轮播图1</span>
      </template>
    </el-menu-item>
    <el-menu-item index="banner2">
      <template #title>
		<el-icon><PictureFilled /></el-icon>
		<span>酷炫轮播图2</span>
      </template>
    </el-menu-item>
    <el-menu-item index="canvas">
      <template #title>
		<el-icon><Histogram /></el-icon>
		<span>Canvas</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/yys/home">
      <template #title>
		<el-icon><Monitor /></el-icon>
		<span>阴阳师官网</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.el-menu {
  height: 100%;
}
</style>

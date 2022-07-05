<template>
    <el-row id="wrapper">
      <el-col :span="4">
        <Nav></Nav>      
      </el-col>
      <el-col :span="20" class="app_right_container">
        <router-view/> 
      </el-col>
    </el-row>
</template>

<script>

import Nav from '@/components/Nav'

export default {
  components:{
    Nav
  },
  name: 'App'
}
</script>

<style lang="less">
body,html{
  height: 100%;
  margin: 0;
  padding: 0;
}
#app{
  height: 100%;
  overflow: hidden;
  #wrapper{
    margin-right: 0 !important;
    height: 100%;
    .app_right_container{
      overflow-y: auto;
    }
    .el-col{
      height: 100%;
    }
  }
}
</style>

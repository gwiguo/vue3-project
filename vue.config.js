const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    host:"localhost",
    port:"8080",
    proxy:"http://localhost:8000"
  },
  lintOnSave:false,
  pluginOptions:{
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, "./src/assets/less/parameter.less")
      ]
    }
  }
})

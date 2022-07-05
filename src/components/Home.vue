<style lang="less" scoped>
.home {
  padding: 40px;
  padding-bottom: 0;
  .search-container .el-col > div {
    margin-bottom: 5px;
  }
  :deep(.el-dialog){
	height: 95%;
	margin-bottom: 0;
	.el-dialog__body{
		height: calc(~"100% - 110px");
		padding-bottom: 0;
		.el-row{
			height: 50%;
		}
		.el-col,.canvas-container{
			height: 100%;			
		}
	}
	.el-dialog__footer{
		padding-bottom: 5px;
	}
  }
}
</style>
<template>
  <div class="home">
    <el-row :gutter="20" class="search-container">
      <el-col :span="4">
        <div>姓名</div>
        <el-input
          size="small"
          v-model.trim="payload.uname"
          @input="handleChangeInput"
          clearable
          @keyup.enter="handleChangeInput"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <div>性别</div>
        <el-input
          size="small"
          v-model.trim="payload.usex"
          @input="handleChangeInput"
          clearable
          @keyup.enter="handleChangeInput"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <div>出生年份</div>
        <el-input
          size="small"
          v-model.trim="payload.ubirth"
          @input="handleChangeInput"
          clearable
          @keyup.enter="handleChangeInput"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <div>专业</div>
        <el-input
          size="small"
          v-model.trim="payload.uzy"
          @input="handleChangeInput"
          clearable
          @keyup.enter="handleChangeInput"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <div>省份</div>
        <el-input
          size="small"
          v-model.trim="payload.uprovince"
          @input="handleChangeInput"
          clearable
          @keyup.enter="handleChangeInput"
        ></el-input>
      </el-col>
      <el-col :span="4">
        <div>地址</div>
        <el-input
          size="small"
          v-model.trim="payload.uaddress"
          @input="handleChangeInput"
          clearable
          @keyup.enter="handleChangeInput"
        ></el-input>
      </el-col>
      <!-- <el-col :span="2">
        <div>&nbsp;</div>
        <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
      </el-col> -->
    </el-row>
    <el-table
      :data="table_data"
      border
      :height="table_height"
      v-loading="table_loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      style="margin-top: 20px"
    >
      <el-table-column prop="uname" label="姓名" width="120" align="center">
      </el-table-column>
      <!-- <el-table-column prop="uid" label="身份证" align="center" width="180">
      </el-table-column> -->
      <el-table-column prop="usex" label="性别" align="center" width="80">
      </el-table-column>
      <el-table-column
        prop="ubirth"
        label="出生年份"
        align="center"
        width="130"
      >
      </el-table-column>
      <el-table-column prop="uzy" label="专业" align="center" width="200">
      </el-table-column>
      <el-table-column prop="uprovince" label="省份" align="center" width="130">
      </el-table-column>
      <el-table-column
        prop="uaddress"
        label="地址"
        show-overflow-tooltip
        align="center"
      >
      </el-table-column>
      <el-table-column prop="uphone" label="手机号" align="center" width="150">
      </el-table-column>
      <!-- <el-table-column label="操作" width="120" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column> -->
    </el-table>
    <el-row style="margin-top: 20px">
      <el-col :span="24">
        <el-button
          icon="el-icon-s-data"
          type="success"
          size="small"
          @click="dialogVisible = true"
          >数据可视化</el-button
        >
      </el-col>
    </el-row>
    <el-dialog
      v-model="dialogVisible"
      width="90%"
      top="20px"
      @open="get_user_stat"
    >
      <el-row>
        <el-col :span="10">
          <div id="sex-canvas" class="canvas-container"></div>
        </el-col>
        <el-col :span="14">
          <div id="birth-canvas" class="canvas-container"></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div id="zy-canvas" class="canvas-container"></div>
        </el-col>
        <el-col :span="12">
          <div id="province-canvas" class="canvas-container"></div>
        </el-col>
      </el-row>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false" size="small">关 闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import * as echarts from "echarts";

export default {
  name: "Home",
  data() {
    return {
      table_data: [],
      table_loading: true,
      dialogVisible: false,
      payload: {},
      table_height: window.innerHeight - 200,
      sexChart:null,
      birthChart:null,
      zyChart:null,
      provinceChart:null,
    };
  },
  methods: {
    get_data() {
      this.table_loading = true;
      axios
        .post("/queryUser", this.payload)
        .then((res) => {
          if (res.data.code == 0) {
            this.table_data = res.data.list;
          } else {
            this.table_data = [];
            this.$message.error(res.data.err_message);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.table_loading = false;
        });
    },
    get_user_stat() {
      axios
        .post("/userStat")
        .then((res) => {
          if (res.data.code == 0) {
            const data = res.data.data;

            !this.sexChart &&
              (this.sexChart = echarts.init(
                document.getElementById("sex-canvas")
              ));

            this.sexChart.setOption({
              color:["#7ED3F4","#FE6F6F"],
              title: {
                text: "学生性别",
                textAlign: "center",
                left: "50%",
              },
              tooltip: {
                trigger: "item",
                formatter: '{a} <br/>{b} : {c} ({d}%)'
              },
              legend: {
                orient: 'vertical',
                left: 'left',
                top:"center"
              },
              series: [
                {
                  name: "性别",
                  type: "pie",
                  radius: ["40%", "70%"],
                  avoidLabelOverlap: false,
                  itemStyle: {
                    borderRadius: 10,
                    borderColor: "#fff",
                    borderWidth: 2,
                  },
                  label: {
                    show: false,
                    position: "center",
                  },
                  emphasis: {
                    label: {
                      show: true,
                      fontSize: "40",
                      fontWeight: "bold",
                    },
                  },
                  labelLine: {
                    show: false,
                  },
                  data: [
                    { value: data.sex["男"], name: "男" },
                    { value: data.sex["女"], name: "女" },
                  ],
                },
              ],
            });


            !this.birthChart &&
              (this.birthChart = echarts.init(
                document.getElementById("birth-canvas")
              ));

            this.birthChart.setOption({
              title: {
                text: "学生出生年份",
                textAlign: "center",
                left: "50%",
              },
              dataset: [
                {
                  dimensions: ["zy", "year"],
                  source: [
                    ...Object.keys(data.birth).map((year) => [
                      year,
                      data.birth[year],
                    ]),
                  ],
                },
                {
                  transform: {
                    type: "sort",
                    config: { dimension: "year", order: "desc" },
                  },
                },
              ],
              xAxis: {
                type: "category",
                axisLabel: { interval: 0, rotate: 30 },
              },
              yAxis: {},
              series: {
                type: "bar",
                encode: { x: "zy", y: "year" },
                datasetIndex: 1,
              },
            });


            !this.zyChart &&
              (this.zyChart = echarts.init(
                document.getElementById("zy-canvas")
              ));

            this.zyChart.setOption({
              title: {
                text: "专业分布",
                textAlign: "center",
                left: "10%",
              },
              series: [
                {
                  name: 'Nightingale Chart',
                  type: 'pie',
                  radius: [50, 250],
                  center: ['50%', '50%'],
                  roseType: 'area',
                  itemStyle: {
                    borderRadius: 8
                  },
                  data: Object.keys(data.zy).map(zy=>({value:data.zy[zy],name:zy}))
                }
              ]
            });


          } else {
            this.$message.error(res.data.err_message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleIconClick() {
      console.log("click");
    },
    handleChangeInput() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.get_data();
      }, 1000);
    },
  },
  created() {
    this.get_data();
  },
};
</script>
// fetch("http://www.gdlgxy.edu.cn/zscx/queryuser.php").then(res=>res.json())
//     .then(res=>{
//         let str = ``;
//         const list = res.filter(o=>o.ucc=='专升本');
//         list.forEach(o=>{
//             delete o.udemo;
//             delete o.ucc;
//             delete o.uxy;
//             delete o.ucode;
//             delete o.id;
//         console.log(o.uaddress.split("/")[0])

//             const sex = o.uid.substr(-2,1) % 2 == 0 ? '女':'男';
//             const birth = o.uid.substr(6,4);
//             str += `INSERT INTO \`jike\` (\`uid\`, \`uname\`, \`usex\`, \`ubirth\`, \`uzy\`, \`uaddress\`, \`uphone\`) VALUES('${o.uid}','${o.uname}','${sex}','${birth}','${o.uzy}','${o.uaddress}','${o.uphone}');\n`;
            
//         });
        
//         // console.log(str)
//     })

// CREATE TABLE `jike` (
//     `id` INT(11) NOT NULL AUTO_INCREMENT,
//     `uid` VARCHAR(255) DEFAULT '' COMMENT '身份证',
//     `uname` VARCHAR(255) DEFAULT '' COMMENT '姓名',
//     `usex` VARCHAR(255) DEFAULT '' COMMENT '性别',
//     `ubirth` VARCHAR(255) DEFAULT '' COMMENT '出生年份',
//     `uprovince` VARCHAR(255) DEFAULT '' COMMENT '省份',
//     `uzy` VARCHAR(255) DEFAULT '' COMMENT '专业',
//     `uaddress` VARCHAR(255) DEFAULT '' COMMENT '地址',
//     `uphone` VARCHAR(255) DEFAULT '' COMMENT '手机号',
//   PRIMARY KEY (`id`)
// ) ENGINE = InnoDB DEFAULT CHARSET = utf8 ROW_FORMAT = DYNAMIC COMMENT = '广东理工学院'
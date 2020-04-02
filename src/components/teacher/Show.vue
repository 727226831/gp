<template>
  <el-container class="h-container">
    <el-header>
      <div>
        <img src="../../assets/logo.png" alt />
        <span>学情问卷调查问卷系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#ffd04b">
          <!-- 一级菜单 -->
          <el-submenu index="1">
            <el-button
              @click="make"
              style="width:100%;background-color: #333744;color:white;border:0"
            >问卷制作</el-button>
            <!-- 模板 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>问卷制作</span>
            </template>
            <!-- 二级菜单 -->
            <!-- <el-menu-item index="1-4-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
            </el-menu-item>-->
          </el-submenu>

          <el-submenu index="2">
            <!-- 模板 -->
            <!-- <el-button
              @click="show"
              style="width:100%;background-color: #333744;color:white;border:0"
            >学情展示</el-button>-->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>学情展示</span>
            </template>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <!-- 卡片视图区域 -->
          <el-card>
            <!--2. 为 ECharts 准备一个具备大小（宽高）的 DOM -->
            <div class="canvas" id="main1" style="width: 600px;height:600px;"></div>
            <div class="canvas" id="main2" style="width: 600px;height:600px;"></div>
            <div class="canvas" id="main3" style="width: 600px;height:600px;"></div>
            <div class="canvas" id="main4" style="width: 600px;height:600px;"></div>
            <div class="canvas" id="main5" style="width: 600px;height:600px;"></div>
            <div class="canvas" id="main6" style="width: 600px;height:600px;"></div>
            <div class="canvas" id="main7" style="width: 600px;height:600px;"></div>
            <div class="canvas" id="main8" style="width: 600px;height:600px;"></div>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
  <script>
// 1.导入
import echarts from "echarts";
import _ from "lodash";
export default {
  data() {
    return {
      //需要合并的数据
      // options: {
      //   title: {
      //     text: "用户来源"
      //   },
      //   tooltip: {
      //     trigger: "axis",
      //     axisPointer: {
      //       type: "cross",
      //       label: {
      //         backgroundColor: "#E9EEF3"
      //       }
      //     }
      //   },
      //   grid: {
      //     left: "3%",
      //     right: "4%",
      //     bottom: "3%",
      //     containLabel: true
      //   },
      //   xAxis: [
      //     {
      //       boundaryGap: false
      //     }
      //   ],
      //   yAxis: [
      //     {
      //       type: "value"
      //     }
      //   ]
      // }
    };
  },
  methods: {
    logout() {
      // window.sessionStorage.clear()
      this.$router.push("/login");
    },
    make() {
      this.$router.push("/make");
    }
  },
  mounted() {
    //3. 基于准备好的dom，初始化echarts实例
    var myChart1 = echarts.init(document.getElementById("main1"));
    var myChart2 = echarts.init(document.getElementById("main2"));
    var myChart3 = echarts.init(document.getElementById("main3"));
    var myChart4 = echarts.init(document.getElementById("main4"));
    var myChart5 = echarts.init(document.getElementById("main5"));
    var myChart6 = echarts.init(document.getElementById("main6"));
    var myChart7 = echarts.init(document.getElementById("main7"));
    var myChart8 = echarts.init(document.getElementById("main8"));

    // const { data: res } = await this.$http.get("reports/type/1");
    // if (res.meta.status !== 200) {
    //   return this.$message.error("获取折线图数据失败！");
    // }

    //4.准备数据和配置项
    var option0 = {
      title: {
        text: "问题1"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ["选择人数"]
      },
      xAxis: {
        data: ["从不", "偶尔", "经常", "总是"]
      },
      yAxis: {},
      series: [
        {
          name: "选择人数",
          type: "bar",
          data: [36, 10, 10, 20]
        }
      ]
    };

    var option1 = {
      title: {
        text: "问题2"
      },
      tooltip: {},
      series: [
        {
          name: "选择人数",
          type: "pie",
          radius: "55%",
          data: [
            { value: 36, name: "从不" },
            { value: 10, name: "偶尔" },
            { value: 10, name: "经常" },
            { value: 20, name: "总是" }
          ]
        }
      ]
    };

    var option2 = {
      title: {
        text: "问题3"
      },
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
      legend: {
        data: ["选择人数"]
      },
      xAxis: {
        data: ["从不", "偶尔", "经常", "总是"]
      },
      yAxis: {},
      series: [
        {
          name: "选择人数",
          type: "bar",
          data: [56, 52, 21, 20]
        }
      ]
    };

    var option3 = {
      title: {
        text: "问题4"
      },
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
      legend: {
        data: ["选择人数"]
      },
      xAxis: {
        data: ["从不", "偶尔", "经常", "总是"]
      },
      yAxis: {},
      series: [
        {
          name: "选择人数",
          type: "bar",
          data: [43, 23, 10, 20]
        }
      ]
    };

    var option4 = {
      title: {
        text: "问题5"
      },
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
      legend: {
        data: ["选择人数"]
      },
      xAxis: {
        data: ["从不", "偶尔", "经常", "总是"]
      },
      yAxis: {},
      series: [
        {
          name: "选择人数",
          type: "bar",
          data: [52, 43, 22, 20]
        }
      ]
    };

    var option5 = {
      title: {
        text: "问题6"
      },
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
      legend: {
        data: ["选择人数"]
      },
      xAxis: {
        data: ["从不", "偶尔", "经常", "总是"]
      },
      yAxis: {},
      series: [
        {
          name: "选择人数",
          type: "bar",
          data: [31, 10, 7, 9]
        }
      ]
    };

    var option6 = {
      title: {
        text: "问题7"
      },
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
      legend: {
        data: ["选择人数"]
      },
      xAxis: {
        data: ["从不", "偶尔", "经常", "总是"]
      },
      yAxis: {},
      series: [
        {
          name: "选择人数",
          type: "bar",
          data: [36, 45, 78, 21]
        }
      ]
    };
    var option7 = {
      title: {
        text: "问题8"
      },
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
      legend: {
        data: ["选择人数"]
      },
      xAxis: {
        data: ["从不", "偶尔", "经常", "总是"]
      },
      yAxis: {},
      series: [
        {
          name: "选择人数",
          type: "bar",
          data: [23, 11, 42, 20]
        }
      ]
    };

    //5.展示数据
    myChart1.setOption(option0);
    myChart2.setOption(option1);
    myChart3.setOption(option2);
    myChart4.setOption(option3);
    myChart5.setOption(option4);
    myChart6.setOption(option5);
    myChart7.setOption(option6);
    myChart8.setOption(option7);
  }
};
</script>
  <style lang="less" scoped>
.h-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: white;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
  img {
    width: 60px;
    height: 60px;
  }
}
.el-aside {
  background-color: #333744;
}
.canvas {
  float: left;
  margin: 0;
}
</style>
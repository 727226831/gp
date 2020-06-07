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
            <!-- 模板 -->
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>问卷</span>
            </template>
            <!-- 二级菜单 -->
            <!-- <el-menu-item index="1-4-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
            </el-menu-item>-->
          </el-submenu>
          <!-- <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>主页</span>
            </template>
          </el-submenu>-->
        </el-menu>
      </el-aside>
      <el-container>
        <el-card class="main">
          <!-- 问卷内容 -->
          <el-form :model="answerValidateForm" ref="answerValidateForm" label-width="100px">
            <div class="answer_title">
              <el-form-item v-model="answerTitle">
                <h1>{{answerTitle}}</h1>
              </el-form-item>
            </div>
            <el-form-item v-for="(question,i) in answerValidateForm.question" :key="i">
              <div class>{{i+1+". "}}{{question.title}}</div>
              <el-checkbox-group v-model="answerValidateForm.type">
                <el-checkbox
                  :label="question.title+item.value"
                  v-for="(item,index) in answerValidateForm.option"
                  :key="index"
                  border
                  size="mini"
                >{{item.title}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="subDialogVisible = true">提交</el-button>
              <!-- <el-button @click="resetForm('answerValidateForm')">重置</el-button> -->
            </el-form-item>
          </el-form>
        </el-card>

        <!-- 提交问卷对话框 -->
        <el-dialog title="提交试卷" :visible.sync="subDialogVisible" width="50%">
          <span>
            <h1>提交成功</h1>
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="subDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
          </span>
        </el-dialog>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      subDialogVisible: false,

      answerTitle: "学生学习情况问卷调查",
      answerValidateForm: {
        title: "",
        value: "",
        type: [],
        question: [
          { title: "0000000000000000000000000" },
          { title: "1111111111111111111111111" },
          { title: "2222222222222222222222222" },
          { title: "3333333333333333333333333" },
          { title: "4444444444444444444444444" },
          { title: "5555555555555555555555555" },
          { title: "6666666666666666666666666" },
          { title: "7777777777777777777777777" },
          { title: "8888888888888888888888888" }
        ],
        option: [
          { title: "A.从不", value: 0 },
          { title: "B.偶尔", value: 1 },
          { title: "C.经常", value: 2 },
          { title: "D.总是", value: 3 }
        ]
      }
    };
  },
  methods: {
    logout() {
      // window.sessionStorage.clear()
      this.$router.push("/login");
    },

    submit() {
      this.subDialogVisible = false;
      location.reload()
    }
    // resetForm() {
    //   console.log(this.$refs.resetFields());
    // }
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
.answer_title {
  border: 0;
  margin: 0;
  text-align: center;
}
.main {
  width: 1000px;
  margin: 0 auto;
}
</style>
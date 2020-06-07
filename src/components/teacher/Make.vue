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
            <el-button
              @click="show"
              style="width:100%;background-color: #333744;color:white;border:0"
            >学情展示</el-button>
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span @click="show">学情展示</span>
            </template>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <el-card>
          <el-form :model="MakeValidateForm" ref="MakeValidateForm" label-width="100px">
            <el-form-item label="标题" prop="headline">
              <el-input v-model="MakeValidateForm.text" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-alert title="设置的问题一定能用“从不”，“偶尔”，“经常”，“总是”回答" type="info" :closable="false" center></el-alert>
            <el-form-item
              v-for="(title, index) in MakeValidateForm.titles"
              :key="title.key"
              :prop="'titles.' + index + '.value'"
              :rules="{
                  required: true, message: '问题不能为空', trigger: 'blur'
                }"
            >问题{{index+1}}.
              <el-input v-model="title.value" placeholder="请输入问题"></el-input>
              <el-button @click.prevent="removeTitle(title)">删除</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('MakeValidateForm')">提交</el-button>
              <el-button @click="addTitle">新增问题</el-button>
              <el-button @click="resetForm('MakeValidateForm')">重置</el-button>
            </el-form-item>
          </el-form>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
  <script>
export default {
  data() {
    return {
      MakeValidateForm: {
        headline: "",
        type: [],
        text: "学情问卷调查",
        select: "",
        titles: [
          {
            value: ""
          }
        ],
      },
    };
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
    show() {
      this.$router.push("/show");
    },
    // 添加问题
    addTitle() {
      this.MakeValidateForm.titles.push({
        value: ""
      });
    },
    // 删除问题
    removeTitle(title) {
      console.log(title);
      
      var index = this.MakeValidateForm.titles.indexOf(title);
      console.log(this.MakeValidateForm.titles.indexOf(title));
      
      if (index !== -1) {
        this.MakeValidateForm.titles.splice(index, 1);
      }
    },
    // 重置问题
    resetForm(MakeValidateForm) {
      this.$refs[MakeValidateForm].resetFields();
    },
    // 提交问卷
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (!valid) {
           this.$message.error("提交表单失败！");
          return ;
        }
        this.$message.success("提交表单成功！");
         location.reload()
      });
    }
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
.checkbox-group {
  margin-top: 20px;
}
</style>
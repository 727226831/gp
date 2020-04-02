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
              <span>主页</span>
            </template>
            <!-- 二级菜单 -->
            <!-- <el-menu-item index="1-4-1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
            </el-menu-item>-->
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <el-card>
          <!-- 添加区域 -->
          <el-row :gutter="20">
            <el-col :span="4">
              <el-button type="primary" @click="addDialogVisible = true">添加用户</el-button>
            </el-col>
          </el-row>

          <el-table :data="userlist" border stripe>
            <el-table-column label="#" type="index"></el-table-column>
            <el-table-column label="姓名" prop="username"></el-table-column>
            <el-table-column label="角色" prop="role"></el-table-column>

            <el-table-column label="操作" width="180px">
              <!-- 删除角色按钮 -->
              <template slot-scope="scope">
                <el-button
                  :data="userlist.value"
                  type="danger"
                  icon="el-icon-delete"
                  size="mini"
                  @click="removeUser(scope.$index)"
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>

        <!-- 添加用户对话框 -->
        <el-dialog
          title="添加用户"
          :visible.sync="addDialogVisible"
          width="50%"
          @close="addDialogClosed"
        >
          <!-- 内容主体区域 -->
          <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="addForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="addForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item prop="role">
              <el-select v-model="addForm.role" placeholder="请选择角色">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.value"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <!-- 底部区域 -->
          <span slot="footer" class="dialog-footer">
            <el-button @click="addDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="addUser(addForm)">确 定</el-button>
          </span>
        </el-dialog>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import ShowVue from "../teacher/Show.vue";
export default {
  data() {
    return {
      //控制添加用户对话框显示与隐藏
      addDialogVisible: false, //添加用户的表单数据
      addForm: {
        role: "学生",
        username: "小米米",
        password: "111111"
      },
      userlist: [
        { username: "老王", role: "管理员" },
        { username: "张三", role: "学生" },
        { username: "周文", role: "老师" },
        { username: "andy", role: "老师" },
        { username: "老李", role: "管理员" },
        { username: "王五", role: "学生" },
        { username: "Alice", role: "老师" },
        { username: "andy", role: "老师" },
        { username: "老大", role: "管理员" },
        { username: "小红", role: "学生" },
        { username: "霞洛", role: "老师" },
        { username: "欧欧", role: "老师" }
      ],
      //添加表单的验证规则对象
      addFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "用户名的长度在3~10个字符之间",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "用户名的长度在6~15个字符之间",
            trigger: "blur"
          }
        ],
        role: [{ required: true, message: "请选择你的角色", trigger: "change" }]
      },
      options: [
        {
          value: "学生"
        },
        {
          value: "老师"
        },
        {
          value: "管理员"
        }
      ]
    };
  },

  methods: {
    logout() {
      // window.sessionStorage.clear()
      this.$router.push("/login");
    },

    async removeUser($index) {
      const confirmResult = await this.$confirm(
        "此操作将永久删除该用户, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).catch(err => err);
      //如果用户确认删除，则返回值为字符串confirm
      //如果用户取消删除，则返回值为字符串 cancel
      if (confirmResult !== "confirm") {
        return this.$message.info("已取消删除！");
      }
      this.userlist.splice($index, 1);
      this.$message.success("删除用户成功！");
    },
    //监听添加用户对话框关闭事件
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },
    //点击按钮添加用户
    addUser(addForm) {
      this.$refs.addFormRef.validate(async valid => {
        // console.log(valid)
        if (!valid) return;
        // console.log(this.addForm);

        console.log(addForm);
        this.userlist.push(addForm);

        this.$message.success("添加用户成功！");
        //隐藏添加用户的对话框
        this.addDialogVisible = false;
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
.el-row {
  margin-bottom: 20px;
}
</style>
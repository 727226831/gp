<template>
  <div class="register_container">
    <div class="register_box">
      <!-- 头部区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt srcset />
      </div>
      <!-- 注册表单区域 -->
      <el-form
        ref="registerFormRef"
        :model="registerForm"
        :rules="registerFormRules"
        label-width="0px"
        class="register_form"
      >
        <!-- 角色 -->
        <el-form-item prop="role">
          <el-select v-model="registerForm.role" placeholder="请选择角色">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.value"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="registerForm.username" prefix-icon="iconfont icon-user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="registerForm.password"
            prefix-icon="iconfont icon-3702mima"
            type="password"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="register">注册</el-button>
          <el-button type="info" @click="resetregisterForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //这是登录表单的数据绑定对象
      registerForm: {
        role: "",
        username: "",
        password: ""
      },
      //这是表单的验证对象
      registerFormRules: {
        role: [
          { required: true, message: "请选择你的角色", trigger: "change" }
        ],
        //验证用户名是否合法
        username: [
          { required: true, message: "请输入注册名称", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ],
        //验证密码是否合法
        password: [
          { required: true, message: "请输入注册密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ]
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
    //点击重置按钮，重置表单
    resetregisterForm() {
      this.$refs.registerFormRef.resetFields();
    },
    register() {
      this.$refs.registerFormRef.validate(async valid => {
        if (!valid) return;
        const value = this.registerForm.role;
        if (value === "选项1") {
          this.$router.push("/login");
          this.$message.success("注册成功");
        } else if (value === "选项2") {
          this.$router.push("/login");
          this.$message.success("注册成功");
        } else {
          this.$router.push("/login");
          this.$message.success("注册成功");
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.register_container {
  background-color: #2b4b6b;
  height: 100%;
}

.register_box {
  width: 450px;
  height: 340px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.register_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.el-select {
  width: 100%;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
<template>
  <el-dialog center title="修改登录密码" :visible.sync="dialogVisible" width="30%">
    <el-form ref="passwordForm" :model="form" :rules="rules" label-width="150px">
      <div>密码长度必须大于等于6位，必须由英文字母和阿拉伯数字混合组成，字母区分大小写。</div>
      <el-form-item label="现密码：" prop="oldPassword">
        <el-input v-model.trim="form.oldPassword" type="password"></el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="newPassword">
        <el-input v-model.trim="form.newPassword" type="password"></el-input>
      </el-form-item>
      <el-form-item label="再次输入新密码：" prop="repeatPassword">
        <el-input v-model.trim="form.repeatPassword" type="password"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="saveData" :loading="loading">保存</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'changePassword',
  data() {
    const newPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value.length < 6) {
        callback(new Error('密码长度最小6位!'));
      } else {
        callback();
      }
    };
    const repeatPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value.length < 6) {
        callback(new Error('密码长度最小6位!'));
      } else if (value !== this.form.newPassword) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      loading: false,
      dialogVisible: false,
      form: {
        oldPassword: '',
        newPassword: '',
        repeatPassword: '',
      },
      rules: {
        oldPassword: {
          required: true,
          message: '请输入现密码',
          trigger: 'blur',
        },
        newPassword: { validator: newPass, required: true, trigger: 'blur' },
        repeatPassword: { validator: repeatPass, required: true, trigger: 'blur' },
      },
    };
  },
  methods: {
    // 关闭窗口
    close() {
      this.dialogVisible = false;
    },
    // 打开窗口
    open() {
      this.dialogVisible = true;
    },
    // 保存数据
    saveData() {
      this.$refs.passwordForm.validate((valid) => {
        if (valid) {
          const params = {
            oldPwd: this.form.oldPassword,
            newPwd: this.form.newPassword,
          };
          this.loading = true;
          window.vaApi.changePassword(params).then((res) => {
            this.loading = false;
            const { status } = res.data;
            if (Number(status) === 1) {
              this.$alert('密码修改成功！', {
                confirmButtonText: '确定',
                callback: () => {
                  this.$store.commit('CLEARINFO');
                  this.$router.push('/introduce');
                },
              });
            }
          });
        } else {
          return false;
        }
        return true;
      });
    },
  },
};
</script>

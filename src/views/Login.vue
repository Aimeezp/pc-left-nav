<template>
  <div id="login-con">
    <div class="login-logo">
      <img src="../assets/image/login-logo.png"/>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px"
             class="demo-ruleForm login-container">
      <div class="title">XXXX平台</div>
      <el-form-item prop="account">
        <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"
                  class="login-form-input"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"
                  class="login-form-input"></el-input>
      </el-form-item>

      <div class="verifyCodek clearfix">
        <div class="left">
          <el-form-item prop="verifyCode">
            <el-input type="text" v-model="verifyCodeIptV" auto-complete="off"
                      @keyup.enter.native="handleSubmit"
                      @blur="verifyCodeBlur"
                      placeholder="验证码" class="login-form-input"></el-input>
          </el-form-item>
        </div>
        <div class="right verifyCode"></div>
      </div>
      <div class="error">{{tipError}}</div>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;"
                   @click.native.prevent="handleSubmit" :loading="logining">登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    const checkVerifyCode = (rule, value, callback) => {
      this.ruleForm.verifyCode = this.verifyCodeIptV;
      if (value === '') {
        callback(new Error('请输入验证码'));
      } else if (value.toLocaleLowerCase() !== this.verifyCodeV) {
        callback(new Error('验证码输入错误'));
      } else {
        callback();
      }
    };
    return {
      logining: false,
      tipError: '验证码不能为空!', // 错误提示
      ruleForm: {
        account: 'admin',
        checkPass: 'admin',
        verifyCode: '',
      },
      verifyCodeV: '',
      verifyCodeIptV: '',
      dynamicValidateForm: {
        domains: [{
          value: '',
        }],
        email: '',
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
        ],
        checkPass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        verifyCode: [
          { validator: checkVerifyCode, trigger: 'blur' },
        ],
      },
    };
  },
  mounted() {
    const self = this;
    // 获取验证码
    self.change();
  },
  watch: {
    verifyCodeIptV() {
      this.verifyCodeIptV = this.Trim(this.verifyCodeIptV, 'g');
    },
  },
  methods: {
    verifyCodeBlur() {
      this.ruleForm.verifyCode = this.verifyCodeIptV;
    },
    handleSubmit() {
      this.ruleForm.verifyCode = this.verifyCodeIptV;
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.logining = true;
          // const loginParams = {
          //   userName: this.ruleForm.account,
          //   password: this.ruleForm.checkPass,
          // };
          // window.vaApi.requestLogin(loginParams).then((res) => {
          //   this.logining = false;
          //   const { status, data } = res.data;
          //   if (Number(status) === 1) {
          //     delete data.authorities;
          //     this.$store.commit('SET_USERINFO', data);
          //     this.$router.push({ path: '/device' });
          //   }
          // });
          this.$router.push({ path: '/device' });
        } else {
          return false;
        }
        return true;
      });
    },
    // 获取验证码
    getCode(n) {
      const all = 'azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789';
      let b = '';
      for (let i = 0; i < n; i += 1) {
        const index = Math.floor(Math.random() * 62);
        b += all.charAt(index);
      }
      return b;
    },
    // 生成验证码
    change() {
      document.querySelector('.verifyCode').innerHTML = this.getCode(4);
      this.verifyCodeV = document.querySelector('.verifyCode').innerHTML.toLocaleLowerCase();
    },
    // 去掉空格
    Trim(str, isGlobal) {
      let result;
      result = str.replace(/(^\s+)|(\s+$)/g, '');
      if (isGlobal.toLowerCase() === 'g') {
        result = result.replace(/\s/g, '');
      }
      return result;
    },
  },
};

</script>

<style lang="scss">
  @import '~scss_vars';

  #login-con {
    .login-logo {
      margin: 20px;
      img {
        width: 100px;
      }
    }
    .login-container {
      border-radius: 5px;
      background-clip: padding-box;
      margin: 70px auto;
      width: 350px;
      padding: 35px 60px 15px 60px;
      background: #fff;
      border: 1px solid #eaeaea;
      box-shadow: 0 0 25px #cac6c6;
      .title {
        margin: 40px auto 65px auto;
        font-family: tahoma;
        font-size: 32px;
        color: #56abae;
        letter-spacing: 0;
        text-align: center;
      }
      .remember {
        margin: 0px 0px 65px 0px;
        .el-checkbox__label {
          color: #9b9b9b;
        }
      }
      .el-button--primary {
        background: #56abae;
        border-radius: 3px;
        width: 300px;
        height: 44px;
        border: none;
        margin-top: 15px;
      }
      .login-form-input input {
        background-color: #f5f5f5;
      }
      .verifyCodek {
        width: 100%;
        height: 40px;
        padding-bottom: 15px;
        .left {
          width: 65%;
          float: left;
        }
        .right {
          width: 25%;
          float: right;
          background-color: #f5f5f5;
          font-size: 18px;
          text-align: center;
          line-height: 40px;
        }
        > div {
          height: inherit;
        }
      }
      .error {
        visibility: hidden;
        height: 20px;
        color: red;
      }
    }
  }
</style>

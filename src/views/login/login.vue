<template>
  <div class="loginBox">
    <van-nav-bar title="登录" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="formData.mobile"
        name="手机号"
        placeholder="请输入手机号"
        :rules="form.rules.mobile"
      />
      <van-field
        v-model="formData.code"
        center
        clearable
        placeholder="请输入短信验证码"
        :rules="form.rules.code"
        class="code"
      >
        <van-button class="codeBtn" slot="button" size="small" round type="info" @click="sendCode"
          >发送验证码</van-button
        >
      </van-field>
    </van-form>
    <van-button type="info" class="loginBtn" @click="onSubmit">登录</van-button>
    <p class="secret">隐私条款</p>
  </div>
</template>
<script>
import { sendCode, login } from '@/api/login';
import { setToken, setRefresh } from '@/utils/token';

export default {
  name: 'login',
  data() {
    return {
      formData: {
        mobile: '',
        code: '',
      },
      form: {
        // 表单校验规则
        rules: {
          moblie: [{ required: true, message: '请填写手机号' }],
          code: [{ required: true, message: '请填写验证码' }],
        },
      },
    };
  },
  methods: {
    onSubmit() {
      login(this.formData).then((res) => {
        window.console.log(res.status);
        if (res.status === 201) {
          setToken(res.data.data.token);
          setRefresh(res.data.data.refresh_token);
          this.$router.push('/index');
        }
      });
    },
    sendCode() {
      sendCode(this.formData.mobile).then((res) => {
        window.console.log(res);
      });
    },
  },
};
</script>
<style lang="less" scoped>
.loginBox {
  text-align: center;
  .van-nav-bar.van-hairline--bottom {
    background-color: #3296fa;
    height: 60px;
    line-height: 70px;
    .van-nav-bar__title.van-ellipsis {
      color: #fff;
    }
  }
  .loginBtn {
    margin-top: 30px;
    width: 90%;
  }
  .secret {
    position: absolute;
    bottom: 20px;
    width: 100%;
    color: #aaa;
    font-size: 14px;
  }
}
</style>
<style lang="less">
.code {
  .van-field__button {
    border-left: 2px solid #ddd;
  }
}
</style>

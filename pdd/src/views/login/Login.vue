<template>
  <div class="login-container">
    <!--登录面板内容部分-->
    <div class="login-inner">
      <!--面板头部-->
      <div class="login-header">
        <!--面板标题-->
        <div class="login-header-title">
          <a href="javascript:;" :class="{current: loginWay}" @click="loginWay = true">短信登录</a>
          <a href="javascript:;" :class="{current: !loginWay}" @click="loginWay = false">密码登录</a>
        </div>
      </div>
      <!--面板表单部分-->
      <div class="login-content">
        <form>
          <!--手机验证码登录部分-->
          <div :class="{current: loginWay}">
            <section class="login-message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button
                      v-if="totalTime === 0"
                      class="get-verification"
                      @click.prevent="handleClickGetCaptcha"
              >
                获取验证码
              </button>
              <button
                      v-else
                      disabled="disabled"
                      class="get-verification"
                      style="color:black"
              >
                已发送({{totalTime}}s)
              </button>
            </section>
            <section class="login-verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login-hint">
              温馨提示：登录时将自动注册，且代表已同意
              <a href="javascript:;">服务协议与隐私政策</a>
            </section>
          </div>
          <!--账号登录部分-->
          <div :class="{current: !loginWay}">
            <section>
              <section class="login-message">
                <input type="tel" maxlength="11" placeholder="用户名" v-model="name">
              </section>
              <section class="login-verification">
                <input type="password" maxlength="20" placeholder="密码" v-model="pwd" v-if="isShowPwd">
                <input type="text" maxlength="20" placeholder="密码" v-else v-model="pwd">
                <div class="switch-show">
                  <img  src="./images/show_pwd.png" alt="" width="20"
                        :class="{on: !isShowPwd}" @click="isShowPwd = !isShowPwd">
                  <img  src="./images/hide_pwd.png" alt="" width="20" :class="{on:isShowPwd}"
                        @click="isShowPwd = !isShowPwd"
                  >
                </div>
              </section>
              <section class="login-message">
                <input type="text" maxlength="4" placeholder="验证码" v-model="captcha">
                <img
                        class="get-verification"
                        src="http://localhost:1688/api/captcha"
                        alt="captcha"
                        @click="$refs.captcha.src='http://localhost:1688/api/captcha'"
                        ref="captcha"
                >
              </section>
            </section>
          </div>

          <button class="login-submit" @click.prevent="login">登录</button>
        </form>
        <button class="login-back" @click="$router.back()">返回</button>
      </div>
    </div>
    <!--空白div覆盖底部tabBar -->
    <div class="bottom"></div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  import {reqSmsCode, reqPhoneCodeLogin} from '/src/api';
  export default {
    data(){
      return{
        loginWay: true,  // true 代表短信登录，false代表用户名密码登录
        phone: '18312830835', // 手机号
        code: '', // 短信验证码
        name: '',  // 用户名
        pwd:'',  // 密码
        captcha: '',  // 图形验证码

        totalTime: 0,  // 倒计时总时间
        isClick: false,  //  是否能够点击倒计时

        isShowPwd: true , // true 显示密码，false不显示

      }
    },
    components:{
      MessageBox
    },
    methods:{
      // 处理点击获取短信验证码逻辑
      async handleClickGetCaptcha(){
        // 验证手机号是否合法
        const {phone} = this;
        if(/1\d{10}/.test(phone)){
          this.isClick = true;
        }else{
          MessageBox('error', '请输入合法手机号');
        }
        if(this.isClick){
          clearInterval(this.timer);
          this.totalTime = 30;
          const result = await reqSmsCode(phone);
          this.timer = setInterval(()=>{
            this.totalTime --;
            if(this.totalTime === 0){
              clearInterval(this.timer);
            }
          }, 1000)
        }
      },

      // 登录逻辑
      async login(){
        if(this.loginWay){
          // 手机登录
          const {phone, code} = this;
          if(!phone){
            MessageBox('error', '手机号不能为空');
            return
          }
          if(!/^1\d{10}$/.test(phone)){
            MessageBox('error', '手机号格式不正确');
            return
          }
          if(!code){
            MessageBox('error', '验证码不能为空');
            return
          }

          //  登录
          this.$store.dispatch('reqSaveUserInfo', {phone,code});
          this.$router.back()

        }else{
          // 密码登录
          const {name, pwd, captcha} = this;
          if(!name){
            MessageBox('error', '用户名不能为空');
            return
          }
          if(!pwd){
            MessageBox('error', '密码不能为空');
            return
          }
          if(!captcha){
            MessageBox('error', '验证码不能为空');
            return
          }

          //  登录
          this.$store.dispatch('reqSaveUserInfo2', {name, pwd, captcha})
          this.$router.back()
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .login-container
    width 100%
    height 100%
    background #fff

    .login-inner
      padding-top 60px
      width 80%
      margin 0 auto

      .login-header
        .login-logo
          font-size 40px
          font-weight bold
          color mediumpurple
          text-align center

        .login-header-title
          padding-top 40px
          padding-bottom 10px
          text-align center

          > a
            color #333
            font-size 14px
            padding-bottom 4px

            &:first-child
              margin-right 40px

            &.current
              color mediumpurple
              font-weight 700
              border-bottom 2px solid mediumpurple

      .login-content
        > form
          > div
            display none

            &.current
              display block

            input
              width 100%
              height 100%
              padding-left 8px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial

              &:focus
                border 1px solid mediumpurple

            .login-message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff

              .get-verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent

                &.phone_right
                  color purple

            .login-verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff

              .switch-show
                position absolute
                right 10px
                top 12px

                img
                  display none

                img.on
                  display block

            .login-hint
              margin-top 12px
              color #999
              font-size 12px
              line-height 20px

              > a
                color mediumpurple

          .login-submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background mediumpurple
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0

        .login-back
          display block
          width 100%
          height 42px
          margin-top 15px
          border-radius 4px
          background transparent
          border: 1px solid mediumpurple
          color mediumpurple
          text-align center
          font-size 16px
          line-height 42px
  .bottom
    height: 1.33rem
    position fixed
    bottom 0
    background-color white
</style>

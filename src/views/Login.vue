<template>
  <div class="login-container">
    <el-form :model="admin_data" :rules="rules2"
             status-icon
             ref="admin_data"
             label-position="left"
             label-width="0px"
             class="demo-ruleForm login-page">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="admin_number">
        <el-input type="text"
                  v-model="admin_data.admin_number"
                  auto-complete="off"
                  placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"
                  v-model="admin_data.admin_password"
                  auto-complete="off"
                  placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-checkbox
        v-model="checked"
        class="rememberme"
      >记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;"
                   @click="handleSubmit"
                   :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Button,Form,FormItem,CheckboxGroup,Checkbox} from 'element-ui';
export default {
  name: "Login",
  components:{
    Button: Button.name,
    Form: Form.name,
    FormItem: FormItem.name,
    CheckboxGroup: CheckboxGroup.name,
    Checkbox: Checkbox.name

  },
  data(){
    return {
      logining: false,
      admin_data: {
        admin_number: 'admin',
        admin_password: '123456',
      },
      rules2: {
        admin_number: [{required: true, message: '请输入账号', trigger: 'blur'}],
        admin_password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      },
      checked: false
    }
  },
  methods:{
    handleSubmit(event){
      this.$refs.admin_data.validate((valid) => {
        if(valid){
          this.logining = true;
          let post_data = this.$qs.stringify({
            admin_number: this.admin_data.admin_number,
            admin_password: this.admin_data.admin_password
          })
          this.$axios({
            url: '/admin_login',
            method: 'post',
            data: post_data
          }).then( response => {
            if (response.data.result === 1){
              this.$router.push({path: response.data.url});
            }
          }).catch( error => {
            console.log(error);
          })
        }else{
          console.log('提交错误！');
          return false;
        }
      })
    }
    // handleSubmit(event){
    //   this.$refs.ruleForm2.validate((valid) => {
    //     if(valid){
    //       this.logining = true;
    //       if(this.ruleForm2.username === 'admin' &&
    //         this.ruleForm2.password === '123456'){
    //         this.logining = true;
    //         sessionStorage.setItem('user', this.ruleForm2.username);
    //         this.$router.push({path: '/main_view'});
    //       }else{
    //         this.logining = false;
    //         this.$alert('账号密码错误', 'info', {
    //           confirmButtonText: 'ok'
    //         })
    //       }
    //     }else{
    //       console.log('提交错误！');
    //       return false;
    //     }
    //   })
    // }
  }
}
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
}
</style>

<template>
  <div>
    <el-form :model="form" :rules="rules" ref="form" class="form">
      
         <!-- //用户名输入框 -->
        <el-form-item class="form-item" prop="username">
            <el-input 
            placeholder="用户名/手机"
            v-model="form.username">
            </el-input>
        </el-form-item>

        <el-form-item class="form-item">
                <el-input 
                placeholder="验证码" >
                    <template slot="append">
                        <el-button @click="handleSendCaptcha">
                            发送验证码
                        </el-button>
                    </template>
                </el-input>
        </el-form-item>

        <el-form-item class="form-item">
                <el-input 
                placeholder="昵称">
                </el-input>
        </el-form-item>


        <el-form-item prop="password">
            <el-input 
            placeholder="密码" 
            type="password"
            v-model="form.password">
            </el-input>
        </el-form-item>

        <el-form-item prop="password">
            <el-input 
            placeholder="确认密码" 
            type="password">
            </el-input>
        </el-form-item>
        <el-button type="primary" class="login" @click="handleSubmit">注册</el-button>
        
      </el-form>
  </div>
</template>

<script>
export default {
    data(){
        return {
            form:{
                username:'',
                password:''
            },
            rules:{
                username:[
                    {required:true,message:'请输入用户名',trigger: 'blur'}
                ],
                password:[
                    {required:true,message:'请输入密码',trigger: 'blur'}
                ]
            }
        }
        
    },
    methods:{
        // 发送验证码
        handleSendCaptcha(){

        },

        // 注册
        handleRegSubmit(){
           console.log(this.form)
        }
    }
}
</script>

<style scoped lang="less">
    .form{
        padding: 25px;

        .form-item{
            margin-bottom:20px;
        }
        .login{
                width: 100%;
        }
    }
    
</style>>

</style>
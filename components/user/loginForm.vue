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

        <el-form-item prop="password">
            <el-input 
            placeholder="密码" 
            type="password"
            v-model="form.password">
            </el-input>
        </el-form-item>

        <el-button type="primary" class="login" @click="handleSubmit">登录</el-button>
        
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
        //提交登录事件
        handleSubmit(){
             console.log(this.form);
        
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
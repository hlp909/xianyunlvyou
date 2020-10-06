<template>
  <div>
     <el-form :model="form" :rules="rules" ref="form" class="form">
        <el-form-item class="form-item">
            <el-input placeholder="用户名/手机"></el-input>
            <el-input placeholder="密码" type="password"></el-input>

            <el-button type="primary" class="login">登录</el-button>
        </el-form-item>
      </el-form>


  </div>
</template>

<script>
export default {
    data(){
        return {
            form:{}
        }
    }
}
</script>

<style scoped lang="less">
    .form{
        padding: 25px;

        .form-item{
            margin-bottom:20px;
            .login{
                width: 100%;
            }
        }
        
    }
    
</style>>

</style>
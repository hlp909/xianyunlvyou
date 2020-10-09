<template>
  <div class="header">
      <el-row type="flex" justify="space-between" class="main">
          <!-- logo -->
          <div class="logo">
              <nuxt-link to="/">
                    <img src="http://157.122.54.189:9093/images/logo.jpg" alt="">
              </nuxt-link>
          </div>

          <!-- 菜单 -->
          <el-row type="flex" class="navs">
              <nuxt-link to="/">首页</nuxt-link>
              <nuxt-link to="/post">旅游攻略</nuxt-link>
              <nuxt-link to="/hotel">酒店</nuxt-link>
              <nuxt-link to="/air">国内机票</nuxt-link>
          </el-row>

          <!-- 登录注册 -->
          <div class="header-right">
              <div v-if='$store.state.user.userInfo.token'>
                  <el-dropdown>
                        <span class="el-dropdown-link">
                            <img :src="$axios.defaults.baseURL + 
                            $store.state.user.userInfo.user.defaultAvatar" >
                            {{$store.state.user.userInfo.user.nickname}} 
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item divided>
                                <div @click="handleLoginOut">退出</div>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
              </div>
              
              <div class="login-link" v-else>登录 / 注册</div>
          </div>
         
      </el-row>
  </div>
</template>

<script>
export default {
    methods:{
        handleLoginOut(){
           this.$store.commit('user/claerUserInfo')
           this.$message.success('退出成功')
        }
    }
}
</script>

<style scoped lang='less'>
    .header{
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #ddd;
        box-shadow: 0 2px 2px #eee;
        .main{
            width: 1000px;
            margin: 0 auto;
            .logo{
                margin-top: 9px;
                img{
                    display: block;
                    width: 156px;
                    height: 42px;
                }
            }
            .navs{
                flex: 1;
                a{
                    display: block;
                    padding: 0 20px;
                    height: 60px;
                    box-sizing: border-box;
                    &:hover{
                    color: #409eff;
                    border-bottom: 5px #409eff solid;
                    }
                }

                // 高亮样式
                .nuxt-link-exact-active{
                    background:#409eff;
                    color: #FFF!important;
                }
            }
            
            // 登录注册样式  
                .el-dropdown-link{
                    cursor: pointer;
                    img{
                        width:36px;
                        height: 36px;
                        border-radius: 100px;
                        vertical-align: middle;
                        border:2px #fff solid;
                        &:hover{
                            border-color: #409eff;
                        }
                    };
                }
        }
    }
</style>
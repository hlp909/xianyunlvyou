<template>
  <section class="container">
      <h2 class="air-title">
        <span class="iconfont iconfeiji"></span>
        <i>国内机票</i>
      </h2>

      <!-- 搜索广告栏 -->
      <el-row type="flex" justify="space-between">
        <!-- 搜索表单 -->
        <div>搜索</div>

        <!-- banner广告 -->
        <div class="sale-banner">
          <img src="http://157.122.54.189:9093/images/pic_sale.jpeg">
        </div>
      </el-row>

      <el-row type="flex" class="statement">
        <el-col :span="8">
          <i class="iconfont iconweibiaoti-_huabanfuben" style="color:#409eff;"></i>
          <span>100%航协认证</span>
        </el-col>
        <el-col :span="8">
          <i class="iconfont iconbaozheng" style="color:green;"></i>
          <span>出行保证</span>
        </el-col>
        <el-col :span="8">
          <i class="iconfont icondianhua" style="color:#409eff;"></i>
          <span>7x24小时服务</span>
        </el-col>
      </el-row>

      <h2 class="air-sale-title">
        <span class="iconfont icontejiajipiao"></span>
        <i>特价机票</i>
      </h2>
      <!-- 特价机票 -->
      <div class="air-sale">

      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
  .container{
    width: 1000px;
    margin: 0 auto;
    .air-title{
      color: #ffa500;
      margin: 15px 0;
      font-size: 20px;
      font-weight: normal;
      span{
        font-size: 20px;
      }
    }
    .statement{
      margin: 15px 0;
      background: #f5f5f5;
      border: 1px solid #dddddd;
      height: 58px;
      padding: 10px 0;
      box-sizing: border-box;

      >div{
        text-align: center;
        line-height: 38px;
        border-right: 1px solid #ddd ;

          &:last-child{
          border-right: none;
        }
        *{
          vertical-align: middle;
        }
        i{
          font-size: 30px;
        }
      }
    }
      
    .air-sale-title{
      color: #409eff;
      margin: 15px 0;
      font-size: 20px;
      font-weight: normal;
      span{
        font-size: 20px;
      }
    }
  }
</style>
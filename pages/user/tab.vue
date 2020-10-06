<template>
  <div class="container">

      <!-- tab的头部 -->    
      <div class="tab">
          <span 
          v-for="(item,index) in [`张常宁1`,`龚翔宇2`,`袁心玥3`]"
          :key="index"
          @click="handleClick(index)"
          :class="{active:index===current}"
          >
            {{item}}
          </span>
          
      </div>

      <div class="content"
        v-for="(item,index) in [`tab9`,`tab6`,`tab1`]"
        :key="index"
        v-if="current===index">
         {{item}}
      </div>

     
  </div>

</template>

<script>
export default {
    data(){
        return {
            current:0   //初始化当前的tab栏
        }
    },
    methods:{
        handleClick(index){
            this.current=index;
        }
    }
}
</script>

<style scoped lang="less">
.container{
    padding: 50px;
}
.tab span{
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #ccc;
    cursor: pointer;
}

.active{
    color: red;
    background: burlywood;
}

.content{
    padding: 25px;
    color: purple;
}
</style>
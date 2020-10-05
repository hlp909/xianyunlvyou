<template>
  <div>
    <!-- 头部组件 -->
    <Header/>
    <Nuxt />
    <!-- 底部组件 -->
    <Footer/>
  </div>
</template>

<script>
// 导入头部组件
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'

export default {
  // 注册组件
  components:{
    Header,
    Footer
  }
}
</script>

<style>
*{
    margin:0;
    padding:0;
}
    
a{
    color: #333;
    text-decoration: none;
}

/* a:hover{
    text-decoration: none;
} */

ul,li,ol{
    list-style: none;
}

i,em{
   font-style: normal; 
}
</style>

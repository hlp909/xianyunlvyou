<template>
    <div class="container">
        <el-row type="flex" justify="space-between">
            <!-- 订单表单 -->
            <OrderForm @setInfoData="setInfoData" @setAllPrice="setAllPrice" />

            <!-- 侧边栏 -->
           <OrderAside :data="infoData" :allPrice="allPrice"/>
        </el-row>
    </div>
</template>

<script>
import OrderForm from "@/components/air/orderForm.vue";
import OrderAside from "@/components/air/orderAside.vue";

export default {
    data(){
        return {
            //保存订单机票信息
            infoData:{
                seat_infos:{}
            },
            //总金额
            allPrice:0
        }
    },
    components:{
        OrderForm,
        OrderAside
    },
    methods:{
        //接收子组件传递过来的数据
        setInfoData(data){
            this.infoData=data
        },

        setAllPrice(price){
            this.allPrice=price
        }
    }
}
</script>

<style lang="less" scoped>
    .container{
        width:1000px;
        margin:20px auto;
    }
    
    /*aside*/
    .aside{
        width: 350px;
        height: fit-content;
        border:1px #ddd solid;
    }
</style>
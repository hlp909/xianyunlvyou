<template>
    <section class="contianer">
        <el-row  type="flex" justify="space-between">

            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->
                <FlightsFilters :data="cacheFlightsData" @setDataList="setDataList"/>
                
                <!-- 航班头部布局 -->
                    <FlightsListHead/>
                
                <!-- 航班信息 -->
                <div>
                    <FlightsItem 
                    v-for="(item,index) in dataList"
                    :key="index"
                    :data="item"
                    />
                    <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pageIndex"
                        :page-sizes="[5, 10, 15, 20]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
                    </el-pagination>
                </div>
                
            </div>

            <!-- 侧边栏 -->
            <FlightsAside/>
        </el-row>
    </section>
</template>

<script>

import FlightsListHead from "@/components/air/flightsListHead.vue"
import FlightsItem from "@/components/air/flightsItem.vue"
import FlightsFilters from "@/components/air/flightsFilters.vue"
import FlightsAside from "@/components/air/flightsAside.vue"

export default {
    data(){
        return {
            //航班总数据
            flightsData:{
                flights: [],
                info: {},
                options: {}
            },
            //缓存对象：一旦被赋值之后不会被修改
            cacheFlightsData:{
                flights: [],
                info: {},
                options: {}
            },
            //默认当前页
            pageIndex:1,
            // 默认条数
            pageSize:5,
            // 总条数
            total:0,
            // 存当前页的数据
            dataList:[]
        }
    },
     components: {
        FlightsListHead,
        FlightsItem,
        FlightsFilters,
        FlightsAside
    },
    
    methods:{
        // 切换条数的时候触发
        handleSizeChange(value){
            this.pageSize=value
            this.setDataList()
        },

        // 切换页数的时候触发
        handleCurrentChange(value){
            this.pageIndex=value;
            this.setDataList()
            
        },

        // 设置机票列表的数据
        setDataList(arr){
            if(arr){
                this.flightsData.flights=arr;
                this.pageIndex=1
                this.total=arr.length
            }

             this.dataList=this.flightsData.flights.slice(
                // 在总列表中截取出当前页的数据
               (this.pageIndex-1)*this.pageSize,
               this.pageIndex*this.pageSize
            )
        }
    }
    ,
    mounted(){
        //请求机票列表
        this.$axios({
            url:'/airs',
            params:this.$route.query
        }).then(res=>{
            // console.log(res.data);
            //总数据，flightsData.flights是会被修改
            this.flightsData=res.data;
            //缓存对象：一旦被赋值之后不会被修改

            this.cacheFlightsData={...res.data}
            this.dataList=this.flightsData.flights.slice(0,5)
            this.total=this.flightsData.total
        })
    }
}
</script>

<style scoped lang="less">
    .contianer{
        width:1000px;
        margin:20px auto;
    }

    .flights-content{
        width:745px;
        font-size:14px;
    }

    .aside{
        width:240px;
    } 
</style>
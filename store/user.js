//store下的每个文件都是一个store的实例，不需要去手创建
// 只需要保留store的属性，(固定的写法)

export const state=()=>({
    // 采用接口返回的数据结构
    userInfo:{
        token:'',
        user:{}
    }
})

export const mutations={
     // 保存用户信息到state
    setUserInfo(state,data){
        state.userInfo=data
    },
    //清除用户数据
    claerUserInfo(state){
        state.userInfo={
            token:'',
            user:{}
        }
    }
}

//存放公共的异步方法
export const actions={
    login({commit},data){
         //调用登录接口
         return this.$axios({
            url:'/accounts/login',
            method:'POST',
            data
        }).then(res=>{
            commit('setUserInfo',res.data)
            // 调用外部成功的回调函数
            Promise.resolve('')
        })
    },
    register({commit},data){
         // 注册提交
        return this.$axios({
             url: `/accounts/register`,
             method: "POST",
             data
         }).then(res => {
             commit('setUserInfo',res.data)
             Promise.resolve('')
         })
    }
}
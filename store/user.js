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
    }
}

export const actions={}
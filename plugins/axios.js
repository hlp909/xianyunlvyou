import {Message} from 'element-ui'

export default ({$axios})=>{
    //监听axios请求的错误
    $axios.onError(res=>{
        const {message,statusCode}=res.response.data
        if(statusCode===400){
            Message.warning(message)
        }
    })
}
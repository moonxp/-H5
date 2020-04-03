// 处理所有与搜索相关的网络请求
import request from "../until/request";

// 获取验证码
function getcode(apiUrl, mobile) {
    return request({
        url: apiUrl + `user/${mobile}/send `,

    });
}

// 注册
function Login(apiUrl, data) {
    return request({
        url: apiUrl + `user/v1/login `,
        method: "POST",
        data: data
    });
}

function getlist(apiUrl, activityId) {
    return request({
        url: apiUrl + `kc/shareActivity/${activityId}`
    })
}



// 暴露
export {getcode,Login,getlist };
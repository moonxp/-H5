import request from '../until/request';

export const getLiveDetail = (apiUrl, liveId) => {
    return request({
        url: apiUrl + `/live/shareDetail/${liveId}`,
        method: 'get'
    });
};

export const LivePay  = (apiUrl,data) => {
    return request({
        url: apiUrl + `/live/prepay`,
        method: 'post',
        data
    })
}

export const CancelLivePay = (apiUrl, liveId) => {
    return request({
        url: apiUrl + `/live/cancelpay/${liveId}`,
        method: 'post'
    });
};

export const Signup  = (apiUrl,data) => {
    return request({
        url: apiUrl + `/live/singup`,
        method: 'post',
        data
    })
}
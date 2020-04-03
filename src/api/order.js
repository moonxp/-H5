import request from '../until/request';

export const getCode = (apiUrl, mobile) => {
    return request({
        url: apiUrl + `/user/${mobile}/send`,
        method: 'get'
    });
};

export const Cancelpay = (apiUrl, courseId) => {
    return request({
        url: apiUrl + `/course/cancel/${courseId}`,
        method: 'post'
    });
};

export const getAppToken = (apiUrl, code) => {
    return request({
        url: apiUrl + `/wxpay/gettoken/${code}`,
        method: 'get'
    });
};

export const Login = (apiUrl, data) => {
    return request({
        url: apiUrl + `/user/v1/login`,
        method: 'post',
		data
    });
};


export const coursePay  = (apiUrl,data) => {
    return request({
        url: apiUrl + `/course/pay`,
        method: 'post',
        data
    })
}

export const getSignature = (apiUrl, signatrueUrl) => {
    return request({
        url: apiUrl + `/wx/share/signature?address=` + encodeURIComponent(signatrueUrl),
        method: 'get'
    });
};
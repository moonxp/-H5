import request from '../until/request';

export const getUserInfo = (apiUrl, courseId) => {
    return request({
        url: apiUrl + `/course/shareCourse/${courseId}`,
        method: 'get'
    });
};

export const getToken = () => {
    return request({
        url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx04b6648b08d15fc2&secret=02144167eae2b02896f08eb4a7321aed`,
        method: 'get'
    });
};
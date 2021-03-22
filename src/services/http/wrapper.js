import axios from 'axios';
import wrapperSuccessResponse from './WrapperSuccessResponse';
import wrapperErrorResponse from './WrapperErrorResponse';


const defaultHeaders = () => {
    return{
        'Accept': 'application/json',
    }
};

const wrapper = (opts, elementLoading='default',noError=false)=>{
    const callBack = (result, reject)=>{
        axios(opts).then( response => {
            return result(wrapperSuccessResponse(response));
        }).catch(error => {
            return reject(wrapperErrorResponse(error));
        })
    };
    return new Promise(callBack);
};


export const post = (body, url, headers= {}, noError) => {
    return wrapper( {
        method: 'POST',
        url: url,
        data: body,
        headers: {...defaultHeaders(), ...headers}
    }, 'default',noError)
};

export const get = (url, headers= {},resposeType = 'json',elementLoading, noError) => {
    return wrapper( {
        method: 'get',
        url: url,
        headers: {...defaultHeaders(), ...headers},
        data:{},
        resposeType: resposeType
    }, elementLoading,noError)
};

export const del = (url,body, headers= {}, noError) => {
    return wrapper( {
        method: 'delete',
        url: url,
        headers: {...defaultHeaders(), ...headers},
        data:body
    }, 'default',noError)
};

export const put = (body, url, headers= {}, noError) => {
    return wrapper( {
        method: 'put',
        url: url,
        data: body,
        headers: {...defaultHeaders(), ...headers}
    }, 'default',noError)
};

import axios from 'axios';
import vuex from '../store/index';
import { Message } from 'element-ui';

// 该项目所有请求均为 get请求
export function request(url, params) {
  // 请求超过30秒则判定为超时
  const AxiosRequest = axios.create({
    baseURL: vuex.state.CloudMusicApi + url,
    timeout: 30000,
    withCredentials: true,
  });
  if (params) {
    const query = { params };
    return AxiosRequest.get(url, query);
  } else {
    return AxiosRequest.get(url);
  }
}


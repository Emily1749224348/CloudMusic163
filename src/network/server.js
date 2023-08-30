import {request} from "./request"



//获取用户详情
export function getUserDetail(query){
    return request("/user/detail",query);
}

//获取账号信息
export function getUserAccount(){
    return request("/user/account");
}

//刷新登录
export function refreshLogin(){
    return request("/login/refresh");
}

//退出登录
export function logout(){
    return request("/logout");
}

//获取登录状态
export function getLoginStatus(){
    return request("/login/status");
}


//获取用户信息，歌单，收藏，mv，dj数量
export function getUserSubcount(){
    return request("/user/subcount");
}

//获取用户等级信息
// 登录后调用此接口 , 可以获取用户等级信息
//,包含当前登录天数,听歌次数,
//下一等级需要的登录天数和听歌次数,当前等级进度,对应
// http://music.163.com/#/user/level
export function getUserLevel(){
    return request("/user/level");
}

//获取用户歌单
export function getUserPlaylist(query){
    return request("/user/playlist/",query);
}


//获取用户电台
export function getUserDj(query){
    return request("/user/dj",query);
}

//获取用户关注列表
export function getUserFollows(query){
    return request("/user/follows",query);
}

//获取用户粉丝列表
export function getUserFolloweds(query){
    return request("/user/followeds",query);
}

//获取用户动态
export function getUserEvent(query){
    return request("/user/event",query);
}

//获取用户播放记录     一周播放音乐
export function getUserRecord(query){
    return request("/user/record",query);
}

export function getCreatedDjRadio(query){
    return request("/user/audio",query);
}
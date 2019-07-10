import axios from "axios";
import stringify from 'qs-stringify';
const service = axios.create({
	baseURL: process.env.BASE_URL, 
	timeout: 8000 // 请求超时时间
});
/****** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(config => {
	// 	if (myToken) {
	// 		config.headers['token'] = myToken
	// 	}
	if(config.upload){
		
	}else{
		config.method === 'post' ?
			config.data = stringify({ ...config.data}) : 
			config.params = { ...config.data}; 
	}
	//图片上传	
	config.upload ? config.headers['Content-Type'] = 'multipart/form-data' : config.headers['Content-Type'] =
		'application/x-www-form-urlencoded; charset=gbk';
	return config;
}, error => { //请求错误处理
	Promise.reject(error)
})
/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
	response => {
		const res = response;
		//响应正确
		if (res.status === 200) {
			return res.data;
		} else {
		    
		}
	}, error => { //响应错误处理
		return Promise.reject(error)
	}
)
export default service;

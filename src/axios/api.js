import service from './request';
export const getUser = data => {
	return service({
		url: "/api/users",
		method: 'get',
		data
	})
}

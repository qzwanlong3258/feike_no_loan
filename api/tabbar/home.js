import {
	request
} from '@/config/http.js';

import {
	LOAD_HOME_CAROUSEL,LOAD_HOME_NEWS
} from '@/config/api.js';

// 获取首页轮播图
export function loadHomeCarousel(data) {
	return request({
		method: 'GET',
		url: LOAD_HOME_CAROUSEL,
		showLoading: false,
		hideLoading: false,
		data,
	});
}

// 获取首页轮播图
export function loadHomeNews(data) {
	return request({
		method: 'GET',
		url: LOAD_HOME_NEWS,
		showLoading: false,
		hideLoading: false,
		data,
	});
}
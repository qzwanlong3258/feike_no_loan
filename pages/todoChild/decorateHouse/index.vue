<template>
	<view>
		<image :src="img[0]" mode="widthFix" style="width: 100%;display: block;"></image>
		<view class="search" style="height: 50rpx;padding: 40rpx 0;">
			<view class="input" style="height: 50rpx;display: flex;position: relative;">
				<input type="text" v-model="query.name" style="height: 50rpx;margin-left: 30rpx;border-radius: 40rpx;background:#EFEFF1 ;width: 100%;padding-left: 65rpx;font-size:25rpx ;color: #666666;" placeholder-style="font-size:25rpx" placeholder="装修公司">
				<view class="iconfont iconsousuo" style="position: absolute;left: 60rpx;top: 13rpx;font-size: 25rpx;"></view>
				<view style="flex-basis:100rpx;line-height: 50rpx;text-align: center;font-size: 28rpx;margin: 0 20rpx 0 10rpx;font-family: font-family:Microsoft YaHei;" @click="search">搜索</view>
			</view>
		</view>
		<!-- "address": "西安市雁塔区长安南路",地址 <string>
		"cityName": "深圳",城市名称 <string>
		"phone": "18202935570",手机号 <string>
		-"lableList": [标签列表<array>绑定对象
		-{
		"img": "https://www.feiaizn.com/static/img/LOGO.0b54400.png",图片路径 <string>
		"type": "2",1不带图的标签，2带图的标签 <string>
		"content": "预约送全景效果图"标签名称 <string>
		}
		],
		"name": "鲁班装饰",装企名称 <string>
		"lable": "type:2;img:https://www.feiaizn.com/static/img/LOGO.0b54400.png;content:预约送全景效果图,type:2;img:https://www.feiaizn.com/static/img/LOGO.0b54400.png;content:王先生的新家,type:1;img:空;content:10年老店,type:1;img:空;content:3D效果图,type:1;img:空;content:健康守护",标签解析前的数据 <string>
		"id": 12,#注释 <number>
		"uuid": "790a66c8-68eb-4beb-b3a7-e9f2d479cd37",装企uuid <string>
		"storePhotos": "https://www.feiaizn.com/images/20200507100645_tmp_fd5f03faf74e1a5c532efb313701866f9970233a0aba820a.jpg",装企展示图 <string>
		"cid": "dc1f50cb-f2b6-4ce9-b876-787c4a475229"城市id <string> -->
		<view style="padding: 30rpx;">
			<view class="box" v-for="(item,index) in dataList" :key="index" style="height:182rpx ;padding: 30rpx;display: flex;background: rgba(247,247,245,1);;" @click="linkTo(item)">
				<view class="box-left" style="flex-basis: 182rpx;margin-right: 30rpx;">
					<image :src="item.storePhotos" mode="aspectFill" style="width: 182rpx;height: 182rpx;"></image>
				</view>
				<view class="box-right" style="flex: 1;">
					<view style="font-size:30rpx ;font-family:Microsoft YaHei;color: #1B1B1B;">{{item.name}}</view>
					<view class="starOne" style="margin-top: 5rpx;"></view>
					<view class="rateBox" style="display: flex;margin: 10rpx 0;" >
						<view v-for="(items,index) in item.noPicLable" :key="index" style="border: 2rpx solid rgba(220,220,220,1);padding: 0 10rpx;margin-right: 10rpx;font-size: 20rpx;color: #343434;">{{items.content}}</view>
						<!-- <view style="border: 2rpx solid rgba(220,220,220,1);padding: 0 10rpx;margin-right: 10rpx;font-size: 20rpx;color: #343434;">3D效果图</view> -->
						
					</view>
					<view style="display: flex;padding-bottom: 10rpx;" v-for="(items,index) in item.picLable" :key="index">
						<image :src="items.img" mode="aspectFill" style="width: 25rpx;height: 25rpx;"></image>
						<view style="margin-left: 16rpx;font-size: 20rpx;height: 25rpx;line-height: 25rpx;">{{items.content}}</view>
					</view>
					<!-- <view style="display: flex;">
						<image src="https://s1.ax1x.com/2020/05/22/YOnzb8.png" mode="aspectFill" style="width: 25rpx;height: 25rpx;"></image>
						<view style="margin-left: 16rpx;font-size: 20rpx;height: 25rpx;line-height: 25rpx;">预约送全景效果图</view>
					</view> -->
					
				</view>
				
			</view>
		</view>
		
		
		
		
	</view>
</template>

<script>
'use strict';
import {DECORATE_HOUSE,STAR} from '@/config/image.js'
import {SHOP_HOME} from '@/config/router.js'
import {getShopList } from '@/api/decorateHome.js'

var _self;
export default {
	data() {
		return{
			img:[DECORATE_HOUSE,STAR],
			dataList:[],
			query:{
				name:''
			}
		}
	},
	methods:{
		search(){
			this.getList()
		},
		linkTo(item){
			let e =JSON.stringify(item)
			uni.navigateTo({
				url:`${SHOP_HOME}?item=${e}` 
			})
		},
		getList(){
			getShopList(this.query).then(res=>{
				console.log(res)
				_self.dataList=res.list.map(res=>{
					let a=[]
					let b=[]
					res.lableList.map(res=>{
						if(res.type == '1'){
							a.push(res)
						}
						if(res.type == '2'){
							b.push(res)
						}
					})
					
					return {
						...res,
						picLable:b,
						noPicLable:a
					}
				})
				console.log(_self.dataList)
			})
		}
	},
	 onLoad() {
		 _self =this
		this.getList()
	}
};
</script>

<style>
	page{
		background: #FFFFFF;
	}
</style>
<style scoped>
	.starOne{
		
		background:url('https://www.feiaizn.com/images/20200522114244_xingxing.png') no-repeat;
		background-position: -8rpx 0rpx;
		background-size:150rpx 260rpx ;
		height: 26rpx;
	}
</style>

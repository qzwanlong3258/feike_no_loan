<template>
	<view class="inviteGift">
		<image :src="img[0]" mode="widthFix" class="inviteGift-hd"></image>
		<image :src="img[1]" mode="widthFix" class="inviteGift-hd-friend"></image>
		<view class="text"><text style="color: #252525;font-size:24rpx ;margin-left: 20rpx;">邀请活动</text> <text style="color:#828282;font-size:20rpx ;margin-left: 20rpx;">邀请好友，获得积分</text></view>
		<view style="height: 260rpx;" class="pic">
			<image :src="img[2]" mode="widthFix"></image>
			<image :src="img[3]" mode="widthFix"></image>
			<image :src="img[4]" mode="widthFix"></image>
		</view>
		<view class="apptMeasureHome_ft">
			<!-- <view class="btn" @click="toLinkChoose">立即分享</view> -->
			<button class="btn" open-type="share" :data-id='id'>立即分享</button>
		</view>
	</view>
</template>

<script>
'use strict';
import {INVITE_GIFT,INVITE_FRIEND,INVITE_POINT_ONE,INVITE_POINT_TWO,INVITE_POINT_THREE} from '@/config/image.js';
import { getStorage ,setStorage} from '@/utils/storage.js';
var _self;
export default {
	data() {
		return{
			img:[INVITE_GIFT,INVITE_FRIEND,INVITE_POINT_ONE,INVITE_POINT_TWO,INVITE_POINT_THREE],
			id:''
		}
	},
	onShareAppMessage: function( options ){
	　　var that = this;
	　　// 设置菜单中的转发按钮触发转发事件时的转发内容
	　　var shareObj = {
	　　　　title: "邀请有礼",        // 默认是小程序的名称(可以写slogan等)
	　　　　path: '/pages/tabbar/home/home',        // 默认是当前页面，必须是以‘/’开头的完整路径
	// 　　　　imageUrl: FENXIANG,     //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
	　　　　success: function(res){
	　　　　　　// 转发成功之后的回调
	　　　　　　if(res.errMsg == 'shareAppMessage:ok'){
	　　　　　　}
	　　　　},
	　　　　fail: function(){
	　　　　　　// 转发失败之后的回调
	　　　　　　if(res.errMsg == 'shareAppMessage:fail cancel'){
	　　　　　　　　// 用户取消转发
	　　　　　　}else if(res.errMsg == 'shareAppMessage:fail'){
	　　　　　　　　// 转发失败，其中 detail message 为详细失败信息
	　　　　　　}
	　　　　},
	　　　　complete: function(){
	　　　　　　// 转发结束之后的回调（转发成不成功都会执行）
	　　　　}
	　　};
	　　// 来自页面内的按钮的转发
	　　if( options.from == 'button' ){
	　　　　var eData = options.target.dataset;
	　　　　console.log( eData.name );     // shareBtn
	　　　　// 此处可以修改 shareObj 中的内容
	　　　　shareObj.path =  '/pages/tabbar/home/home?scene='+eData.id;;
	　　}
	　　// 返回shareObj
	　　return shareObj;
	},
	methods:{},
	async onLoad() {
		_self=this
		_self.userInfo = getStorage('userInfo');
		_self.id=_self.userInfo.id
	}
};
</script>
<style>
	page {
	background-color: #FFFFFF;
	}
</style>
<style scoped>
	.inviteGift{
		position: relative;
		background: #FFFFFF;
	
	}
	.inviteGift-hd{
		width: 100%;
		display: block;
	}
	.inviteGift-hd-friend{
		width: 300rpx;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 320rpx;
	}
	.text{
		height: 70rpx;
		line-height: 70rpx;
		border-bottom: 2rpx solid #F1F1F1;
	}
	.pic{
		margin: 20rpx 40rpx;
		display: flex;
	}
	.pic image{
		width: 230rpx;
	}
	.apptMeasureHome_ft{
		/* position: absolute;
		left: 0;
		bottom: 20rpx; */
		width: 100%;
		height: 100rpx;
		margin-top: 60rpx;
		
	}
	.btn{
		height: 80rpx;
		
		text-align: center;
		line-height: 80rpx;
		border-radius: 40rpx;
		background: #FFE906;
		color: #000000;
		margin-left: 20rpx;
		margin-right: 20rpx;
		box-shadow: 0 4rpx 10rpx rgba(0,0,0,0.3);
		font-size: 28rpx;
		letter-spacing: 4rpx;
	}
</style>

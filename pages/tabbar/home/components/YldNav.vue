<template>
	<view class="nav-list">
		<view v-for='(item,index) in navList' :key='index' class="nav-clomun" @click="linkToRouter({item,index})">
			<image class="show-icon" :src="item.icon" />
			<text class="nav-name content-font page_text-single-omit">{{item.bname}}</text>
		</view>
	</view>
</template>

<script>
	'use scrict';
	import { formatHomeRoute } from '@/config/filter.js';
	import { NAV_ONE,NAV_TWO,NAV_THREE,NAV_FOUR} from '@/config/image.js';
	import { BANK_DETAIL,TO_WEB} from '@/config/router.js';
	import { getStorage ,setStorage } from '@/utils/storage.js';
	const { AUTH } = require('../../../../config/router.js');
	
	export default {
		props: {
			navList: {
				type: Array,
			}
		},
		data(){
			return{
				// navList:[
				// 	{
				// 		icon:NAV_ONE,
				// 		bname:'邀请有礼'
				// 	},
				// 	{
				// 		icon:NAV_TWO,
				// 		bname:'约量房'
				// 	},
				// 	{
				// 		icon:NAV_THREE,
				// 		bname:'装修分期'
				// 	},
				// 	{
				// 		icon:NAV_FOUR,
				// 		bname:'好店入驻'
				// 	}
				// ]
				dataL:{}
			}
			
		},
		methods: {
			IsHttpUrl(Val){
			            if ((Val.substring(0, 7) == "http://") || (Val.substring(0, 8) == "https://")) 
						return true; 
			            return false;
			        },
			linkToRouter({item}) {
				console.log(this.IsHttpUrl(item.url) )
				if(!item.url){return}
				if(this.IsHttpUrl(item.url)){
					let e=item.url
					var testmsg=e.substring(e.lastIndexOf('.')+1)
					        const extensio = testmsg === 'jpg'
					        const extensio2 = testmsg === 'png'
					        const extensio3 = testmsg === 'jpeg'
					        if(extensio || extensio2 || extensio3) {
					          uni.navigateTo({ url: `${BANK_DETAIL}?id=${e}` });
					        } else {
								
								
								const isLogin = getStorage('isLogin');
								if (isLogin) {
									// setStorage('tempToken', this.dataL.token)
									// setStorage('refreshToken', this.dataL.refreshToken)
									// setStorage('userInfo', this.dataL.UserInfo)
									// setStorage('isLogin', true)
									this.dataL.token=getStorage('tempToken')
									this.dataL.refreshToken=getStorage('refreshToken')
									this.dataL.userInfo=getStorage('userInfo')
									let user = JSON.stringify(this.dataL.userInfo)
									
									let ch = "/";
																	// var str = "这是一/个变量，这是一个变量";
																	let a = item.url.replace(new RegExp(ch,'g'),"!");
																	let c = a.replace(":", "*")
																	uni.navigateTo({ url: `${TO_WEB}?id=${c}&tempToken=${this.dataL.token}&refreshToken=${this.dataL.refreshToken}&userInfo=${user}&isLogin=${true}`});
									
								} else {
									getApp().globalData.link=item.url
									let pages = getCurrentPages();
									if (pages.length > 0 && AUTH.indexOf('/' + pages[pages.length - 1].route) === 0) return;
									uni.reLaunch({
										url:`${AUTH}?name=${'link'}`
									});	
									}
								
								
							}
				}
				
				uni.navigateTo({
					url: formatHomeRoute(item.bname)
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav-list {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		.nav-clomun {
			width:16%;
			margin-left:7%;
			margin-top: 46upx;
			.show-icon {
				width: 120upx;
				height: 120upx;
				border-radius: 50%;
				line-height: 120upx;
				text-align: center;
				i {
					font-size: 50upx;
					color: #e8be2e;
				}
			}
			.nav-name {
				width: 100%;
				text-align: center;
				margin-top: 16upx;
			}
		}
	}
</style>

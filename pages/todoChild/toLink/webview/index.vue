<template>
    <view>
        <web-view  :src="web"></web-view>
    </view>
</template>


<script>
'use strict';
var _self;
export default {
	data() {
		return{
			web:''
		}
	},
	methods:{},
	 onLoad(options) {
		 _self=this
		       
		 
		if(options.isLogin){
			let a = options.id.replace("*", ":")
			let b = a.replace(/!/g,"/")
			
			_self.web=`${b}?tempToken=${options.tempToken}&refreshToken=${options.refreshToken}&userInfo=${options.userInfo}&isLogin=${true}`
			console.log(_self.web)
		} else {
			let a = options.id.replace("*", ":")
			_self.web= a.replace(/!/g,"/")
			console.log(_self.web)
		}
		
		// _self.web=`https://www.feiaizn.com/zxfq/link.html?data=${1541541}`
		
		// this.$forceUpdate()
	}
};
</script>

<style>
	
</style>

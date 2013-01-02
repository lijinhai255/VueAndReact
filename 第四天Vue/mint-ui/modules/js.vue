<template>
<div>
	<mt-button @click="toggle">切换</mt-button>
	<!-- 设置提示框位置 -->
	<mt-popup v-model="isShow" position="top">
		<span>提示框</span>
	</mt-popup>
	<!-- 轮播图 -->
	<mt-swipe :auto="5000" style="height: 200px">
		<mt-swipe-item style="background: red;">111</mt-swipe-item>
		<mt-swipe-item style="background: green;">222</mt-swipe-item>
		<mt-swipe-item style="background: blue;">333</mt-swipe-item>
		<mt-swipe-item style="background: pink;">444</mt-swipe-item>
		<mt-swipe-item style="background: gold;">555</mt-swipe-item>
	</mt-swipe>
	<!-- 索引列表 -->
	<mt-index-list style="height: 200px;">
		<mt-index-section index="A">
			<mt-cell>111</mt-cell>
			<mt-cell>1111</mt-cell>
			<mt-cell>111111</mt-cell>
		</mt-index-section>
	</mt-index-list>
	<!-- 加载更多 -->
	<mt-loadmore ref="demo" :topMethod="loadMore">
		<mt-cell v-for="(item, index) in list" :title="'item ' + item" :key="index"></mt-cell>
	</mt-loadmore>
</div>
</template>
<script type="text/javascript">
export default {
	// 绑定数据
	data() {
		return {
			isShow: false,
			list: 5
		}
	},
	// 方法
	methods: {
		// 切换提示框
		toggle() {
			this.isShow = !this.isShow;
		},
		// 下拉刷新
		loadMore() {
			// console.log(111)
			// 我们用定时器，模拟异步请求
			setTimeout(() => {
				// 更新list 
				this.list += 5;
				// console.log(this)
				// 关闭动画
				this.$refs.demo.onTopLoaded();
			}, 1000)
		}
	}
};

</script>
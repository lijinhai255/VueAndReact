<template>
<div>
	<!-- 定义头部 -->
	<!-- <mt-header fixed title="爱创课堂"></mt-header> -->
	<!-- 定义搜索条 -->
	<!-- <mt-search v-model="search" placeholder="请输入搜索词"></mt-search> -->
	<!-- <h1>{{search}}</h1> -->
	<!-- 行文本 -->
	<!-- <mt-cell title="爱创课堂" value="专业前端培训学校"></mt-cell>
	<mt-cell title="爱创课堂" value="专业前端培训学校"></mt-cell>
	<mt-cell title="爱创课堂" value="专业前端培训学校"></mt-cell> -->

	<!-- 导航条 -->
	<mt-navbar v-model="page">
		<mt-tab-item id="home">首页</mt-tab-item>
		<mt-tab-item id="list">列表页</mt-tab-item>
		<mt-tab-item id="detail">详情页</mt-tab-item>
	</mt-navbar>

	<!-- 定义页面容器 -->
	<mt-tab-container v-model="page">
		<mt-tab-container-item id="home">首页内容</mt-tab-container-item>
		<mt-tab-container-item id="list">列表页内容</mt-tab-container-item>
		<mt-tab-container-item id="detail">详情页内容</mt-tab-container-item>
	</mt-tab-container>

	<!-- 定义tab页面 -->
	<!-- <mt-tabbar v-model="page">
		<mt-tab-item id="home">首页</mt-tab-item>
		<mt-tab-item id="list">列表页</mt-tab-item>
		<mt-tab-item id="detail">详情页</mt-tab-item>
	</mt-tabbar> -->

</div>
</template>
<style type="text/css">
h1 {
	position: absolute;
	top: 100px;
}
</style>
<script type="text/javascript">
export default {
	// 绑定数据
	data() {
		return {
			search: '',
			page: 'home'
		}
	}
}
</script>
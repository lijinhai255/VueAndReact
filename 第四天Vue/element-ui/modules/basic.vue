<template>
<div>
	<!-- 定义按钮 -->
	<!-- <el-button>按钮1</el-button>
	<el-button type="danger">按钮2</el-button>
	<el-button type="warning">按钮3</el-button>
	<el-button type="primary" round>按钮4</el-button>
	<el-button type="info" circle></el-button>
	<el-button type="danger" plain>按钮6</el-button> -->
	<!-- 一行 -->
	<!-- 定义列 -->
	<!-- <el-row :gutter="20" type="flex" justify="center">
		<el-col class="item" :span="1">111</el-col>
		<el-col class="item" :span="2">222</el-col>
		<el-col class="item" :span="3">333</el-col>
		<el-col class="item" :span="4">444</el-col>
		<el-col class="item" :span="5">555</el-col>
	</el-row> -->
	<!-- 字体图标 -->
	<!-- <span class="el-icon-service" style="width: 100px; height: 100px; display: inline-block;"></span>
	<span class="el-icon-location" style="font-size: 100px;"></span> -->
	<!-- 布局 -->
	<!-- <el-container>
		<el-header>heaer</el-header>
		<el-main>main</el-main>
	</el-container> -->
	<!-- <el-container>
		<el-header>heaer</el-header>
		<el-main>main</el-main>
		<el-footer>footer</el-footer>
	</el-container> -->
	<!-- <el-container>
		<el-header>heaer</el-header>
		<el-container>
			<el-aside style="width: 200px;">aside</el-aside>
			<el-container>
				<el-main>main</el-main>
				<el-footer>footer</el-footer>
			</el-container>
		</el-container>
	</el-container> -->
	<!-- <el-container>
		<el-aside style="width: 200px;">aside</el-aside>
		<el-container>
			<el-header>heaer</el-header>
			<el-main>main</el-main>
			<el-footer>footer</el-footer>
		</el-container>
	</el-container> -->
	<el-container>
		<el-header>heaer</el-header>
		<el-container>
			<el-aside style="width: 200px;">aside</el-aside>
			<el-container>
				<el-main>main</el-main>
			</el-container>
		</el-container>
		<el-footer>footer</el-footer>
	</el-container>
</div>
</template>
<style type="text/css">
.el-header {
	background: gold;
}
.el-main {
	background: green;
}
.el-footer {
	background: yellowgreen;
}
.el-aside {
	background: skyblue;
}
.item {
	background: pink;
}
</style>
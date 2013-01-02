<template>
<div>
	<!-- 评分 -->
	<el-rate v-model="rate"></el-rate>
	<h1>result {{rate}}</h1>
	<!-- 上传 -->
	<el-upload
		action="https://jsonplaceholder.typicode.com/posts/"
		:on-success="showImage"
	>
		<img v-if="imgSrc" :src="imgSrc" alt="">
		<span class="el-icon-plus"></span>
	</el-upload>
	<!-- 输入框 -->
	<el-input placeholder="请输入用户名" v-model="username" clearable></el-input>
	<h1>{{username}}</h1>
	<!-- 添加插槽 -->
	<el-input placeholder="请输入搜索词">
		<!-- 下拉框 -->
		<el-select slot="prepend" v-model="type" style="width: 200px;">
			<el-option value="宝贝">宝贝</el-option>
			<el-option value="天猫">天猫</el-option>
			<el-option value="店铺">店铺</el-option>
		</el-select>
		<span slot="append">搜索</span>
	</el-input>
</div>
</template>
<script type="text/javascript">
export default {
	// 绑定数据
	data() {
		return {
			rate: 0,
			imgSrc: '',
			username: '',
			type: ''
		}
	},
	// 方法
	methods: {
		// 展示图片
		showImage(err, file) {
			// console.log(arguments)
			// 存储图片
			this.imgSrc = URL.createObjectURL(file.raw)
		}
	}
}
</script>
<template>
<div>
	<!-- 单选框 -->
	<!-- <mt-radio 
		title="选择颜色" 
		v-model="color" 
		:options="['red', 'green', 'blue']"
	></mt-radio>
	<mt-cell :title="color"></mt-cell> -->
	<!-- 多选框 -->
	<!-- <mt-checklist
		title="评分"
		v-model="score"
		:options="['A', 'B', 'C', 'D']"
	></mt-checklist>
	<mt-cell :title="score.join('|')"></mt-cell> -->
	<!-- 定义开关 -->
	<mt-switch v-model="isOpen">打开wifi</mt-switch>
	<!-- 单行文本框 -->
	<mt-field v-model="username" label="用户名：" placeholder="请输入用户名"></mt-field>
	<!-- 定义徽章 -->
	<mt-button type="danger">hello <mt-badge>10</mt-badge></mt-button>
</div>
</template>
<script type="text/javascript">
export default {
	// 绑定的数据
	data() {
		return {
			color: 'red',
			// 多选框绑定数组
			score: ['A', 'B'],
			isOpen: false,
			username: ''
		}
	}
}
</script>
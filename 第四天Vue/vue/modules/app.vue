<template>
<div>
	<h1>hello -- {{msg}}</h1>
	<!-- 子组件 -->
	<Home></Home>
</div>
</template>
<!-- 样式 -->
<style type="text/css" lang="scss">
// 引入文件
@import './base.scss';
h1 {
	color: $color;
}
</style>
<!-- 定义脚本 -->
<script type="text/javascript">
// 引入组件
import Home from './home.vue';
export default {
	// 注册组件
	components: { Home },
	// 绑定数据
	data() {
		return {
			msg: '爱创课堂'
		}
	}
}
</script>
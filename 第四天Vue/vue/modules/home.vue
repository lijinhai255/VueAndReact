<!-- 模板 -->
<template>
<div>
	<h1>home page -- {{info}}</h1>
	<Demo></Demo>
</div>
</template>
<!-- 定义样式 -->
<!-- <style type="text/css" lang="less"> -->
<style type="text/css" lang="scss" scoped>
// 定义样式
$color: gold;
h1 {
	color: $color;
}

// 定义样式
// @color: green;
// h1 {
// 	color: @color;
// }

/*h1 {
	color: red;
}*/
</style>
<script type="text/javascript">
// 引入demo组件
import Demo from './demo.vue';

// es module规范
export default {
	// 注册组件
	components: { Demo },
	// 绑定数据
	data() {
		return {
			info: '专业前端培训学校'
		}
	}
}
</script>
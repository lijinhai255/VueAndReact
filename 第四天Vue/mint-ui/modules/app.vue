<template>
<div>
	<!-- <h1>app page</h1> -->
	<!-- 使用按钮组件 -->
	<!-- <mt-button>hello</mt-button> -->
	<!-- 设置样式 -->
	<!-- <mt-button type="danger">hello</mt-button> -->

	<!-- 引入组件 -->
	<!-- <Css></Css> -->
	<!-- <Js></Js> -->
	<Form></Form>
</div>
</template>
<style type="text/css">
* {
	margin: 0;
	padding: 0;
}
body {
	/*height: 1000px;*/
}
</style>
<script type="text/javascript">
// 引入组件
import Css from './css.vue';
import Js from './js';
import Form from './form'
export default {
	components: { Css, Js, Form }
}
</script>
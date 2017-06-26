<!-- css layer -->
<template>
	<div class="csstudy-page">
		<a href="javascript:void(0);" @click="$router.back()">back</a>
		<div class="com-title">{{$route.path}}</div>
		<router-view></router-view>
	</div>
</template>
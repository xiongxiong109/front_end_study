<!-- css layer -->
<template>
	<div class="csstudy-page">
		<router-link to="/home">back</router-link>
		<div class="com-title">{{$route.path}}</div>
		<router-view></router-view>
	</div>
</template>
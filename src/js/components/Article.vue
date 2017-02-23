<template>
	<router-link tag="article" to="/chat" class="message" @click="onFeedClick" :class="{'is-warning':isWarning}">
	  	<div class="message-body">{{ feed.text }}</div>
	</router-link>
</template>

<script>
	export default {
		props: ['feed'],
		data() {
			return {
				isWarning: false
			}
		},
		methods: {
			onFeedClick() {
				this.isWarning = true
			}
		}
	}
</script>

<style>
	.message:not(:last-child) {
		margin-bottom: 0;
	}
	.message-body {
		border-top: 0;
		border-left: 0;
		border-right: 0;
	}
</style>
<template>
	<article class="one-msg" :class="[msg.user? msgLeft : msgRight]">
	  	<div class="box">
	      	<div v-if="msg.user"><strong>{{ msg.user }}</strong></div>
        	<p>{{ msg.msg }}</p>
	  	</div>
	</article>
</template>

<script>
	export default {
		props: ['msg'],
		data() {
			return {
				msgLeft: 'msg-left',
				msgRight: 'msg-right'
			}
		}
	}
</script>

<style>
	.one-msg {
		display: flex;
	    margin-bottom: 2vh;
	    color: #333;
	    position: relative;
	}
	.one-msg .box {
		max-width: 80%;
	}
	.one-msg.msg-right {
		justify-content: flex-end;
		color: #fff;
	}
	.msg-left .box {
		background-color: #ffdd57;
	}
	.msg-right .box {
	    background-color: #00d1b2;
	}
	.msg-left::before, .msg-left::after,
	.msg-right::before, .msg-right::after {
	    top: 50%;
	    border: solid;
	    content: " ";
	    height: 0;
	    width: 0;
	    position: absolute;
	    pointer-events: none;
	    border-width: 0.7rem;
	    margin-top: -0.70rem;
	}
	.msg-left::before {
		right: 100%;
		border-color: rgba(65, 89, 105, 0);
	    border-right-color: rgba(10,10,10,.1);
	}
	.msg-left::after {
		right: 100%;
		border-color: rgba(136, 183, 213, 0);
		border-right-color: #ffdd57;
		margin-right: -2px;
	}
	.msg-right::after {
		left: 100%;
		border-color: rgba(136, 183, 213, 0);
		border-left-color: #00d1b2;
		margin-left: -2px;
	}
	.msg-right::before {
		left: 100%;
		border-color: rgba(194, 225, 245, 0);
		border-left-color: rgba(10,10,10,.1);
	}
</style>
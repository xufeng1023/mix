<template>
	<section id="chat" class="hero is-primary is-fullheight">
		<div id="top" class="z999 has-shadow is-flex g-bg fixed v-centered full-width">
			<nav class="level is-mobile">
			  <div class="level-left">
			    <div class="level-item">
			      <router-link to="/feeds">
			      	<i class="fa fa-chevron-left"></i>
			      </router-link>
			    </div>
			  </div>
			  <div class="level-right">
			    <p class="level-item"></p>
			  </div>
			</nav>
		</div>
	  <div id="content" class="chat-body w-bg scrolled">
      	<msg v-for="msg in messages" :msg="msg"></msg>
	  </div>
	  <div id="bottom" class="chat-text g-bg fixed is-flex v-centered w full-width">
	    <div id="chat-input" contenteditable="true" class="rounded w-bg" @focus="onFocus"  @blur="onBlur">
	    </div>
	  </div>
	</div>
</template>

<script>
	import Msg from '../components/Msg.vue'

	export default {
		data() {
			return {
				messages: [
					{ user:"John Smith", msg:"I had the same issue before" },
					{ user:"Lee Bruce", msg:"Same here" },
					{ user:"", msg:"Howd you guys handle it?" },
					{ user:"John Smith", msg:"I called the cop" },
					{ user:"Lee Bruce", msg:"I wouldn't do that..." },
					{ user:"", msg:"Woww. How it end?" },
					{ user:"John Smith", msg:"It ended well and my mom let them go:)" },
				]
			}
		},
		methods: {
			onBlur() {
				let top = document.querySelector('#top')
				top.style.top = 0
			},
			onFocus() { 
				let top = document.querySelector('#top')
				top.style.top = "52%"
			}
		},
		components: {
			'msg': Msg,
		}
	}
</script>

<style>
	.chat-text {
		padding: 1vh 30vw;
		height: auto !important;
	}
	#chat-input {
		max-height: 8rem;
	    color: #333;
	    outline: none;
	    overflow-y: scroll;
	}
	.chat-body {
		padding: 0 4vw;
		overflow-x: hidden;
	}
</style>
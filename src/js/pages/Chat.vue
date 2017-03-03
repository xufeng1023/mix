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
	    <div id="chat-input" contenteditable="true" class="rounded w-bg" @keyup.enter="onSend"></div>
	  </div>
	</div>
</template>

<script>
	import msg from '../components/Msg.vue'

	export default {
		data() {
			return {
				contentDiv: null,
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
		mounted() {
			this.contentDiv = document.querySelector('#content')

			axios.get('http://174.138.73.211/api/user')
				.then(
					response => alert(response.data.name)
				)
			// axios.post('http://localhost:8000/api/user', {name:"Gaga123"})
			// 	.then(
			// 		response => console.log(response.data)
			// 	)
			// 	socket.on('connection', function(data) {
			// 		alert('ok')
			// 	})
			//socket.emit('chat.message', {name:"Gaga12345"})
			// socket.on('test-channel:FirstEvent', function(data) {
			// 	alert('ffff')
			// })
		},
		methods: {
			onSend(e) {
				let msg = e.target.innerText.trim()
				if( msg ) {
					this.messages.push({user:'',msg})
					this.scrollToBottom()
				}
				e.target.innerText = ''
			},
			scrollToBottom() {
				this.contentDiv.scrollTop = 5000
			}
		},
		components: {
			msg,
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
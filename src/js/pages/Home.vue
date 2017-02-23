<template>
	<div id="home" class="container">
		<div class="columns">
	  		<div class="column is-half is-offset-one-quarter">
				<p class="control">
				  <input class="input is-success" type="text" placeholder="Nickname" v-model="name" @keydown="resetError">
				  <Error v-if="error" :text="error"></Error>
				</p>
				<p class="control">
				  <span class="select is-fullwidth">
				    <select class="is-success is-fullwidth" v-model="lan">
				      <option value="English">English</option>
				      <option value="Chinese">Chinese</option>
				      <option value="Japanese">Japanese</option>
				    </select>
				  </span>
				</p>
				<p class="control">
					<router-link to="/feeds" tag="button" class="button is-primary is-fullwidth">Start</router-link>
				</p>
	  		</div>
		</div>
	</div>
</template>

<script>
	import Error from '../components/Error.vue'

	export default {
		data() {
			return {
				name: '',
				lan: 'English',
				error: ''
			}
		},
		components: {
			Error
		},
		methods: {
			resetError() {
				this.error = ''
			},
			login() {
				return (/^[a-z0-9]+$/i).test(this.name)
			}
		},
		beforeRouteLeave (to, from, next) {
		    if(this.login()) {
			    window.localStorage.setItem('vue-test', this.name)
		    	next()
		    	return false
		    }
		    this.error = 'Nickname can only contain...'
	  	}
	}
</script>

<style>
	#home {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	select.is-success {
	    border-color: #23d160;
	}
</style>
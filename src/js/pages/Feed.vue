<template>
	<section id="feed" class="hero is-primary is-fullheight">
  		<div id="top" class="z999 has-shadow is-flex g-bg fixed v-centered full-width">
	  		<input class="input rounded" type="text" placeholder="search subjects" @keyup="onSearch">
  		</div>
		<div id="content" class="w-bg scrolled">
			<Feed v-for="feed in filteredFeeds" :feed="feed"></Feed>
		</div>
		<div id="bottom" class="tabs g-bg fixed v-centered w full-width is-centered">
	  		<ul>
		    	<li class="is-active"><a>Pictures</a></li>
		    	<li><a>Music</a></li>
		    	<li><a>Videos</a></li>
		    	<router-link :to="rootPath" tag="li" @click.native="logout">
		    		<a><i class="fa fa-sign-out"></i></a>
	    		</router-link>
		  	</ul>
		</div>
	</section>
</template>

<script>
	import Feed from '../components/Article.vue'

	export default {
		data() {
			return {
				rootPath,
				search: '',
				feeds: [
					{ text: 'Why PHP language is used?' },
					{ text: 'What language is PHP written in?' },
					{ text: 'What does it mean that “language A is written in language B”?' },
					{ text: ' You could even have multiple steps and use a language that is very good at text processing to generate some intermediate data which then?' },
					{ text: 'C# is a compiled language, but it is not compiled to machine code?' },
					{ text: 'is itself written in C. C# is a compiled language, but it is not compiled to machine code?' },
					{ text: 'server-side scripting language designed primarily for web development bu?' },
					{ text: 'Definition of PHP, and how it is used in WordPress?' }
				]
			}
		},
		components: {
			Feed,
		},
		computed: {
			filteredFeeds() {
				return this.feeds.filter(feed => (new RegExp(this.search, 'gi')).test(feed.text))
			},
		},
		methods: {
			onSearch(e) {
				this.search = e.target.value
			},
			logout() {
				window.localStorage.removeItem('vue-test')
			}
		}
	}
</script>

<style>
	
</style>
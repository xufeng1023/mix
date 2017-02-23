require('./config')

const Store = require('./store')
const App = require('./App.vue')
const Feed = require('./pages/Feed.vue')
const Home = require('./pages/Home.vue')
const Chat = require('./pages/Chat.vue')

const Router = {
	mode: 'history',
  	routes: [
      	{ path: rootPath, component: Feed },
      	{ path: '/feeds', component: Feed },
      	{ path: '/chat', component: Chat },
  	]
}

// 'load', 'deviceready', 'offline', and 'online'.
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    new Vue({
  		router: new VueRouter(Router),
      	store: new Vuex.Store(Store),
      	render: h => h(App)
    }).$mount('#app')
   
    StatusBar.styleLightContent(true);
}

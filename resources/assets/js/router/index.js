import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
        // ExampleComponent laravel默认的示例组件
        { path: '/', component: require('./../components/ExampleComponent.vue') },
    ]
})
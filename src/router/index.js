import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/router/Home';
import CSStudy from '@/router/CSStudy';

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
  	{
  		path: '/',
  		redirect: '/home'
  	},
    {
      path: '/home',
      name: 'home_page',
      component: Home
    },
    {
    	path: '/css_study',
    	name: 'css_study',
    	component: CSStudy.Layer,
    	children: [
        { // css导航部分
          path: 'nav',
          name: 'nav',
          component: CSStudy.Nav
        },
    		{ // css内凹圆角
    			path: 'rad_circle',
    			name: 'rad_circle',
    			component: CSStudy.RadCircle
    		}
    	]
    }
  ]
})

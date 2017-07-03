import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/router/Home';
import CSStudy from '@/router/CSStudy';
import JSStudy from '@/router/JSStudy';

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
    		},
        { // 连字符换行
          path: 'dd_dt',
          name: 'dd_dt',
          component: CSStudy.DdDt
        },
        { // 3d变换
          path: 'd3_trans',
          name: 'd3_trans',
          component: CSStudy.D3Trans
        },
        { // 圆形进度条
          path: 'circle_process',
          name: 'circle_process',
          component: CSStudy.CirPro
        }
    	]
    },
    {
      path: '/js_study',
      name: 'js_study',
      component: JSStudy.Layer,
      children: [
        { // js导航部分
          path: 'nav',
          name: 'nav',
          component: JSStudy.Nav
        },
        { // 异步流程
          path: 'async',
          name: 'async',
          component: JSStudy.Async
        }
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Example from '@/components/Example'
import TodoPage from '@/components/TodoPage'
import UserPage from '@/components/UserPage'
import SearchFilterEx from '@/components/SearchFilterEx'
import InlineEvent from '@/components/InlineEvent'
import parentPage from '@/components/parent-component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/example',
      name: 'example',
      component: Example
    },
    {//추가
      path: '/todos',
      name: 'TodoPage',
      component: TodoPage
    },
    {
      path:'/user',
      name:'UserPage',
      component:UserPage
    }
    ,{
      path:'/SearchFilterEx',
      name:'SearchFilterEx',
      component:SearchFilterEx
    }
    ,{
      path:'/InlineEvent',
      name:'InlineEvent',
      component:InlineEvent
    }
    /*,{
      path:'/parentPage',
      name:'parentPage',
      component:parentPage
    }*/


  ]
})

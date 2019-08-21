import Vue from 'vue'
import Router from 'vue-router'
import Case from '@/components/Case'
import heads from '@/components/heads'
import skills from '@/components/skills'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'heads',
      component: heads,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/Case',
      name: 'Case',
      component: Case,
      meta: {
        title: '企业案例'
      }
    },
    {
      path: '/skills',
      name: 'skills',
      component: skills,
      meta: {
        title: '技术能力'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        title: '关于我们'
      }
    }
  ]
})

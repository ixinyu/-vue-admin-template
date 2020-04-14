import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/aloneInfo',
    omponent: Layout,
    hidden: true,
    redirect: '/aloneInfo/index',
    children: [
      {
        path: 'index',
        name: 'aloneInfo',
        component: () => import('@/views/personInfo/index'),
        meta: { title: '个人信息' }
      }
    ]
  }
]
export const asyncRoutes = [
  {
    path: '/customer',
    component: Layout,
    meta: { title: '系统管理', icon: 'example', roles: ['admin'] },
    children: [
      {
        path: '/customer/index',
        name: 'customer',
        component: () => import('@/views/customerList/customerList'),
        meta: { title: '人员管理', icon: 'eye' }
      },
      {
        path: '/customer/organization',
        name: 'organization',
        component: () => import('@/views/customerList/organization'),
        meta: { title: '组织架构管理', icon: 'table' }
      }
    ]
  },
  {
    path: '/userControl',
    component: Layout,
    meta: { title: '用户管理', icon: 'example' },
    children: [
      {
        path: '/userControl/index',
        name: 'useList',
        component: () => import('@/views/userControl/index'),
        meta: { title: '用户列表' }
      },
      {
        path: 'useRole',
        name: 'useList',
        component: () => import('@/views/userControl/useRole'),
        meta: { title: '角色管理' }
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },
  {
    path: '/hotel',
    component: Layout,
    meta: { title: '酒店管理', icon: 'example' },
    children: [
      {
        path: '/hotel/index',
        name: 'hotellist',
        component: () => import('@/views/hotel/index'),
        meta: { title: '酒店列表', icon: 'table' }
      },
      {
        path: 'hotelSet',
        name: 'hotelSet',
        component: () => import('@/views/hotel/hotelSet'),
        meta: { title: '酒店配置', icon: 'tree' }
      },
      {
        path: 'hotelAdv',
        name: 'hotelAdv',
        component: () => import('@/views/hotel/hotelAdv'),
        meta: { title: '酒店公告', icon: 'tree' }
      },
      {
        path: 'hotelAudit',
        name: 'hotelAudit',
        component: () => import('@/views/hotel/hotelAudit'),
        meta: { title: '待审核酒店列表', icon: 'tree' }
      },
      {
        path: 'hotelComment',
        name: 'hotelComment',
        component: () => import('@/views/hotel/hotelComment'),
        meta: { title: '酒店评论列表', icon: 'tree' }
      }
    ]
  },
  {
    path: '/community',
    component: Layout,
    meta: { title: '社区管理', icon: 'example' },
    children: [
      {
        path: '/community/index',
        name: 'communityList',
        component: () => import('@/views/community/index'),
        meta: { title: '小区列表', icon: 'table' }
      },
      {
        path: 'communitySet',
        name: 'communitySet',
        component: () => import('@/views/community/communitySet'),
        meta: { title: '社区配置', icon: 'tree' }
      }
    ]
  },
  {
    path: '/dataAnalysis',
    component: Layout,
    meta: { title: '数据分析', icon: 'example' },
    children: [
      {
        path: '/dataAnalysis/index',
        name: 'dataAnalysis',
        component: () => import('@/views/dataAnalysis/index'),
        meta: { title: '交易汇总', icon: 'table' }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import Login from "../views/Login";
import NoView from "../views/NoView"
import MainView from "../components/MainView";
import Context from "../components/context/Context";
import ShowAllCommodity from "../views/commodity/ShowAllCommodity";
import InsertCommodity from "../views/commodity/InsertCommodity";
import RemovedCommodity from "../views/commodity/RemovedCommodity";
import ShowAllMember from "../views/member/ShowAllMember";
import InsertMember from "../views/member/InsertMember";
import BlackMember from "../views/member/BlackMember";
import ShowAllCoupon from "../views/coupon/ShowAllCoupon";
import InsertCoupon from "../views/coupon/InsertCoupon";
import IssueCouponIng from "../views/coupon/IssueCouponIng";
import ShowAllOrderList from "../views/orderList/ShowAllOrderList";
import WaitingOrder from "../views/orderList/WaitingOrder";
import TransportOrderIng from "../views/orderList/TransportOrderIng";
import FinishOrder from "../views/orderList/FinishOrder";

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: "/main_view",
      name: "MainView",
      component: MainView,
      redirect: '/Context',
      children:[
        {
          path: '/Context',
          name: 'Context',
          component: Context,
          meta:{
            title: '首页'
          }
        },
        {
          path: '/show_all_commodity',
          name: "ShowAllCommodity",
          components:{
            default:ShowAllCommodity,
            'context': Context
          },
          meta:{
            title: '所有商品'
          }
        },
        {
          path: '/insert_commodity',
          name: "InsertCommodity",
          components:{
            default: InsertCommodity,
            'context': Context
          },
          meta:{
            title: '添加商品'
          }
        },
        {
          path: '/removed_commodity',
          name: "RemovedCommodity",
          components:{
            default: RemovedCommodity,
            'context': Context
          },
          meta:{
            title: '已移除商品'
          }
        },
        {
          path: '/show_all_member',
          name: "ShowAllMember",
          components:{
            default: ShowAllMember,
            'context': Context
          },
          meta:{
            title: '所有会员'
          }
        },
        {
          path: '/insert_member',
          name: "InsertMember",
          components:{
            default: InsertMember,
            'context': Context
          },
          meta:{
            title: '添加会员'
          }
        },
        {
          path: '/black_member',
          name: "BlackMember",
          components:{
            default: BlackMember,
            'context': Context
          },
          meta:{
            title: '会员黑名单'
          }
        },
        {
          path: '/show_all_coupon',
          name: "ShowAllCoupon",
          components:{
            default: ShowAllCoupon,
            'context': Context
          },
          meta:{
            title: '所有优惠券'
          }
        },
        {
          path: '/insert_coupon',
          name: "InsertCoupon",
          components:{
            default: InsertCoupon,
            'context': Context
          },
          meta:{
            title: '添加优惠券'
          }
        },
        {
          path: '/issue_coupon_ing',
          name: "IssueCouponIng",
          components:{
            default: IssueCouponIng,
            'context': Context
          },
          meta:{
            title: '发放中优惠券'
          }
        },
        {
          path: '/show_all_order_list',
          name: "ShowAllOrderList",
          components:{
            default: ShowAllOrderList,
            'context': Context
          },
          meta:{
            title: '所有订单'
          }
        },
        {
          path: '/waiting_order',
          name: "WaitingOrder",
          components:{
            default: WaitingOrder,
            'context': Context
          },
          meta:{
            title: '待发货订单'
          }
        },
        {
          path: '/transport_order_ing',
          name: "TransportOrderIng",
          components:{
            default: TransportOrderIng,
            'context': Context
          },
          meta:{
            title: '运输中订单'
          }
        },
        {
          path: '/finish_order',
          name: "FinishOrder",
          components:{
            default: FinishOrder,
            'context': Context
          },
          meta:{
            title: '已完成订单'
          }
        },
      ]
    },


  ],
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    store.commit("set_page_header_context",to.meta.title)
    document.title = to.meta.title
  }
  next()
})

export default router;

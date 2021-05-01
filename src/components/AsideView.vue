<template>
  <div>
    <el-menu :default-openeds="['1']"
             router
             @open="handleOpen"
             @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-goods"></i>所有商品</template>
        <el-menu-item-group>
          <template slot="title">商品操作</template>
          <el-menu-item index="1-1" route="/show_all_commodity">查看商品</el-menu-item>
          <el-menu-item index="1-2" route="/insert_commodity">添加商品</el-menu-item>
          <el-menu-item index="1-3" route="/removed_commodity">已移除商品</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-user"></i>会员</template>
        <el-menu-item-group>
          <template slot="title">会员操作</template>
          <el-menu-item index="2-1" route="show_all_member">所有会员</el-menu-item>
          <el-menu-item index="2-2" route="insert_member">添加会员</el-menu-item>
          <el-menu-item index="2-3" route="black_member">会员黑名单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
<!--        <template slot="title"><i class="el-icon-eleme"></i>优惠券</template>-->
        <template slot="title">
          <coupon theme="outline"
                  size="20" fill="#333"
                  :strokeWidth="1"
                  style="margin: 0px 5px 0px 0px"/>
          优惠券</template>
        <el-menu-item-group>
          <template slot="title">优惠券操作</template>
          <el-menu-item index="3-1" route="show_all_coupon">所有优惠券</el-menu-item>
          <el-menu-item index="3-2" route="insert_coupon">添加优惠券</el-menu-item>
          <el-menu-item index="3-3" route="issue_coupon_ing">发放中优惠券</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title"><i class="el-icon-document"></i>订单详情</template>
        <el-menu-item-group>
          <template slot="title">订单操作</template>
          <el-menu-item index="4-1" route="show_all_order_list">所有订单</el-menu-item>
          <el-menu-item index="4-2" route="waiting_order">待发货订单</el-menu-item>
          <el-menu-item index="4-3" route="transport_order_ing">运输中订单</el-menu-item>
          <el-menu-item index="4-4" route="finish_order">已完成订单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { Menu,Submenu,MenuItemGroup,MenuItem,} from 'element-ui';
import {Coupon} from '@icon-park/vue';
import AsideView from "./AsideView";
export default {
  name: "AsideView",
  components:{
    AsideView,
    Menu: Menu.name,
    Submenu: Submenu.name,
    MenuItemGroup: MenuItemGroup.name,
    MenuItem: MenuItem.name,
    Coupon
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>

</style>

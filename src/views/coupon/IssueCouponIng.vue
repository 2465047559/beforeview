<template>
  <div>
    <div class="coupon_style" v-for="coupon in coupon_issue_list">
      <div class="coupon_style_left">
          <span class="coupon_sub_money">{{coupon.coupon_subtract_money}}元</span>
          <span class="coupon_condition">{{coupon.coupon_name}}</span>
      </div>
      <div class="coupon_style_right">
        <span class="coupon_type">优惠券类型:{{coupon.coupon_commodity_id}}</span>
        <span class="coupon_number">剩余数量:{{coupon.coupon_number}}张</span>
        <span class="coupon_time">剩余时间:{{coupon.coupon_destroy_time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IssueCouponIng",
  data(){
    return{
      coupon_issue_list:[
        {
          coupon_name: '满300减100',
          coupon_condition: 300,
          coupon_subtract_money: 100,
          coupon_number: 1,
          coupon_commodity_id: '无门槛',
          coupon_start_time: '',
          coupon_destroy_time: '1年3月2天',
        },
        {
          coupon_name: '满300减100',
          coupon_condition: 300,
          coupon_subtract_money: 100,
          coupon_number: 1,
          coupon_commodity_id: '无门槛',
          coupon_start_time: '',
          coupon_destroy_time: '1年3月2天',
        },
        {
          coupon_name: '满300减100',
          coupon_condition: 300,
          coupon_subtract_money: 100,
          coupon_number: 1,
          coupon_commodity_id: '无门槛',
          coupon_start_time: '',
          coupon_destroy_time: '1年3月2天',
        },
        {
          coupon_name: '满300减100',
          coupon_condition: 300,
          coupon_subtract_money: 100,
          coupon_number: 1,
          coupon_commodity_id: '无门槛',
          coupon_start_time: '',
          coupon_destroy_time: '1年3月2天',
        },
      ]
    }
  }
}
</script>

<style scoped>

.coupon_style{
  width: 330px;
  height: 130px;
  float: left;
  /*background-color: #777777;*/
  margin: 10px;
  filter: drop-shadow(3px 3px 3px rgba(0,0,0,.3));
  /*box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)*/
}
.coupon_style_left{
  width: 100px;
  height: 100%;
  float: left;
  background:
    radial-gradient(circle at right top, transparent 10px,  #28A4F2 0) top left / 100px 51% no-repeat,
    radial-gradient(circle at right bottom, transparent 10px,  #28A4F2 0) bottom left /100px 51% no-repeat;
}
.coupon_style_right{
  width: 230px;
  height: 100%;
  float: left;
  /*background-color: #eeeeee;*/
  background:
    radial-gradient(circle at left top, transparent 10px, #eeeeee 0) top right /230px 51% no-repeat,
    radial-gradient(circle at left bottom, transparent 10px, #eeeeee 0) bottom right /230px 51% no-repeat;
}
.coupon_sub_money{
  font-size: 30px;
  color: #eee;
  font-weight: bold;
  display: block;
  text-align: center;
  margin-top: 25px;
}
.coupon_condition{
  font-size: 15px;
  color: #777777;
  display: block;
  text-align: center;
}
.coupon_type,.coupon_number,.coupon_time{
  font-size: 20px;
  display: block;
  margin-top: 10px;
  color: #606266;
  text-indent: 14px;
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>

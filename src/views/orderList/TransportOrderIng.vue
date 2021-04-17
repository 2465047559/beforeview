<template>
  <div>
    <div class="transport_panel" v-for="(item,index) in transport_list">
      <div class="transport_title">
        <span style="display: block;padding-top: 10px;">订单编号:{{item.orderID}}</span>
      </div>
      <div class="transport_context">
        <el-steps :active="item.transport_location[item.transport_location.length-1].active" direction="vertical">
          <el-step v-for="location in item.transport_location"
                   :title="location.time"
                   icon="el-icon-location"
                   :description="location.desc"></el-step>
        </el-steps>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransportOrderIng",
  data(){
    return{
      transport_list:[
        {
          orderID:'1002',
          commodityByNum: 1,
          commodityInfo:{
            commodityID: 1008,
            commodityPrice: 350.5,
          },
          addressInfo:{
            addressDetail: '湖北省武汉市洪山区666',  //详细地址
            province: '湖北省', //省
            city: '武汉市',  //市
            county: '洪山区',  //去 县
            name: '阳奈',  //购买人姓名
            postalCode: '434143', //邮政编码
            tel: '13000000000', //联系方式
          },
          payMethod:'支付宝支付',
          orderState: '待发货',
          commodityMoney: 350,  //订单待添加该属性
          transport_location:[
            {
              active: 1,
              time:'2021-01-03 12:01:03',
              desc: '您的包裹已到达了武汉市华中区装运中心'
            },
            {
              active: 2,
              time:'2021-01-03 12:01:06',
              desc: '您的包裹已从武汉市华中区装运中心发出'
            },
            {
              active: 3,
              time:'2021-01-03 12:01:09',
              desc: '到达目的地'
            },
          ],
        },
        {
          orderID:'1002',
          commodityByNum: 1,
          commodityInfo:{
            commodityID: 1008,
            commodityPrice: 350.5,
          },
          addressInfo:{
            addressDetail: '湖北省武汉市洪山区666',  //详细地址
            province: '湖北省', //省
            city: '武汉市',  //市
            county: '洪山区',  //去 县
            name: '阳奈',  //购买人姓名
            postalCode: '434143', //邮政编码
            tel: '13000000000', //联系方式
          },
          payMethod:'支付宝支付',
          orderState: '待发货',
          commodityMoney: 350,  //订单待添加该属性
          transport_location:[
            {
              active: 1,
              time:'2021-01-03 12:01:03',
              desc: '您的包裹已到达了武汉市华中区装运中心'
            },
            {
              active: 2,
              time:'2021-01-03 12:01:06',
              desc: '您的包裹已从武汉市华中区装运中心发出'
            },
            {
              active: 3,
              time:'2021-01-03 12:01:09',
              desc: '到达目的地'
            },
          ],
        },
        {
          orderID:'1002',
          commodityByNum: 1,
          commodityInfo:{
            commodityID: 1008,
            commodityPrice: 350.5,
          },
          addressInfo:{
            addressDetail: '湖北省武汉市洪山区666',  //详细地址
            province: '湖北省', //省
            city: '武汉市',  //市
            county: '洪山区',  //去 县
            name: '阳奈',  //购买人姓名
            postalCode: '434143', //邮政编码
            tel: '13000000000', //联系方式
          },
          payMethod:'支付宝支付',
          orderState: '待发货',
          commodityMoney: 350,  //订单待添加该属性
          transport_location:[
            {
              active: 1,
              time:'2021-01-03 12:01:03',
              desc: '您的包裹已到达了武汉市华中区装运中心'
            },
            {
              active: 2,
              time:'2021-01-03 12:01:06',
              desc: '您的包裹已从武汉市华中区装运中心发出'
            },
            {
              active: 3,
              time:'2021-01-03 12:01:09',
              desc: '到达目的地'
            },
          ],
        },
      ],

    }
  },
}
</script>

<style scoped>
.transport_panel{
  width: 300px;
  height: 450px;
  background-color: #fff;
  border-radius: 10px;
  float: left;
  margin: 10px;
}
.transport_title{
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #777;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  display: block;
}
.transport_context{
  width: 100%;
  height: 89%;
  margin-top: 1%;
  border-radius: 0px 0px 10px 10px;
  padding-left: 10px;
  /*background-color: #28A4F2;*/
}
</style>

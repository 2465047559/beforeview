<template>
  <div>
    <el-table
      :highlight-current-row="true"
      :data="order_list_data"
      style="width: 100%;">

      <el-table-column
        type="index"
        width="70"
        :index="table_index">
      </el-table-column>

      <el-table-column
        prop="orderID"
        label="订单编号"
        align="center"
        width="200">
      </el-table-column>

      <el-table-column
        prop="commodityInfo.commodityID"
        label="商品编号"
        align="center"
        width="200">
      </el-table-column>

      <el-table-column
        prop="commodityByNum"
        label="购买商品数量（件）"
        align="center"
        width="183">
      </el-table-column>

      <el-table-column
        prop="payMethod"
        label="支付方式"
        align="center"
        :filters="[{ text: '微信支付', value: '微信支付' }, { text: '支付宝支付', value: '支付宝支付' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
        width="150">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.payMethod === '支付宝支付' ? 'primary' : 'success'"
            disable-transitions>{{scope.row.payMethod}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        prop="commodityMoney"
        label="支付金额(RMB)"
        align="center"
        width="150">
      </el-table-column>

      <el-table-column label="配送信息">
        <el-table-column
          prop="addressInfo.name"
          align="center"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column label="地址">
          <el-table-column
            prop="addressInfo.province"
            label="省份"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="addressInfo.city"
            label="市"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="addressInfo.county"
            label="区"
            align="center"
            width="120">
          </el-table-column>
          <el-table-column
            prop="addressInfo.addressDetail"
            align="center"
            label="详细地址"
            width="300">
          </el-table-column>
          <el-table-column
            prop="addressInfo.tel"
            align="center"
            label="联系方式"
            width="140">
          </el-table-column>
          <el-table-column
            prop="addressInfo.postalCode"
            label="邮编"
            align="center"
            width="120">
          </el-table-column>
        </el-table-column>
      </el-table-column>

      <el-table-column
        prop="orderState"
        align="center"
        label="订单状态"
        width="100">
      </el-table-column>

      <el-table-column
        align="center"
        label="操作"
        fixed="right"
        width="400">
        <template slot-scope="scope">
          <el-radio-group v-model="order_list_data[scope.$index].orderState"
                          @change="changeValue(scope.$index,order_list_data[scope.$index].orderState)">

            <el-radio v-model="order_list_data[scope.$index].orderState" label="已发货"></el-radio>
            <el-radio v-model="order_list_data[scope.$index].orderState" label="运输中"></el-radio>
            <el-radio v-model="order_list_data[scope.$index].orderState" label="已完成"></el-radio>
            <el-radio v-model="order_list_data[scope.$index].orderState"
                      label="待发货"
                      :disabled="true"></el-radio>
          </el-radio-group>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="current_page"
      :page-size="page_size"
      layout="total, prev, pager, next"
      :total="all_commodity_number">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "OrderListTable",
  props: ['order_state'],
  data() {
    return {
      current_page: 1,
      page_size: 9,
      all_commodity_number: 2000,
      order_list_data: [
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
        },
        {
          orderID:'1003',
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
        },
      ]
    }
  },
  methods: {
    table_index(index){
      return (this.current_page-1) * this.page_size + index + 1
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    filterTag(value, row) {
      console.log(value);
      return row.payMethod === value;
    },
    changeValue(index,label){
      //index 下标 label：当前状态
      // let postData = this.$qs.stringify({
      //   orderID: this.tableData[index].orderID,
      //   orderState: label
      // })
      //
      // //发送axios请求
      // this.$axios({
      //   url: '/merchant/updState',
      //   method: 'post',
      //   data: postData,
      // }).then( response => {
      //   if (response.data === 1 && response.status === 200){
      //     this.$message({
      //       showClose: true,
      //       message: '您的商品已经发货成功...',
      //       type: 'success'
      //     });
      //   }
      // }).catch( error => {
      //   console.log(error);
      // })
    }
  },
  created() {
    console.log("父:",this.order_state);
    // let postData = this.$qs.stringify({
    //   orderState: "发货",
    //   mearchantID: this.$store.state.MerchantID,
    // })
    //
    // this.$axios({
    //   url: '/merchant/findOrder',
    //   method: 'post',
    //   data: postData
    // }).then( response => {
    //   this.loading = false
    //   console.log(response.data);
    //   this.tableData = response.data;
    // }).catch( error => {
    //   console.log(error);
    // })
  }
}
</script>

<style scoped>

</style>

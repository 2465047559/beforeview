<template>
  <div>
    <el-table
      :highlight-current-row="true"
      :data="couponData"
      border
      style="width: 100%">

      <el-table-column
        type="index"
        width="70"
        :index="table_index">
      </el-table-column>

      <el-table-column
        prop="couponID"
        label="优惠券ID"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        prop="couponName"
        label="优惠券名称"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        prop="couponCondition"
        label="满足的条件"
        align="center"
        width="130">
      </el-table-column>

      <el-table-column
        prop="couponMoney"
        label="优惠券额度（RMB）"
        align="center"
        width="180">
      </el-table-column>

      <el-table-column
        prop="couponNum"
        label="优惠券发行数量（张）"
        align="center"
        width="250">
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.couponNum"
                           @change="handleChange($event,scope.$index)"
                           :min = "1"
                           :max = "100000"
                           label="描述文字"></el-input-number>
        </template>
      </el-table-column>

      <el-table-column
        prop="couponCreateTime"
        align="center"
        width="250"
        label="优惠券上架时间">
        <template slot-scope="scope">
          <el-date-picker
            readonly
            v-model="scope.row.couponCreateTime"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column
        prop="couponDestroyTime"
        label="优惠券下架时间"
        align="center"
        width="250">
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.couponDestroyTime"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
        </template>
      </el-table-column>

      <el-table-column
        prop="createTime"
        align="center"
        label="操作"
        fixed="right"
        width="200">
        <template slot-scope="scope">
          <el-button type="danger" plain @click="deleteCoupon(scope.$index)">提前下架</el-button>
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
  name: "ShowAllCoupon",
  data() {
    return {
      current_page: 1,
      page_size: 10,
      all_commodity_number: 2000,
      couponData: [
        {
          couponID: 1001,//优惠券ID
          couponName: "满10元减2元",//优惠券名称
          couponCondition: "满10元",//优惠券满足的条件
          couponMoney: 2,//优惠券额度
          couponNum: 50,//优惠券发行数量
          couponCreateTime: 1602749235000,//优惠券创建的时间
          couponDestroyTime: 1609402043000,//优惠券下架的时间
          commodityID: 1001,    //商品ID
        },
        {
          couponID: 1001,//优惠券ID
          couponName: "满10元减2元",//优惠券名称
          couponCondition: "满10元",//优惠券满足的条件
          couponMoney: 2,//优惠券额度
          couponNum: 50,//优惠券发行数量
          couponCreateTime: 1602749235000,//优惠券创建的时间
          couponDestroyTime: 1609402043000,//优惠券下架的时间
          commodityID: 1001,    //商品ID
        },
        {
          couponID: 1001,//优惠券ID
          couponName: "满10元减2元",//优惠券名称
          couponCondition: "满10元",//优惠券满足的条件
          couponMoney: 2,//优惠券额度
          couponNum: 50,//优惠券发行数量
          couponCreateTime: 1602749235000,//优惠券创建的时间
          couponDestroyTime: 1609402043000,//优惠券下架的时间
          commodityID: 1001,    //商品ID
        },
        {
          couponID: 1001,//优惠券ID
          couponName: "满10元减2元",//优惠券名称
          couponCondition: "满10元",//优惠券满足的条件
          couponMoney: 2,//优惠券额度
          couponNum: 50,//优惠券发行数量
          couponCreateTime: 1602749235000,//优惠券创建的时间
          couponDestroyTime: 1609402043000,//优惠券下架的时间
          commodityID: 1001,    //商品ID
        },
        {
          couponID: 1001,//优惠券ID
          couponName: "满10元减2元",//优惠券名称
          couponCondition: "满10元",//优惠券满足的条件
          couponMoney: 2,//优惠券额度
          couponNum: 50,//优惠券发行数量
          couponCreateTime: 1602749235000,//优惠券创建的时间
          couponDestroyTime: 1609402043000,//优惠券下架的时间
          commodityID: 1001,    //商品ID
        },
        {
          couponID: 1001,//优惠券ID
          couponName: "满10元减2元",//优惠券名称
          couponCondition: "满10元",//优惠券满足的条件
          couponMoney: 2,//优惠券额度
          couponNum: 50,//优惠券发行数量
          couponCreateTime: 1602749235000,//优惠券创建的时间
          couponDestroyTime: 1609402043000,//优惠券下架的时间
          commodityID: 1001,    //商品ID
        },
        {
          couponID: 1001,//优惠券ID
          couponName: "满10元减2元",//优惠券名称
          couponCondition: "满10元",//优惠券满足的条件
          couponMoney: 2,//优惠券额度
          couponNum: 50,//优惠券发行数量
          couponCreateTime: 1602749235000,//优惠券创建的时间
          couponDestroyTime: 1609402043000,//优惠券下架的时间
          commodityID: 1001,    //商品ID
        },
        {
          couponID: 1001,//优惠券ID
          couponName: "满10元减2元",//优惠券名称
          couponCondition: "满10元",//优惠券满足的条件
          couponMoney: 2,//优惠券额度
          couponNum: 50,//优惠券发行数量
          couponCreateTime: 1602749235000,//优惠券创建的时间
          couponDestroyTime: 1609402043000,//优惠券下架的时间
          commodityID: 1001,    //商品ID
        },
        {
          couponID: 1001,//优惠券ID
          couponName: "满10元减2元",//优惠券名称
          couponCondition: "满10元",//优惠券满足的条件
          couponMoney: 2,//优惠券额度
          couponNum: 50,//优惠券发行数量
          couponCreateTime: 1602749235000,//优惠券创建的时间
          couponDestroyTime: 1609402043000,//优惠券下架的时间
          commodityID: 1001,    //商品ID
        },
        {
          couponID: 1001,//优惠券ID
          couponName: "满10元减2元",//优惠券名称
          couponCondition: "满10元",//优惠券满足的条件
          couponMoney: 2,//优惠券额度
          couponNum: 50,//优惠券发行数量
          couponCreateTime: 1602749235000,//优惠券创建的时间
          couponDestroyTime: 1609402043000,//优惠券下架的时间
          commodityID: 1001,    //商品ID
        },

      ]
    }
  },
  methods:{
    table_index(index){
      return (this.current_page-1) * this.page_size + index + 1
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    //下架优惠券
    deleteCoupon(index){
      this.$message({
        message: '恭喜你，下架成功'+index,
        type: 'success'
      });
      // console.log(this.tableData[index]);
      // let postData = this.$qs.stringify({
      //   couponID: this.tableData[index].couponID,   //优惠券ID
      // })
      //
      // this.$axios({
      //   url: '/merchant/delCupon',
      //   method: 'post',
      //   data: postData
      // }).then( response => {
      //   if (response.data === 1 && response.status === 200){
      //     this.tableData.splice(index,1);
      //     this.$message({
      //       showClose: true,
      //       message: '优惠券下架成功',
      //       type: 'success'
      //     });
      //   }
      // }).catch( error => {
      //   console.log(error);
      // })
    },

    //修改优惠券数量
    handleChange(currentValue,index){
      console.log(currentValue,index);
      // let postData = this.$qs.stringify({
      //   couponID: this.tableData[index].couponID,   //优惠券ID
      //   couponNum: currentValue,
      // })
      //
      // this.$axios({
      //   url: '/merchant/updCuponNum',
      //   method: 'post',
      //   data: postData
      // }).then(response =>{
      //   if (response.data === 1 && response.status === 200){
      //     this.$message({
      //       showClose: true,
      //       message: '修改优惠券数量成功！',
      //       type: 'success'
      //     });
      //   }
      // })
    }
  },
  created() {
    // let postData = this.$qs.stringify({
    //   mearchantID : this.$store.state.MerchantID,
    // })
    //
    // this.$axios({
    //   url: '/merchant/findAllByMID',
    //   method: 'post',
    //   data: postData,
    // }).then( response=> {
    //   let newtable = [];
    //   for (let i=0; i<response.data.length;i++){
    //     //过滤掉超时的优惠券
    //     if (response.data[i].couponDestroyTime>new Date().getTime()) {
    //       let newCreate = formatdate(new Date(response.data[i].couponCreateTime),'yyyy-MM-dd hh:mm:ss');//设置时间格式
    //       let newDestroy = formatdate(new Date(response.data[i].couponDestroyTime),'yyyy-MM-dd hh:mm:ss');//设置时间格式
    //       response.data[i].couponCreateTime = newCreate;
    //       response.data[i].couponDestroyTime = newDestroy;
    //       newtable.push(response.data[i])
    //     }
    //   }
    //   this.tableData = newtable
    //
    // }).catch( error=>{
    //   console.log(error);
    // })
    //formatdate(new Date(response.data[i].createTime),'yyyy-MM-dd hh:mm:ss');//设置时间格式
  }
}
</script>

<style scoped>

</style>

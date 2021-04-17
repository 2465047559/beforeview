<template>
  <div class="show">
    <el-table
      ref="filterTable"
      :data="member_data"
      style="width: 100%">
      <el-table-column
        type="index"
        width="70"
        :index="table_index">
      </el-table-column>
      <el-table-column
        prop="member_photo"
        label="会员头像"
        width="180"
      >
        <template scope="scope">
          <el-image
            style="width: 50px; height: 50px"
            :src="scope.row.member_photo">
          </el-image>
        </template>
      </el-table-column>
      <el-table-column
        prop="member_name"
        label="昵称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="member_phone"
        label="联系方式">
      </el-table-column>
      <el-table-column
        prop="member_integral"
        label="会员积分">
      </el-table-column>
      <el-table-column
        prop="member_type"
        label="会员类型"
        width="100"
        :filters="[{ text: '普通会员', value: '普通会员' }, { text: '超级会员', value: '超级会员' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.member_type === '普通会员' ? 'primary' : 'success'"
            disable-transitions>{{scope.row.member_type}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        align="right"
        fixed="right"
        min-width="250"
        width="270">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入会员名称中的关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)">会员详情信息</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除会员</el-button>
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
  name: "ShowAllMember",
  data() {
    return {
      member_data: [
        {
          member_photo:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg',
          member_name: '阿吧',
          member_phone: '13000000000',
          member_type: '普通会员',
          member_integral: 1000
        },

      ],
      current_page: 1,
      page_size: 7,
      all_commodity_number: 2000,
      search:'',
    }
  },
  methods: {
    table_index(index){
      return (this.current_page-1) * this.page_size + index + 1
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    //修改商品信息方法
    handleEdit(index, row) {
      this.$router.push("/updateCommodity");
      this.$store.commit("setCommodityMessage",row);  //提交到全局
    },
    //下架商品方法
    handleDelete(index, row) {
      console.log(index, row);
      // let postdata = this.$qs.stringify({
      //   CommodityID :row.commodityID,
      // })
      // this.$axios({
      //   url: '/merchant/downCommodity',
      //   method: 'post',
      //   data: postdata,
      // }).then( response => {
      //   if (response.status === 200 && response.data === 1){
      //     this.$message({
      //       message: "下架商品成功",
      //       type: 'success'
      //     });
      //     this.tableData.splice(index,1)  //重数组中移除
      //   }else {
      //     this.$message({
      //       message: response.data,
      //       type: 'error'
      //     });
      //   }
      // }).catch( error => {
      //   console.log(error);
      // })
    }
  }
}
</script>

<style scoped>
.show{
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>

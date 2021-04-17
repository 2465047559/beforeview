<template>
  <!--所有商品信息展示-->
  <div>
    <div class="show">
      <el-table
        :data="commodityData.filter(data => !search || (data.commodityName.toLowerCase()).trim().includes(search.toLowerCase()))"
        style="width: 100%;"
        :border="true"
        v-loading="loading"
        element-loading-text="阳奈正在玩命加载中...."
        :highlight-current-row="true"
        :lazy="true">

        <el-table-column
          type="index"
          width="70"
          :index="table_index">
        </el-table-column>

        <!--商品ID-->
        <el-table-column
          label="商品序号"
          width="120px"
          align="center"
          header-align = "center"
          prop="commodityID">
        </el-table-column>

        <!--商品图片-->
        <el-table-column
          label="商品图片"
          width="140px"
          align="center"
          header-align = "center"
          prop="">
          <template scope="scope">
            <el-image
              style="width: 50px; height: 50px"
              :src="scope.row.commodityPhotoInfo.photoInfo.photo_One"
              :preview-src-list="srcList">
            </el-image>
          </template>

        </el-table-column>

        <!--商品名称-->
        <el-table-column
          label="商品名称"
          align="left"
          header-align = "center"
          :show-overflow-tooltip="true"
          width="300px"
          prop="commodityName">
        </el-table-column>

        <!--商品类型-->
        <el-table-column
          label="商品类型"
          align="center"
          header-align = "center"
          width="140px"
          prop="commodityTypeInfo.cTypeName">
        </el-table-column>

        <!--商品库存量-->
        <el-table-column
          label="商品库存量(件)"
          align="center"
          header-align = "center"
          width="150px"
          sortable
          prop="commodityNum">
        </el-table-column>

        <!--商品价格-->
        <el-table-column
          label="商品价格(RMB)"
          align="center"
          header-align = "center"
          width="160"
          sortable
          prop="commodityPrice">
        </el-table-column>

        <!--商品购买人数-->
        <el-table-column
          label="商品购买人数"
          align="center"
          width="130px"
          sortable
          header-align = "center"
          prop="commodityPeople">
        </el-table-column>

        <!--搜索和按钮-->
        <el-table-column
          align="right"
          fixed="right"
          min-width="250"
          width="270">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入商品名称中的关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)">修改商品信息</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">下架商品</el-button>
          </template>

        </el-table-column>

      </el-table>
      <div>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="current_page"
          :page-size="page_size"
          layout="total, prev, pager, next"
          :total="all_commodity_number">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowAllCompany",
  data() {
    return {
      commodityData: [
        {
          commodityID: 1001,
          commodityPhotoInfo:{
            photoInfo:{
              photo_One:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg'
            }
          },
          commodityName: '阿巴巴爸爸巴巴爸爸',
          commodityTypeInfo:{
            cTypeName:'阿吧'
          },
          commodityNum: 92,
          commodityPrice: 98.23,
          commodityPeople: 100
        },
        {
          commodityID: 1001,
          commodityPhotoInfo:{
            photoInfo:{
              photo_One:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg'
            }
          },
          commodityName: '阿巴巴爸爸巴巴爸爸',
          commodityTypeInfo:{
            cTypeName:'阿吧'
          },
          commodityNum: 92,
          commodityPrice: 98.23,
          commodityPeople: 100
        },
        {
          commodityID: 1001,
          commodityPhotoInfo:{
            photoInfo:{
              photo_One:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg'
            }
          },
          commodityName: '阿巴巴爸爸巴巴爸爸',
          commodityTypeInfo:{
            cTypeName:'阿吧'
          },
          commodityNum: 92,
          commodityPrice: 98.23,
          commodityPeople: 100
        },
        {
          commodityID: 1001,
          commodityPhotoInfo:{
            photoInfo:{
              photo_One:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg'
            }
          },
          commodityName: '阿巴巴爸爸巴巴爸爸',
          commodityTypeInfo:{
            cTypeName:'阿吧'
          },
          commodityNum: 92,
          commodityPrice: 98.23,
          commodityPeople: 100
        },
        {
          commodityID: 1001,
          commodityPhotoInfo:{
            photoInfo:{
              photo_One:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg'
            }
          },
          commodityName: '阿巴巴爸爸巴巴爸爸',
          commodityTypeInfo:{
            cTypeName:'阿吧'
          },
          commodityNum: 92,
          commodityPrice: 98.23,
          commodityPeople: 100
        },
        {
          commodityID: 1001,
          commodityPhotoInfo:{
            photoInfo:{
              photo_One:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg'
            }
          },
          commodityName: '阿巴巴爸爸巴巴爸爸',
          commodityTypeInfo:{
            cTypeName:'阿吧'
          },
          commodityNum: 92,
          commodityPrice: 98.23,
          commodityPeople: 100
        },
        {
          commodityID: 1001,
          commodityPhotoInfo:{
            photoInfo:{
              photo_One:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg'
            }
          },
          commodityName: '阿巴巴爸爸巴巴爸爸',
          commodityTypeInfo:{
            cTypeName:'阿吧'
          },
          commodityNum: 92,
          commodityPrice: 98.23,
          commodityPeople: 100
        },
      ],
      loading:false,
      search: '',
      srcList:[],
      current_page: 1,
      page_size: 7,
      all_commodity_number: 2000
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
    },
  },

  created() {
    // let postData = this.$qs.stringify({
    //   MerchantID: this.$store.state.MerchantID,
    // })

    // //发送axios请求
    // this.$axios({
    //   url: '/merchant/findAllCommodity',
    //   method: 'post',
    //   data: postData
    // }).then( response => {
    //   console.log(response.data);
    //   let newTable = [];
    //   let imgSrc = [];
    //   //过滤掉下架的商品
    //   for (let i=0;i<response.data.length;i++){
    //     if(response.data[i].commodityState === 1){
    //       newTable.push(response.data[i]);  //过滤掉下架的商品
    //       imgSrc.push(response.data[i].commodityPhotoInfo.photoInfo.photo_One); //添加到大图模式
    //     }
    //   }
    //   this.tableData = newTable;  //给表添加值
    //   this.srcList = imgSrc; //给图片添加值
    //   this.loading = false;   //加载完成
    //   //消息提示
    //   this.$message({
    //     message: '所有数据加载完成',
    //     type: 'success'
    //   });
    // }).catch( error => {
    //   console.log(error);
    // })
  }
}
</script>

<style scoped>
.el-table-column{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.show{
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>

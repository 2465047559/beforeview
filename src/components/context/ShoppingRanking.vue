<template>
  <div>
    <div class="ranking">
      <div class="table_title">
        <span>销量前五商品</span>
      </div>
      <el-table
        :data="shopping_data"
        stripe
        style="width: 100%">
        <el-table-column
          type="index">
        </el-table-column>
        <el-table-column
          prop="shopping_img_href"
          label="图片"
          width="100">
          <template slot-scope="scope">
            <img  :src="scope.row.shopping_img_href" alt="" style="width: 60px;height: 60px">
          </template>
        </el-table-column>
        <el-table-column
          prop="shopping_name"
          label="名称"
          width="295">
        </el-table-column>
        <el-table-column
          prop="shopping_sales"
          label="销量"
          width="120">
        </el-table-column>
        <el-table-column
          prop="shopping_good_percentage"
          label="好评率"
          width="120">
        </el-table-column>
        <el-table-column
          prop="shopping_price"
          label="商品价格"
          width="120">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingRanking",
  data() {
    return {
      shopping_data: [{
        shopping_img_href: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg',
        shopping_name: '王小虎',
        shopping_sales:  1999,
        shopping_good_percentage: 0.98,
        shopping_price:120
      },{
        shopping_img_href: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg',
        shopping_name: '王小虎',
        shopping_sales:  1999,
        shopping_good_percentage: 0.98
      },{
        shopping_img_href: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg',
        shopping_name: '王小虎',
        shopping_sales:  1999,
        shopping_good_percentage: 0.98
      },{
        shopping_img_href: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg',
        shopping_name: '王小虎',
        shopping_sales:  1999,
        shopping_good_percentage: 0.98
      },{
        shopping_img_href: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg',
        shopping_name: '王小虎',
        shopping_sales:  1999,
        shopping_good_percentage: 0.98
      },]
    }
  }
}
</script>

<style scoped>
.table_title{
  width: 100%;
  height: 40px;
  font-size: 24px;
  text-align: center;
  color: rgba(0,0,0,0.8);
  padding-top: 10px;
}
.ranking{
  width: 97%;
  height: 500px;
  border-radius: 10px;
  background-color: #fff;
  margin-left: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>

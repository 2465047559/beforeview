<template>
  <div>
    <div class="delete_commodity" v-for="commodity in delete_commodity_list">
      <div class="commodity_img">
        <img :src="commodity.commodityPhotoInfo.photoInfo.photo_One"
             style="width: 90px;height: 90px;border-radius: 45px"/>
      </div>
      <div class="commodity_context">
        <el-tooltip effect="dark"
                    :content="commodity.commodityName"
                    placement="bottom">
          <span class="commodity_name">{{commodity.commodityName}}</span>
        </el-tooltip>
        <span>价格:{{commodity.commodityPrice}}元</span>
        <span>销量:{{commodity.commoditySaleNumber}}件</span>
        <span>下架时间:{{commodity.commodityDownTime}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RemovedCommodity",
  data(){
    return{
      delete_commodity_list: [
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
          commodityPeople: 100,
          commoditySaleNumber: 10,
          commodityDownTime: '2020/01/02'
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
          commodityPeople: 100,
          commoditySaleNumber: 10,
          commodityDownTime: '2020/01/02'
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
          commodityPeople: 100,
          commoditySaleNumber: 10,
          commodityDownTime: '2020/01/02'
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
          commodityPeople: 100,
          commoditySaleNumber: 10,
          commodityDownTime: '2020/01/02'
        },
        ],
      commodity_img:'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg',
    }
  }
}
</script>

<style scoped>
  .delete_commodity{
    width: 300px;
    height: 130px;
    /*background-color: bisque;*/
    background-color: #d2ff8a;
    border-radius: 20px;
    margin: 10px;
    float: left;
  }
  .commodity_img{
    width: 90px;
    height: 90px;
    margin: 20px;
    float: left;
    /*background-color: #99a9bf;*/
  }
  .commodity_context{
    width: 170px;
    height: 110px;
    float: left;
    border-radius: 0px 20px 20px 0px;
    /*background-color: darkgray;*/
    text-align: left;
    display: flex;
    flex-direction: column;
    text-indent: 14px;
    padding-top: 20px;
    font-size: 14px;
    color: #777777;
  }
  .commodity_name{
    font-size: 18px;
    font-weight: bold;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

</style>

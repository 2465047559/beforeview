<template>
  <div class="coupon_panel">
    <div class="insert_coupon">
      <el-form ref="form" :model="insert_coupon" label-width="140px">
        <el-form-item label="优惠券名称:"
                      style="width: 80%;padding-top: 20px;" >
          <el-input v-model="coupon_name"
                    :disabled="true"
                    placeholder="优惠券名称由条件和额度组成"></el-input>
        </el-form-item>

        <el-form-item label="优惠券条件:"
                      style="width: 70%;" >
          <el-select v-model="insert_coupon.coupon_condition"
                     @change="condition_change"
                     placeholder="请选择优惠券条件">
            <el-option
              v-for="item in coupon_condition_list"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <!--        <el-input v-model="insert_coupon.coupon_condition"></el-input>-->
        </el-form-item>

        <el-form-item label="优惠额度:"
                      style="width: 70%;" >
          <el-select v-model="insert_coupon.coupon_subtract_money"
                     @change="subtract_money_change"
                     placeholder="请选择优惠额度">
            <el-option
              v-for="item in coupon_subtract_money_list"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <!--        <el-input v-model="insert_coupon.coupon_subtract_money"></el-input>-->
        </el-form-item>

        <el-form-item label="优惠商品:"
                      style="width: 70%;" >
          <el-select v-model="insert_coupon.coupon_commodity_id" placeholder="请选择优惠额度">
            <el-option
              v-for="item in coupon_commodity_list"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <!--        <el-input v-model="insert_coupon.coupon_subtract_money"></el-input>-->
        </el-form-item>

        <el-form-item label="发行数量:"
                      style="width: 50%;" >
          <el-input-number v-model="insert_coupon.coupon_number"
                           @change="coupon_number_change"
                           :min="1"
                           :max="999"></el-input-number>
          <!--        <el-input v-model="insert_coupon.coupon_number"></el-input>-->
        </el-form-item>

        <el-form-item label="发行时间:"
                      style="width: 50%;" >
          <el-date-picker
            v-model="insert_coupon.coupon_start_time"
            type="datetime"
            placeholder="选择下架时间">
          </el-date-picker>
          <!--        <el-input v-model="insert_coupon.coupon_destroy_time"></el-input>-->
        </el-form-item>
        <el-form-item label="下架时间:"
                      style="width: 50%;" >
          <el-date-picker
            v-model="insert_coupon.coupon_destroy_time"
            type="datetime"
            placeholder="选择下架时间">
          </el-date-picker>
          <!--        <el-input v-model="insert_coupon.coupon_destroy_time"></el-input>-->
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="commodity_context">
      <div class="commodity_title">
        <span>商品信息展示</span>
      </div>
      <div class="commodity_img">
        <img :src="commodity.commodityPhotoInfo.photoInfo.photo_One" style="width: 100%;height: 100%;">
      </div>
      <div class="commodity_card">
        <span style="margin-top: 5%">商品名称:
          <span class="commodity_card_context">{{commodity.commodityName}}</span>
        </span>
        <span style="margin-top: 5%">
          商品销量:<span class="commodity_card_context">{{commodity.commodityPeople}}</span>
        </span>
        <span style="margin-top: 5%">
          商品价格:<span class="commodity_card_context">{{commodity.commodityPrice}}</span>
        </span>
        <span style="margin-top: 5%">
          商品库存:<span class="commodity_card_context">{{commodity.commodityNum}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InsertCoupon",
  data(){
    return{
      coupon_condition_list:[
        {
          value: 30,
          label: '满30元',
        },
        {
          value: 50,
          label: '满50元',
        },
        {
          value: 100,
          label: '满100元',
        },
        {
          value: 200,
          label: '满200元',
        },
        {
          value: 300,
          label: '满300元',
        },
      ],
      coupon_subtract_money_list:[
        {
          value: -5,
          label: '减5元'
        },
        {
          value: -10,
          label: '减10元'
        },
        {
          value: -30,
          label: '减30元'
        },
        {
          value: -50,
          label: '减50元'
        },
        {
          value: -100,
          label: '减100元'
        },
      ],
      coupon_commodity_list:[
        {
          value: 1001,
          label: '商品1号'
        },
        {
          value: 1002,
          label: '商品2号'
        },
        {
          value: 1,
          label: '全部商品'
        },
      ],
      insert_coupon:{
        coupon_name: '',
        coupon_condition: '',
        coupon_subtract_money: '',
        coupon_number: 1,
        coupon_commodity_id: '',
        coupon_start_time: '',
        coupon_destroy_time: '',
      },
      coupon_before_condition: '',
      coupon_after_condition: '',
      commodity: {
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
    }
  },
  methods:{
    coupon_number_change(value){
      console.log(value)
    },
    condition_change(value){
      for (let i=0;i<this.coupon_condition_list.length;i++)
        if(this.coupon_condition_list[i].value === value)
          this.coupon_before_condition = this.coupon_condition_list[i].label;
    },

    subtract_money_change(value){
      for (let i=0;i<this.coupon_subtract_money_list.length;i++)
        if(this.coupon_subtract_money_list[i].value === value)
          this.coupon_after_condition = this.coupon_subtract_money_list[i].label;
    },

    onSubmit(){
      console.log("提交")
    }
  },
  computed:{
    coupon_name:{
      get(){
        if (this.coupon_before_condition !='' && this.coupon_after_condition !='')
          return this.coupon_before_condition+this.coupon_after_condition;
        else
          return '';
      }
    }
  }
}
</script>

<style scoped>
.coupon_panel{
  width: 100%;
  height: 100%;
  display: flex;
  float: left;
}
.insert_coupon{
  width: 45%;
  height: 100%;
  background-color: #fff;
  padding-top: 10px;
  border-radius: 30px;
  margin-right: 5%;
  margin-left: 3%;
}
.commodity_context{
  width: 45%;
  height: 100%;
  background: #fff;
  border-radius: 30px;
}
.commodity_title{
  width: 100%;
  height: 5%;
  font-size: 24px;
  text-align: center;
  padding-top: 1%;
  border-radius: 30px;
  color: #777777;
}
.commodity_img{
  width: 80%;
  height: 50%;
  /*background-color: #B3C0D1;*/
  margin-top: 3%;
  margin-left: 10%;
}
.commodity_card{
  width: 100%;
  height: 40%;
  margin-top: 2%;
  /*background-color: #777777;*/
  border-top: #777777 1px solid;
  border-radius: 0px 0px 30px 30px;
  display: flex;
  flex-direction: column;
  text-indent: 28px;
  font-size: 20px;
  font-weight: bold;
  color: #303133;
}
.commodity_card_context{
  margin-left: 3%;
  font-size: 20px;
  color: #303133;
}
</style>

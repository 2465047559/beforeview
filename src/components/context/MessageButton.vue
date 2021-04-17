<template>
  <div>
    <div class="buttonParent">
      <div class="button_item" @click="goMessagePanel">
        <div class="button_icon">
          <i class="el-icon-s-comment" style="font-size: 50px"></i>
        </div>
        <div class="button_href">
          <span class="span_name">消息</span>
          <span class="span_number">2000</span>
        </div>
      </div>
      <div class="button_item" @click="goStart">
        <div class="button_icon">
          <i class="el-icon-star-on" style="font-size: 50px"></i>
        </div>
        <div class="button_href">
          <span class="span_name">收藏</span>
          <span class="span_number">2000</span>
        </div>
      </div>
    </div>
    <div class="buttonParent">
      <div class="button_item" @click="goOrderList">
        <div class="button_icon">
          <i class="el-icon-s-order" style="font-size: 50px"></i>
        </div>
        <div class="button_href">
          <span class="span_name">订单</span>
          <span class="span_number">2000</span>
        </div>
      </div>
      <div class="button_item" @click="goCommodity">
        <div class="button_icon">
          <i class="el-icon-s-goods" style="font-size: 50px"></i>
        </div>
        <div class="button_href">
          <span class="span_name">宝贝</span>
          <span class="span_number">2000</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageButton",
  methods:{
    goMessagePanel(){
      this.$message.error('现在打不开，还在开发中');
    },
    goStart(){
      this.$message.error('现在打不开，还在开发中');
    },
    goOrderList(){
      this.$router.push("/show_all_order_list")
    },
    goCommodity(){
      this.$router.push("/show_all_commodity")
    }
  }
}
</script>

<style scoped>
.userParent{
  display: flex;
  flex-direction: column;
}
.buttonParent{
  display: flex;
  flex-direction: row-reverse;
}
.button_item{
  width: 50%;
  height: 70px;
  background-color: #fff;
  border-radius: 7px;
  margin:2px;
  display: flex;
  flex-direction: revert;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  /*cursor: url(./src/assets/mouse.jpg);*/
  cursor: pointer;
}

.button_icon{
  width: 40%;
  height: 50px;
  margin: 10px;
  /*background-color: #66b1ff;*/
}
.button_href{
  width: 60%;
  height: 50px;
  margin: 12px 0px;

  text-align: left;
  display: flex;
  flex-direction: column;
}
.span_name{
  font-size: 13px;
  color: #777777;
}
.span_number{
  font-size: 20px;
  font-family: 微软雅黑;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.75);
}
</style>

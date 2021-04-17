<template>
  <div>
    <div class="black_panel" v-for="item in black_member">
      <div class="black_member_img">
        <img :src="item.member_img" style="width: 100%;height: 100%"/>
      </div>
      <div class="black_member_name">
        <span>{{item.member_name}}</span>
      </div>
      <div class="black_member_context">
        <span>会员积分:{{item.member_integral}}</span>
        <span style="margin-top: 5px">会员类型:{{item.member_type}}</span>
        <span style="margin-top: 5px">联系方式:{{item.member_phone}}</span>
        <span style="margin-top: 5px">
          性别:{{item.member_sex == '1'? '男' : '女'}}
        </span>
        <span style="margin-top: 5px">封号原因:{{item.exit_reason}}</span>
      </div>
      <div class="black_member_button">
        <el-button type="success" class="button_style">移除黑名单</el-button>
        <el-button type="danger" class="button_style">清除积分</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlackMember",
  data(){
    return{
      black_member:[
        {
          member_img: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg',
          member_name: '阿吧',
          member_integral: 1000,
          member_type: '普通会员',
          member_phone: '13000000000',
          member_sex: '1',
          exit_reason: '刷单',
        },
        {
          member_img: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg',
          member_name: '阿吧',
          member_integral: 1000,
          member_type: '普通会员',
          member_phone: '13000000000',
          member_sex: '1',
          exit_reason: '刷单',
        },
        {
          member_img: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg',
          member_name: '阿吧',
          member_integral: 1000,
          member_type: '普通会员',
          member_phone: '13000000000',
          member_sex: '1',
          exit_reason: '刷单',
        },
        {
          member_img: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg',
          member_name: '阿吧',
          member_integral: 1000,
          member_type: '普通会员',
          member_phone: '13000000000',
          member_sex: '1',
          exit_reason: '刷单',
        },
        {
          member_img: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg',
          member_name: '阿吧',
          member_integral: 1000,
          member_type: '普通会员',
          member_phone: '13000000000',
          member_sex: '1',
          exit_reason: '刷单',
        },
      ]
    }
  }
}
</script>

<style scoped>
  .black_panel{
    width: 270px;
    height: 410px;
    background-color: #ffffff;
    border-radius: 20px;
    margin: 10px;
    float: left;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .black_member_img{
    width: 100px;
    height: 100px;
    /*background: bisque;*/
    margin: 20px auto auto;
    border-radius: 50px;
  }
  .black_member_name{
    width: 100%;
    height: 30px;
    /*background: cadetblue;*/
    text-align: center;
    margin-top: 10px;
    font-size: 20px;
  }
  .black_member_context{
    width: 100%;
    height: 170px;
    /*background: azure;*/
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    font-size: 18px;
    text-indent: 14px;
    color: #777;
  }
  .black_member_button{
    width: 100%;
    height: 50px;
    margin-top: 10px;
    /*background: chocolate;*/
  }
  .button_style{
    width: 120px;
    height: 50px;
    margin-left: 9px;
  }
</style>

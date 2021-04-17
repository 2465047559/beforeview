<template>
  <div>
    <el-row class="row_header">
      <el-col :span="22">
        <div class="page_header">
          <el-page-header @back="goBack"
                          :content="context">
          </el-page-header>
        </div>
      </el-col>
      <el-col :span="2">
        <el-dropdown>
          <el-avatar icon="el-icon-user-solid"
                     :src=user_img_href
                     class="userImg"></el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的信息</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item divided>退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {Row,Col,Avatar,Dropdown,DropdownMenu,DropdownItem} from 'element-ui';
export default {
  name: "HeaderView",
  components:{
    Row: Row.name,
    Col: Col.name,
    Avatar: Avatar.name,
    Dropdown: Dropdown.name,
    DropdownMenu: DropdownMenu.name,
    DropdownItem: DropdownItem.name
  },
  data(){
    return{
      user_img_href: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1986451467,394304688&fm=26&gp=0.jpg',
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  computed:{
    context:{
      get(){
        return this.$store.state.page_header_context
      }
    }
  }
}
</script>

<style scoped>
.row_header{
  background: #fff;
  box-shadow: 1px 2px 10px rgb(0 0 0 /20%);
  z-index: 99;
  position: relative;
  height: 45px;
}
.page_header{
  padding-top: 10px;
  padding-left: 20px;
}
.userImg{
  width: 45px;
  height: 45px;
  margin-right: 20px;
}
</style>

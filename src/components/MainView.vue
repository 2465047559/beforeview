<template>
<!--  主界面-->
  <div>
    <el-container :style="{height: container_width +'px', border: 1 +'px'}">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <aside-view/>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 24px;line-height: 45px;height: 45px">
          <header-view/>
        </el-header>

        <el-main style="background-color: rgba(235,236,237,1);">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Container,Aside, Header,Main} from 'element-ui';
import AsideView from "./AsideView";
import HeaderView from "./HeaderView";
import Context from "./context/Context";
export default {
  name: "MainView",
  components:{
    Context,
    HeaderView,
    AsideView,
    Container: Container.name,
    Aside: Aside.name,
    Header: Header.name,
    Main: Main.name,
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      tableData: Array(20).fill(item),
      container_width: 800,
    }
  },
  beforeCreate() {
    this.container_width = window.innerWidth
  }
}
</script>

<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 45px;
  padding: 0px;
}

.el-aside {
  color: #333;
}
</style>

<template>
  <div>
    <el-row class="row_height">
      <el-col :span="7">
        <div class="grid-content bg-purple userParent">
          <message-button/>
          <task-parent/>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="grid-content bg-purple-light userParent">
          <shopping-ranking/>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import {Row,Col} from 'element-ui';
import MessageButton from "./MessageButton";
import TaskParent from "./TaskPanel";
import ShoppingRanking from "./ShoppingRanking";
export default {
  name: "Context",
  components:{
    ShoppingRanking,
    TaskParent,
    MessageButton,
    Row: Row.name,
    Col: Col.name,
  },
  data() {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
      value1: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
    }
  }
}
</script>

<style scoped>
.bg-purple-dark {
  background: #99a9bf;
}
.userParent{
  display: flex;
  flex-direction: column;
}
.buttonParent{
  display: flex;
  flex-direction: row-reverse;
}
.bg-purple {
  background-color: rgba(235,236,237,1);
}
.bg-purple-light {
  background-color: rgba(235,236,237,1);
}
.grid-content {
  border-radius: 4px;
  min-height: 558px;
}
.grid-content_bottom {
  border-radius: 4px;
  min-height: 800px;
}


</style>

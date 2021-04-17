<template>
  <div>
    <div class="task_panel">
      <div class="task_title">
        <span>任务名称:SpringBoot前端</span>
      </div>

      <div class="task_context">
        <el-steps direction="vertical" :active="3">
          <el-step title="已完成" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="已完成" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="已完成" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="进行中" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="待完成" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskParent"
}
</script>

<style scoped>
  .task_panel{
    width: 100%;
    height: 342px;
    background-color: rgba(255,255,255,0.8);
    margin-top: 10px;
    border-radius: 7px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .task_title{
    font-size: 14px;
    text-indent: 14px;
    padding-top: 10px;
    width: 100%;
    height: 30px;
    background-color: rgba(255,255,255,0.8);
  }
  .task_context{
    width: 97%;
    height: 338px;
    margin-top: 2px;
    background-color: rgba(255,255,255,0.8);
    padding-left: 10px;
    padding-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }

</style>

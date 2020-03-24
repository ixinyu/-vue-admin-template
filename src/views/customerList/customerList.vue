<template>
  <div class="c-wrap">
    <div class="content" />
    <el-popover
      v-model="visible"
      placement="top"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <el-button slot="reference">click 激活</el-button>
    </el-popover>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人" />
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-button type="primary" style="float:right;" @click="onSubmit">添加</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Customer',
  data() {
    return {
      visible: false,
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  width: 80%;
  height: 100%;
  margin: 60px auto 0;
  .pdf {
    width: 100%;
    height: 100%;
  }
}
</style>

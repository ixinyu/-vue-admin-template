<template>
  <div class="c-wrap">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="员工名称：">
        <el-input v-model="formInline.user" placeholder="审批人" size="medium" />
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域" size="medium">
          <el-option label="区域一" value="shanghai" />
          <el-option label="区域二" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-button type="primary" size="medium" class="fl-right" @click="onSubmit">+ 添加</el-button>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        type="selection"
        width="50"
      />
      <el-table-column
        prop="usename"
        label="昵称（系统名）"
        fixed
      />
      <el-table-column
        prop="role"
        label="角色"
      />
      <el-table-column
        prop="phone"
        label="电话"
      />
      <el-table-column
        prop="department"
        label="部门"
      />
      <el-table-column
        prop="job"
        label="职位"
      />
      <el-table-column
        fixed="right"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click.native.prevent="editRow(scope.row)"
          >
            编辑
          </el-button>
          <el-button
            type="text"
            size="small"
            @click.native.prevent="deleteRow(scope.row)"
          >
            删除
          </el-button>
          <el-button
            type="text"
            size="small"
            @click.native.prevent="resetRow(scope.row)"
          >
            重置密码
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Customer',
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableData: [{
        usename: '王小虎',
        phone: '13568888888',
        department: '销售部',
        job: '销售',
        role: '普通用户',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        usename: '王小虎',
        phone: '13564543538',
        department: '人事部',
        job: '人事',
        role: '普通用户',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    editRow(row) {
      // console.log(row)
    },
    deleteRow(row) {

    },
    resetRow(row) {

    }
  }
}
</script>
<style lang="scss" scoped>
.c-wrap{
  padding: 20px;
  .fl-right{
    float: right;
  }
}
</style>

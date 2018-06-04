<template>
  <section id="projectDeviceSection">
    <el-breadcrumb separator-class="el-icon-arrow-right" style="float: left;">
      <el-breadcrumb-item :to="{ path: '/smoke/project' }">项目查询</el-breadcrumb-item>
      <el-breadcrumb-item>{{projectName}}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form :inline="true" :model="queryForm" class="queryPart" style="float: right;">
      <el-form-item>
        <el-input v-model="queryForm.key" placeholder="搜索设备短号/网关号/地址/主用户/手机号"
                  class="searchKey"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="queryProjectDevice(1)">搜索</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">导出Excel</el-button>
      </el-form-item>
    </el-form>

    <div class="projectDeviceTable">
      <el-table
        :data="tableData"
        v-loading="tableLoading"
        border
        stripe>
        <el-table-column
          label="设备短号">
          <template slot-scope="scope">
            <el-radio :label="scope.row.shortId" v-model="selectId">{{scope.row.shortId}}</el-radio>
          </template>
        </el-table-column>
        <el-table-column
          prop="netPort"
          label="网关号">
        </el-table-column>
        <el-table-column
          prop="deviceType"
          label="设备型号">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="绑定电话">
        </el-table-column>
        <el-table-column
          prop="address"
          label="项目地址">
        </el-table-column>
        <el-table-column
          prop="section"
          label="位置">
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注">
        </el-table-column>
      </el-table>

      <div class="btnGroup">
        <el-button @click="$refs.modify.open();"
                   :disabled="selectId>0?false:true">修改设备信息</el-button>
        <el-button :disabled="selectId>0?false:true">删除</el-button>
      </div>

      <pagination :total="total" :pageSize="20" :paginationFun="queryProjectDevice"></pagination>
    </div>

    <dialogProjectDevice ref="modify" :id="selectId"></dialogProjectDevice>
  </section>
</template>
<script>
import pagination from '../../components/Pagination';
import dialogProjectDevice from '../../components/device/ModifyProjectDevice';

export default {
  data() {
    return {
      id: this.$route.params.id,
      projectName: decodeURIComponent(this.$route.params.projectName, 'utf-8'),
      // 筛选
      queryForm: {
        key: '',
      },
      // 表格
      tableLoading: true,
      tableData: [],
      total: 0,
      selectId: '', // 选择的id
    };
  },
  components: {
    pagination,
    dialogProjectDevice,
  },
  mounted() {
    this.queryProjectDevice(1);
  },
  methods: {
    // 获取项目管理列表
    queryProjectDevice(currentPage) {
      this.selectId = '';// 清除选中状态
      const param = {};
      param.queryForm = this.queryForm;
      param.currentPage = currentPage || 1;
      param.pageSize = 20;
      this.tableLoading = true;
      window.vaApi.getProjectDeviceList(param).then((res) => {
        this.tableLoading = false;
        const { status, msg, data } = res.data;
        if (Number(status) === 1) {
          this.total = data.total;
          this.tableData = data.list;
        } else {
          this.$message({
            message: msg,
            type: 'error',
            duration: 1000,
          });
        }
      });
    },
  },
};
</script>
<style lang="scss">
  #projectDeviceSection {
    .queryPart {
      .searchKey {
        width: 500px;
      }
    }

    .projectDeviceTable {
      .btnGroup {
        margin-top: 15px;
        margin-bottom: -52px;
      }
    }
  }
</style>

<template>
  <section id="projectSection">
    <el-form :inline="true" :model="queryForm" class="queryPart">
      <el-form-item class="searchKey">
        <el-input v-model="queryForm.key" placeholder="搜索项目ID/项目名称/客户信息"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="queryProject(1)">搜索</el-button>
      </el-form-item>
      <el-form-item style="float: right;">
        <el-button type="primary" @click="$refs.add.open();">新建项目</el-button>
        <el-button>下载设备Excel模版</el-button>
      </el-form-item>
    </el-form>

    <div class="projectTable">
      <el-table
        :data="tableData"
        v-loading="tableLoading"
        border
        stripe>
        <el-table-column
          prop="projectId"
          label="序号">
          <template slot-scope="scope">
            <el-radio :label="scope.row.projectId"
                      v-model="selectId">{{scope.row.projectId}}</el-radio>
          </template>
        </el-table-column>
        <el-table-column
          prop="projectUser"
          label="所属用户">
        </el-table-column>
        <el-table-column
          prop="projectName"
          label="项目名称">
        </el-table-column>
        <el-table-column
          prop="address"
          label="项目地址"
          width="300">
        </el-table-column>
        <el-table-column
        label="通知方式">
        <template slot-scope="scope">
          <p>异常: {{ scope.row.unusual }}</p>
          <p>告警: {{ scope.row.warning }}</p>
        </template>
      </el-table-column>
        <el-table-column
          prop="equipType"
          label="设备类型">
        </el-table-column>
        <el-table-column
          prop="dmpGrounp"
          label="DMP分组">
        </el-table-column>
        <el-table-column
          prop="other"
          label="其他">
          <template slot-scope="scope">
            <span class="details cursor">查看详情</span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <!--<el-button v-if="Number(scope.row.hasDevice) === 0" @click="$refs.import.open();"-->
                       <!--class="tableBtnImport tableBtnCommon">-->
              <!--导入设备-->
            <!--</el-button>-->
            <!--<el-button v-else @click="goToDeviceManage(scope.row.projectId, scope.row.projectName)"-->
                       <!--class="tableBtnManage tableBtnCommon">设备管理-->
            <!--</el-button>-->
            <span class="cursor green" @click="$refs.import.open();">导入设备</span>
          </template>
        </el-table-column>
      </el-table>

      <div class="btnGroup">
        <el-button @click="$refs.modify.open();"
                   :disabled="selectId>0?false:true">修改</el-button>
        <el-button :disabled="selectId>0?false:true">删除</el-button>
      </div>

      <pagination :total="total" :pageSize="20" :paginationFun="queryProject"></pagination>
    </div>

    <!-- 新增项目 -->
    <dialogProject title="新增项目" ref="add"></dialogProject>
    <!-- 修改项目 -->
    <dialogProject title="修改项目" ref="modify" :id="selectId"></dialogProject>
    <!-- 导入设备 -->
    <importDevice ref="import" :id="selectId"></importDevice>
  </section>
</template>
<script>
import pagination from '../../components/Pagination';
import dialogProject from '../../components/project/ModifyProject';
import importDevice from '../../components/project/ImportDevice';

export default {
  data() {
    return {
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
    dialogProject,
    importDevice,
  },
  mounted() {
    this.queryProject(1);
  },
  created() {
    this.$store.commit('SET_HEAD', '项目管理');
  },
  methods: {
    // 获取项目管理列表
    queryProject(currentPage) {
      this.selectId = '';// 清除选中状态
      const param = {};
      param.queryForm = this.queryForm;
      param.currentPage = currentPage || 1;
      param.pageSize = 20;
      this.tableLoading = true;
      window.vaApi.getProjectList(param).then((res) => {
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
    // 跳转到设备管理页面
    goToDeviceManage(id, projectName) {
      this.$router.push({ path: `/project/device-manage/${id}/${encodeURIComponent(projectName, 'utf-8')}` });
    },
  },
};
</script>
<style lang="scss">
  @import '~scss_vars';

  #projectSection {
    .queryPart {
      .searchKey {
        width: 40%;
        > div {
          width: 100%;
        }
      }
    }

    .projectTable {
      .tableBtnCommon {
        border: 0;
        background-color: transparent;
        &:hover {
          background-color: transparent;
        }
      }
      .tableBtnManage {
        font-weight: bold;
        color: #606266;
      }
      .tableBtnImport {
        color: $color-primary;
      }

      .btnGroup {
        margin-top: 15px;
        margin-bottom: -52px;
      }
      .details{
        border-bottom: 1px solid #333;
      }
      .green{
        color:green;
        border-bottom: 1px solid green;
      }
    }
  }
</style>

<template>
  <section id="deviceSection">
    <div class="searchGroup">
      <el-button :type="activeBtn === 1?'primary':'info'" @click="activeBtn = 1">设备1</el-button>
      <el-button :type="activeBtn === 2?'primary':'info'" @click="activeBtn = 2">设备2</el-button>
      <el-button :type="activeBtn === 3?'primary':'info'" @click="activeBtn = 3">设备3</el-button>
    </div>
    <el-form :inline="true" :model="queryForm" class="queryPart">
      <el-form-item class="searchKey">
        <el-input v-model="queryForm.key" placeholder="搜索设备短号/网关号/地址/主用户/手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="queryForm.project">
          <el-option label="全部项目" value=""></el-option>
          <el-option label="项目一" value="project1"></el-option>
          <el-option label="项目二" value="project2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="queryForm.status">
          <el-option label="全部状态" value=""></el-option>
          <el-option label="在线" value="online"></el-option>
          <el-option label="离线" value="offline"></el-option>
          <el-option label="未知" value="unknown"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="queryDevice(1)">筛选</el-button>
      </el-form-item>
      <el-form-item style="float: right;">
        <el-button type="primary">导出excel</el-button>
      </el-form-item>
    </el-form>

    <el-table class="deviceTable" :data="tableData" v-loading="tableLoading" border stripe>
      <el-table-column label="设备短号">
        <template slot-scope="scope">
          <el-radio :label="scope.row.deviceNumber" v-model="selectId">{{scope.row.deviceNumber}}</el-radio>
        </template>
      </el-table-column>
      <el-table-column prop="netPort" label="网关号">
      </el-table-column>
      <el-table-column label="终端状态">
        <template slot-scope="scope">
          <p v-if="scope.row.deviceStatus==='online'">在线</p>
          <p v-else-if="scope.row.deviceStatus==='offline'" class="red">离线</p>
          <p v-else class="unknown">未知</p>
        </template>
      </el-table-column>
      <el-table-column prop="installStatus" label="安装状态">
      </el-table-column>
      <el-table-column prop="useStatus" label="使用状态">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column prop="position" label="地图定位">
      </el-table-column>
      <el-table-column prop="deviceType" label="设备型号">
      </el-table-column>
      <el-table-column prop="projectName" label="项目名称">
      </el-table-column>
      <el-table-column prop="userName" label="主用户">
      </el-table-column>
      <el-table-column prop="phone" label="手机号">
      </el-table-column>
      <el-table-column prop="remark" label="备注">
      </el-table-column>
    </el-table>

    <div class="btnGroup">
      <el-button @click="$refs.modify.open();" :disabled="selectId>0?false:true">修改设备信息</el-button>
      <el-button :disabled="selectId>0?false:true">删除</el-button>
    </div>

    <!--分页-->
    <pagination :total="total" :pageSize="20" :paginationFun="queryDevice"></pagination>

    <dialogProjectDevice ref="modify" :id="selectId"></dialogProjectDevice>
  </section>
</template>

<script>
import pagination from '../../components/Pagination';
import dialogProjectDevice from '../../components/device/ModifyProjectDevice';

export default {
  data() {
    return {
      // 多种设备
      activeBtn: 1,
      // 筛选
      queryForm: {
        key: '',
        project: '',
        status: '',
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
  created() {
    this.$store.commit('SET_HEAD', '设备管理');
  },
  mounted() {
    this.queryDevice(1);
  },
  methods: {
    // 获取设备列表
    queryDevice(currentPage) {
      const param = {};
      param.queryForm = this.queryForm;
      param.currentPage = currentPage || 1;
      this.tableLoading = true;
      window.vaApi.getDeviceList(param).then((res) => {
        this.tableLoading = false;
        const { status, data } = res.data;
        if (Number(status) === 1) {
          this.total = data.total;
          this.tableData = data.list;
        }
      });
    },
  },
};
</script>

<style lang="scss">
#deviceSection {
  .searchGroup {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #000;
  }

  .queryPart {
    .searchKey {
      width: 40%;
      > div {
        width: 100%;
      }
    }
  }

  .deviceTable {
    .unknown {
      color: #e7a600;
    }
    .red {
      color: red;
    }
  }

  .btnGroup {
    margin-top: 15px;
    margin-bottom: -52px;
  }
}
</style>

<template>
  <el-dialog
    top="3vh"
    class="projectDeviceDialog"
    center
    :close-on-click-modal="false"
    title="修改设备信息"
    :visible.sync="dialogVisible"
  >
    <el-form ref="projectDeviceForm" :rules="rules" :model="form"
             label-width="120px" label-position="left"
             class="projectDeviceForm">
      <div class="subTitle">设备信息</div>
      <el-form-item label="设备短号：">
        {{form.shortId}}
      </el-form-item>
      <el-form-item label="项目名称：">
        {{form.projectName}}
      </el-form-item>
      <div class="remark">（如果项目地址一致，下列地址可以不必修改）</div>
      <el-form-item label="项目地址：">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="位置：">
        <el-input v-model="form.section"></el-input>
      </el-form-item>
      <el-form :inline="true" label-width="120px">
        <el-form-item label="纬度：">
          <el-input v-model="form.latitude" placeholder="请输入纬度"></el-input>
        </el-form-item>
        <el-form-item label="经度：">
          <el-input v-model="form.longitude" placeholder="请输入经度"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">拾取</el-button>
        </el-form-item>
      </el-form>
      <el-form-item label="安装日期：">
        <el-date-picker type="date" placeholder="请选择安装日期"
                        v-model="form.installDate"></el-date-picker>
      </el-form-item>
      <el-form-item label="建筑类型：" prop="buildingType">
        <el-select v-model="form.buildingType" placeholder="请选择建筑类型">
          <el-option label="高层建筑" value="heigh"></el-option>
          <el-option label="低层建筑" value="low"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="应用场景：" prop="usePlace">
        <el-select v-model="form.usePlace" placeholder="请选择应用场景">
          <el-option label="高层建筑" value="1"></el-option>
          <el-option label="其它" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="场所名称：" prop="placeName">
        <el-select v-model="form.placeName" placeholder="请选择场所名称">
          <el-option label="演示" value="1"></el-option>
          <el-option label="其它" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.remark"></el-input>
      </el-form-item>

      <div class="subTitle">联系方式</div>
      <el-form-item label="姓名：" prop="userName">
        <el-input v-model="form.userName" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="电话号码：" prop="phone">
        <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="姓名：">
        <el-input v-model="form.otherUserName" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="电话号码：">
        <el-input v-model="form.otherPhone" placeholder="请输入手机号"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="saveData">保存</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'dialogProjectDevice',
  data() {
    return {
      dialogVisible: false,
      form: {
        projectName: '',
      },
      rules: {
        buildingType: { required: true, message: '请选择建筑类型', trigger: 'change' },
        usePlace: { required: true, message: '请选择应用场景', trigger: 'change' },
        placeName: { required: true, message: '请选择场所名称', trigger: 'change' },
        userName: { required: true, message: '请输入姓名', trigger: 'blur' },
        phone: { required: true, message: '请输入手机号', trigger: 'blur' },
      },
    };
  },
  props: {
    id: {},
  },
  methods: {
    // 关闭窗口
    close() {
      this.dialogVisible = false;
    },
    // 打开窗口
    open() {
      this.dialogVisible = true;
    },
    // 保存数据
    saveData() {
      this.$refs.projectDeviceForm.validate(() =>
        //        if (valid) {
        //
        //        } else {
        //          return false;
        //        }
        true);
    },
  },
};
</script>

<style lang="scss">
  .projectDeviceDialog {
    .projectDeviceForm {
      .subTitle {
        color: #aaa;
        background-color: #f6f6f6;
        margin-bottom: 10px;
      }
      .remark {
        color: #aaa;
      }
    }
  }
</style>

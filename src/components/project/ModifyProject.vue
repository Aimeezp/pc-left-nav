<template>
  <el-dialog
    top="3vh"
    class="projectDialog"
    center
    :close-on-click-modal="false"
    :title="title"
    :visible.sync="dialogVisible"
  >
    <el-form ref="projectForm" :rules="rules" :model="form"
             label-width="120px" label-position="left"
             class="projectForm">
      <div class="subTitle">项目信息</div>
      <el-form-item label="项目名称：" prop="projectName">
        <el-input v-model="form.projectName" placeholder="请输入项目名称"></el-input>
      </el-form-item>
      <el-form-item label="项目地址：" required>
        <el-select v-model="form.projectProvince" placeholder="请选择省份" prop="projectProvince">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
        </el-select>
        <el-select v-model="form.projectCity" placeholder="请选择城市" prop="projectCity">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
        </el-select>
        <el-select v-model="form.projectRegion" placeholder="请选择区" prop="projectRegion">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="街道：">
        <el-input v-model="form.projectStreet"></el-input>
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

      <div class="subTitle">客户信息</div>
      <el-form-item label="所属用户单位：">
        <el-input v-model="form.unitName" placeholder="所属用户单位"></el-input>
      </el-form-item>
      <el-form-item label="所属客户名称：">
        <el-input v-model="form.customerName"></el-input>
      </el-form-item>
      <el-form-item label="地址：" required>
        <el-select v-model="form.customerProvince" placeholder="请选择省份">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
        </el-select>
        <el-select v-model="form.customerCity" placeholder="请选择城市">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
        </el-select>
        <el-select v-model="form.customerRegion" placeholder="请选择区">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="街道：">
        <el-input v-model="form.customerStreet"></el-input>
      </el-form-item>

      <div class="subTitle">通知设置</div>
      <el-form-item label="报警终端异常：">
        <el-radio v-model="form.unusual" label="0">不通知</el-radio>
        <el-radio v-model="form.unusual" label="1">语音</el-radio>
        <el-radio v-model="form.unusual" label="2">短信</el-radio>
      </el-form-item>
      <el-form-item label="报警终端告警：">
        <el-radio v-model="form.warning" label="0">不通知</el-radio>
        <el-radio v-model="form.warning" label="1">语音</el-radio>
        <el-radio v-model="form.warning" label="2">短信</el-radio>
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
  name: 'dialogProject',
  data() {
    return {
      dialogVisible: false,
      form: {
        projectName: '',
      },
      rules: {
        projectName: [
          { required: true, message: '请输入项目名称', trigger: 'blur' },
        ],
        projectProvince: { required: true, message: '请选择省份', trigger: 'change' },
        projectCity: { required: true, message: '请选择城市', trigger: 'change' },
        projectRegion: { required: true, message: '请选择区', trigger: 'change' },
      },
    };
  },
  props: {
    title: {
      required: true,
    },
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
      this.$refs.projectForm.validate(() =>
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
  .projectDialog {
    .projectForm {
      .subTitle {
        color: #aaa;
        background-color: #f6f6f6;
        margin-bottom: 10px;
      }
    }
  }
</style>

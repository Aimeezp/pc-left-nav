<template>
  <el-dialog
    class="importDialog"
    center
    :close-on-click-modal="false"
    title="导入设备"
    :visible.sync="dialogVisible"
    width="30%"
  >
    <el-upload
      class="dragArea"
      drag
      action=""
      >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">拖拽Excel表格到本区域上传，或者<em>点击这里</em>上传</div>
    </el-upload>
    <span slot="footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="uploadFile">上传</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'importDevice',
  data() {
    return {
      dialogVisible: false,
    };
  },
  props: {
    id: { required: true },
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
    // 上传文件
    uploadFile() {

    },
  },
};
</script>

<style lang="scss">
  .importDialog {
    .dragArea {
      .el-upload,.el-upload-dragger{
        width: 100%;
      }
    }
  }
</style>

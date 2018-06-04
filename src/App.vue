<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
@import "~scss_vars";

body {
  margin: 0px;
  padding: 0px;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  font-family: $font-family;
  background-color: $color-body;
}

#app {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  //primary按钮颜色
  .el-button--primary {
    background-color: $color-primary;
    border-color: $color-primary;
  }
  .el-button--primary:focus,
  .el-button--primary:hover {
    background-color: $color-primary;
    border-color: $color-primary;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

//清楚浮动
.clearfix:after {
  clear: both;
  display: block;
  content: "";
}

//去除默认样式
dl,
dd,
ul,
p {
  margin: 0;
}

@for $i from 1 to 6 {
  h#{$i} {
    margin: 0;
  }
}

ul {
  list-style: none;
  padding: 0;
}

b {
  font-weight: normal;
}

i {
  font-style: normal;
}

.cursor {
  cursor: pointer;
}

::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  background: #D6DBE7;
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 0;
  background: #fff;
}
// 输入框获取焦点的颜色
.el-input__inner:focus{
  border: 1px solid #a2dcff;
}
</style>

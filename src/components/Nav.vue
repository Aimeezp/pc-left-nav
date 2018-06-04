<template>
  <el-aside width="140px" id="navAside">
    <!--logo-->
    <img src="../assets/image/login-logo.png" class="cursor"/>
    <el-menu default-active="1-0">
      <el-menu-item class="menuItem" v-for="(item,index) in $router.options.routes[0].children" :key="index" :index="'1-'+index">
        <router-link :to="item.path">{{item.title}}</router-link>
        <i class="msg" v-if="item.haveMsg"></i>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>

<style lang="scss">
@import "~scss_vars";

$navWidth: 140px;
$bgColor: #2d315d;

#navAside {
  background-color: $bgColor;
  text-align: center;
  position: relative;

  /*logo  start*/
  > img {
    background: #282b52;
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
  }
  /*logo  end*/
  /*菜单  start*/
  .el-menu {
    background-color: #343868;
    border: 0;
    // 不显示箭头
    .el-submenu__icon-arrow {
      display: none;
    }
    .topMenu {
      border-bottom: 1px solid $bgColor;
      &,
      .el-submenu__title {
        padding: 0 !important;
      }
      .iconfont,
      > a,
      span {
        font-size: 16px;
        color: #fff;
      }
      > a,
      span {
        text-decoration: none;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .menuItem {
      padding: 0 !important;
      width: $navWidth;
      min-width: $navWidth;
      &:not(:last-child) {
        border-bottom: 1px solid #3e4379;
      }
      a {
        color: #8c92b3;
        text-decoration: none;
        display: block;
        width: 100%;
        height: 100%;
      }
      .router-link-active {
        color: #fff;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          height: 100%;
          width: 4px;
          background-color: #52baff;
        }
        &::after {
          content: "";
          position: absolute;
          right: 0;
          top: 50%;
          width: 0;
          height: 0;
          border-top: 7px solid transparent;
          border-right: 7px solid $color-body;
          border-bottom: 7px solid transparent;
          transform: translateY(-50%);
        }
      }
      .msg {
        position: absolute;
        top: 50%;
        right: 27px;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #ff4b3c;
      }
    }
    .el-menu-item:focus,
    .el-menu-item:hover,
    .el-submenu__title:focus,
    .el-submenu__title:hover,
    .el-menu-item.is-active,
    .menuItem {
      background-color: #434881;
    }
  }
  /*菜单  end*/
}
</style>

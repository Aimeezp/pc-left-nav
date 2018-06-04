<template>
  <el-container style="height: 100%" ref="homeRef">
    <public-nav></public-nav>
    <el-container>
      <!--header-->
      <el-header style="background-color: #fff;">
        <public-header></public-header>
      </el-header>
      <!--main-->
      <el-main>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Nav from '../components/Nav';
import Header from '../components/Header';

export default {
  components: {
    'public-nav': Nav,
    'public-header': Header,
  },
};
</script>

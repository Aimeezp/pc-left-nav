<template>
  <div id="appHeader">
    <div class="title">{{headName}}</div>
    <div class="info">
      <div>
        <span>{{userName}}</span>
        <i :class="online.icon"></i>
        <b>{{online.name}}</b>
      </div>
      <i class="iconfont icon-comments cursor"></i>
      <headerMenu>
        <i class="iconfont icon-set cursor"></i>
      </headerMenu>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import headerMenu from './HeaderMenu';

export default {
  components: { headerMenu },
  computed: {
    ...mapGetters(['headName', 'userName', 'online']),
  },
};
</script>

<style lang="scss">
#appHeader {
  height: 60px;
  line-height: 60px;
  display: flex;
  .title {
    flex: 1;
    font-size: 20px;
    color: #6f7584;
  }
  .info {
    display: flex;
    > div {
      color: #6e7483;
      font-size: 15px;
      margin-right: 55px;
      display: flex;
      align-items: center;
      i {
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: 0 5px 0 15px;
      }
      .online{
        background-color: #7de50b;
      }
      .offline{
        background-color: #ff4b3c;
      }
    }
    .iconfont {
      font-size: 28px;
      color: #6e7483;
    }
    .icon-comments {
      margin-right: 33px;
    }
  }
}
</style>

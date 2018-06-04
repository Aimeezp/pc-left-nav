<template>
  <section id="userSection">
      用户管理
  </section>
</template>

<script>


export default {
  data() {
    return {

    };
  },
  components: {

  },
  created() {
    this.$store.commit('SET_HEAD', '用户管理');
  },

  methods: {

  },
};
</script>

<style lang="scss">
#userSection {

}
</style>

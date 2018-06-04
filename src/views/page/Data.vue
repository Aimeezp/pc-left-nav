<template>
  <section id="dataSection">
      数据管理
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
    this.$store.commit('SET_HEAD', '数据管理');
  },

  methods: {

  },
};
</script>

<style lang="scss">
#dataSection {

}
</style>

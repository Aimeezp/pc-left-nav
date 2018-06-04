<template>
  <section id="timingSection">
      定时任务
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
    this.$store.commit('SET_HEAD', '定时任务');
  },

  methods: {

  },
};
</script>

<style lang="scss">
#timingSection {

}
</style>

<template>
  <div id="euler-app" :class="{'lang-en': $lang == 'en'}">
    <CustomHeader />
    <Content v-if="!isPost() && !isDocDetails()" class="content" />
    <DocDetails v-if="isDocDetails()" class="content" />
    <CustomFooter />
  </div>
</template>

<script>
import CustomHeader from "@theme/components/CustomHeader.vue";
import CustomFooter from "@theme/components/CustomFooter.vue";
import DocDetails from "@theme/layouts/DocDetails.vue";

export default {
  name: "Layout",

  components: {
    CustomHeader,
    CustomFooter,
    DocDetails
  },

  data() {
    return {
      targetLocale: "",
    };
  },
  created() {
    this.targetLocale = this.$lang === "zh" ? "/zh/" : "/en/";
  },
  methods: {
    isPost() {
      let currentPath = this.$route.path;
      return currentPath.indexOf(this.targetLocale + "blog/") > -1
        ? true
        : false;
    },
    isDocDetails() {
      let currentPath = this.$route.path;
      return currentPath.indexOf(this.targetLocale + "docs/") > -1
        ? true
        : false;
    },
  },
};
</script>
<style lang="less" scoped>
.content {
    min-height: calc(100vh - 60px - 176px);
    @media (max-width: 1000px) {
        min-height: calc(100vh - 70px - 328px);
    }
}
</style>

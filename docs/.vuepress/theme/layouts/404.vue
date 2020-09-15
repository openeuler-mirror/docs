<template>
    <div class="theme-container">
        404
    </div>
</template>

<script>
export default {
    data () {
        return {
            language:{
                en:{
                    title:404,
                    message:'NOT FOUND...'
                },
                cn:{
                    title:404,
                    message:'开小差啦...'
                }
            },
            currentLang:{}
        }
    },
    created () {
        this.currentLang = this.language.cn;
    },
  methods: {
  },
  watch: {
      '$route.path': {
          immediate: true,
          handler (val) {
              if(val === '/') {
                  window.location.href = '/zh/';
              }
          }
      }
  }
}
</script>

<style lang="less" scoped>
.not-found-top{
    margin-bottom: 200px;
    @media (max-width: 1000px) {
        margin-bottom: 80px;
    }
}
</style>

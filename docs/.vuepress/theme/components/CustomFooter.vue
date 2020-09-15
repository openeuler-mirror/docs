<template>
  <div class="footer-wrapper">
    <div class="footer-content">
      <div class="footer-left">
        <img src="/footer-logo.svg" class="footer-logo" />
        <div class="footer-mail">{{ i18n.common.FOOTER.MAIL }}</div>
      </div>
      <div class="footer-center">
        <ul class="right-list">
          <li v-for="(item, index) in i18n.common.FOOTER.RIGHT_LIST" :key="index">
            <a @click="goFooterUrl(item.URL)">{{ item.NAME }}</a>
          </li>
        </ul>
        <p class="footer-copyright">{{ i18n.common.FOOTER.COPY_RIGHT }}</p>
      </div>
      <div class="footer-right">
        <img src="/qrcode.png" class="footer-qrcode" />
        <div class="qrcode-desc">{{ i18n.common.FOOTER.QR_CODE }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      i18n: {
        common: {
          FOOTER: {}
        }
      }
    };
  },
  methods: {
    goFooterUrl (url) {
      this.$router.push({
        path: this.resolvePath(url),
      });
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
.footer-wrapper {
  height: 176px;
  background-color: #111;
  @media (max-width: 1000px) {
    height: 328px;
  }
  .footer-content {
    font-family: FZLTXIHJW;
    margin: 0 auto;
    height: 100%;
    width: 1120px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
      justify-content: space-evenly;
    }
    .footer-left {
      @media (max-width: 1000px) {
        height: unset;
        font-size: 14px;
        align-items: center;
      }
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: baseline;
      font-size: 16px;
      font-family: HuaweiSans-Light;
      .footer-mail {
        color: #fff;
        margin-top: 17px;
        @media (max-width: 1000px) {
          margin-top: 10px;
        }
      }
    }
    .footer-center {
      @media (max-width: 1000px) {
        align-items: unset;
        height: unset;
        order: 1;
      }
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      .footer-copyright {
        color: #fff;
        margin-top: 21px;
        font-size: 12px;
        @media (max-width: 1000px) {
          margin-top: 16px;
        }
      }
      .right-list {
        margin: 0 auto;
        display: flex;
        align-items: flex-end;
        font-size: 14px;
        li {
          padding: 0 15px;
          a {
            color: #fff;
            text-decoration: none;
            cursor: pointer;
          }
        }
        li:nth-child(2) {
          padding: 0 16px;
          border-left: 1px solid #fff;
          border-right: 1px solid #fff;
        }
      }
    }
    .footer-right {
      @media (max-width: 1000px) {
        height: unset;
      }
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      .footer-qrcode {
        width: 78px;
        height: 78px;
      }
      .qrcode-desc {
        color: #fff;
        margin-top: 17px;
        text-align: center;
      }
    }
  }
}
</style>

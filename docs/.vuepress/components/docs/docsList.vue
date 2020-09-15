<template>
    <div class="moblieContent">
        <div class="docs-content">
            <el-form :inline="true" class="docs-filter">
                <el-form-item :label="i18n.documentation.VERSION">
                    <el-select v-model="version" @change="selectChange">
                        <el-option
                        v-for="(item, index) in versions"
                        :key="index"
                        :label="item.name"
                        :value="item.value"
                        ></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div :class="['is-pc',targetLocale == '/en/'?'pc-en':'']">
                <div class="maillist-divider-mail">
                    <div class="maillist-icon-comm"></div>
                </div>
                <div class="mail-guide" v-for="(items, index) in currentDocs" :key="index">
                    <div v-if="index % 2 === 0" class="step-left">
                        <div class="mail-box">
                            <div class="step-left-box">
                                <div @click="go(item)" :class="['inner-box',item.path?'':'unClick',targetLocale == '/en/'?'en-box':'']" v-for="(item, index) in items.doc" :key="index">
                                    <img :src="item.img" alt />
                                    <p>{{ item.name }}</p>
                                </div>
                            </div>
                            <div :class="['step-left-num',targetLocale == '/en/'?'left-en':'']">
                                <span>{{ items.title }}</span>
                            </div>
                            <div class="step-line"></div>
                        </div>
                    </div>
                    <div v-if="index % 2 !== 0" class="step-right">
                        <div class="mail-box">
                            <div class="step-line"></div>
                            <div :class="['step-right-num',targetLocale == '/en/'?'right-en':'']">
                                <span>{{ items.title }}</span>
                            </div>
                            <div class="step-right-box right-box-en">
                                <div  @click="go(item)" :class="['inner-box',item.path?'':'unClick',targetLocale == '/en/'?'en-box':'']" v-for="(item, index) in items.doc" :key="index">
                                    <img :src="item.img" alt />
                                    <p>{{ item.name }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="is-h5">
                <div class="mail-guide" v-for="(items, index) in currentDocs" :key="index">
                    <div v-if="items.doc.length" class="step-H5" :class="[items.doc.length === 1 && 'step-left-H5']">
                        <div :class="['step-num',targetLocale == '/en/'?'step-en':'']">
                            <span>{{ items.title }}</span>
                        </div>
                        <p  :class="[item.path?'':'unClick',targetLocale == '/en/'?'en-p-box':'']" @click="go(item)" v-for="(item, index) in items.doc" :key="index">{{ item.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            version: "",
            currentDocs: [],
            versions: [],
            default:true, //判断是否默认选中
        };
    },
    computed: {},

    created() {
        this.targetLocale = this.$lang === "zh" ? "/zh/" : "/en/";
    },
    mounted() {
        this.versions = require("../../../" + this.$lang + "/path/path.json");
        let versionLen = this.versions.length;
        this.currentDocs = this.versions[versionLen-1].docs;
        this.selectChange(this.versions[versionLen-1].value);
    },
    methods: {
        selectChange(val) {
            if(this.default){
                this.version=val;
                this.default = false;
            }else{
                this.versions.forEach((item) => {
                    if (item.value === val) {
                        this.currentDocs = item.docs;
                    }
                });
            }
        },
        go(item) {
            if (item.path) {
                let version = this.version === "" ? "1.0_Base" : this.version;
                this.$router.push(this.targetLocale + "docs/" + version + item.path);
            }
        },
    },
};
</script>

<style lang="less" scoped>
.docs-content {
    width: 1120px;
    margin: 0 auto;
    margin-bottom: 200px;
    .el-select__tags {
        min-width: 140px !important;
    }
    .el-form-item__label {
        font-size: 18px;
        color: #000;
        font-family: FZLTXIHJW;
    }

    .el-input__inner {
        font-size: 16px;
        height: 32px;
        color: #000;
        font-family: FZLTXIHJW;
    }

    .el-select-dropdown__item {
        color: #000;
        font-family: FZLTXIHJW;
    }
    .el-form-item__content {
        min-width: 140px;
        min-height: 32px;
    }
}
.is-h5 {
    display: none;
}
.is-pc {
    display: block;
    position: relative;
}
.pc-en{
    margin-left: 160px;
}
.maillist-divider-mail {
    width: 2px;
    left: 406px;
    height: calc(100% - 35px);
    background-image: linear-gradient(
        to top,
        #002fa7 0%,
        #002fa7 50%,
        transparent 50%
    );
    background-size: 2px 11px;
    background-repeat: repeat-y;
    position: absolute;
}
.maillist-icon-comm {
    width: 0;
    height: 0;
    border-width: 15px;
    border-style: solid;
    border-color: #002fa7 transparent transparent transparent;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
}
.step-right-box,
.step-left-box {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
}
.step-left-box {
    width: 200px;
    margin-right: 36px;
    min-height: 74px;
    .en-box{
        width: 370px;
        margin-left: -160px;
        p{
            font-family: Roboto-Regular, Roboto;
        }
    }
}
.step-right-box {
    width: 540px;
    vertical-align: top;
    .inner-box {
        width: 240px;
        margin-right: 0px;
        margin-left: 30px;
    }
    .en-box{
        width: 370px;
        p{
            font-family: Roboto-Regular, Roboto;
        }
    }
}
.step-left {
    z-index: 20;
}
.step-right {
    margin: -30px 0;
    margin-left: 406px;
}
.step-left-num,
.step-right-num {
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 50%;
    background-color: #002fa7;
    display: inline-block;
}
.step-left-num span,
.step-right-num span {
    color: #fff;
    font-size: 20px;
}
.mail-box .left-en,.mail-box .right-en{
    font-family: Roboto-BoldCondensed, Roboto;
}
.step-line {
    width: 100px;
    height: 2px;
    display: inline-block;
    vertical-align: middle;
    border-spacing: 24px;
    background-image: linear-gradient(
        to right,
        #002fa7 0%,
        #002fa7 50%,
        transparent 50%
    );
    background-size: 8px 2px;
    background-repeat: repeat-x;
}
.mail-box {
    padding: 0;
    padding-top: 60px;
    .right-box-en{
        margin: -60px 0 0 160px;
    }
}
.mail-box p {
    font-size: 20px;
    font-weight: normal;
    color: rgba(0, 47, 167, 1);
    line-height: 60px;
    display: inline-block;
    width: calc(100% - 63px);
}
.inner-box {
    height: 60px;
    width: 200px;
    margin-right: 36px;
    margin-bottom: 14px;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: inline-block;
    vertical-align: middle;
    text-align: left;
}
.inner-box img {
    margin: 0 10px 0 16px;
    width: 22px;
    height: 26px;
    vertical-align: sub;
}
.unClick {
    pointer-events: none;
    cursor: default;
    p{
        color: rgba(0, 0, 0, 0.25);
    }
}


@media screen and (max-width: 1000px) {
    .moblieContent {
        padding: 40px 30px 80px 30px;
    }
    .docs-filter {
        margin: 40px auto;
        padding-top: 75px;
        position: relative;
    }
    .docs-content {
        width: 100%;
        margin-bottom: 80px;
    }
    .is-pc {
        display: none;
    }
    .is-h5 {
        display: block;
    }
    .step-H5 {
        margin: 30px auto;
        .unClick{
            color: rgba(0, 0, 0, 0.25);
        }
    }
    .step-left-H5{
        text-align: center;
    }
    .step-num {
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border-radius: 50%;
        background-color: #002fa7;
        margin: 0 auto;
    }
    .step-H5 .step-en{
        font-family: Roboto-BoldCondensed, Roboto;
    }
    .step-num span {
        color: #fff;
        font-size: 18px;
    }
    .step-H5 .en-p-box{
        width: 256px;
        font-family: Roboto-Regular, Roboto;
    }
    .step-H5 p {
        font-size: 16px;
        width:140px;
        height:40px;
        line-height: 40px;
        color: #002FA7;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 10px 0px rgba(0,0,0,0.1);
        border-radius:8px;
        text-align: center;
        margin: 20px auto 0 auto;
    }
}
</style>
<style lang="less">
@media screen and (max-width: 1000px) {
    .docs-content {
        .el-select__tags {
            min-width: 140px !important;
        }
        .el-form-item__label {
            display: none !important;
        }

        .el-input__inner {
            font-size: 14px;
            color: #000;
            font-family: FZLTXIHJW;
        }

        .el-select-dropdown__item {
            color: #000;
            font-family: FZLTXIHJW;
        }

        .el-form-item {
            margin-right: 0px !important;
            width: 100%;
        }

        .el-select {
            width: 100%;
        }
        .el-form-item__content {
            min-width: 140px;
            min-height: 32px;
            line-height: 32px;
            width: 100%;
            text-align: center;
        }
        .el-input__inner {
            height: 32px;
            line-height: 32px;
        }
        .el-input__icon {
            line-height: 32px;
        }
    }
}
</style>

/**
 * @file  公共模块国际化配置入口
 * */

module.exports = {
    cn: {
        SEARCH_PLACE_HOLDER: '输入内容',
        NAV_ROUTER_CONFIG: [{
                PATH: '/download/',
                NAME: '下载',
                CHILDREN: [],
                CLASS: []
            },
            {
                PATH: '/documentation/',
                NAME: '文档',
                CHILDREN: [],
                OTHER_CHILDREN: [
                    {
                        PATH: '/docs/'
                    }
                ],
                CLASS: []
            },
            {
                PATH: '',
                NAME: '互动',
                CHILDREN: [{
                        NAME: '新闻',
                        PATH: '/interaction/news-list/'
                    },
                    {
                        NAME: '博客',
                        PATH: '/interaction/blog-list/'
                    },
                    {
                        NAME: '直播',
                        PATH: '/interaction/live-list/'
                    },
                    {
                        NAME: '沙龙',
                        PATH: '/interaction/salon-list/'
                    },
                    {
                        NAME: '峰会',
                        PATH: '/interaction/summit-list/'
                    }
                ],
                OTHER_CHILDREN: [
                    {
                        PATH: '/news/'
                    },
                    {
                        PATH: '/blog/'
                    }
                ],
                CLASS: []
            },
            {
                PATH: '',
                NAME: '社区',
                CHILDREN: [{
                        NAME: '贡献攻略',
                        PATH: '/community/contribution/'
                    },
                    {
                        NAME: '行为守则',
                        PATH: '/community/conduct/'
                    },
                    {
                        NAME: '邮件列表',
                        PATH: '/community/mailing-list/'
                    },
                    {
                        NAME: '认证服务',
                        PATH: '/community/certification-services/'
                    }
                ],
                CLASS: []
            },
            {
                PATH: '',
                NAME: 'SIG',
                CHILDREN: [{
                        NAME: '查看SIG',
                        PATH: '/sig/sig-list/'
                    },
                    {
                        NAME: '申请流程',
                        PATH: '/sig/sig-guidance/'
                    },
                    {
                        NAME: '角色说明',
                        PATH: '/sig/role-description/'
                    }
                ],
                CLASS: []
            },
            {
                PATH: '',
                NAME: '安全',
                CHILDREN: [{
                        NAME: '漏洞管理',
                        PATH: '/security/vulnerability-reporting/'
                    },
                    {
                        NAME: '安全公告',
                        PATH: '/security/safety-bulletin/'
                    },
                    {
                        NAME: 'CVE',
                        PATH: '/security/cve/'
                    }
                ],
                CLASS: []
            }
        ],
        LANG: 'EN',
        GITTE: '源码',
        GITTE_RESOURCE_LIST: [{
                NAME: '代码仓',
                URL: 'https://gitee.com/openeuler'
            },
            {
                NAME: '软件包仓',
                URL: 'https://gitee.com/src-openeuler'
            }
        ],
        FOOTER: {
            MAIL: 'contact@openeuler.org',
            COPY_RIGHT: '版权所有 © 2020 openEuler 保留一切权利',
            RIGHT_LIST: [{
                    NAME: '品牌',
                    URL: '/other/brand/'
                },
                {
                    NAME: '隐私政策',
                    URL: '/other/privacy/'
                },
                {
                    NAME: '法律声明',
                    URL: '/other/legal/'
                }
            ],
            QR_CODE: '扫码关注公众号'
        },
        BUILDING:{
            BUILDING:'建设中',
            BUILDINGMES:'敬请期待...'
        }
    },
    en: {
        SEARCH_PLACE_HOLDER: 'Input content',
        NAV_ROUTER_CONFIG: [{
                PATH: '/download/',
                NAME: 'Download',
                CHILDREN: [],
                CLASS: []
            },
            {
                PATH: '/documentation/',
                NAME: 'Documentation',
                CHILDREN: [],
                OTHER_CHILDREN: [
                    {
                        PATH: '/docs/'
                    }
                ],
                CLASS: []
            },
            {
                PATH: '',
                NAME: 'Connect',
                CHILDREN: [{
                        NAME: 'News',
                        PATH: '/interaction/news-list/'
                    },
                    {
                        NAME: 'Blog',
                        PATH: '/interaction/blog-list/'
                    },
                    {
                        NAME: 'Live',
                        PATH: '/interaction/live-list/'
                    },
                    {
                        NAME: 'Meetups',
                        PATH: '/interaction/salon-list/'
                    },
                    {
                        NAME: 'Summit',
                        PATH: '/interaction/summit-list/'
                    }
                ],
                OTHER_CHILDREN: [
                    {
                        PATH: '/news/'
                    },
                    {
                        PATH: '/blog/'
                    }
                ],
                CLASS: []
            },
            {
                PATH: '',
                NAME: 'Community',
                CHILDREN: [{
                        NAME: 'Contribution',
                        PATH: '/community/contribution/'
                    },
                    {
                        NAME: 'Convention',
                        PATH: '/community/conduct/'
                    },
                    {
                        NAME: 'Mail lists',
                        PATH: '/community/mailing-list/'
                    },
                    {
                        NAME: 'Certification',
                        PATH: '/community/certification-services/'
                    }
                ],
                CLASS: []
            },
            {
                PATH: '',
                NAME: 'SIG',
                CHILDREN: [{
                        NAME: 'SIG lists',
                        PATH: '/sig/sig-list/'
                    },
                    {
                        NAME: 'Application',
                        PATH: '/sig/sig-guidance/'
                    },
                    {
                        NAME: 'Characters',
                        PATH: '/sig/role-description/'
                    }
                ],
                CLASS: []
            },
            {
                PATH: '',
                NAME: 'Security',
                CHILDREN: [{
                        NAME: 'Vulnerability management',
                        PATH: '/security/vulnerability-reporting/'
                    },
                    {
                        NAME: 'Security advisories',
                        PATH: '/security/safety-bulletin/'
                    },
                    {
                        NAME: 'CVE',
                        PATH: '/security/cve/'
                    }
                ],
                CLASS: []
            }
        ],
        LANG: '中',
        GITTE: 'Source code',
        GITTE_RESOURCE_LIST: [{
                NAME: 'Code sources',
                URL: 'https://gitee.com/openeuler'
            },
            {
                NAME: 'Package sources',
                URL: 'https://gitee.com/src-openeuler'
            }
        ],
        FOOTER: {
            MAIL: 'contact@openeuler.org',
            COPY_RIGHT: 'Copyright © 2020 openEuler. All rights reserved.',
            RIGHT_LIST: [{
                    NAME: 'TradeMark',
                    URL: '/other/brand/'
                },
                {
                    NAME: 'Legal',
                    URL: '/other/legal/'
                },
                {
                    NAME: 'Privacy',
                    URL: '/other/privacy/'
                }
            ],
            QR_CODE: 'Wechat Subscription'
        },
        BUILDING:{
            BUILDING:'Building',
            BUILDINGMES:'Coming Soon...'
        }
    }
};
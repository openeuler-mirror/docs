module.exports = {
    home: false,
    title: '',
    description: '',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }]
    ],
    markdown: {
        lineNumbers: false
    },
    plugins: [
        [require('./sitePlugin.js')]
    ],
    locales: {
        '/': {
            lang: 'zh',
            title: '',
            description: ''
        },
        '/en/': {
            lang: 'en',
            title: '',
            description: ''
        },
        '/zh/': {
            lang: 'zh',
            title: '',
            description: ''
        }
    },
    themeConfig: {
        dateFormat: 'YYYY-MM-DD',
        locales: {
            'en': {
                lang: require('./lang/en.js')
            },
            'zh': {
                lang: require('./lang/zh.js')
            }
        },
        smoothScroll: true

    }
}
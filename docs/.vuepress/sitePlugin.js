module.exports = (options = {}, ctx) => {
    return {
        enhanceAppFiles() {
            let pages = []
            ctx.pages.forEach(item => {
                pages.push({
                    path: item.regularPath,
                    frontmatter: item.frontmatter
                })
            });
            pages = JSON.stringify(pages);
            return {
                name: 'dynamic-code',
                content: `export default ({ Vue }) => { Vue.prototype.$sitePages = ${pages}}`
            }
        }
    }
}
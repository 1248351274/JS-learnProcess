const nunjucks = require('nunjucks')
// 模板引擎
const tpl = new nunjucks.Environment(
    // FileSystemLoader => node 模板文件加载
    new nunjucks.FileSystemLoader('views',{
        watch: true,
        noCache: true
    })
)

module.exports = tpl
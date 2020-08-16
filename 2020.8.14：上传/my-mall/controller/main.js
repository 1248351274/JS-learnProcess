const tpl = require('../libs/tpl.js')
const itemModel = require('../model/items.js')
const categoriesModel = require('../model/categories.js')
const nunjucks = require('nunjucks')

module.exports = {
    index: async ctx=>{
        let items = await itemModel.getItems()
        
        ctx.body = tpl.render('index.html',{
            items
        });
    },
    add: async ctx => {
        let categories = await categoriesModel.getCategories()
        ctx.body = tpl.render('add-item.html',{
            categories
        })
    },
    addPost: async ctx => {
        let categories = await categoriesModel.getCategories()
        ctx.body = tpl.render('add-item.html',{
            categories
        })
        let data = ctx.request.body
        let files = ctx.request.files
        let filename;
        console.log('files',files)
        if( files && files.cover ) {
            let lastPos = files.cover.path.lastIndexOf('\\')
            filename = files.cover.path.substring( lastPos+1 )
        }
        console.log('filename',filename)
        let rs = await itemModel.addItem([
            data.category_id,
            data.name,
            data.price,
            filename
        ]);
        console.log('data',data)
        ctx.body = '添加成功'
    },
    uploadPage: ctx => {
        
// 模板引擎
        const template = new nunjucks.Environment(
            // FileSystemLoader => node 模板文件加载
            new nunjucks.FileSystemLoader('static',{
                watch: true,
                noCache: true
            })
        )
        ctx.body = template.render('index.html')
    },
    upload: async ctx=>{
        ctx.body = '添加成功,文件存在 static/upload 文件夹下'
    }


}
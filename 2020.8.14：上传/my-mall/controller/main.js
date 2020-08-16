const tpl = require('../libs/tpl.js')
const itemModel = require('../model/items.js')
const categoriesModel = require('../model/categories.js')

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
        // let categories = await categoriesModel.getCategories()
        // ctx.body = tpl.render('add-item.html',{
        //     categories
        // })
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
    }

}
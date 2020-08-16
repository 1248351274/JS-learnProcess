## 后端

- node.js
- 基于node.js的 web 框架 koa
    - koa 中间件
        - koa-router
        - koa-static-cache
        - nunjucks
- 使用 mysql 数据库做数据的持久化存储
    - node.js 操作 mysql 数据库的一个库：mysql2

- nodemon 自动化构建工具（辅助开发）

- controller文件夹：页面加载和处理页面数据，逻辑
- libs文件夹：加载模板引擎
- model文件夹：连接数据库，与数据库交互
    - model.js 创建数据库连接，配数据库相关参数
    - items.js 关于items表中的交互
    - categories 关于categories表中的交互
- static 静态文件
- views 页面存放
- app.js 创建服务，加载静态资源，加载路由
- package.json 依赖目录
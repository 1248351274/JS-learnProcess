/**
 * app.js
 * 后端对服务器代码的入口文件
 * 我们会在该文件中监听网络 （端口）
 * 当客户端有请求，就返回对应的数据
*/

const http = require('http');
const fs = require('fs');
const mime = require('./mime.json');
const data = require('./data.json');

// 第一步：创建服务器对象
/**
 * req  请求对象
 * res   响应对象 ，收到请求后要做出的响应
*/
const server = http.createServer( (req,res)=>{
    // 只要有请求，那么该函数就会被执行

    // 分析用户当前的请求资源（url）
    // 根据不同的url返回不同的内容

    console.log('路径',req.url);

    // 对静态资源内容的进行处理
    if(req.url.startsWith('/static')){
        let file = __dirname + req.url;
        let content = '';
        try{
            content = fs.readFileSync(file);
            console.log('content',content)
            let lastIndexOf = file.lastIndexOf('.');
            console.log('lastIndexOf',lastIndexOf)
            let ext = file.substring(lastIndexOf);
            console.log('ext',ext)
            let fileMime = mime[ext]
            res.writeHead(200,{
                'Content-Type' : fileMime
            })
        }catch(e){
            console.log(e)
            content = fs.readFileSync('./template/404.html');
            res.writeHead(404, {
                'Content-Type': 'text/html;charset=utf-8'
            });
        }
        res.write(content);
        res.end();
        return;
    }

})
server.listen(8082);
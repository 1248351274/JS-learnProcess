let uploadBtnElement = document.querySelector('.uploadBtn');
let uploadFileElement = document.querySelector('#uploadFile');

let taskBodyElement = document.querySelector('.task_body');
// img显示
let contentListElement = document.querySelector('.content-list');
// 上传进度条div
let taskPanelElement = document.querySelector('.task_panel') 
// 进度框关闭
let allCloseElement = document.querySelector('.all-close')


function getImageMsg(){
    console.log('getImageMsg')
    ajax({
        method: 'get',
        url: '/api/getPhotos',
        // data,
        success(data) {
            data = JSON.parse(data);
            if( data.code == 0 ){
                contentListElement.innerHTML = ''
                data.rs.forEach(item => {
                    createLi(item.url);
                    // let img = new Image();
                    // img.src = 'http://localhost:8081' + item.url;
                    // contentListElement.appendChild(img)
                });
            } else {
                contentListElement.innerHTML = "请先进行登录"
            }
        },
        onprogress(ev) {
            console.log('ev', ev);
        }
    });
}
getImageMsg()
uploadBtnElement.onclick = function() {

    uploadFileElement.click();

}
// 内容发生改变了，已经选择了上传文件
uploadFileElement.onchange = function() {
    // 打开上传进度框
    for (let file of this.files) {
        // console.log(file);
        uploadFile({
            file
        });
    }
}

function uploadFile(data) {
    // taskPanelElement.style.display = 'block'
    let li = document.createElement('li');
    li.innerHTML = `
        <span>${data.file.name}</span>
        <div class="task-progress-status">
            上传中……
        </div>
        <div class="progress"></div>
    `
    let taskProgressStatusElement = li.querySelector('.task-progress-status');
    let progressElement = li.querySelector('.progress');
    taskBodyElement.appendChild(li);

    ajax({
        method: 'post',
        url: '/api/upload',
        data,
        success(data) {
            data = JSON.parse(data);
            if(data.code == 0){

                taskPanelElement.style.display = 'block'

                // data = JSON.parse(data);
                console.log('data', data);
                // getImageMsg()
                createLi(data.url)
                // setTimeout(() => {
                taskProgressStatusElement.innerHTML = '上传完成';
                li.remove();
                // }, 1000);
                setTimeout(() => {
                    taskPanelElement.style.display = 'none'
                }, 1000);
            } else {
                contentListElement.innerHTML = "请先进行登录"
            }
        },
        onprogress(ev) {
            // console.log('ev', ev);
            // 进度条样式
            progressElement.style.width = (ev.loaded / ev.total) * 100 + '%';
        }
    });
}
allCloseElement.onclick = function(){
    // 上传进度框，关闭按钮
    taskPanelElement.style.display = 'none'
}

function createLi(url) {
    // let li = document.createElement('li');
    let img = new Image();
    // img.src = '/public/upload/' + d.name;
    img.src = 'http://localhost:8081' + url;
    // li.appendChild(img);
    contentListElement.appendChild(img);
}

// 用户登录相关
let usernameElement = document.querySelector('#username');
let passwordElement = document.querySelector('#password');
let loginBtnElement = document.querySelector('#loginBtn');

loginBtnElement.onclick = function() {

    let username = usernameElement.value;
    let password = passwordElement.value;

    console.log(username, password);

    ajax({
        method: 'post',
        url: '/api/login',
        data: {
            username,
            password
        },
        success(data) {

            data = JSON.parse(data);

            console.log(this.getResponseHeader('authorization'));
            // localStorage.setItem('userMsg', this.getResponseHeader('authorization'))

            localStorage.setItem('authorization', this.getResponseHeader('authorization'))

            getImageMsg() // 加载全部图片
        }
    })

}

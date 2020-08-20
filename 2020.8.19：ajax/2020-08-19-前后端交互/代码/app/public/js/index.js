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
        url: '/getAll',
        // data,
        success(data) {
            data = JSON.parse(data);
            contentListElement.innerHTML = ''
            let imgEle = ''
            
            data.forEach(item => {
                // console.log('item',item)
                // let name = item.url.substring(item.url.lastIndexOf('/')+1)
                // imgEle += `
                //     <div style="display:flex;flex-direction: column;text-align:center;margin:10px">
                //         <img style="text-align:center" src="${item.url}" alt="none" />
                //         <span>${name}</span>
                //     </div>
                // `
                let img = new Image();
                img.src = item.url;
                contentListElement.appendChild(img)
            });
            // console.log('imgEle',imgEle)
            // contentListElement.innerHTML = imgEle
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
    // console.log('upload');

    // console.dir(this.files);
    taskPanelElement.style.display = 'block'
    for (let file of this.files) {
        // console.log(file);
        uploadFile({
            file
        });
    }

    
}

function uploadFile(data) {

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
        url: '/upload',
        data,
        success(data) {
            
            data = JSON.parse(data);
            console.log('data', data);
            getImageMsg()
            taskPanelElement.style.display = 'block'
            // setTimeout(() => {
            taskProgressStatusElement.innerHTML = '上传完成';
            li.remove();
            // }, 1000);
            setTimeout(() => {
                taskPanelElement.style.display = 'none'
            }, 1000);
        },
        onprogress(ev) {
            // console.log('ev', ev);
            progressElement.style.width = (ev.loaded / ev.total) * 100 + '%';
        }
    });
}
allCloseElement.onclick = function(){
    taskPanelElement.style.display = 'none'
}



// ajax({
//     method: 'post',
//     url: '/getData',
//     query: {
//         a: 1,
//         b: 2
//     },
//     data: {
//         x: 1,
//         y: 2
//     },
//     success(data) {
//         console.log('data', data);
//     }
// });
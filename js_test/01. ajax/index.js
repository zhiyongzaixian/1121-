// 手写原生ajax发送GET请求
/*
* 原生ajax基于： XMLHttpRequest
* readyState: 0 1 2 3 4(数据接收完毕)
* http的状态码(status)： 200(成功) 304(请求重定向到缓存) 404(请求资源未找到) 500(服务器错误)
*
* */

// 1. 创建xmlHttp实例
const xmlHttp = new XMLHttpRequest();
console.log(xmlHttp.readyState);
// 2. 绑定监听 readystate: 0 1 2 3 4
xmlHttp.onreadystatechange = function () {
  if(xmlHttp.readyState === 4){ // 数据接收完毕： 成功 || 失败
    if(xmlHttp.status === 200){ // 200(成功) 304(请求重定向到缓存) 404(请求资源未找到) 500(服务器错误)
      console.log(xmlHttp.response);
    }
  }
}


// 3. 设置请求的方法和url
xmlHttp.open('GET', url);

// 4. 发送请求
xmlHttp.send();



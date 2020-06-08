const http = require('http')
const io = require('socket.io')

const server = http.createServer(function (req, res) {
  // 发送HTML的headers和message
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<p>Hello Socket.IO!<p>')
});
// 在8080端口启动服务器
server.listen(8080)

// 创建一个Socket.IO实例，并把它传递给服务器
const socket = io.listen(server)

// 添加一个连接监听器
socket.on('connection', function (client) {

  // 连接成功，开始监听
  client.on('message', function (event) {
    console.log('Received message from client!', event)
  })
  // 连接失败
  client.on('disconnect', function () {
    clearInterval(interval)
    console.log('Server has disconnected')
  })
  var interval = setInterval(function () {
    client.send('This is a message from the server,hello world' + new Date().getTime());
  }, 5000);
})
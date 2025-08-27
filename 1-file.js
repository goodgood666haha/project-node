var fs = require('fs')
handleAddFile()
handleReadFile()
// handleWriteFile()

/** 读取文件 */
function handleReadFile() {
  fs.readFile('./1.txt','utf-8', function (err, data) {
    if (err) {
      console.log(err)
      return
    }
    console.log(data)
  })
}

/** 写入文件(覆盖) */
function handleWriteFile() {
  fs.writeFile('./1.txt','hello world', function (err) {
    if (err) {
      console.log(err)
      return
    }
    console.log('写入成功')
  })
}

/** 追加内容 */
function handleAddFile() {
  fs.appendFile('./1.txt','hello world', function (err) {
    if (err) {
      console.log(err)
      return
    }
    console.log('追加成功')
  })
}

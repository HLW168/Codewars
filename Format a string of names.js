// map (value, index, array)

function list(names){
  //your code here
  let str = ''
  if (names.length != 0) {
    //pop 弹出后不在 names 中
    let last = names.pop()
  
    str = names.map((value, i, arr) => {
      while (i < arr.length) {
        return value.name
      }
    }).join(', ')
    
    // 加上最后的名子
    str += str != '' ? ' & ' + last.name : last.name
  }
  return str
}


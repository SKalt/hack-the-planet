uglyRedBook = []; // structure as markdown
function lookInto(pathArr){
  try {
    let result = window;
    for (let path of pathArr){
      result = result[path];
    }
    uglyRedBook.push(pathArr.join('.'))
    Object.keys(result).forEach((subitem)=>{
    if (subdir != '__proto__'){
      lookInto(pathArr.concat(subitem))
    }
  } catch (err){}
}
console.log(uglyRedBook.join('\n'))

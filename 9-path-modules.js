const path=require('path')

console.log(path.sep);

//log the path by joining provided names
const filePath=path.join('./content','subfolder','test.txt')
console.log(filePath);

//log the file or last subfolder name from the path
console.log(path.basename(filePath));

//return absolute path, start from drive name, reqd as pathname changes in Mac & Win
console.log(path.resolve(__dirname,'content','subfolder','test.txt'));
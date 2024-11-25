//for built in modules(os,path,fs,http) dont use ./ in req 
const { log } = require('console')
const os=require('os')

//info about current user
const user=os.userInfo()
console.log(user);

//sys uptime in seconds
console.log(`the system uptime is: ${os.uptime}`);

const currentOS ={
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);

//readFile is async unlike readFileSync, readFile takes a callback func
const { log } = require('console');
const {readFile,writeFile}=require('fs');

//syntax-(<filepath>,<encoding>,<callback>)
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first=result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second=result
        writeFile(
            './content/result-async.txt',
            `Here we created a file in Node with async readFile and read 2 files to write: ${first}, ${second}`,
            {flag:'a'}
        ,(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
            
        })
    })
})


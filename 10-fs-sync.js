const {readFileSync,writeFileSync}=require('fs');

const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/second.txt','utf8')

console.log(first,second);

//create file with filename & content, flag 'a' appends the text in already existing file(when the 10-file-modules is run 2x)
//syntax-(<filepath>,<encoding>,<flag>)
writeFileSync(
    './content/result-sync.txt',
    'Here we created a file in Node with sync readFileSync',
    {flag:'a'}
)
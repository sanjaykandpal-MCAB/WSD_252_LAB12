const fs = require('fs')
const path = require('path')

fs.readFile(
    path.join(__dirname,'posts','blogPost.txt'),
    'utf-8',
    (err,data) =>{
        if(err){
            console.log('file read error');
        }
         console.log(data); // returns a buffer
         const Content = Buffer.from(data);
         
        console.log(data);
    }

)
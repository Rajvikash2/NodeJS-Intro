const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt');
const writeStream= fs.createWriteStream('./docs/blog3.txt');

// readStream.on('data',(chunk)=>{
//     console.log("-------------NEW--------------------------\n");
//     writeStream.write("--------NEW----------------------\n");
//     writeStream.write(chunk);
// });

readStream.on('data',(chunk)=>
{
         console.log('------NEW STREAM---------\n');
    console.log(chunk.toString('utf-8'));
 });


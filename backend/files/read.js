const fsPromises =require('fs').promises;
const path = require('path');

const filedata = async ()=>{
    try {
        const data =await fsPromises.readFile(path.join(__dirname,'files','lorem.txt'),'utf8');
    console.log(data);
    await fsPromises.writeFile(path.join(__dirname,'files','promises.txt'),data)
    await fsPromises.appendFile(path.join(__dirname,'files','promises.txt'),'\n\nNice to meet you')
    await fsPromises.rename(path.join(__dirname,'files','promises.txt'),path.join(__dirname,'files','promisesComplete.txt'))
    const Newdata =await fsPromises.readFile(path.join(__dirname,'files','promisesComplete.txt'),'utf8');
    console.log(Newdata);
    
        
    } catch (err) {
        console.error(err);
        
    }
}

filedata();





// fs.writeFile(path.join(__dirname,'files','reply.txt'),'nice to meet you zeeshan',(err)=>{
//   if (err) throw err;
//   console.log("hello this");
  
// })
process.on('uncaughtException',err=>{
    console.error(`there was an uncought error :${err}`);
    process.exit(1)
 })






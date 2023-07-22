const os=require('os');
console.log(os.arch()); //64bit os
console.log(os.hostname());//host name
console.log(os.platform());//platform name
console.log(os.tmpdir()); //temp files
console.log(os.type());//os type
//free ram memory
const freemempry=os.freemem();
console.log(`GB free:${freemempry/1024/1024/1024}`);

//total memory
const totalmemory=os.totalmem();
console.log(`Total memory in GB: ${totalmemory/1024/1024/1024}`);

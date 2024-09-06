
const fs = require('fs').promises;
//const cyclePrompt = require('./promptUser').cyclePrompt;

function createFile(data) {

   return fs.writeFile(data.file_name + '.txt', data.content).then(() =>{
    console.log(`You have succefully created the ${data.file_name}  file`)
    console.log(`The content of the file are:\n ${data.content}  content`)


   })
         
};

module.exports =  createFile;


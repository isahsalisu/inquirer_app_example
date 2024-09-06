const inquirer = require('inquirer');


// const str = 'some String';


// const info = {
//     myStr: str,
//     name: 'Salisu'
// }

function promptUser() {
    
inquirer.prompt([
    {
        name: 'file_name',
        message: 'What wouldyou like the file name to be?'
    },

    {
        name:'content',
        message: 'What content would you like to add to the file?'

    }
]).then(data => {
    console.log(data);
    fs.writeFile(data.file_name + '.txt', data.content, (err) => {
        if(err) return console.log(err);
        console.log(`You have succefully created the ${data.file_name}  file`)
        console.log(`The content of the file are:\n ${data.content}  content`)
    })
});

}



// inquirer.prompt([
//     {
//         name: 'file_name',
//         message: 'What wouldyou like the file name to be?'
//     },

//     {
//         name:'content',
//         message: 'What content would you like to add to the file?'

//     }
// ]).then(data => {
//     console.log(data);
//     fs.writeFile(data.file_name + '.txt', data.content, (err) => {
//         if(err) return console.log(err);
//         console.log(`You have succefully created the ${data.file_name}  file`)
//         console.log(`The content of the file are:\n ${data.content}  content`)
//     })
// });

// module.exports = promptUser;
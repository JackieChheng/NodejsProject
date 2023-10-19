const generateHTML = (userdata) => `
<!DOCTYPE html>
<html>
<title> My Portfolio </title>

<p>${userdata.username}</p>

`







const fs = require('fs');

const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your user name?',
            name: 'username',
          },
          {
            type: 'input',
            message: 'What is your location',
            name: 'location',
          },
          {
            type: 'input',
            message: 'Write a bio?',
            name: 'bio',
          },{
            type: 'input',
            message: 'What is your LinkedIn username?',
            name: 'username',
          },
          {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
          },
    ]);

    fs.writeFile('portfolio.html', process.argv[2], (err) =>
    err ? console.error(err) : console.log('Success!')
  );
    .then(userdata) => {}
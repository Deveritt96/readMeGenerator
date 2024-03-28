const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ title, description, image, install, usage, website, credits, license }) =>
`# ${title}

## Description 

${description}

## Screenshot

<img src="${image}" />


## installation

${install}

## Usage

${usage}


## Link to Website

${website}


## Credits

${credits}

## License

${license}`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter description',
    },
    {
      type: 'input',
      name: 'image',
      message: 'enter path to image',
    },
    {
      type: 'input',
      name: 'install',
      message: 'installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage instructions',
      },
    {
      type: 'input',
      name: 'website',
      message: 'Enter the website URL',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Enter your credits',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter the license',
      }
  ])
  .then((answers) => {
    const readMeAnswers = generateReadMe(answers);

    fs.writeFile('README.md', readMeAnswers, (err) =>
      err ? console.log(err) : console.log('Successfully created Read Me!')
    );
  });
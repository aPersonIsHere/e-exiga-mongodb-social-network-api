# Social Network API (with MongoDB)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

YouTube Demo: https://youtu.be/CN5kehbcy7M

## Description

The Social Network API uses a noSQL database (MongoDB) to store and access users, thoughts (posts), comments/replies (reactions), and per user a friend list and thought list through an application such as Insomnia or Thunder Client.
(This Repo is not endorsed nor affiliated with any 3rd parties.)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Contribution Guidelines](#contribution-guidelines)
- [Tests](#tests)
- [Questions](#questions-and-contact)
        
## Installation
        
First, Git Clone this repository and enter it. Then, if you do not have Node.js installed, you will need that and Git Bash for your coding workspace. Next, open Git Bash at this location and run in the console 'npm i'. Wait until all downloads are finished. Next, look in the config folder and open controllers. You may change the UPPERCASE string in there to the connection of your MongoDB server or use DOTenv (which I urge you to use) to set your private variable there. Afterwards, seed the MongoDB server with 'node utils/seed'. Then run the index.js file with 'node index' command. Make sure to run this command in the correct directory in the pulled repository.

Second, have Insomnia or Thunder Client installed and access port 3001 (or the port you configured) and you can now create requests to your new MongoDB database.
        
## Usage
        
You are welcome to use this program for free and however many times needed.
        
## Credits

UT Austin Bootcamp. Code referenced by mini-project from UT Austin Bootcamp.

## License
        
This project follows the MIT license. Please refer to the LICENSE file in the main repository for more information concerning this license.
        
## Features

All features require Insomnia, Thunder Client, or other software with similar functionality to use.

- Create, update, delete, and retrieve a user's info. (Deletion of a user will remove ALL their thoughts.)
- Retrieve all users.
- Friend list per user (only referencing the user id). Friends can be added or deleted one-by-one.
- Thought/post list per user (only referencing the thought id).
- Storage of users and thoughts.
- Create, update, delete, and retrieve a thought's info.
- Retrieve all thoughts.
- Reactions/comments storage for thoughts.
- Creating and deleting reactions per thought id.

## Contribution Guidelines

Minimal grammatical errors. Do not misuse the contribution feature for bug reporting or unrelated content.

## Tests

There is no software or extra code in this program that allows for testing purposes. Though, the console will log important information.
You are welcome to use Insomnia or Thunder Client and experiment with the seeded data however.

## Questions and Contact

### My GitHub: [aPersonIsHere](https://www.github.com/aPersonIsHere)

### My Email: emmanuelexiga.2001@gmail.com

Feel free to reach out through email by highlighting my email address and copy-and-paste it to your recipient. 
Feel free to ask further questions, provide suggestions, or to send a thank you note!

        

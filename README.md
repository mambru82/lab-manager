# Lab Manager

## Table of Contents

- [Project Description](#project-description)
- [What We Learned](#what-we-learned)
- [Built With](#built-with)
- [How To Use Lab Manager](#how-to-use-lab-manager)
- [Website](#website)
- [License](#license)
- [Contribute](#contribute)
- [Test](#test)
- [Questions](#questions)

## Project Description

Are you the manager of a clinical molecular laboratory? Are you struggling to organize your results data quickly and efficiently? In collaboration with a real world laboratory manager, our team built 'Lab Manager', a web-based Laboratory Information System. We started by assessing how data is currently being tracked, specific to COVID-19 test results. Data storage and analysis required manual input to an Excel spreadsheet to assess a plethora of test metrics. We identified that the test results were provided in JSON format, which would make ingesting the data using JavaScript a relatively straightforward process. We used an example Excel spreadsheet to develop how we would display and analyze data results for users and worked closely with our laboratory manager consultant throughout the production process. We recommend using only a local deployment for now, since current security measures are very simple.

## What We Learned

- We got more hands-on experience with the handlebars template engine
- Designed functions that allow users to input new patients, assays, and results data
- We learned how to implement graphs with amChart
- Gained more experience using environment variables
- Working as a group to assign roles, establish a git workflow, merging multiple branches to one development branch, helping each other solve problems, and pushing to final production
- Implementing more advanced CSS methods to enhance the user experience
- We learned how to manage limited time to build a huge back-end and front-end infrastructure in about a week and a half
- Solidified further understanding of mySQL and Express.js
- Designing an application from scratch using MVC design principles

## Built With

- Handlebars - main site layout
- CSS - styling and design
- JavaScript - data analysis
- amCharts - display analysis charts
- Bootstrap - styling and design
- Font Awesome - styling and design
- bcrypt - password security
- mysql2 - database
- Express - server
- Session - authentication and security

## How To Use Lab Manager

API keys may be removed at some point. To use the APIs, do the following:

Run the following command in terminal.

```bash
mysql -u root -p
```

Enter 1234 as the password.

Create the database.

```mysql
mysql> CREATE DATABASE lab_manager_db;
```

In a new terminal window, cd into the root of the project, run the following command:

```bash
npm run seed
```

### Description of typical work-flow

Lab manager is designed to follow the typical workflow for a trained laboratory technician running an assay for COVID-19 sequencing data once the data has been sequenced and analyzed using the [Nextclade](https://clades.nextstrain.org/) application. Once a lab tech signs up with a username and password, the typical workflow is as follows:

1. Accession the case

- If needed, a patient may be created, or the case may be accessioned from a list of existing patients.

3. Start a run
4. Enter results

- The corresponding run for a given result should be selected.
- Results may be copied and pasted directly from the JSON file (without the outside brackets) into the form and submitted. The application is designed to process the relevant data
- Contrived sample data files are available in the db/data/ directory to test out.

### Summary data

Summary data currently available includes:

- the error rate for a given run (the number of samples in a run that failed divided by the number of total sample in a run)
- the overall distribution of COVID clades for all samples.

## Website

http://hidden-sea-70156.herokuapp.com

Home Page:\
![Home](https://user-images.githubusercontent.com/73920328/114325559-55f9d200-9af6-11eb-9978-37d0f14c1638.png)

Signup Page:\
![Signup](https://user-images.githubusercontent.com/73920328/114325566-67db7500-9af6-11eb-987a-1e9e29242597.png)

Run Metrics Page:\
![Run Metrics](https://user-images.githubusercontent.com/73920328/114325590-86da0700-9af6-11eb-841d-ec7271d09bfc.png)

Patient List Page:\
![Patient List](https://user-images.githubusercontent.com/73920328/114325605-978a7d00-9af6-11eb-8e70-f99f9dc03591.png)

Results Summary Page:\
![Results Summary](https://user-images.githubusercontent.com/73920328/114325612-a7a25c80-9af6-11eb-912c-b57126ec40f4.png)

Accession Case Page:\
![Accession Case](https://user-images.githubusercontent.com/73920328/114325621-b8eb6900-9af6-11eb-92b0-086f8b167bd0.png)

Start Run Page:\
![Start Run](https://user-images.githubusercontent.com/73920328/114325642-cf91c000-9af6-11eb-946f-744fa65b8868.png)

Create Patient Page:\
![Create Patient](https://user-images.githubusercontent.com/73920328/114325656-e6381700-9af6-11eb-9375-471032d1e94e.png)

Enter Results Page:\
![Enter Results](https://user-images.githubusercontent.com/73920328/114325678-fbad4100-9af6-11eb-9f69-800355198ef4.png)

Submit Results Page:\
![Submit Results](https://user-images.githubusercontent.com/73920328/114325700-154e8880-9af7-11eb-97d3-1dbd25e5b0e2.png)

## License

MIT

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

&copy; 2021

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

## Disclaimer

All "patient data" presented in the deployed application is entirely fictional and rendered for the purposes of product demonstration, as are the names of the medical technologists. All names portrayed in this deployment are fictitious. No identification with actual persons (living or deceased) is intended or should be inferred.

## Contribution

Made by:

**[Eduardo Castro](https://github.com/mambru82)** - Project Lead, Back-End, Code Refactoring, Debugging\
**[Martha Gamez](https://github.com/marth121)** - Front-End, Data Analysis, Data Queries, Data Input, Debugging\
**[Thomas Curry](https://github.com/curryduz)** - Front-End, UI Design, Debugging\
**[Averie Beltran](https://github.com/averiebeltran)** - Back-End, Database Architecture, Debugging\
**[Nick Carter](https://github.com/NickolausCarter)** - User Authentication, Site Security, Debugging\

&copy; 2021 Lab Manager

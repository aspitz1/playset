# Playset

*Site isn't reflecting most current build. There is an issue on the hosting service side.*
[Deployed Site](https://playset.onrender.com/) - Please be patient, Playset is deployed on a free service. It will take about 30sec to spin up after 15min of inactivity.

[Link to the API Repo](https://github.com/aspitz1/playset-api)
## About this Project
Playset is a Magic Card collection tracker. It provides a search function allowing the user to find cards and see card specs. The user can specify the amount of cards in their collection, update the amount of cards in their collection or delete cards from their collection. Playset is suitable for use on desktops, tablets or phones. Currently Playset assumes one user, allowing for multiple users is first up on Playset's roadmap.

# Table of Contents
1. [Built With](#built-with)
2. [Testing](#testing)
3. [Getting Started](#getting-started)
4. [Local Setup](#local-set-up)
5. [Usage](#usage)
6. [Features](#features)
7. [Roadmap](#roadmap)
8. [Contributors](#contributors)
9. [Legal](#legal)

## Built With
### Front-end
* React
* React Router
* CSS

### Back-end
* Node.js
* Express
* Sequelize
* Redis
* Postgres

## Testing
* Cypress
____

![Playset](https://user-images.githubusercontent.com/95593550/192172039-b63dbc61-9888-4aec-839b-351b3f5d450a.gif)

## Getting Started
Visit the deployed site at [playset.onrender.com](https://playset.onrender.com/). Playset is deployed on a free service, so be patient please when the site is loading. After 15min of inactivity Playset takes about 30sec to spin up agian.
### Local Set-up
In the terminal: 
* `git clone git@github.com:aspitz1/playset.git`
* `npm i`
* `npm start`

To run tests: 
* Check if Cypress is installed by running `npm list`
  * If Cypress is not installed run `npm i cypress`
* `npm run test`

## Usage
Playset is currently a demo. Once multiple users are enabled, use Playset to track your Magic collection. Playset uses [Magic: The Gathering Developers API](https://docs.magicthegathering.io/) for all card data.

## Features 
### Front-end
* Responsive layout 
* Search collection by name
* Search Magic: The Gathering Developers card base 
* Track amount of cards in collection
* Update and delete cards in collection

<img width="208" alt="Screen Shot 2022-09-25 at 7 05 15 PM" src="https://user-images.githubusercontent.com/95593550/192172599-b4de6e41-5a38-4fd2-81a3-a2760ea95e1d.png">
<img width="208" alt="Screen Shot 2022-09-25 at 7 07 06 PM" src="https://user-images.githubusercontent.com/95593550/192172608-cf967fa6-9a51-416b-b927-0307b95e670b.png">



### Back-end 
* Proxying data from outside API
* Cleans data from outside API for Front-end use
* Caches data using Redis to improve performance 
* Stores user data in Postgres database

![Screen Shot 2022-09-29 at 12 52 50 PM](https://user-images.githubusercontent.com/95593550/193106233-e5edc69d-d4cd-47b7-8dc1-c62ad41bb2c8.png)


## Roadmap
- [ ] Add multi user support through user accounts and authentication
- [ ] Organize collection by color
- [ ] Allow user to make multiple named collections
- [ ] Advanced searching

## Contributors
* [Anna Spitz](https://github.com/aspitz1) - [Linkedin](https://www.linkedin.com/in/aspitz1/)

#### Legal
Portions of Playset are unofficial Fan Content permitted under the Wizards of the Coast Fan Content Policy. The literal and graphical information presented on this site about Magic: The Gathering, including card images, the mana symbols, and Oracle text, is copyright Wizards of the Coast, LLC, a subsidiary of Hasbro, Inc. Playset is not produced by, endorsed by, supported by, or affiliated with Wizards of the Coast.


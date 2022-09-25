# Playset

[Deployed Site](https://playset.onrender.com/)

[Link to the API Repo](https://github.com/aspitz1/playset-api)
## About this Project
Playset is a Magic Card collection tracker. It provides a search function allowing the user to find cards and see card specs. The user can specify the amount of cards in their collection, update the amount of cards in their collection or delete cards from their collection. Playset is suitable for use on desktops, tablets or phones. Currently the Playset assumes one user, allowing for multiple users is first up on Playset's roadmap.

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
## Roadmap
* Add multi user support through user accounts and authentication
* Organize collection by color
* Allow user to make multiple named collections
* Advanced searching

## Contributors
* [Anna Spitz](https://github.com/aspitz1)


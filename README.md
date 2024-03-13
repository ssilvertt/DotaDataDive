# DotaDataDive

DotaDataDive is a project designed to view the current meta of Dota 2 characters for any role. It also implements a beautiful character viewing menu, just like in the Dota 2 game itself.

Site is placed on vercel hosting: https://dota-data-dive.vercel.app/

## Technologies

This project is developed using the following technologies:

- React.js
- Tailwind CSS
- GraphQL
- Apollo


## Project Demonstration

![Main menu](https://github.com/ssilvertt/DotaDataDive/blob/main/frontend/public/meta-page.png)
![Main menu with search](https://github.com/ssilvertt/DotaDataDive/blob/main/frontend/public/meta-page-sort.png)
![Heroes page](https://github.com/ssilvertt/DotaDataDive/blob/main/frontend/public/heroes-page.png)
![Hero page](https://github.com/ssilvertt/DotaDataDive/blob/main/frontend/public/hero-page.png)

## Installation & Configuration

To install and run the project, follow these steps:

1. Clone the repository:

```sh
  git clone https://github.com/ssilvertt/DotaDataDive
```

2. Navigate to the project directory:

```sh
   cd frontend
```

3. Install dependencies:

```sh
   npm install
```

4. Include your personal token:

Go to https://stratz.com/api and obtain your personal api token
Rename .env.example file to .env and insert your api token: 
```js
VITE_TOKEN=YOUR_TOKEN
```
Replace ``YOUR_TOKEN`` with your personal token

5. Start project:

```sh
   npm run dev
```

# Groupomania

This project was generated using [Nx](https://nx.dev).

For this porject I used the environment below:

-   For the server: Node.js with [Nest.js](https://docs.nestjs.com/)
-   For the database: PostgreSQL with TypeORM
-   For the frontend: Angular 12 with [PrimeNG](https://primefaces.org/primeng/showcase/#/)

## Getting started - development mode

1. Clone this repository on your own computer:
   `git clone https://github.com/LcsGa/GarciaLucas_7_08072021.git`

2. Download the dependencies:
   `npm i`

3. Run the frontend app:
   `npm start`

4. Run the api:

-   make sure you have the postgres 12+ version installed. You can find it with the command: `psql -V`
-   within the [environments](apps/api/src/environments/) folder, rename the **.env.example** file into **.env** and modify the database configuration + the secret token.
-   run the command `nx serve api`.

TypeORM, will automatically create your database and all of the tables, based on the configuration you've provided.

5. Finally, open the app on the web browser of your choice at http://localhost:4200

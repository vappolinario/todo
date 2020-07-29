# A basic Todo List app

## React App

Idea based on the [Intro tho React + Hooks](https://github.com/CodingGarden/intro-react-hooks-todo) from [CodingGarden](https://github.com/CodingGarden)

### Running the app

Just `npm start` on the `todoapp` directory

## .NET Core Api

Created to provide access to database to the React app

### Running the api

You will need a MariaDb instance

`docker run -d -p 3306:3306 --name taskdb -e MARIADB_ROOT_PASSWORD=admin bitnami/mariadb`

Then apply all migrations

`dotnet ef database update`

Then run the aplication with

`dotnet run`

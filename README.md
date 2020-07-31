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

You will need a KeyCloak instance

`docker run --name keycloak -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -e KEYCLOAK_IMPORT=/tmp/realm.json -v /FULL_PATH_TO_REPO/todoapp/infra/realm.json:/tmp/realm.json jboss/keycloak`

Then apply all migrations

`dotnet ef database update`

Then run the aplication with

`dotnet run`

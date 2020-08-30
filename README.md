# A basic Todo List app

## React App

Idea based on the [Intro tho React + Hooks](https://github.com/CodingGarden/intro-react-hooks-todo) from [CodingGarden](https://github.com/CodingGarden)

## Running the app

 1. `docker compose up`
 2. run the migration for the api database `dotnet ef database update` from the api directory
 3. Add an user in the keycloak instance

## Runnig each container separately

You will need a MariaDb instance

`docker run -d -p 3306:3306 --name taskdb -e MARIADB_ROOT_PASSWORD=admin bitnami/mariadb`

You will need a KeyCloak instance

`docker run --name keycloak -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -e KEYCLOAK_IMPORT=/tmp/realm.json -v /FULL_PATH_TO_REPO/todoapp/infra/realm.json:/tmp/realm.json jboss/keycloak`

### Api

Within the api directory
 1. Apply all migrations `dotnet ef database update`
 2. Then run the aplication with `dotnet run`

### React app

Within the react app directory
  1. Then run the react app `npm start`

### React Native App

Whitin the react-native directory
  1. Run `npm start`
  2. Run `npx react-native run-android`

 > Icons
 > task by wira wianda from the Noun Project

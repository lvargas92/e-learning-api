# E-learning API

this repository is a demo of a REST API for an e-learning project developed with node.js, express, sequelize and sqlite.

## Requirements

I used node.js because it is a scalable framework both horizontally and vertically, its ecosystem of libraries and modules and its flexibility when programming because it uses javascript.

- node.js v18 o higher
- sequelize 6
- express 4

## Entities

the project is working with the following entities

- courses
- lessons
- questions
- answers
- users

## Run application

first, install all project dependencies using npm

```
npm i
```

then copy the .env.example file, rename the file to .env and then set the environment variable for jwtoken, for example:

```
JWT_SECRET="your_stronger_key"
```

finally, run server

```
npm run start
```

the server will start its process on node.js default port (port 3000)

## User Register

the user must register his data with his role (user or teacher) to gain access to the system. The api in response will return a token so that he can use the rest of operations such as registering courses, lessons or questions.

you must use the following path in POST http://localhost:3000/auth/register with the message body:

```
{
  "username": "teacher1",
  "password": "password",
  "role": "teacher"
}
```

# SimpleMERN

SimpleMERN is a fullstack web application developed for deployment on the AWS cloud.

## Motivation

SimpleMERN was the simplest possible project that I could create to illustrate the implementation of the following design patterns.

- ##### MVC (Model View Controller)
- ##### Optimistic Updates
- ##### Signed URL's 
- ##### Versioning of Routes
- ##### Storage of Sensitive Information
- ##### User Authentication
- ##### Separation of Concerns
- ##### Redux State Management

## Build status

## Code Style

## Screenshots

## Tech/Frameworks

SimpleMERN was built using the MERN stack. 

- ##### MongoDB
- ##### Express
- ##### React.js
- ##### Node.js
- ##### Redux

## Code Example

## Getting Started

### You will need the following

- ##### AWS account
- ##### An AWS S3 file-store
- ##### AWS CLI
- ##### Elastic Beanstalk CLI
- ##### MongoDB account with a database to connect to
- 

### Installation

In the terminal, run the following commands.

1.Clone the repository

`git clone git@github.com:BrandedNomad/SimpleMERN.git`


2.Install the dependencies for both the frontend and backend

`cd frontend`

`yarn install`

`cd ..`

`cd backend`

`npm install`

3.Configure Environment Variables

##### Frontend

You can add a .env file to the root of the frontend folder and setup the following environment variables.

- REACT_APP_API_URL = the base url of the backend

##### Backend

Create an .env file in the root of the backend folder and configure the following environment variables.

- JWT_KEY = This can be anything and is used to create session tokens
- PORT = a good choice would be something like 8080 or 8081
- ROUTE_VERSION = this needs to be set to 'v0'. Setting any other value here will fail
- DATABASE_CONNECTION_STRING = You need to paste your MongoDb connection string here
- AWS_REGION = Your default AWS Region 
- AWS_PROFILE = This must be set to your AWS profile on your machine, which will probably be something like "default", however once deployed it needs to be set to DEPLOYED

4 Start the Backend Development server

`npm run dev`

5.Start the Frontend Development server

`yarn start-dev`

### Open in the browser

6. Navigate to http://localhost:3000




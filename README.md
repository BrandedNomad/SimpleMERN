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


## Tech/Frameworks

SimpleMERN was built using the MERN stack. 

- ##### MongoDB
- ##### Express
- ##### React.js
- ##### Node.js
- ##### Redux


## Getting Started

#### You will need the following

- ##### AWS account
- ##### An AWS S3 file-store
- ##### AWS CLI
- ##### Elastic Beanstalk CLI
- ##### MongoDB account with a database to connect to
- ##### unixUtils (Only if you are using windows) https://sourceforge.net/projects/unxutils/

#### Installation

In the terminal, run the following commands.

1.Clone the repository

`git clone git@github.com:BrandedNomad/SimpleMERN.git`


2.Install the dependencies for both the frontend and backend

`cd frontend`

`yarn install`

`cd ..`

`cd backend`

`npm install`

#### Setup

1.Configure Environment Variables

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


#### Start the Development Server

1 Start the Backend Development server

`npm run dev`

2.Start the Frontend Development server

`yarn start-dev`

#### Open in the browser

1. Navigate to http://localhost:3000


## Creating a Production Build for deployment on AWS

#### Initiate an Elastic Beanstalk project

1 Go to the root folder of each (frontend, backend) and type the following in the terminal 

`eb init`

2.In your IDE's project folder you should see a new .elasticbeanstalk folder. Open the .yml file inside of it, and add the following code:

`deploy:
     artifact: ./www/Archive.zip`
     
#### Create a Zipped Artifact for the Backend

1. In the terminal run the following command

`npm run build` 

2. In your IDE's project folder you should see a new WWW directory that contains the Archive.zip file

#### Deploy the Backend to AWS using the Elastic Beanstalk CLI

1. In the terminal, within the root folder, type the following and follow the prompts:

`eb create`  

#### Set Environment Variables with AWS

1. Select your environment you've just created within the Elastic Beanstalk dashboard on AWS. 
2. Click on configure
3. Click on software
4. Scroll down to the bottom and add your environment variables
5. NB remember to set AWS_PROFILE to DEPLOYED
6. NB ensure that all relevant IAM policies and roles have been properly set

#### Create a Zipped Artifact for the frontend

1. In the terminal, within the root folder, run the following commands:

`yarn build`

`yarn build-zip`

2. In your IDE's project folder you should see both a build folder and a www folder that contains an Archive.zip file
     
     
#### Deploy the Frontend using the Elastic Beanstalk CLI

1. In the terminal, within the root folder, type the following and follow the prompts (Choose a different environment name from your backend):

`eb create`  

#### Set the Frontend's Environment Variables with AWS

1. Select your environment you've just created within the Elastic Beanstalk dashboard on AWS. 
2. Click on configure
3. Click on software
4. Scroll down to the bottom and add your environment variables
5. NB ensure that all relevant IAM policies and roles have been properly set

#### Open in Browser

1. Grab the frontend's access point from the elastic beanstalk environment
2. Paste it into the browser
3. You should now have access to the site


## How to Use SimpleMERN

As this project was intended to illustrate a minimal deployment on AWS, there isn't a whole lot you can do with it. Except the following: 

- Register a new account
- Login/Authenitcate
- Logout
- Delete Account

## Known Issues/Bugs

The following are known bugs
- ##### Profile Image Selection: Currently you can select more than one profile image which causes problems with the way files are stored
- ##### Password Fields: Currently the password field does not hide content
- ##### Limited Status Feedback: Currently, there are no status updates that notifies the user when their password or email address is incorrect 

## Contributions

This project is not accepting contributions at this time.

## License

MIT © BrandedNomad

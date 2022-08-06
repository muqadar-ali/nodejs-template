# nodejs-template
A template to kick start Node.js and Express.js with test cases.

## Live Demo
Please find swagger url for a demo working application to test and get the idea: https://myLiveSampleDomainEtc/swagger.

## Getting Started
Download the code from repository and follow below given instructions.

### Installing
Before we run the solution, go to the local respository or downloaded folder (using cd command) and install node_modules by running:
```
npm install
```

### Running
Before running the script, make sure to create ```.env``` file and add **MONGODB_URI** value in file. For the purpose of quick start, ```.env``` is not a part of ```.gitignore```, so you can start the project without creating it for now. Once you start working on your project, please make sure to make it part of ```.gitignore```.

Running on localhost:
```
npm run dev
```

Running on your domain/env:

```
npm start
```


### API Doc
You can find all the APIs & documentation at ```/swagger``` endpoint.
Please make sure to select ```http``` scheme in swagger if you are running it on localhost or on http domain. By default swagger scheme is https.

### Testing
```
npm test
```

## Built With

* [NodeJs](https://nodejs.org/en/)
* [ExpressJs](https://expressjs.com)
* [MongoDB](https://www.mongodb.com/)

## Authors
* **Muqadar Ali Jamali**

// <<<<<<<<<<<<<<<------------------------------------------------- 1. [ Server file ] ------------------------------------------------------>>>>>>>>>>>
/* 

  1.   npm init      ->  server.js ,
  2.   npm i express , nodemon
  3.   nodemon -L server.js  ->  use -L  legacy version of nodemon - always update the current changes on local to docker container
  4.   Our app is running on Linux Env on docker

*/

// <<<<<<<<<<<<<<<---------------------------------------------------- 2. [ Docker file  ] ------------------------------------------------------>>>>>>>>>>>
/* 


  1.  [[ FROM node:16 ]]

                      #  The first thing we need to do is define from what image we want to build from,
                      #  Here we will use the latest LTS (long term support) version 16 of node available from the Docker Hub
                      #  We can use any image from the Docker Hub as the base for our image.


  2.  [[ COPY ./package*.json ./ ]]

                    # Install app dependencies
                    # A wildcard is used to ensure both package.json AND package-lock.json are copied
                  


  3.  [[ Need to create docker image with terminal ]] 


                   1. docker build -t express-docker-image .
                   2. docker image ls
                   3. docker run --rm -d -p 5500:5500 --name express-docker-container express-docker-image 
                         ->  then we have to run image in docker container + [-d : detach mode - background container run ]
                   4. docker ps -> will show docker is running
                   5. docker stop 1f069fa8bbb5                  
                         ->  It will stop docker therefore id is from docker ps when you run 
                   6. docker run --rm -d -p 5500:5500 -v $(pwd):/app  --name express-docker-container express-docker-image 
                         ->  Map you local changes to docker container changes
                   7. docker ps 
                         ->  You will get the id [Process Status]
                   8. docker run --rm -d -p 5500:5600 -v $(pwd):/app  -e PORT='5600'  --name express-docker-container express-docker-image 
                   9. docker exec -it docker_id bash -->  ls -->  exit ---> Inside docker -it means interactive 
                   10. docker logs ddcf2f8cfc7a
                         -> container id see the port on which port docker is running
                   11. docker run --rm -d -p 5500:5600 -v $(pwd):/app  -env-file ./.env  --name express-docker-container express-docker-image  - for multiple ports for docker run


    
*/

// <<<<<<<<<<<<<<<---------------------------------------------------- 3. [ Docker Compose  ] ---------------------------------------------------->>>>>>>>>>>

/* 
   [[ docker-compose.yml ]]
   - Basically docker compose file maps the docker run command(s) into a file and it is so convenient as we do not have type all the parameters to pass to the docker run command.


*/

// <<<<<<<<<<<<<<<---------------------------------------------------- 4. [ Kaniko - Kubernetes  ] ------------------------------------------------>>>>>>>>>>>\
/* 
   - Kaniko is a tool to build container images from a Dockerfile, inside a container or Kubernetes cluster.
   - kaniko doesn't depend on a Docker daemon and executes each command within a Dockerfile completely in userspace.
   - This enables building container images in environments that can't easily or securely run a Docker daemon, such as a standard Kubernetes cluster.

*/

const express = require('express');
const PORT = process.env.PORT || 5500;

const app = express();

app.get('/', (req, res) => {
     return res.status(200).send('Node and Express js with docker');
});

app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});

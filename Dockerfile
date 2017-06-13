FROM node:8.1.0

#Define the environment variables
ENV SERVER_PORT=8001
ENV DATABASE=mongodb://user:password@ds231313.mlab.com:44244/logger-aas

#Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Install the sexy dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source (this is not a sexy process)
COPY . /usr/src/app

EXPOSE ${SERVER_PORT}

CMD [ "npm", "run", "watch" ]

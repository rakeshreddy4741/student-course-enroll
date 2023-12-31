FROM node:14-alpine3.12

# Create app directory
WORKDIR /usr/src/student_enrollment

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 6070

RUN apk add curl

RUN curl www.google.com
 
CMD [ "npm","run", "start" ]
FROM node:carbon-alpine
RUN mkdir /my_app
COPY index.js /my_app
COPY package.json /my_app
COPY buildspect.yml /my_app
WORKDIR /my_app
RUN npm install
EXPOSE 8080
CMD node index.js
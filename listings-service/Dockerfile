FROM node:12

COPY . /opt/app

WORKDIR /opt/app/listings-service

RUN chmod -R 777 /opt/app/listings-service

USER root 

RUN npm install

CMD npm run watch

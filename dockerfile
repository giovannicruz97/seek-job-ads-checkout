FROM node

RUN mkdir /seek-job-ads-checkout-app
WORKDIR /seek-job-ads-checkout-app

RUN npm i -g @adonisjs/cli

COPY package*.json ./

COPY . .

EXPOSE 3333
EXPOSE 4000

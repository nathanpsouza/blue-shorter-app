FROM node:latest

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN yarn install

EXPOSE 3001

CMD yarn start
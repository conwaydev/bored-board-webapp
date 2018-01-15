FROM node:8.9

WORKDIR /code
COPY . .

RUN rm -rf node_modules/

RUN yarn install --force

EXPOSE 8080

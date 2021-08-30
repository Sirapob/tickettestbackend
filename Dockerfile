FROM node:12.14.1-alpine
WORKDIR /app
RUN yarn global add @nestjs/cli
COPY ./package.json ./yarn.lock /app/
RUN yarn install --pure-lockfile
ADD . /app
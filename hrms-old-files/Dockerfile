FROM node:12.16.1-alpine3.11

RUN yarn global add serve

RUN yarn install

WORKDIR /usr/src/app
COPY build /usr/src/app/build
EXPOSE 5000
CMD ["serve", "-s",  "build"]
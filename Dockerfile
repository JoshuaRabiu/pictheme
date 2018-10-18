FROM node:10.1.0
COPY . .
RUN yarn
WORKDIR ./server
RUN yarn
EXPOSE 1337
WORKDIR /
RUN yarn build
WORKDIR ./server
CMD node ./build/server.js

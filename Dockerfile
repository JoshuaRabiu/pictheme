FROM node:10.1.0
COPY . .
WORKDIR ./server
EXPOSE 1337
CMD node ./build/server.js

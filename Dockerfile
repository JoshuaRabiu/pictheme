FROM node:10.1.0
COPY . .
CMD yarn
WORKDIR ./server
CMD yarn
EXPOSE 1337
CMD node ./build/server.js
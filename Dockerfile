FROM node:10.1.0
COPY . .
CMD yarn
WORKDIR ./server
CMD yarn
EXPOSE 1337
WORKDIR /
CMD ["yarn build", "node ./build/server.js"]
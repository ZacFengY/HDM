FROM node
RUN mkdir node-app
COPY . node-app
WORKDIR node-app
EXPOSE 5000
RUN npm install pm2 -g
RUN npm install
WORKDIR dist
CMD [ "pm2", "start", "./pm2.json","--no-daemon"]

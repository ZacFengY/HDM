FROM node
RUN mkdir node-app
COPY . node-app
WORKDIR node-app
EXPOSE 9527
RUN npm config set registry "https://registry.npm.taobao.org"
RUN npm install pm2 -g
RUN npm install
WORKDIR build
CMD [ "pm2", "start", "../ecosystem.config.js","--no-daemon"]
